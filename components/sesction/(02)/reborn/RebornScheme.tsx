"use client";

import SplitText, { sectionHeadingSplitTextProps } from "@/components/SplitText";
import { rebornIntroVideo } from "@/lib/data/rebornPointSection";
import { RebornVideo } from "./RebornVideo";

/**
 *
 */
export default function RebornScheme() {
	return (
		<section
			id="reborn-scheme"
			className="scroll-mt-20 bg-[#f8f9fa] md:scroll-mt-24"
		>
			<div className="flex flex-col items-center justify-center  mx-auto max-w-6xl">
				{/* セクション見出し・リード */}
				<SplitText
					tag="h3"
					text='顧問先の"不動産節税相談"に応える新発想の資産形成スキーム'
					className="text-lg font-bold text-navy md:text-3xl"
					textAlign="center"
					{...sectionHeadingSplitTextProps}
				/>

				<p className="mt-6 max-w-3xl leading-relaxed text-sm text-gray-700 md:mt-8 md:text-lg">
					「先生、不動産投資って節税にいいんですか？」ここ数年、顧問先から
					<br />
					このようなご相談を受ける機会が増えていませんか。不動産節税に潜む
					<br />
					典型的なリスクを徹底排除し設計された、税金圧縮スキームをご提案します。
				</p>
				<RebornVideo embedUrl={rebornIntroVideo.embedUrl} title={rebornIntroVideo.title} />
			</div>
		</section>
	);
}
