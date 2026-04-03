import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { AchievementCardData } from "@/components/sesction/common/achievement-card/achievement-card-type";
import { rebornRentUpAchievementCard as defaultRebornRentUpAchievementCard } from "@/lib/data/rebornPointSection";

export type AchievementCardProps = {
	/** 未指定時は `rebornRentUpAchievementCard`（lib/data） */
	data?: AchievementCardData;
};

export function AchievementCard({ data = defaultRebornRentUpAchievementCard }: AchievementCardProps) {
	const d = data;
	return (
		<Card className="overflow-hidden rounded-2xl border-gold/30 bg-linear-to-br from-[#fdfaf3] to-white text-navy shadow-[0_10px_40px_rgba(30,58,95,0.08)]">
			<div className="h-1 bg-gold" aria-hidden />
			<CardHeader className="px-5 pb-2 pt-5 text-center text-lg font-bold text-navy md:px-10 md:pb-3 md:pt-6 md:text-xl">
				{d.title}
			</CardHeader>
			<CardContent className="px-5 pb-8 pt-4 md:px-10 md:pb-10 md:pt-5">
				<div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6 md:gap-8">
					<div className="w-full max-w-56 rounded-xl border border-gray-200 bg-white px-5 py-5 text-center shadow-sm">
						<p className="text-xs font-semibold text-gray-500 md:text-sm">{d.oldRentLabel}</p>
						<p className="mt-2 text-2xl font-bold tabular-nums text-navy md:text-3xl">
							{d.oldRentAmount}
							<span className="text-base font-semibold md:text-lg">{d.currencyUnit}</span>
						</p>
						{d.oldCaption ? <p className="mt-1 text-xs text-gray-500">{d.oldCaption}</p> : null}
					</div>

					<div className="flex flex-col items-center gap-1">
						<div className="flex size-12 items-center justify-center rounded-full bg-linear-to-br from-red-500 to-amber-400 shadow-md md:size-14">
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
						<span className="text-[0.65rem] font-bold text-red-500 md:text-xs">
							{d.arrowLabel}
						</span>
					</div>

					<div className="w-full max-w-56 rounded-xl border-2 border-gold/60 bg-linear-to-b from-white to-[#fff9eb] px-5 py-5 text-center shadow-md">
						<p className="text-xs font-semibold text-gold md:text-sm">{d.newRentLabel}</p>
						<p className="mt-2 text-2xl font-bold tabular-nums text-navy md:text-3xl">
							{d.newRentAmount}
							<span className="text-base font-semibold md:text-lg">{d.currencyUnit}</span>
						</p>
						{d.newCaption ? (
							<p className="mt-1 text-xs font-semibold text-gold">{d.newCaption}</p>
						) : null}
					</div>

					<div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-red-500 via-red-500 to-amber-400 text-center font-bold text-white shadow-lg ring-4 ring-red-100 md:size-24">
						<span className="flex flex-col leading-tight">
							<span className="text-xl md:text-2xl">{d.increasePercent}</span>
							<span className="text-[0.6rem] md:text-xs">{d.increaseBadgeSuffix}</span>
						</span>
					</div>
				</div>

				{d.footer ? (
					<p className="mt-8 text-center text-base font-bold leading-snug text-navy md:text-xl md:leading-snug">
						{d.footer}
					</p>
				) : null}
			</CardContent>
		</Card>
	);
}
