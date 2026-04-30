/**
 * 横並びのステップ番号・タイトルと、隣接ステップ間の接続線（進捗表示）を描画する。
 * md 以上で接続線を表示し、アクティブ区間は ConnectorProgressFill で塗り進める。
 */
"use client";

import ConnectorProgressFill from "./ConnectorProgressFill";
import {
	AUTO_SLIDE_MS,
	CONNECTOR_TRACK,
	FLOW_GOLD,
	FOCUS_OUTLINE_GOLD,
	GRADIENT_STEP_ACTIVE,
	STEP_LABEL_MUTED,
} from "./flowConstants";

type Step = { title: string };

type FlowTimelineProps = {
	steps: readonly Step[];
	active: number;
	onSelectStep: (index: number) => void;
};

export default function FlowTimeline({ steps, active, onSelectStep }: FlowTimelineProps) {
	return (
		<div className="mx-auto mt-10 max-w-4xl overflow-x-auto px-1 pb-2 pt-5 md:mt-14 md:px-0 md:pt-6">
			<div className="mx-auto flex min-w-[min(100%,36rem)] max-w-4xl items-start justify-between gap-0 md:min-w-0">
				{steps.map((step, i) => {
					const isOn = i === active;
					const isPassed = i < active;
					return (
						<div key={step.title} className="flex min-w-0 flex-1 items-start last:flex-none">
							<div className="flex min-w-[4.5rem] max-w-[6.5rem] shrink-0 flex-col items-center px-0.5 md:max-w-[7rem] md:px-1">
								<button
									type="button"
									onClick={() => onSelectStep(i)}
									className={`flex flex-col items-center rounded-full cursor-pointer ${FOCUS_OUTLINE_GOLD}`}
									aria-current={isOn ? "step" : undefined}
									aria-label={`ステップ${i + 1}: ${step.title}`}
								>
									<span
										className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-medium transition-[background-image,background-color,box-shadow,color,border-color] md:h-10 md:w-10 md:text-base ${isOn ? "flow-step-pulse border-0" : "border"}`}
										style={{
											backgroundImage: isOn ? GRADIENT_STEP_ACTIVE : "none",
											backgroundColor: isOn
												? "transparent"
												: isPassed
													? "rgba(197, 165, 90, 0.2)"
													: "transparent",
											borderColor: isOn
												? "transparent"
												: isPassed
													? FLOW_GOLD
													: "#d6cfbf",
											color: isOn ? "#fff" : isPassed ? FLOW_GOLD : "#7c7c7c",
										}}
									>
										{i + 1}
									</span>
									<span
										className="mt-2 line-clamp-2 max-w-[5.75rem] text-[10px] leading-tight md:max-w-none md:text-xs"
										style={{ color: STEP_LABEL_MUTED }}
									>
										{step.title}
									</span>
								</button>
							</div>
							{i < steps.length - 1 && (
								<div
									className="mx-1 mt-[18px] hidden min-h-px min-w-[1.75rem] flex-1 items-center md:mx-2 md:flex md:min-w-[3.5rem] lg:min-w-[5rem]"
									aria-hidden
								>
									<div
										className="relative h-px w-full overflow-hidden rounded-full"
										style={{ backgroundColor: CONNECTOR_TRACK }}
									>
										{i < active && (
											<div
												className="absolute inset-0 rounded-full"
												style={{ backgroundColor: FLOW_GOLD }}
											/>
										)}
										{i === active && (
											<ConnectorProgressFill
												key={`flow-connector-${active}`}
												durationMs={AUTO_SLIDE_MS}
												backgroundColor={FLOW_GOLD}
											/>
										)}
									</div>
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
