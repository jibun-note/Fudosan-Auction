import { BusinessRebornNavi } from "@/components/sesction/reborn/BusinessRebornNavi";
import { RebornNavi } from "@/components/sesction/reborn/RebornNavi";

export default function RebornPointSection() {
	return (
		<section id="reborn-point" className="bg-[#f8f9fa] px-4 py-12 md:px-6 md:py-20">
			<div className="mx-auto mt-10 max-w-7xl">
				<RebornNavi />
				<BusinessRebornNavi />
			</div>
		</section>
	);
}
