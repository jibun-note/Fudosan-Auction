import { AchievementCard } from "@/components/sesction/common/achievement-card/AchievementCard";
import { RebornPointHeroSummary } from "@/components/sesction/reborn/RebornPointHeroSummary";
import { RebornRentUpCasesTable } from "@/components/sesction/reborn/RebornRentUpCasesTable";
import { rebornRentUpCases } from "@/lib/data/rebornPointSection";

export default function RebornPointSection() {
	return (
		<section id="reborn-point" className="bg-white px-4 py-12 md:px-6 md:py-20">
			<div className="mx-auto max-w-6xl">
				{/* セクション見出し */}
				<h2 className="text-lg font-bold text-navy md:text-3xl">
					b&apos;CASA re-born不動産のポイントまとめ
				</h2>
				<div className="mt-2 h-1 w-16 bg-gold" />

				<RebornPointHeroSummary />

				{/* 下段：賃料UP訴求 → 事例テーブル → 家賃アップ実績カード */}
				<div className="mt-14 border-t border-gray-200 pt-14 md:mt-20 md:pt-20">
					<h3 className="text-center text-base font-bold leading-snug text-navy md:text-2xl md:leading-snug">
						さらに！ b&apos;CASA re-born不動産は物件賃料のアップも実現します！
					</h3>

					<div className="mt-8 md:mt-10">
						<p className="bg-gradient-to-r from-[#2D325A] via-[#3b4274] to-[#1b2040] px-3 py-2.5 text-center text-xs font-semibold text-white md:px-4 md:text-sm">
							re-born賃貸管理部による物件賃料UP事例
						</p>
						<RebornRentUpCasesTable rows={rebornRentUpCases} />
					</div>

					<div className="mt-14 md:mt-20">
						<AchievementCard />
					</div>
				</div>
			</div>
		</section>
	);
}
