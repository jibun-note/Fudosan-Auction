import ComparisonSection from "@/components/sesction/comparison";
import CtaSection from "@/components/sesction/CtaSection";
import FaqSection from "@/components/sesction/FaqSection";
import FlowSection from "@/components/sesction/flow";
import Hero from "@/components/Hero";
import MaximizeSection from "@/components/sesction/MaximizeSection";
import SchemeSection from "@/components/sesction/scheme";
import { comparisonRows } from "@/lib/data/comparison-rows";
import { schemeServices } from "@/lib/data/scheme-services";

export default function Home() {
	return (
		<div className="min-h-screen bg-lp-surface font-sans text-sm text-gray-900 md:text-base">
			<main>
				<Hero />
				<SchemeSection services={schemeServices} />
				<MaximizeSection />
				<ComparisonSection rows={comparisonRows} />
				{/* <CaseStudySection /> */}
				<FlowSection />
				<FaqSection />
				<CtaSection />
			</main>
		</div>
	);
}
