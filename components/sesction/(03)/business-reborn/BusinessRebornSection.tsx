"use client";

import { GoldButton } from "@/components/common/button/GoldButton";
import { ChevronRight } from "lucide-react";
import { BusinessRebornNavi } from "./BusinessRebornNavi";
import BusinessRebornScheme from "./BusinessRebornScheme";
import { BusinessRebornGuarantee } from "./BusinessRebornGuarantee";
import { businessRebornGuarantee } from "@/lib/data/businessRebornSection";
import BusinessRebornFAQ from "./BusinessRebornFAQ";

export default function BusinessRebornSection() {
	return (
		<section id="businessRebornSection" className="bg-[#f8f9fa] px-4 pt-10 md:px-6 md:pt-16">
			<div className="mx-auto flex max-w-7xl flex-col gap-12 md:gap-16">
				<BusinessRebornNavi />
				<div className="flex flex-col gap-12 md:gap-16">
					<BusinessRebornScheme />
					<BusinessRebornGuarantee guarantee={businessRebornGuarantee} />
					<BusinessRebornFAQ />
					<GoldButton
						href="https://towa-corporation.jp/re-born_hojin/"
						target="_blank"
						className="w-full max-w-[min(100%,22rem)] self-center whitespace-normal px-4 py-3 text-center text-sm leading-snug sm:w-fit sm:max-w-none sm:whitespace-nowrap sm:px-10 md:px-20 md:py-3.5 md:text-xl"
					>
						b&apos;CASA business re-born をさらに詳しく見る
						<ChevronRight className="h-5 w-5" />
					</GoldButton>
				</div>
			</div>
		</section>
	);
}
