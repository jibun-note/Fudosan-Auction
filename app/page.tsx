import Hero from "@/components/sesction/(00)/Hero";
import { SchemeSection2 } from "@/components/sesction/(01)/scheme";
import { schemeServices } from "@/lib/data/schemeSection";
import { RebornPointSection } from "@/components/sesction/(02)/reborn";
import { SalePlanSection } from "@/components/sesction/(03)/sale-plan";
import ComparisonSection from "@/components/sesction/(04)/comparison";
import { comparisonRows } from "@/lib/data/comparisonSection";
import FlowSection from "@/components/sesction/(05)/flow";
import FaqSection from "@/components/sesction/(06)/FaqSection";
import CtaSection from "@/components/sesction/(07)/CtaSection";

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
