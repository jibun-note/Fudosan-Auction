/**
 * カード下部のドットインジケーター。アクティブは横長バー、非アクティブは小さな円。
 * クリックで任意のステップへジャンプする。
 */
"use client";

import { FLOW_GOLD, FOCUS_OUTLINE_GOLD } from "./flowConstants";

type FlowStepIndicatorsProps = {
	stepCount: number;
	active: number;
	onSelectStep: (index: number) => void;
};

export default function FlowStepIndicators({
	stepCount,
	active,
	onSelectStep,
}: FlowStepIndicatorsProps) {
	return (
		<div className="mt-8 flex justify-center md:mt-10">
			<div className="flex items-center gap-2.5" aria-label="ステップの位置">
				{Array.from({ length: stepCount }, (_, i) => (
					<button
						key={i}
						type="button"
						onClick={() => onSelectStep(i)}
						className={`rounded-full p-1 ${FOCUS_OUTLINE_GOLD}`}
						aria-label={`ステップ${i + 1}へ`}
						aria-current={i === active ? "step" : undefined}
					>
						{i === active ? (
							<span
								className="block h-1.5 w-7 rounded-full"
								style={{ backgroundColor: FLOW_GOLD }}
							/>
						) : (
							<span className="block size-1.5 rounded-full bg-gray-400/80" />
						)}
					</button>
				))}
			</div>
		</div>
	);
}
