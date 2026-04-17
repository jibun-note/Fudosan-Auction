/**
 * `flowStepsData` の 1 ステップを単独で表示するコンパクトカード。
 * 親の状態とは連動させず、`stepIndex` に応じた内容だけを描画する。
 */
import { flowStepsData } from "@/lib/data/flowSection";

import { CARD_BG, FLOW_GOLD } from "./flowConstants";
import { flowStepIcons } from "./flowStepIcons";

export type FlowCompactCardProps = {
	stepIndex: number;
};

export default function FlowCompactCard({ stepIndex }: FlowCompactCardProps) {
	const step = flowStepsData[stepIndex];
	if (!step) return null;

	const Icon = flowStepIcons[step.iconKey];
	const stepNo = stepIndex + 1;

	return (
		<div
			className="flex h-full min-h-0 w-full max-w-72 flex-col rounded-xl border bg-white p-3 text-left shadow-sm md:h-56 md:w-72 md:max-w-none md:p-5"
			style={{ borderColor: FLOW_GOLD }}
		>
			<div className="relative flex shrink-0 items-center gap-3 border-b border-neutral-100 pb-3 pr-10 md:pr-12">
				<div
					className="flex size-12 shrink-0 flex-col items-center justify-center rounded-full border md:size-14"
					style={{
						backgroundColor: CARD_BG,
						borderColor: "rgba(197, 165, 90, 0.35)",
					}}
				>
					<span
						className="text-[9px] font-bold uppercase leading-none text-white md:text-[10px]"
						style={{ letterSpacing: "0.2em" }}
					>
						STEP
					</span>
					<span className="mt-0.5 text-xl font-extralight leading-none tabular-nums text-white md:text-2xl">
						{String(stepNo).padStart(2, "0")}
					</span>
				</div>
				<h3 className="min-w-0 flex-1 text-sm font-bold leading-snug text-navy md:text-base">{step.title}</h3>
				<span
					className="absolute right-0 top-0 inline-flex"
					style={{ color: FLOW_GOLD }}
					aria-hidden
				>
					<Icon className="size-7 md:size-8" strokeWidth={0.9} />
				</span>
			</div>
			<div className="flex min-h-0 flex-1 flex-col items-center justify-center px-0.5 pt-2 md:pt-3">
				<p className="text-center text-xs font-light leading-relaxed tracking-wide text-neutral-600 md:text-sm">
					{step.description}
				</p>
			</div>
		</div>
	);
}
