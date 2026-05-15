"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { GoldButton } from "@/components/common/button/GoldButton";
import SplitText from "@/components/SplitText";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const SLIDE_INTERVAL_MS = 8000;
const SWIPE_THRESHOLD_PX = 48;

const HERO_SLIDES = [
	{
		src: "/images/AdobeStock_285833204_Preview.jpeg",
		alt: "モダンな内装のマンション",
		copy: {
			title: "税理士のクライアントサービスを強化する",
			subtitle: "“法人の繰延” と “不動産売却支援” の新サービスを開始しました。",
			body: "税理士が顧問先から最も相談される資金繰り・財務改善・不動産売却に、\n確かな答えを返せる新しい仕組みです。",
		},
	},
	{
		src: "/images/AdobeStock_165264550_Preview.jpeg",
		alt: "資料を見ながら相談するビジネスパーソン",
		copy: {
			title: "法人税の繰延に自信をもって応える",
			subtitle: "顧問先の経営安定化と税理士の価値向上を実現します。",
			body: "“財務まで支援できる専門家” として信頼が高まります。",
		},
	},
	{
		src: "/images/AdobeStock_1818181755_Preview.jpeg",
		alt: "デスクで書類と向き合うビジネスシーン",
		copy: {
			title: "法人所有の不動産売却を高値でサポート",
			subtitle: "相場ではわからない法人資産のご売却は売却計画書をご活用ください。",
			body: "不動産の価値は 相場ではなく“利用”で決まる。\n藤和は、利用価値から逆算して最も価値が上がる方法を提示する\n売却計画書＋オークションで最大値をご提案",
		},
	},
	{
		src: "/images/AdobeStock_215127968_Preview.jpeg",
		alt: "都市をイメージした不動産の提案",
		copy: {
			title: "個人資産の売却・相続をオークションで支援",
			subtitle: "不動産価値を最大化する“売却計画書＋オークション”でさらに価値最大化。",
			body: "個人の相続・資産売却でも、利用価値を基準にした\n売却計画書と利用企業別にオークション方式を採用。",
		},
	},
] as const;

const COMMON_CAPTION = "顧問先の法人税の繰り延べ、資産、相続売却の新サービス開始";

const heroSplitTextProps = {
	delay: 35,
	duration: 0.85,
	splitType: "lines,chars" as const,
	from: { opacity: 0, y: 28 },
	to: { opacity: 1, y: 0 },
	threshold: 1,
	rootMargin: "0px",
	playOnMount: true,
};

export default function Hero() {
	const [activeIndex, setActiveIndex] = useState(0);
	const totalSlides = HERO_SLIDES.length;
	const touchStartRef = useRef<{ x: number; y: number } | null>(null);

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

	const handleTouchStart = useCallback((event: React.TouchEvent<HTMLElement>) => {
		const touch = event.touches[0];
		touchStartRef.current = { x: touch.clientX, y: touch.clientY };
	}, []);

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
			className="scroll-mt-20 relative flex min-h-[calc(85dvh-5rem)] w-full flex-col items-stretch justify-center overflow-hidden bg-navy text-white"
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
			<div className="pointer-events-none absolute inset-0 z-1 bg-linear-to-t from-navy/22 via-navy/10 to-navy/5" />
			<div className="pointer-events-auto relative z-10 w-full max-w-7xl px-4 py-6 text-left md:px-24 md:py-16">
				<div className="min-w-0 w-full max-w-7xl text-left" aria-live="polite">
					<p className="mt-4 mb-3 inline-flex max-w-4xl text-left text-xl font-black tracking-tight bg-linear-to-b from-[#fffef7] via-[#fff0c9] via-35% to-[#c39a45] bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] md:mt-5 md:mb-4 md:text-5xl">
						{COMMON_CAPTION}
					</p>
					<SplitText
						key={`hero-title-${activeIndex}`}
						tag="h1"
						text={HERO_SLIDES[activeIndex].copy.title}
						className="text-left text-xl font-bold leading-snug tracking-tighter text-gray-100 drop-shadow-[0_3px_14px_rgba(0,0,0,0.58)] md:text-5xl md:leading-tight"
						textAlign="left"
						{...heroSplitTextProps}
					/>
					<SplitText
						key={`hero-subtitle-${activeIndex}`}
						tag="h2"
						text={HERO_SLIDES[activeIndex].copy.subtitle}
						className="mt-3 text-left text-lg font-bold tracking-tighter text-gray-100/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] md:mt-4 md:text-3xl md:leading-tight"
						textAlign="left"
						{...heroSplitTextProps}
					/>
					<p className="whitespace-pre-line mt-4 max-w-4xl text-left text-sm leading-relaxed text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] md:mt-5 md:text-3xl md:leading-tight">
						{activeIndex === 0 ? (
							<>
								税理士が顧問先から最も相談される
								<strong className="font-extrabold text-white">
									資金繰り・財務改善・不動産売却
								</strong>
								に、
								{"\n"}
								確かな答えを返せる新しい仕組みです。
							</>
						) : (
							HERO_SLIDES[activeIndex].copy.body
						)}
					</p>

					<div className="mt-6 flex flex-wrap justify-start gap-2 md:mt-10 md:gap-4">
						<GoldButton
							className="justify-start py-1 text-sm md:py-1.5 md:text-base"
							href="/form"
						>
							無料面談に申し込む
						</GoldButton>
					</div>
				</div>
			</div>

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
				aria-label="スライド選択"
			>
				{HERO_SLIDES.map((slide, index) => (
					<button
						key={slide.src}
						type="button"
						role="tab"
						aria-selected={activeIndex === index}
						aria-label={`スライド${index + 1}を表示`}
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
