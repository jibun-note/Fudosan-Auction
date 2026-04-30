"use client";

import { useCallback, useState } from "react";

import { cn } from "@/lib/utils";
import { GoldButton } from "@/components/common/button/GoldButton";
import { ChevronRight } from "lucide-react";
import { SalePlanNavi } from "./SalePlanNavi";
import { SalePlanScheme } from "./SalePlanScheme";
import { SalePlanThreeSteps } from "./SalePlanThreeSteps";
import { salePlanThreeSteps } from "@/lib/data/salePlanSection";
import SalesAchievement from "./SalesAchievement";
import Comparison from "./Comparison";
import { comparisonRows } from "@/lib/data/comparisonSection";
import SalePlanFlow from "./SalePlanFlow";
import SalePlanFAQ from "./SalePlanFAQ";
import { SectionClosedAccent } from "@/components/common/SectionClosedAccent";

export default function SalePlanSection() {
	const [detailsOpen, setDetailsOpen] = useState(false);

	const handleDetailsClick = useCallback(() => {
		setDetailsOpen((prev) => {
			const next = !prev;
			if (next) {
				window.setTimeout(() => {
					document
						.getElementById("salePlanScheme")
						?.scrollIntoView({ behavior: "smooth", block: "start" });
				}, 320);
			}
			return next;
		});
	}, []);

	return (
		<section
			id="salePlanSection"
			className={cn(
				"bg-[#f8f9fa] px-4 pt-10 md:px-6 md:pt-16",
				detailsOpen ? "pb-12 md:pb-20" : "pb-1 md:pb-2",
			)}
		>
			<div className="mx-auto flex max-w-7xl flex-col gap-12 md:gap-16">
				<SalePlanNavi detailsOpen={detailsOpen} onDetailsClick={handleDetailsClick} />
				<SectionClosedAccent open={detailsOpen} />
				<div
					id="salePlan-details"
					className={cn(
						"grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
						detailsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
					)}
					aria-hidden={!detailsOpen}
				>
					<div className="min-h-0 overflow-hidden" inert={!detailsOpen ? true : undefined}>
						<div className="flex flex-col gap-12 md:gap-16">
							<SalePlanScheme />
							<SalePlanThreeSteps steps={salePlanThreeSteps} />
							<SalesAchievement />
							<Comparison rows={comparisonRows} />
							<SalePlanFlow />
							<SalePlanFAQ />
							<div className="flex flex-wrap justify-center gap-4 md:gap-6">
								<GoldButton
									href="https://towa-corporation.jp/saleplan/"
									target="_blank"
									className="w-full max-w-[min(100%,22rem)] whitespace-normal px-4 py-3 text-center text-sm leading-snug sm:w-fit sm:max-w-none sm:whitespace-nowrap sm:px-10 sm:text-base md:px-20 md:py-3.5 md:text-lg"
								>
									不動産売却計画書をさらに詳しく見る
									<ChevronRight className="h-5 w-5" />
								</GoldButton>
								<GoldButton
									href="https://fudosan-japanauction.jp/seller/"
									target="_blank"
									className="w-full max-w-[min(100%,22rem)] whitespace-normal px-4 py-3 text-center text-sm leading-snug sm:w-fit sm:max-w-none sm:whitespace-nowrap sm:px-10 sm:text-base md:px-20 md:py-3.5 md:text-lg"
								>
									不動産オークションをさらに詳しく見る
									<ChevronRight className="h-5 w-5" />
								</GoldButton>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
