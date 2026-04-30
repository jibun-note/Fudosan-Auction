import Hero from "@/components/sesction/(00)/Hero";
import { SchemeSection2 } from "@/components/sesction/(01)/scheme";
import { schemeServices } from "@/lib/data/schemeSection";
import { RebornSection } from "@/components/sesction/(02)/reborn";
import { BusinessRebornSection } from "@/components/sesction/(03)/business-reborn";
import { SalePlanSection } from "@/components/sesction/(04)/sale-plan";
import CtaSection from "@/components/sesction/(08)/CtaSection";

export default function Home() {
	return (
		<div className="min-h-screen min-w-0 overflow-x-clip bg-lp-surface font-sans text-sm text-gray-900 md:text-base">
			<Hero />
			{/* <SchemeSection services={schemeServices} /> */}
			<SchemeSection2 services={schemeServices} />
			{/* <MaximizeSection /> */}
			<RebornSection />
			<BusinessRebornSection />
			<SalePlanSection />
			{/* <CaseStudySection /> */}

			<CtaSection />
		</div>
	);
}
