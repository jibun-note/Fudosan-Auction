import SplitText, { sectionHeadingSplitTextProps } from "@/components/SplitText";
import { AchievementCard } from "@/components/sesction/common/achievement-card/AchievementCard";
import { salePlanAchievementCard } from "@/lib/data/salePlanSection";

export default function SalesAchievement() {
	return (
		<section id="salesAchievement" className="bg-[#f8f9fa] ">
			<div className="flex flex-col justify-center mx-auto max-w-6xl">
				{/* セクション見出し・リード */}
				<SplitText
					tag="h3"
					text="不動産売却計画書で売却価格が大幅アップ！"
					className="text-lg font-bold text-navy md:text-3xl"
					textAlign="center"
					{...sectionHeadingSplitTextProps}
				/>

				{/* 納税額比較（実績データ） */}
				<div className="mt-6 md:mt-8">
					<AchievementCard data={salePlanAchievementCard} />
				</div>
			</div>
		</section>
	);
}
