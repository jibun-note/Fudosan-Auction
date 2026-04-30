"use client";

import { GoldButton } from "@/components/common/button/GoldButton";
import SplitText, { sectionHeadingSplitTextProps } from "@/components/SplitText";

/** LP下部の行動喚起（資料請求・説明会申込）セクション */
export default function CtaSection() {
	return (
		<section className="border-b border-white/10 bg-navy-dark px-4 py-10 text-white md:px-6 md:py-16">
			<div className="mx-auto max-w-4xl text-center">
				{/* 見出し・リード文 */}
				<SplitText
					tag="h2"
					text="顧問先の資産価値を最大化する新しい一手を、今すぐご提案ください。"
					className="text-lg font-bold md:text-2xl"
					textAlign="center"
					{...sectionHeadingSplitTextProps}
				/>
				<p className="mt-3 text-sm leading-relaxed text-white/90 md:mt-4 md:text-lg">
					オンラインでのご説明も随時対応しております。最短で即日のお打ち合わせも可能です。
				</p>
				{/* 主要CTAリンク */}
				<div className="mt-6 flex justify-center md:mt-8">
					<GoldButton href="/home/form">無料面談に申し込む</GoldButton>
				</div>
			</div>
		</section>
	);
}
