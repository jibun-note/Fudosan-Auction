"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import type { SchemeService } from "@/lib/data/schemeSection";

import SchemeServiceBallButton from "./SchemeServiceBallButton";

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
						<SchemeServiceBallButton
							service={service}
							isActive={activeIndex === index}
							onSelect={() => onSelectIndex(index)}
						/>
					</div>
				);
			})}
		</div>
	);
}
