"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { useCallback, useEffect, useMemo, useState } from "react";

import { GoldButton } from "@/components/common/button/GoldButton";
import SplitText from "@/components/SplitText";
import { Button } from "@/components/ui/button";
import { type CarouselApi, Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

/** ヒーロー・メインビジュアルでよく使われる表示間隔（秒） */
const SLIDE_INTERVAL_MS = 8000;

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
	const [carouselApi, setCarouselApi] = useState<CarouselApi>();
	const [activeIndex, setActiveIndex] = useState(0);

	const plugins = useMemo(
		() => [
			Fade(),
			Autoplay({
				delay: SLIDE_INTERVAL_MS,
				stopOnInteraction: false,
				stopOnMouseEnter: true,
			}),
		],
		[],
	);

	/**
	 * embla-carousel-fade はフェードが opacity 制御のため、"select" / "settle" イベントの
	 * 発火タイミングが実際の画像切替より遅れ、テキスト/インジケーターが連動しない。
	 * 対策として、毎フレーム `selectedScrollSnap()` を読み、変化があれば即 state を更新する。
	 * 比較は軽量で、変化時のみ setState されるため再レンダリングコストは発生しない。
	 */
	useEffect(() => {
		if (!carouselApi) return;
		let rafId = 0;
		let lastIndex = carouselApi.selectedScrollSnap();
		setActiveIndex(lastIndex);
		const tick = () => {
			const current = carouselApi.selectedScrollSnap();
			if (current !== lastIndex) {
				lastIndex = current;
				setActiveIndex(current);
			}
			rafId = window.requestAnimationFrame(tick);
		};
		rafId = window.requestAnimationFrame(tick);
		const handleReInit = () => {
			lastIndex = carouselApi.selectedScrollSnap();
			setActiveIndex(lastIndex);
		};
		carouselApi.on("reInit", handleReInit);
		return () => {
			window.cancelAnimationFrame(rafId);
			carouselApi.off("reInit", handleReInit);
		};
	}, [carouselApi]);

	/**
	 * クリック操作では Embla のイベントを待たず React state を先に更新する。
	 * これにより、画像フェードの開始と同じタイミングで SplitText / インジケーターが切り替わる。
	 */
	const goToSlide = useCallback(
		(index: number) => {
			setActiveIndex(index);
			carouselApi?.scrollTo(index);
		},
		[carouselApi],
	);

	const goToPrev = useCallback(() => {
		if (!carouselApi) return;
		const total = HERO_SLIDES.length;
		const prev = (carouselApi.selectedScrollSnap() - 1 + total) % total;
		setActiveIndex(prev);
		carouselApi.scrollPrev();
	}, [carouselApi]);

	const goToNext = useCallback(() => {
		if (!carouselApi) return;
		const total = HERO_SLIDES.length;
		const next = (carouselApi.selectedScrollSnap() + 1) % total;
		setActiveIndex(next);
		carouselApi.scrollNext();
	}, [carouselApi]);

	return (
		<section className="relative flex w-full min-h-[calc(85dvh-5rem)] flex-col items-stretch justify-center overflow-hidden bg-navy text-white">
			<div className="absolute inset-0 z-0">
				<Carousel
					opts={{ loop: true, duration: 45 }}
					plugins={plugins}
					setApi={setCarouselApi}
					className="h-full w-full"
					aria-label="メインビジュアル"
				>
					<CarouselContent className="ml-0 h-full">
						{HERO_SLIDES.map((slide, index) => (
							<CarouselItem key={slide.src} className="basis-full pl-0">
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
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
			<div className="pointer-events-none absolute inset-0 z-1 bg-linear-to-b from-navy/35 via-navy/20 to-navy-dark/40" />
			<div className="pointer-events-auto relative z-10 w-full max-w-7xl px-4 py-6 text-left md:px-24 md:py-16">
				<div className="min-w-0 w-full max-w-4xl text-left" aria-live="polite">
					{HERO_SLIDES[activeIndex].copy.kind === "headline" ? (
						<>
							<SplitText
								key={`hero-title-${activeIndex}`}
								tag="h1"
								text={HERO_SLIDES[activeIndex].copy.title}
								className="text-left text-xl font-bold leading-snug tracking-tight md:text-4xl md:leading-tight"
								textAlign="left"
								{...heroSplitTextProps}
							/>
							<SplitText
								key={`hero-subtitle-${activeIndex}`}
								tag="h2"
								text={HERO_SLIDES[activeIndex].copy.subtitle}
								className="mt-3 text-left text-base font-bold text-white/90 md:mt-4 md:text-2xl"
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
								className="text-left text-base font-bold text-white/90 md:text-2xl"
								textAlign="left"
								{...heroSplitTextProps}
							/>
							<SplitText
								key={`hero-line1-${activeIndex}`}
								tag="h2"
								text={HERO_SLIDES[activeIndex].copy.lines[1]}
								className="text-left text-base font-bold text-white/90 md:text-2xl"
								textAlign="left"
								{...heroSplitTextProps}
							/>
						</div>
					) : (
						<SplitText
							key={`hero-single-${activeIndex}`}
							tag="h2"
							text={HERO_SLIDES[activeIndex].copy.text}
							className="text-left text-base font-bold text-white/90 md:text-2xl"
							textAlign="left"
							{...heroSplitTextProps}
						/>
					)}
					<div className="mt-6 flex flex-wrap justify-start gap-2 md:mt-10 md:gap-4">
						<GoldButton className="justify-start" href="/home/form">
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
			<div className="absolute top-1/2 left-3 z-30 -translate-y-1/2 md:left-8">
				<Button
					type="button"
					variant="outline"
					size="icon-sm"
					disabled={!carouselApi}
					className="touch-manipulation rounded-full border-white/40 bg-navy/35 text-white hover:bg-navy/50 hover:text-white"
					aria-label="前のスライドへ"
					onClick={goToPrev}
				>
					<ChevronLeftIcon />
				</Button>
			</div>
			<div className="absolute top-1/2 right-3 z-30 -translate-y-1/2 md:right-8">
				<Button
					type="button"
					variant="outline"
					size="icon-sm"
					disabled={!carouselApi}
					className="touch-manipulation rounded-full border-white/40 bg-navy/35 text-white hover:bg-navy/50 hover:text-white"
					aria-label="次のスライドへ"
					onClick={goToNext}
				>
					<ChevronRightIcon />
				</Button>
			</div>
			<div
				className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 md:bottom-8"
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
