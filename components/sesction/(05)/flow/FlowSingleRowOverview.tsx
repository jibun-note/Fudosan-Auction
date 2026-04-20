/**
 * `flowStepsData` をコンパクトカードで 1 段横並びにし、`ArrowBigRight` で接続する俯瞰レイアウト。
 * md 未満: 縦並び（`ArrowBigDown` で接続）。
 */
import { ArrowBigDown, ArrowBigRight } from "lucide-react";
import { Fragment } from "react";

import { flowStepsData } from "@/lib/data/flowSection";

import FlowCompactCard from "./FlowCompactCard";

function VerticalStackCompact({ length }: { length: number }) {
	return (
		<div className="mx-auto flex max-w-md flex-col items-center gap-2">
			{Array.from({ length }, (_, i) => (
				<div key={i} className="flex w-full flex-col items-center gap-2">
					<FlowCompactCard stepIndex={i} />
					{i < length - 1 && (
						<ArrowBigDown
							className="size-5 shrink-0 text-navy/70"
							strokeWidth={1.5}
							aria-hidden
						/>
					)}
				</div>
			))}
		</div>
	);
}

/** 全ステップを 1 段に並べる（親幅に収め、横スクロールしない） */
function SingleRow({ length }: { length: number }) {
	return (
		<div className="mx-auto w-full min-w-0 pb-1">
			<div className="flex w-full min-w-0 flex-nowrap items-stretch gap-0.5 md:gap-1 lg:gap-1.5">
				{Array.from({ length }, (_, i) => (
					<Fragment key={i}>
						<div className="min-w-0 flex-1">
							<FlowCompactCard stepIndex={i} fluidRow />
						</div>
						{i < length - 1 && (
							<ArrowBigRight
								className="size-5 shrink-0 self-center text-navy/70"
								strokeWidth={1.5}
								aria-hidden
							/>
						)}
					</Fragment>
				))}
			</div>
		</div>
	);
}

export default function FlowSingleRowOverview() {
	const n = flowStepsData.length;

	return (
		<>
			<div className="md:hidden">
				<VerticalStackCompact length={n} />
			</div>
			<div className="hidden md:block">
				<SingleRow length={n} />
			</div>
		</>
	);
}
