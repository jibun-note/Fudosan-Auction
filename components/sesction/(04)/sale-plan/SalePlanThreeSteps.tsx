"use client";

import SplitText, { sectionHeadingSplitTextProps } from "@/components/SplitText";
import { HiOutlineCalculator, HiOutlineChartBarSquare, HiOutlineLightBulb } from "react-icons/hi2";
import type { SalePlanThreeSteps, SalePlanThreeStepsIconKey } from "@/lib/data/salePlanSection";

/** `salePlanPillars` の iconKey と react-icons の対応 */
const salePlanThreeStepsIcons: Record<SalePlanThreeStepsIconKey, typeof HiOutlineChartBarSquare> = {
	chartBarSquare: HiOutlineChartBarSquare,
	calculator: HiOutlineCalculator,
	lightBulb: HiOutlineLightBulb,
};

export type SalePlanThreeStepsProps = {
	steps: SalePlanThreeSteps[];
};

/** 不動産売却計画書の3ステップ（カードグリッド） */
export function SalePlanThreeSteps({ steps }: SalePlanThreeStepsProps) {
	return (
		<section id="salePlanThreeSteps" className="bg-[#f8f9fa] ">
			<div className="flex flex-col items-center justify-center mx-auto max-w-6xl">
				<SplitText
					tag="h3"
					text="不動産売却計画書の3つのステップ"
					className="text-center text-base font-bold text-navy md:text-4xl"
					textAlign="center"
					{...sectionHeadingSplitTextProps}
				/>
				<div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-3 md:gap-8">
					{steps.map(({ iconKey, step, title, description }) => {
						const Icon = salePlanThreeStepsIcons[iconKey];
						return (
							<div
								key={step}
								className="relative overflow-hidden rounded-xl border border-gray-200 bg-linear-to-b from-white to-gray-50/60 p-6 shadow-sm transition-shadow hover:shadow-md md:p-7"
							>
								<span className="absolute right-4 top-4 text-[4.5rem] leading-none font-extralight text-gold/25 md:text-[7rem]">
									{step}
								</span>
								<div className="flex size-12 items-center justify-center rounded-full bg-gold/10 text-gold md:size-14">
									<Icon className="size-6 md:size-7" />
								</div>
								<h4 className="mt-4 text-lg font-bold text-navy md:text-2xl">{title}</h4>
								{/* <p className="mt-1.5 text-sm font-semibold text-gold md:text-base whitespace-pre-line">
									{subtitle}
								</p> */}
								<p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
									{description}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
