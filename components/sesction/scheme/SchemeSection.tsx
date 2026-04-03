"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

import type { SchemeService } from "@/lib/data/schemeSection";
import { cn } from "@/lib/utils";
import {
	type CarouselApi,
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import SchemeServiceDetailCard from "./SchemeServiceDetailCard";
import SchemeServiceRing from "./SchemeServiceRing";

/**
 * servicering.svg（viewBox 0 0 2720 2720）の二重円2パスをルート座標まで変換し、
 * 中心線半径と平均中心を分数で保持（object-contain で boxSize に線形スケール）
 */
const SERVICERING_VIEWBOX = 2720;
const SERVICERING_RING_CX_FRAC = 1358.999214778618 / SERVICERING_VIEWBOX;
const SERVICERING_RING_CY_FRAC = 1361.6112931426508 / SERVICERING_VIEWBOX;
const SERVICERING_RING_R_FRAC = 1186.0008193851131 / SERVICERING_VIEWBOX;

export type SchemeSectionProps = {
	services: SchemeService[];
};

export default function SchemeSection({ services }: SchemeSectionProps) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isMobile, setIsMobile] = useState(false);
	const [carouselApi, setCarouselApi] = useState<CarouselApi>();

	useEffect(() => {
		const onResize = () => setIsMobile(window.innerWidth < 768);
		onResize();
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	useEffect(() => {
		if (!carouselApi) return;
		const onSelect = () => {
			setActiveIndex(carouselApi.selectedScrollSnap());
		};
		carouselApi.on("select", onSelect);
		onSelect();
		return () => {
			carouselApi.off("select", onSelect);
		};
	}, [carouselApi]);

	const handleRingSelect = useCallback(
		(index: number) => {
			setActiveIndex(index);
			carouselApi?.scrollTo(index);
		},
		[carouselApi],
	);

	const radius = isMobile ? 130 : 142;
	const ringPadding = isMobile ? 48 : 58;
	const boxSize = radius * 2 + ringPadding * 2;
	const ringCx = boxSize * SERVICERING_RING_CX_FRAC;
	const ringCy = boxSize * SERVICERING_RING_CY_FRAC;
	const ringR = boxSize * SERVICERING_RING_R_FRAC;

	return (
		<section
			id="merit"
			className="relative overflow-hidden bg-lp-surface-elevated px-4 py-12 md:px-6 md:py-20"
		>
			<motion.div
				className="pointer-events-none absolute inset-0"
				animate={{
					background: [
						"radial-gradient(ellipse 60% 40% at 50% 40%, hsl(38 70% 55% / 0.05) 0%, transparent 70%)",
						"radial-gradient(ellipse 70% 50% at 45% 35%, hsl(38 70% 55% / 0.08) 0%, transparent 70%)",
						"radial-gradient(ellipse 60% 40% at 55% 45%, hsl(38 70% 55% / 0.05) 0%, transparent 70%)",
					],
				}}
				transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
			/>
			<div
				className="pointer-events-none absolute inset-0 opacity-[0.03]"
				style={{
					backgroundImage:
						"linear-gradient(rgb(184 134 11 / 0.3) 1px, transparent 1px), linear-gradient(90deg, rgb(184 134 11 / 0.3) 1px, transparent 1px)",
					backgroundSize: "60px 60px",
				}}
			/>

			<div className="relative z-10 mx-auto max-w-7xl xl:max-w-360">
				<div className="mx-auto max-w-6xl">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-40px" }}
						transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
					>
						<h2 className="text-lg font-bold text-navy md:text-3xl">
							&quot;価値&quot;が返る3つのサービス
						</h2>
						<div className="mt-2 h-1 w-16 bg-gold" />
						<p className="mt-3 mb-16 text-sm text-gray-600 md:mt-4 md:text-base">
							顧問先への付加価値提案が、先生ご自身の信頼とビジネスを強化します。
						</p>
					</motion.div>
				</div>

				<div className="flex w-full flex-col items-stretch gap-10 md:flex-row md:items-start md:gap-8 lg:gap-12 xl:grid xl:grid-cols-[minmax(0,38%)_minmax(0,1fr)] xl:items-start xl:gap-12">
					<div className="mx-auto flex shrink-0 justify-center md:mx-0 md:justify-start xl:justify-self-center">
						<SchemeServiceRing
							services={services}
							activeIndex={activeIndex}
							onSelectIndex={handleRingSelect}
							boxSize={boxSize}
							ringCx={ringCx}
							ringCy={ringCy}
							ringR={ringR}
						/>
					</div>

					<div className="flex min-w-0 flex-1 flex-col gap-4 md:min-h-0 md:self-start xl:self-stretch">
						<div
							className="min-w-0 w-full min-h-0"
							style={isMobile ? undefined : { height: boxSize }}
						>
							<div
								className={cn(
									"relative h-full overflow-hidden rounded-2xl",
									"shadow-[0_22px_44px_-18px_rgba(12,22,40,0.42),0_10px_20px_-12px_rgba(15,23,42,0.28),inset_0_1px_0_0_rgba(255,255,255,0.12)]",
									"ring-1 ring-white/15 ring-inset",
								)}
							>
								<Carousel
									setApi={setCarouselApi}
									className={
										isMobile
											? "w-full"
											: "h-full w-full [&_[data-slot=carousel-content]]:h-full [&_[data-slot=carousel-content]>div]:h-full [&_[data-slot=carousel-content]>div]:min-h-0"
									}
									opts={{ align: "start", loop: false }}
								>
									<CarouselContent className={isMobile ? undefined : "h-full min-h-0"}>
										{services.map((service) => (
											<CarouselItem
												key={service.id}
												className={isMobile ? undefined : "h-full"}
											>
												<SchemeServiceDetailCard service={service} />
											</CarouselItem>
										))}
									</CarouselContent>
									<CarouselPrevious
										type="button"
										className="left-1 top-1/2 z-10 -translate-y-1/2 border-white/20 bg-white/90 text-navy shadow-sm hover:bg-white md:left-2"
									/>
									<CarouselNext
										type="button"
										className="right-1 top-1/2 z-10 -translate-y-1/2 border-white/20 bg-white/90 text-navy shadow-sm hover:bg-white md:right-2"
									/>
								</Carousel>
							</div>
						</div>

						<div
							className="flex shrink-0 justify-center gap-2.5"
							role="tablist"
							aria-label="表示するサービス"
						>
							{services.map((service, index) => (
								<button
									key={service.id}
									type="button"
									role="tab"
									aria-selected={activeIndex === index}
									aria-label={`${service.title.replace(/\n/g, " ")} を表示`}
									onClick={() => handleRingSelect(index)}
									className={cn(
										"h-2 rounded-full transition-[width,background-color,box-shadow] duration-300 ease-out",
										activeIndex === index
											? "w-8 bg-gold shadow-[0_0_12px_-2px_hsl(38_70%_48%/0.55)]"
											: "w-2 bg-gray-300/90 hover:bg-gray-400/90",
									)}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
