"use client";

import SplitText, { sectionHeadingSplitTextProps } from "@/components/SplitText";
import { SalePlanVideo } from "@/components/sesction/(04)/sale-plan/SalePlanVideo";
import { salePlanIntroVideo } from "@/lib/data/salePlanSection";

/**
 * 「不動産売却計画書」LPセクション（#plan）
 * 構成：見出し → リード文 → 紹介動画 → 3ステップ → 価格アップ事例（`AchievementCard`）
 */
export function SalePlanScheme() {
	return (
		<section id="salePlanScheme" className="scroll-mt-20 bg-[#f8f9fa] md:scroll-mt-24">
			<div className="flex flex-col justify-center mx-auto max-w-6xl">
				{/* セクション見出し・リード */}
				<SplitText
					tag="h3"
					text="土地の本当の価値を知れば、買い手は動く"
					className="text-lg font-bold text-navy md:text-4xl"
					textAlign="center"
					{...sectionHeadingSplitTextProps}
				/>
				<p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-sm text-gray-700 md:mt-8 md:text-xl">
					豊富な物件資料をもとに行われる多角的な検証。
					<br />
					そこから導かれる「最も高く売るための結論」により構成された
					<br />
					「不動産売却計画書」。
					<br />
					その土地をどのように活用すればより高く売却できるか、
					<br />
					具体的にご提案いたします。
				</p>
				<SalePlanVideo embedUrl={salePlanIntroVideo.embedUrl} title={salePlanIntroVideo.title} />
			</div>
		</section>
	);
}
