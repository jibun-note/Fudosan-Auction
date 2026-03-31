/**
 * 現在ステップの詳細を表示するメインカード（ディープネイビー背景）。
 * モバイル幅では水平スワイプで前後ステップへ切り替え（SWIPE_THRESHOLD_PX 以上の横移動時）。
 */
"use client";

import type { ComponentType } from "react";
import { useRef } from "react";

import { CARD_BG, CARD_STEP_DIGIT, FLOW_GOLD, SWIPE_THRESHOLD_PX } from "./flowConstants";

type IconProps = { className?: string; strokeWidth?: number };

type FlowMainCardProps = {
	active: number;
	title: string;
	description: string;
	Icon: ComponentType<IconProps>;
	onRequestPrev: () => void;
	onRequestNext: () => void;
};

export default function FlowMainCard({
	active,
	title,
	description,
	Icon,
	onRequestPrev,
	onRequestNext,
}: FlowMainCardProps) {
	const touchStartRef = useRef<{ x: number; y: number } | null>(null);

	return (
		<div
			className="mx-auto mt-8 flex max-w-4xl items-stretch overflow-hidden rounded-xl text-left shadow-[0_12px_40px_rgba(7,11,18,0.35)] md:mt-12 md:rounded-2xl"
			style={{ backgroundColor: CARD_BG }}
			onTouchStart={(e) => {
				if (e.touches.length !== 1) return;
				const t = e.touches[0];
				touchStartRef.current = { x: t.clientX, y: t.clientY };
			}}
			onTouchEnd={(e) => {
				const start = touchStartRef.current;
				touchStartRef.current = null;
				if (!start || e.changedTouches.length !== 1) return;
				if (typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches) {
					return;
				}
				const t = e.changedTouches[0];
				const dx = t.clientX - start.x;
				const dy = t.clientY - start.y;
				if (Math.abs(dx) < SWIPE_THRESHOLD_PX || Math.abs(dx) <= Math.abs(dy)) return;
				if (dx > 0) {
					onRequestPrev();
				} else {
					onRequestNext();
				}
			}}
		>
			<div className="flex min-w-0 flex-1 flex-col gap-8 px-5 py-8 md:flex-row md:items-center md:gap-10 md:px-10 md:py-10 lg:gap-14 lg:px-12">
				<div className="flex shrink-0 flex-col items-center md:items-start">
					<div key={active} className="flow-card-text-enter flex w-full flex-col items-center">
						<div className="relative">
							<span
								className="block text-center text-[4.5rem] leading-none font-extralight md:text-[7rem]"
								style={{
									color: CARD_STEP_DIGIT,
									textShadow: "0 0 16px rgba(9, 15, 26, 0.18)",
								}}
							>
								{String(active + 1).padStart(2, "0")}
							</span>
							<span
								className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-bold uppercase md:text-[11px]"
								style={{ color: FLOW_GOLD, letterSpacing: "0.35em" }}
							>
								STEP
							</span>
						</div>
						<div
							className="mt-3 flex size-16 items-center justify-center rounded-full border md:mt-5 md:size-24"
							style={{
								color: FLOW_GOLD,
								// backgroundImage: "url('/images/藤和ロゴ.svg')",
								backgroundSize: "contain",
								backgroundPosition: "center",
								backgroundRepeat: "no-repeat",
								borderColor: "transparent",
							}}
							aria-hidden
						>
							<Icon className="size-7 md:size-9" strokeWidth={0.9} />
						</div>
					</div>
				</div>
				<div className="min-w-0 flex-1 md:border-l-[0.5px] md:border-white/[0.04] md:pl-8 lg:pl-10">
					<div key={active} className="flow-card-text-enter">
						<h3 className="text-lg font-normal tracking-[0.08em] text-white md:text-2xl">
							{title}
						</h3>
						<div
							className="mt-3 h-[0.5px] w-10 md:mt-4 md:w-12"
							style={{ backgroundColor: "rgba(197, 165, 90, 0.72)" }}
						/>
						<p className="mt-4 text-sm font-light leading-[1.95] tracking-[0.04em] text-neutral-400 md:mt-5 md:text-base">
							{description}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
