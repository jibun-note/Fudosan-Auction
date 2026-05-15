import SplitText, { sectionHeadingSplitTextProps } from "@/components/SplitText";
import { RebornAchievementChart } from "./RebornAchievementChart";

export default function RebornAchievement() {
	return (
		<section id="rebornAchievement" className="bg-[#f8f9fa] ">
			<div className="flex flex-col items-center justify-center  mx-auto max-w-6xl">
				{/* セクション見出し・リード */}
				<SplitText
					tag="h3"
					text="節税対策した場合の納税シミュレーション"
					className="text-lg font-bold text-navy md:text-4xl"
					textAlign="center"
					{...sectionHeadingSplitTextProps}
				/>

				{/* 納税額比較（実績データ） */}
				<div className="mt-6 md:mt-8">
					<RebornAchievementChart />
				</div>
			</div>
		</section>
	);
}
