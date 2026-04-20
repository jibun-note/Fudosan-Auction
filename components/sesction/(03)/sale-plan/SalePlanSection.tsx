"use client";

import SplitText, { sectionHeadingSplitTextProps } from "@/components/SplitText";
import { AchievementCard } from "@/components/sesction/common/achievement-card/AchievementCard";
import { SalePlanThreeSteps } from "@/components/sesction/(03)/sale-plan/SalePlanThreeSteps";
import { SalePlanVideo } from "@/components/sesction/(03)/sale-plan/SalePlanVideo";
import { salePlanAchievementCard, salePlanIntroVideo, salePlanThreeSteps } from "@/lib/data/salePlanSection";

/**
 * 「不動産売却計画書」LPセクション（#plan）
 * 構成：見出し → リード文 → 紹介動画 → 3ステップ → 価格アップ事例（`AchievementCard`）
 */
export default function SalePlanSection() {
	return (
		<section id="plan" className="bg-[#f8f9fa] px-4 py-12 md:px-6 md:py-20">
			<div className="mx-auto max-w-6xl">
				{/* セクション見出し・リード */}
				<SplitText
					tag="h2"
					text="クライアントの資産売却計画書＋オークション"
					className="text-lg font-bold text-navy md:text-3xl"
					textAlign="left"
					{...sectionHeadingSplitTextProps}
				/>
				<div className="mt-2 h-1 w-16 bg-gold" />
				<p className="mt-6 max-w-3xl leading-relaxed text-gray-700 md:mt-8 md:text-base">
					豊富な物件資料とそれに基づき行われる様々な検証、そしてそこから導かれる
					<br />
					「その土地を最も高く売るための結論」によって構成された「不動産売却計画書」。
					<br />
					その土地をどう利用するか、どうすればより高く売れるのかをご提案します。
				</p>
				<SalePlanVideo embedUrl={salePlanIntroVideo.embedUrl} title={salePlanIntroVideo.title} />

				<SalePlanThreeSteps steps={salePlanThreeSteps} />

				{/* 査定額比較：re-born セクションと同じ共通カード */}
				<div className="mt-14 md:mt-20">
					<AchievementCard data={salePlanAchievementCard} />
				</div>
			</div>
		</section>
	);
}
