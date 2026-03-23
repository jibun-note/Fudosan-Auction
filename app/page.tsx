import CaseStudySection from "@/components/sesction/CaseStudySection";
import ComparisonTable from "@/components/ComparisonTable";
import CtaSection from "@/components/sesction/CtaSection";
import FaqSection from "@/components/sesction/FaqSection";
import FlowSection from "@/components/sesction/FlowSection";
import Hero from "@/components/Hero";
import MaximizeSection from "@/components/sesction/MaximizeSection";
import SchemeSection from "@/components/sesction/SchemeSection";

export default function Home() {
	return (
		<div className="min-h-screen bg-white font-sans text-gray-900">
			<main>
				<Hero />
				<SchemeSection />
				<MaximizeSection />
				<ComparisonTable />
				<CaseStudySection />
				<FlowSection />
				<FaqSection />
				<CtaSection />
			</main>
		</div>
	);
}
