"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { GoldButton } from "@/components/common/button/GoldButton";
import SplitText from "@/components/SplitText";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

/** ヒーロー・メインビジュアルでよく使われる表示間隔（秒） */
const SLIDE_INTERVAL_MS = 6000;
/** モバイルの縦スクロールを邪魔しにくい最小スワイプ量 */
const SWIPE_THRESHOLD_PX = 48;

const HERO_SLIDES = [
	{
		src: "/images/AdobeStock_285833204_Preview.jpeg",
		alt: "モダンで洗練されたマンション",
		copy: {
			kind: "headline" as const,
			title: "顧客の不動産売却・節税・資産形成を",
			subtitle: "“透明性と専門性”で支える、信頼できるパートナーへ。",
		},
	},
	{
		src: "/images/AdobeStock_165264550_Preview.jpeg",
		alt: "手に持った住宅模型とビジネスパーソン",
		copy: {
			kind: "single" as const,
			text: "不動産売却も節税も、任せられる先がない。",
		},
	},
	{
		src: "/images/AdobeStock_1818181755_Preview.jpeg",
		alt: "デスクで資料と電卓を用いた分析・業務シーン",
		copy: {
			kind: "multiline" as const,
			lines: [
				"貴社の提案力を“資産・不動産・節税”まで拡張し",
				"顧客に安心して紹介できる、唯一の透明な仕組みと商品。",
			],
		},
	},
	{
		src: "/images/AdobeStock_215127968_Preview.jpeg",
		alt: "契約成立をイメージした握手と不動産の模型",
		copy: {
			kind: "multiline" as const,
			lines: [
				"顧客の資産課題に、専門家が自信を持って応えられる。",
				"不動産・節税・資産形成を支える信頼のパートナーサービス。",
			],
		},
	},
] as const;

/** SplitText（GSAP）用 — ヒーローはファーストビューなのでスクロールトリガーを早めに発火させる */
const heroSplitTextProps = {
	delay: 35,
	duration: 0.85,
	/** コンテナ幅に応じた行の上で文字アニメ（chars のみだと1行に詰まりやすい） */
	splitType: "lines,chars" as const,
	from: { opacity: 0, y: 28 },
	to: { opacity: 1, y: 0 },
	threshold: 1,
	rootMargin: "0px",
	/** ヒーローは既に表示域内のため ScrollTrigger が効かず文字が透明のままになることがある */
	playOnMount: true,
};

export default function Hero() {
	const [activeIndex, setActiveIndex] = useState(0);
	const totalSlides = HERO_SLIDES.length;
	const touchStartRef = useRef<{ x: number; y: number } | null>(null);

	/** activeIndex が変わるたびに次の 6 秒待機を張り直し、自動再生を単純化する */
	useEffect(() => {
		const timerId = window.setTimeout(() => {
			setActiveIndex((current) => (current + 1) % totalSlides);
		}, SLIDE_INTERVAL_MS);

		return () => {
			window.clearTimeout(timerId);
		};
	}, [activeIndex, totalSlides]);

	const goToSlide = useCallback((index: number) => {
		setActiveIndex(index);
	}, []);

	const goToPrev = useCallback(() => {
		setActiveIndex((current) => (current - 1 + totalSlides) % totalSlides);
	}, [totalSlides]);

	const goToNext = useCallback(() => {
		setActiveIndex((current) => (current + 1) % totalSlides);
	}, [totalSlides]);

	/** タッチ開始位置だけを保持し、移動中は何もしない */
	const handleTouchStart = useCallback((event: React.TouchEvent<HTMLElement>) => {
		const touch = event.touches[0];
		touchStartRef.current = { x: touch.clientX, y: touch.clientY };
	}, []);

	/** 横移動が一定量を超え、かつ縦移動より大きい時だけ前後移動として扱う */
	const handleTouchEnd = useCallback(
		(event: React.TouchEvent<HTMLElement>) => {
			if (!touchStartRef.current) return;

			const touch = event.changedTouches[0];
			const deltaX = touch.clientX - touchStartRef.current.x;
			const deltaY = touch.clientY - touchStartRef.current.y;

			touchStartRef.current = null;

			if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX) return;
			if (Math.abs(deltaX) <= Math.abs(deltaY)) return;

			if (deltaX < 0) {
				goToNext();
				return;
			}

			goToPrev();
		},
		[goToNext, goToPrev],
	);

	return (
		<section
			id="hero"
			className="scroll-mt-20 relative flex w-full min-h-[calc(85dvh-5rem)] flex-col items-stretch justify-center overflow-hidden bg-navy text-white"
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
		>
			<div className="absolute inset-0 z-0">
				<div className="relative h-full w-full" aria-label="メインビジュアル">
					{HERO_SLIDES.map((slide, index) => (
						<div
							key={slide.src}
							aria-hidden={activeIndex !== index}
							className={cn(
								"absolute inset-0 transition-opacity duration-700 ease-out",
								activeIndex === index ? "opacity-100" : "pointer-events-none opacity-0",
							)}
						>
							{/* 画像は重ね描きし、activeIndex だけ opacity を上げてフェードさせる */}
							<div className="relative h-full min-h-[calc(85dvh-5rem)] w-full">
								<Image
									src={slide.src}
									alt={slide.alt}
									fill
									className="object-cover object-center"
									priority={index === 0}
									sizes="100vw"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="pointer-events-none absolute inset-0 z-1 bg-linear-to-t from-black/22 via-black/10 to-black/5" />
			<div className="pointer-events-auto relative z-10 w-full max-w-7xl px-4 py-6 text-left md:px-24 md:py-16">
				<div className="min-w-0 w-full max-w-4xl text-left" aria-live="polite">
					{/* key を index に連動させ、スライド切替ごとに SplitText を再マウントして再生する */}
					{HERO_SLIDES[activeIndex].copy.kind === "headline" ? (
						<>
							<SplitText
								key={`hero-title-${activeIndex}`}
								tag="h1"
								text={HERO_SLIDES[activeIndex].copy.title}
								className="text-left text-xl text-gray-100 font-bold leading-snug tracking-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.65)] md:text-5xl md:leading-tight"
								textAlign="left"
								{...heroSplitTextProps}
							/>
							<SplitText
								key={`hero-subtitle-${activeIndex}`}
								tag="h2"
								text={HERO_SLIDES[activeIndex].copy.subtitle}
								className="mt-3 text-left text-lg font-bold text-gray-100/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.96)] md:mt-4 md:text-2xl"
								textAlign="left"
								{...heroSplitTextProps}
							/>
						</>
					) : HERO_SLIDES[activeIndex].copy.kind === "multiline" ? (
						<div className="space-y-2 text-left md:space-y-3">
							<SplitText
								key={`hero-line0-${activeIndex}`}
								tag="h2"
								text={HERO_SLIDES[activeIndex].copy.lines[0]}
								className="text-left text-xl text-gray-100 font-bold drop-shadow-[0_2px_14px_rgba(0,0,0,0.65)] md:text-3xl"
								textAlign="left"
								{...heroSplitTextProps}
							/>
							<SplitText
								key={`hero-line1-${activeIndex}`}
								tag="h2"
								text={HERO_SLIDES[activeIndex].copy.lines[1]}
								className="text-left text-xl font-bold drop-shadow-[0_2px_14px_rgba(0,0,0,0.65)] md:text-3xl"
								textAlign="left"
								{...heroSplitTextProps}
							/>
						</div>
					) : (
						<SplitText
							key={`hero-single-${activeIndex}`}
							tag="h2"
							text={HERO_SLIDES[activeIndex].copy.text}
							className="text-left text-xl font-bold drop-shadow-[0_2px_14px_rgba(0,0,0,0.65)] md:text-3xl"
							textAlign="left"
							{...heroSplitTextProps}
						/>
					)}
					<div className="mt-6 flex flex-wrap justify-start gap-2 md:mt-10 md:gap-4">
						<GoldButton className="justify-start" href="/form">
							無料で資料請求する
						</GoldButton>
					</div>
				</div>
			</div>

			{/*
			 * 全面 pointer-events-none の親の下に子だけ pointer-events-auto があると、
			 * ヒットテストが不安定になりシングルクリックが取りこぼされることがある。
			 * 矢印・インジケーターはそれぞれ独立した pointer-events-auto ラッパーにする。
			 */}
			<div className="pointer-events-auto absolute top-1/2 left-3 z-30 hidden -translate-y-1/2 md:left-8 md:block">
				<Button
					type="button"
					variant="outline"
					size="icon-sm"
					className="touch-manipulation rounded-full border-white/40 bg-navy/35 text-white hover:bg-navy/50 hover:text-white"
					aria-label="前のスライドへ"
					onClick={goToPrev}
				>
					<ChevronLeftIcon />
				</Button>
			</div>
			<div className="pointer-events-auto absolute top-1/2 right-3 z-30 hidden -translate-y-1/2 md:right-8 md:block">
				<Button
					type="button"
					variant="outline"
					size="icon-sm"
					className="touch-manipulation rounded-full border-white/40 bg-navy/35 text-white hover:bg-navy/50 hover:text-white"
					aria-label="次のスライドへ"
					onClick={goToNext}
				>
					<ChevronRightIcon />
				</Button>
			</div>
			<div
				className="pointer-events-auto absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 md:bottom-8"
				role="tablist"
				aria-label="スライドの選択"
			>
				{HERO_SLIDES.map((slide, index) => (
					<button
						key={slide.src}
						type="button"
						role="tab"
						aria-selected={activeIndex === index}
						aria-label={`スライド ${index + 1} を表示`}
						className={cn(
							"h-2 rounded-full transition-[width,background-color] duration-300",
							activeIndex === index ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/65",
						)}
						onClick={() => goToSlide(index)}
					/>
				))}
			</div>
		</section>
	);
}
