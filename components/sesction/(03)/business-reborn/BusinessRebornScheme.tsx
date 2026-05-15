import SplitText, { sectionHeadingSplitTextProps } from "@/components/SplitText";
import BusinessRebornItem from "./BusinessRebornItem";

export default function BusinessRebornScheme() {
	return (
		<section id="businessRebornScheme" className="scroll-mt-20 bg-[#f8f9fa] md:scroll-mt-24">
			<div className="flex flex-col items-center justify-center  mx-auto max-w-6xl">
				{/* セクション見出し・リード */}
				<SplitText
					tag="h3"
					text="法人税対策の決定版"
					className="text-lg font-bold text-navy md:text-4xl"
					textAlign="center"
					{...sectionHeadingSplitTextProps}
				/>

				<p className="mt-6 max-w-3xl leading-relaxed text-sm text-gray-700 md:mt-8 md:text-xl">
					利益を生かしたい…。経営を安定させたい…。法人税が高いと感じる…。
					<br />
					このようなお悩みをお持ちの企業オーナー様へ、保険や飛行機オペリースに
					<br />
					代わる、節税と資産形成を実現する税金繰延べ商品をご提案いたします。
				</p>
			</div>

			<div className="mx-auto max-w-6xl px-4">
				<BusinessRebornItem />
			</div>
		</section>
	);
}
