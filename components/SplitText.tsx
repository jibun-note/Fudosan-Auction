import React, { useRef, useEffect, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

/** LP のセクション見出し（スクロールイン）向けの既定値 — Hero の `playOnMount` は使わない */
export const sectionHeadingSplitTextProps = {
  delay: 40,
  duration: 1,
  splitType: 'chars' as const,
  from: { opacity: 0, y: 24 },
  to: { opacity: 1, y: 0 },
  threshold: 0.15,
  rootMargin: '-80px',
};

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  /** GSAP の複合分割（例: 先に行→行内を文字）— 日本語の折り返しと相性がよい */
  splitType?: 'chars' | 'words' | 'lines' | 'words, chars' | 'lines,chars' | 'lines, chars';
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  textAlign?: React.CSSProperties['textAlign'];
  onLetterAnimationComplete?: () => void;
  /**
   * true のとき ScrollTrigger を使わず、マウント後すぐに再生する。
   * ファーストビューなど「既に表示域にある」要素で、トリガー未発火により文字が透明のままになるのを防ぐ。
   */
  playOnMount?: boolean;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  tag = 'p',
  textAlign = 'center',
  onLetterAnimationComplete,
  playOnMount = false
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const animationCompletedRef = useRef(false);
  const onCompleteRef = useRef(onLetterAnimationComplete);
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);
  /** lines 系はビューポート幅で行が変わるため、リサイズ時に再分割する */
  const [lineLayoutKey, setLineLayoutKey] = useState(0);
  const splitTypeStr = String(splitType);
  const splitIncludesLines = splitTypeStr.includes('lines');

  // Keep callback ref updated
  useEffect(() => {
    onCompleteRef.current = onLetterAnimationComplete;
  }, [onLetterAnimationComplete]);

  useEffect(() => {
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    }
  }, []);

  useEffect(() => {
    if (!splitIncludesLines || typeof window === 'undefined') return;
    let timeoutId: number | undefined;
    const onResize = () => {
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        setLineLayoutKey((k) => k + 1);
        ScrollTrigger.refresh();
      }, 200);
    };
    window.addEventListener('resize', onResize);
    return () => {
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
      window.removeEventListener('resize', onResize);
    };
  }, [splitIncludesLines]);

  /** 分割・from 適用前の1フレームで素テキストが見えないよう隠す（playOnMount 時） */
  useLayoutEffect(() => {
    if (!playOnMount || !ref.current) return;
    ref.current.style.opacity = '0';
  }, [text, playOnMount]);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;
      const el = ref.current as HTMLElement & {
        _rbsplitInstance?: GSAPSplitText;
      };

      if (el._rbsplitInstance) {
        try {
          el._rbsplitInstance.revert();
        } catch (_) {}
        el._rbsplitInstance = undefined;
      }

      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
      const sign =
        marginValue === 0
          ? ''
          : marginValue < 0
            ? `-=${Math.abs(marginValue)}${marginUnit}`
            : `+=${marginValue}${marginUnit}`;
      const start = `top ${startPct}%${sign}`;
      let targets: Element[] = [];
      const assignTargets = (self: GSAPSplitText) => {
        if (splitType.includes('chars') && (self as GSAPSplitText).chars?.length)
          targets = (self as GSAPSplitText).chars;
        if (!targets.length && splitType.includes('words') && self.words.length) targets = self.words;
        if (!targets.length && splitType.includes('lines') && self.lines.length) targets = self.lines;
        if (!targets.length) targets = self.chars || self.words || self.lines;
      };
      const splitInstance = new GSAPSplitText(el, {
        type: splitType,
        smartWrap: true,
        autoSplit: splitIncludesLines,
        linesClass: 'split-line',
        wordsClass: 'split-word',
        charsClass: 'split-char',
        reduceWhiteSpace: false,
        onSplit: (self: GSAPSplitText) => {
          assignTargets(self);
          if (playOnMount) {
            el.style.opacity = '1';
          }
          const tweenVars: gsap.TweenVars = {
            ...to,
            duration,
            ease,
            stagger: delay / 1000,
            onComplete: () => {
              animationCompletedRef.current = true;
              onCompleteRef.current?.();
            },
            willChange: 'transform, opacity',
            force3D: true
          };
          if (!playOnMount) {
            tweenVars.scrollTrigger = {
              trigger: el,
              start,
              once: true,
              fastScrollEnd: true,
              anticipatePin: 0.4
            };
          }
          return gsap.fromTo(
            targets,
            { ...from, immediateRender: true },
            tweenVars
          );
        }
      });
      el._rbsplitInstance = splitInstance;
      return () => {
        ScrollTrigger.getAll().forEach(st => {
          if (st.trigger === el) st.kill();
        });
        try {
          splitInstance.revert();
        } catch (_) {}
        el._rbsplitInstance = undefined;
      };
    },
    {
      dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
        fontsLoaded,
        playOnMount,
        lineLayoutKey
      ],
      scope: ref
    }
  );

  const renderTag = () => {
    const style: React.CSSProperties = {
      textAlign,
      wordWrap: 'break-word',
      willChange: 'transform, opacity',
      /** フォント待ち・分割前のチラ見え防止（onSplit で 1 に戻す） */
      ...(playOnMount && { opacity: 0 })
    };
    const classes = `split-parent block w-full max-w-full min-w-0 overflow-hidden whitespace-normal break-words [overflow-wrap:anywhere] ${className}`;
    const Tag = (tag || 'p') as React.ElementType;

    return (
      <Tag ref={ref} style={style} className={classes}>
        {text}
      </Tag>
    );
  };

  return renderTag();
};

export default SplitText;
