import ComparisonSection from "@/components/sesction/comparison";
import CtaSection from "@/components/sesction/CtaSection";
import FaqSection from "@/components/sesction/FaqSection";
import FlowSection from "@/components/sesction/flow";
import Hero from "@/components/sesction/Hero";
import { SchemeShowcaseSection } from "@/components/sesction/scheme";
import { RebornPointSection } from "@/components/sesction/reborn";
import { SalePlanSection } from "@/components/sesction/sale-plan";
import { comparisonRows } from "@/lib/data/comparisonSection";
import { schemeServices } from "@/lib/data/schemeSection";

export default function Home() {
	return (
		<div className="min-h-screen bg-lp-surface font-sans text-sm text-gray-900 md:text-base">
			<main>
				<Hero />
				{/* <SchemeSection services={schemeServices} /> */}
				<SchemeShowcaseSection services={schemeServices} />
				{/* <MaximizeSection /> */}
				<RebornPointSection />
				<SalePlanSection />
				<ComparisonSection rows={comparisonRows} />
				{/* <CaseStudySection /> */}
				<FlowSection />
				<FaqSection />
				<CtaSection />
			</main>
		</div>
	);
}
