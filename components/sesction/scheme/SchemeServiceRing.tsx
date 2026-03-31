"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Building2, FileText, Gavel, type LucideIcon } from "lucide-react";
import Image from "next/image";

import type { SchemeService, SchemeServiceIconKey } from "@/lib/data/scheme-services";

const ICON_BY_KEY: Record<SchemeServiceIconKey, LucideIcon> = {
	building2: Building2,
	fileText: FileText,
	gavel: Gavel,
};

/** 正三角形配置：単位ベクトル（半径1）→ サイズ掛け算でノード座標に変換 */
const circlePositions = [
	{ x: 0, y: -1 },
	{ x: 0.866, y: 0.5 },
	{ x: -0.866, y: 0.5 },
];

export type SchemeServiceRingProps = {
	services: SchemeService[];
	activeIndex: number;
	onSelectIndex: (index: number) => void;
	boxSize: number;
	ringCx: number;
	ringCy: number;
	ringR: number;
};

export default function SchemeServiceRing({
	services,
	activeIndex,
	onSelectIndex,
	boxSize,
	ringCx,
	ringCy,
	ringR,
}: SchemeServiceRingProps) {
	return (
		<div
			className="relative w-full max-w-[min(100%,34rem)] shrink-0"
			style={{ width: boxSize, height: boxSize }}
		>
			<div className="pointer-events-none absolute inset-0">
				<Image
					src="/images/servicering.svg"
					alt=""
					aria-hidden="true"
					fill
					sizes="(max-width: 768px) 80vw, 420px"
					className="object-contain opacity-25"
				/>
			</div>

			<div className="absolute inset-0 flex items-center justify-center">
				<AnimatePresence mode="wait">
					<motion.div
						key={activeIndex}
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.8 }}
						transition={{ duration: 0.4 }}
						className="-translate-y-2 max-w-[min(100%,18rem)] px-2 text-center md:-translate-y-2 md:max-w-sm md:px-3 lg:max-w-xs lg:px-4"
					>
						<p className="whitespace-pre-line text-lg leading-snug font-semibold text-navy md:text-xl lg:text-2xl">
							{services[activeIndex]?.label}
						</p>
					</motion.div>
				</AnimatePresence>
			</div>

			{services.map((service, index) => {
				const isActive = activeIndex === index;
				const ServiceIcon = ICON_BY_KEY[service.iconKey];
				const pos = circlePositions[index];
				const nodeX = ringCx + pos.x * ringR;
				const nodeY = ringCy + pos.y * ringR;

				return (
					<div
						key={service.id}
						className="absolute"
						style={{
							left: nodeX,
							top: nodeY,
							transform: "translate(-50%, -50%)",
						}}
					>
						<button
							type="button"
							onClick={() => onSelectIndex(index)}
							className="relative cursor-pointer transition-transform duration-200 ease-out will-change-transform hover:scale-105"
						>
							{isActive && (
								<div className="absolute -inset-2 rounded-full border border-gold/30 opacity-80 md:-inset-1.5" />
							)}

							<div
								className={`relative isolate flex size-19 items-center justify-center overflow-hidden rounded-full backdrop-blur-sm transition-all duration-500 md:size-24 lg:size-26 ${
									isActive
										? "border-2 border-gold/85 bg-linear-to-br from-white/45 via-gold/25 to-navy/12 shadow-[0_12px_28px_-14px_rgba(12,22,40,0.75),0_0_28px_-8px_hsl(38_70%_48%/0.45)] ring-2 ring-gold/25"
										: "border-2 border-gray-300/70 bg-linear-to-br from-white/42 via-slate-200/45 to-slate-400/35 text-gray-600 shadow-[0_11px_24px_-18px_rgba(30,41,59,0.68)] hover:border-gray-200/90 hover:from-white/50 hover:via-slate-200/55 hover:to-slate-400/45"
								}`}
							>
								<ServiceIcon
									aria-hidden="true"
									className={`pointer-events-none absolute z-0 size-10 transition-colors duration-500 md:size-14 lg:size-16 ${
										isActive ? "text-gold/18" : "text-navy/12"
									}`}
									strokeWidth={1.5}
								/>
								<span className="pointer-events-none absolute inset-x-2 top-1 z-0 h-1/3 rounded-full bg-linear-to-b from-white/55 to-transparent blur-[1px] md:inset-x-1.5 md:top-0.5" />
								<span className="pointer-events-none absolute -right-1 top-2 z-0 h-1/2 w-1/2 rotate-12 rounded-full bg-white/20 blur-sm md:-right-0.5 md:top-1.5" />
								<span
									className={`relative z-10 line-clamp-3 max-w-15 whitespace-pre-line text-center text-[10px] leading-snug font-semibold tracking-tight md:max-w-20 md:text-[11px] lg:max-w-23 lg:text-xs ${
										isActive ? "font-bold text-gold" : "text-gray-600"
									}`}
								>
									{service.name}
								</span>
							</div>
						</button>
					</div>
				);
			})}
		</div>
	);
}
