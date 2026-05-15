"use client";

import { GoldButton } from "@/components/common/button/GoldButton";
import { ChevronRight } from "lucide-react";
import { RebornNavi } from "@/components/sesction/(02)/reborn/RebornNavi";
import RebornScheme from "./RebornScheme";
import { RebornGuarantee } from "./RebornGuarantee";
import { rebornGuarantee } from "@/lib/data/rebornPointSection";
import RebornAchievement from "./RebornAchievement";

export default function ReborntSection() {
	return (
		<section id="rebornSection" className="bg-[#f8f9fa] px-4 pt-10 pb-12 md:px-6 md:pt-16 md:pb-20">
			<div className="mx-auto flex max-w-7xl flex-col gap-12 md:gap-16">
				<RebornNavi />
				<div className="flex flex-col gap-12 md:gap-16">
					<RebornScheme />
					<RebornGuarantee guarantee={rebornGuarantee} />
					<RebornAchievement />
					<GoldButton
						href="https://towa-corporation.jp/re-born_fudousan/"
						target="_blank"
						className="w-full max-w-[min(100%,22rem)] self-center whitespace-normal px-4 py-3 text-center text-sm leading-snug sm:w-fit sm:max-w-none sm:whitespace-nowrap sm:px-10 sm:text-base md:px-20 md:py-3.5 md:text-xl"
					>
						b&apos;CASA re-born をさらに詳しく見る
						<ChevronRight className="h-5 w-5" />
					</GoldButton>
				</div>
			</div>
		</section>
	);
}
