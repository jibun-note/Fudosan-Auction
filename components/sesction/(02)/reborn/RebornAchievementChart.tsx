import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { RebornTaxAchievementData, RebornTaxScenarioBlock } from "@/lib/data/rebornPointSection";
import { rebornTaxAchievement } from "@/lib/data/rebornPointSection";

export type RebornAchievementChartProps = {
	/** 未指定時は `rebornTaxAchievement`（`lib/data/rebornPointSection`） */
	data?: RebornTaxAchievementData;
	className?: string;
};

function RebornAchievementChartTable({ block }: { block: RebornTaxScenarioBlock }) {
	const headerClass =
		block.variant === "neutral" ? "bg-slate-500" : "bg-rose-400 shadow-inner shadow-rose-900/10";

	return (
		<div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_10px_32px_rgba(30,58,95,0.08)]">
			<div
				className={cn(
					"px-3 py-3 text-center text-sm font-bold leading-snug text-white sm:px-4 md:py-3.5 md:text-[0.95rem]",
					headerClass,
				)}
			>
				<span className="font-serif tracking-tight">{block.title}</span>
				{block.subTitle ? (
					<span className="mt-1 block text-xs font-medium text-white/95">{block.subTitle}</span>
				) : null}
			</div>
			<div className="divide-y divide-slate-200 font-serif">
				{block.rows.map((row) => (
					<div
						key={row.label}
						className="grid gap-1.5 px-3 py-3 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-3 sm:px-4 sm:py-3.5"
					>
						<p className="text-left text-xs leading-relaxed text-slate-600 sm:text-sm">
							{row.label}
						</p>
						<p
							className={cn(
								"text-right text-base font-bold tabular-nums tracking-tight sm:text-lg sm:tabular-nums",
								row.valueEmphasis ? "text-red-600" : "text-navy",
							)}
						>
							{row.value}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

/**
 * 納税額比較の実績ブロック。`AchievementCard` 系のトーン（ゴールドライン・角丸・影）に揃えた表示。
 */
export function RebornAchievementChart({
	data = rebornTaxAchievement,
	className,
}: RebornAchievementChartProps) {
	const d = data;
	return (
		<Card
			className={cn(
				"overflow-hidden rounded-2xl border-gold/30 bg-linear-to-br from-[#fdfaf3] to-white font-serif text-navy shadow-[0_10px_40px_rgba(30,58,95,0.08)]",
				className,
			)}
		>
			<div className="h-1 bg-gold" aria-hidden />
			<CardContent className="p-0">
				{d.title ? (
					<p className="px-5 pb-0 pt-6 text-center text-lg font-bold text-navy md:px-10 md:pt-8 md:text-xl">
						{d.title}
					</p>
				) : null}
				<div
					className={cn(
						"grid grid-cols-1 gap-5 p-5 md:p-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.12fr)] lg:grid-rows-[auto_auto] lg:gap-x-2 lg:gap-y-4 lg:px-7 lg:pb-8 lg:pt-6",
					)}
				>
					<p className="order-1 whitespace-pre-line text-sm font-bold leading-relaxed text-slate-700 lg:order-0 lg:col-start-3 lg:row-start-1 lg:max-w-none lg:pl-1 md:text-lg">
						{d.intro}
					</p>

					<div className="order-2 flex flex-col gap-4 lg:order-0 lg:col-start-1 lg:row-start-1 lg:row-end-3">
						<RebornAchievementChartTable block={d.scenarioNothing} />
						<RebornAchievementChartTable block={d.scenarioPurchase} />
					</div>

					<div className="order-0 hidden flex-col items-center justify-center gap-1 self-stretch lg:order-0 lg:col-start-2 lg:row-start-1 lg:row-end-3 lg:flex lg:px-1">
						<div
							className="flex size-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-red-500 to-amber-400 shadow-md md:size-14"
							aria-hidden
						>
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								className="size-5 text-white md:size-6"
								aria-hidden
							>
								<path
									d="M6 12h9.5M13 7l5 5-5 5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
						{d.arrowLabel ? (
							<span className="text-center text-[0.65rem] font-bold text-red-500 md:text-xs">
								{d.arrowLabel}
							</span>
						) : null}
					</div>

					<div
						className={cn(
							"order-3 rounded-2xl border border-slate-200/80 bg-accent-blue/45",
							"px-4 py-5 shadow-inner shadow-slate-900/4 sm:px-5 sm:py-6 lg:order-0 lg:col-start-3 lg:row-start-2",
						)}
					>
						<p className="text-center text-sm leading-relaxed sm:text-base">
							<span className="whitespace-nowrap text-navy">
								{d.summary.formulaLeft}－{d.summary.formulaRight}＝
							</span>{" "}
							差額
							<span className="pl-0.5 text-2xl font-extrabold tabular-nums text-red-600 sm:text-3xl">
								{d.summary.diffAmount}
							</span>
							<span className="font-bold text-red-600">{d.summary.diffSuffix}</span>
						</p>
						<p className="mt-4 text-center text-base font-bold leading-snug text-navy sm:mt-5 sm:text-lg">
							<span className="text-2xl font-extrabold text-blue-600 sm:text-3xl">
								{d.summary.yearsHighlight}
							</span>
							{d.summary.savedMiddle}
							<span className="ml-0.5 text-2xl font-extrabold text-red-600 sm:text-3xl sm:tracking-tight">
								{d.summary.savedAmount}
							</span>
							<span className="text-2xl font-extrabold text-red-600 sm:text-3xl">
								{d.summary.savedUnit}
							</span>
						</p>
						<p className="mt-4 text-center text-xs leading-relaxed text-slate-600 sm:text-sm">
							{d.disclaimer}
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

export default RebornAchievementChart;
