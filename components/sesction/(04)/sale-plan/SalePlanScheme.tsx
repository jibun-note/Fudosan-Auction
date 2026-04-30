"use client";

import SplitText, { sectionHeadingSplitTextProps } from "@/components/SplitText";
import { AchievementCard } from "@/components/sesction/common/achievement-card/AchievementCard";
import { SalePlanThreeSteps } from "@/components/sesction/(04)/sale-plan/SalePlanThreeSteps";
import { SalePlanVideo } from "@/components/sesction/(04)/sale-plan/SalePlanVideo";
import { salePlanAchievementCard, salePlanIntroVideo, salePlanThreeSteps } from "@/lib/data/salePlanSection";

/**
 * 「不動産売却計画書」LPセクション（#plan）
 * 構成：見出し → リード文 → 紹介動画 → 3ステップ → 価格アップ事例（`AchievementCard`）
 */
export function SalePlanScheme() {
	return (
		<section
			id="salePlanScheme"
			className="scroll-mt-20 bg-[#f8f9fa] md:scroll-mt-24"
		>
			<div className="flex flex-col justify-center mx-auto max-w-6xl">
				{/* セクション見出し・リード */}
				<SplitText
					tag="h3"
					text="土地の価値を知れば、買い手は動く"
					className="text-lg font-bold text-navy md:text-3xl"
					textAlign="center"
					{...sectionHeadingSplitTextProps}
				/>
				<p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-sm text-gray-700 md:mt-8 md:text-lg">
					豊富な物件資料とそれに基づき行われる様々な検証、そしてそこから導かれる
					<br />
					「その土地を最も高く売るための結論」によって構成された「不動産売却計画書」。
					<br />
					その土地をどう利用するか、どうすればより高く売れるのかをご提案します。
				</p>
				<SalePlanVideo embedUrl={salePlanIntroVideo.embedUrl} title={salePlanIntroVideo.title} />
			</div>
		</section>
	);
}
