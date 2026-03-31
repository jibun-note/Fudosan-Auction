/**
 * 「ご利用の流れ」セクション（#flow）。
 * データとアイコンを結合し、タイムライン・メインカード・インジケーターを束ねる親コンポーネント。
 * 自動スライド（AUTO_SLIDE_MS）でアクティブステップを循環させる。
 */
"use client";

import { useEffect, useMemo, useState } from "react";

import { flowStepsData } from "@/lib/data/flow-steps";

import FlowMainCard from "./FlowMainCard";
import FlowStepIndicators from "./FlowStepIndicators";
import { flowStepIcons } from "./flowStepIcons";
import { AUTO_SLIDE_MS, FLOW_CREAM } from "./flowConstants";
import FlowTimeline from "./FlowTimeline";

export default function FlowSection() {
	const [active, setActive] = useState(0);

	const steps = useMemo(
		() =>
			flowStepsData.map((s) => ({
				...s,
				Icon: flowStepIcons[s.iconKey],
			})),
		[],
	);

	useEffect(() => {
		const t = window.setTimeout(() => {
			setActive((i) => (i + 1) % steps.length);
		}, AUTO_SLIDE_MS);
		return () => window.clearTimeout(t);
	}, [active, steps.length]);

	const { Icon, title, description } = steps[active]!;

	return (
		<section id="flow" className="px-4 py-12 md:px-6 md:py-20" style={{ backgroundColor: FLOW_CREAM }}>
			<div className="mx-auto max-w-6xl">
				<div>
					<h2 className="text-lg font-bold text-navy md:text-3xl">ご利用の流れ</h2>
					<div className="mt-2 h-1 w-16 bg-gold" />
				</div>

				{/* 横タイムライン（進捗付き接続線）
				    overflow-x-auto は overflow-y を auto にしがちで、パルスの box-shadow が上下で切れる。
				    上に余白を足してリングが収まるようにする。 */}
				<FlowTimeline steps={steps} active={active} onSelectStep={setActive} />

				<FlowMainCard
					active={active}
					title={title}
					description={description}
					Icon={Icon}
					onRequestPrev={() =>
						setActive((i) => (i - 1 + steps.length) % steps.length)
					}
					onRequestNext={() => setActive((i) => (i + 1) % steps.length)}
				/>

				<FlowStepIndicators stepCount={steps.length} active={active} onSelectStep={setActive} />
			</div>
		</section>
	);
}
