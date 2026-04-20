/**
 * `flowStepsData` 全ステップをスネーク状に配置し、矢印でつなぐ俯瞰用レイアウト。
 * md 以上: 上段左→右、下段右→左（5件は右下2枚のみ）。未満: 縦並び。
 */
import { flowStepsData } from "@/lib/data/flowSection";

import FlowCompactCard from "./FlowCompactCard";

function ArrowRight({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden
		>
			<path
				d="M5 12h12m0 0-4.5-4.5M17 12l-4.5 4.5"
				stroke="currentColor"
				strokeWidth="1.75"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function ArrowDown({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden
		>
			<path
				d="M12 5v12m0 0-4.5-4.5M12 17l4.5-4.5"
				stroke="currentColor"
				strokeWidth="1.75"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

const ROW_CLASS =
	"flex flex-col items-center gap-2 md:flex-row md:items-stretch md:justify-center md:gap-2 lg:gap-3";
const ARROW_CLASS = "text-navy/70 shrink-0 hidden md:block md:self-center";

function VerticalStack({ length }: { length: number }) {
	return (
		<div className="mx-auto flex max-w-md flex-col items-center gap-2">
			{Array.from({ length }, (_, i) => (
				<div key={i} className="flex w-full flex-col items-center gap-2">
					<FlowCompactCard stepIndex={i} />
					{i < length - 1 && <ArrowDown className="shrink-0 text-navy/70" />}
				</div>
			))}
		</div>
	);
}

/** 上段 3 + 下段 3（インデックス 3,4,5 / センター配置） */
function SnakeSix() {
	return (
		<div className="mx-auto w-full max-w-5xl">
			<div className="flex flex-col items-stretch gap-8 md:gap-10 lg:gap-12">
				{/* 上段: 0 → 1 → 2 → */}
				<div className={ROW_CLASS}>
					<FlowCompactCard stepIndex={0} />
					<ArrowRight className={ARROW_CLASS} />
					<FlowCompactCard stepIndex={1} />
					<ArrowRight className={ARROW_CLASS} />
					<FlowCompactCard stepIndex={2} />
					<ArrowRight className={ARROW_CLASS} />
				</div>

				{/* 下段: → 3 → 4 → 5（センター配置） */}
				<div className={ROW_CLASS}>
					<ArrowRight className={ARROW_CLASS} />
					<FlowCompactCard stepIndex={3} />
					<ArrowRight className={ARROW_CLASS} />
					<FlowCompactCard stepIndex={4} />
					<ArrowRight className={ARROW_CLASS} />
					<FlowCompactCard stepIndex={5} />
				</div>
			</div>
		</div>
	);
}

/** 上段 3、下段はセンター寄せで 3 → 4 */
function SnakeFive() {
	return (
		<div className="mx-auto w-full max-w-5xl">
			<div className="flex flex-col items-stretch gap-8 md:gap-10 lg:gap-12">
				{/* 上段: 0 → 1 → 2 → */}
				<div className={ROW_CLASS}>
					<FlowCompactCard stepIndex={0} />
					<ArrowRight className={ARROW_CLASS} />
					<FlowCompactCard stepIndex={1} />
					<ArrowRight className={ARROW_CLASS} />
					<FlowCompactCard stepIndex={2} />
					<ArrowRight className={ARROW_CLASS} />
				</div>

				{/* 下段: → 3 → 4（センター配置） */}
				<div className={ROW_CLASS}>
					<ArrowRight className={ARROW_CLASS} />
					<FlowCompactCard stepIndex={3} />
					<ArrowRight className={ARROW_CLASS} />
					<FlowCompactCard stepIndex={4} />
				</div>
			</div>
		</div>
	);
}

export default function FlowSnakeOverview() {
	const n = flowStepsData.length;

	if (n === 5) {
		return (
			<>
				<div className="md:hidden">
					<VerticalStack length={n} />
				</div>
				<div className="hidden md:block">
					<SnakeFive />
				</div>
			</>
		);
	}
	if (n === 6) {
		return (
			<>
				<div className="md:hidden">
					<VerticalStack length={n} />
				</div>
				<div className="hidden md:block">
					<SnakeSix />
				</div>
			</>
		);
	}

	return <VerticalStack length={n} />;
}
