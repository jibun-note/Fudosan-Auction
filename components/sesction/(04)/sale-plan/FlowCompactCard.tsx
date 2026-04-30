/**
 * `flowStepsData` の 1 ステップを単独で表示するコンパクトカード。
 * 親の状態とは連動させず、`stepIndex` に応じた内容だけを描画する。
 */
import { flowStepsData } from "@/lib/data/flowSection";
import { cn } from "@/lib/utils";

import { CARD_BG, FLOW_GOLD } from "../../(06)/flow/flowConstants";

export type FlowCompactCardProps = {
	stepIndex: number;
	/** 1段横並びで親幅に収める（均等伸縮）。未指定時は固定幅（スネーク等向け） */
	fluidRow?: boolean;
};

export default function FlowCompactCard({ stepIndex, fluidRow }: FlowCompactCardProps) {
	const step = flowStepsData[stepIndex];
	if (!step) return null;

	const stepNo = stepIndex + 1;

	return (
		<div
			className={cn(
				"flex h-full min-h-0 w-full max-w-48 flex-col rounded-lg border bg-white p-2 text-left shadow-sm sm:max-w-52 md:p-3",
				fluidRow ? "md:max-w-none md:min-h-40 md:min-w-0" : "md:h-40 md:w-52 md:max-w-none",
			)}
			style={{ borderColor: FLOW_GOLD }}
		>
			<div className="flex shrink-0 items-center gap-2 border-b border-neutral-100 pb-2">
				<div
					className="flex size-7 shrink-0 flex-col items-center justify-center rounded-full border md:size-8"
					style={{
						backgroundColor: CARD_BG,
						borderColor: "rgba(197, 165, 90, 0.35)",
					}}
				>
					<span
						className="text-[4px] font-bold uppercase leading-none text-white md:text-[5px]"
						style={{ letterSpacing: "0.18em" }}
					>
						STEP
					</span>
					<span className="mt-px text-sm font-extralight leading-none tabular-nums text-white md:text-sm">
						{String(stepNo).padStart(2, "0")}
					</span>
				</div>
				<h3 className="min-w-0 flex-1 break-words text-xs font-bold leading-snug text-navy md:text-base">
					{step.title}
				</h3>
			</div>
			<div className="flex min-h-0 flex-1 flex-col items-center justify-center px-0.5 pt-1.5 md:pt-2">
				<p className="break-words text-[11px] font-light leading-relaxed tracking-wide text-neutral-600 md:text-base">
					{step.description}
				</p>
			</div>
		</div>
	);
}
