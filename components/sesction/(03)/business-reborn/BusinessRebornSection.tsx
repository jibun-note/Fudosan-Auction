"use client";

import { useCallback, useState } from "react";

import { cn } from "@/lib/utils";
import { GoldButton } from "@/components/common/button/GoldButton";
import { ChevronRight } from "lucide-react";
import { BusinessRebornNavi } from "./BusinessRebornNavi";
import BusinessRebornScheme from "./BusinessRebornScheme";
import { BusinessRebornGuarantee } from "./BusinessRebornGuarantee";
import { businessRebornGuarantee } from "@/lib/data/businessRebornSection";
import BusinessRebornFAQ from "./BusinessRebornFAQ";

export default function BusinessRebornSection() {
	const [detailsOpen, setDetailsOpen] = useState(false);

	const handleDetailsClick = useCallback(() => {
		setDetailsOpen((prev) => {
			const next = !prev;
			if (next) {
				window.setTimeout(() => {
					document
						.getElementById("businessRebornScheme")
						?.scrollIntoView({ behavior: "smooth", block: "start" });
				}, 320);
			}
			return next;
		});
	}, []);

	return (
		<section id="businessRebornSection" className="bg-[#f8f9fa] px-4 py-12 md:px-6 md:py-20">
			<div className="mx-auto flex max-w-7xl flex-col gap-12 md:gap-16">
				<BusinessRebornNavi detailsOpen={detailsOpen} onDetailsClick={handleDetailsClick} />
				<div
					id="businessReborn-details"
					className={cn(
						"grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
						detailsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
					)}
					aria-hidden={!detailsOpen}
				>
					<div className="min-h-0 overflow-hidden" inert={!detailsOpen ? true : undefined}>
						<div className="flex flex-col gap-12 md:gap-16">
							<BusinessRebornScheme />
							<BusinessRebornGuarantee guarantee={businessRebornGuarantee} />
							<BusinessRebornFAQ />
							<GoldButton
								href="https://towa-corporation.jp/re-born_hojin/"
								target="_blank"
								className="w-full max-w-[min(100%,22rem)] self-center whitespace-normal px-4 py-3 text-center text-sm leading-snug sm:w-fit sm:max-w-none sm:whitespace-nowrap sm:px-10 sm:text-base md:px-20 md:py-3.5 md:text-lg"
							>
								b&apos;CASA business re-born をさらに詳しく見る
								<ChevronRight className="h-5 w-5" />
							</GoldButton>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
