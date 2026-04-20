import ComparisonSection from "@/components/sesction/comparison";
import CtaSection from "@/components/sesction/CtaSection";
import FaqSection from "@/components/sesction/FaqSection";
import FlowSection from "@/components/sesction/flow";
import Hero from "@/components/sesction/Hero";
import { SchemeSection2 } from "@/components/sesction/scheme";
import { RebornPointSection } from "@/components/sesction/reborn";
import { SalePlanSection } from "@/components/sesction/sale-plan";
import { comparisonRows } from "@/lib/data/comparisonSection";
import { schemeServices } from "@/lib/data/schemeSection";

export default function Home() {
	return (
		<div className="min-h-screen min-w-0 overflow-x-clip bg-lp-surface font-sans text-sm text-gray-900 md:text-base">
			<Hero />
			{/* <SchemeSection services={schemeServices} /> */}
			<SchemeSection2 services={schemeServices} />
			{/* <MaximizeSection /> */}
			<RebornPointSection />
			<SalePlanSection />
			<ComparisonSection rows={comparisonRows} />
			{/* <CaseStudySection /> */}
			<FlowSection />
			<FaqSection />
			<CtaSection />
		</div>
	);
}
