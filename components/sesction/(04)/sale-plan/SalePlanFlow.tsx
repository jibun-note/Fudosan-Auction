import SplitText, { sectionHeadingSplitTextProps } from "@/components/SplitText";
import FlowSingleRowOverview from "./FlowSingleRowOverview";
import SalePlanFlowOverview from "./SalePlanFlowOverview";

export default function SalePlanFlow() {
	return (
		<section id="flow" className="bg-[#f8f9fa]">
			<div className="mx-auto max-w-6xl">
				<div>
					<SplitText
						tag="h3"
						text="オークションご利用の流れ"
						className="text-lg font-bold text-navy md:text-3xl"
						textAlign="center"
						{...sectionHeadingSplitTextProps}
					/>
				</div>

				<div className="mt-10 md:mt-12">
					<SalePlanFlowOverview />
				</div>
			</div>
		</section>
	);
}
