"use client";

import {
	HiOutlineArrowTrendingUp,
	HiOutlineCalendarDays,
	HiOutlineHomeModern,
	HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";
import SplitText, { sectionHeadingSplitTextProps } from "@/components/SplitText";
import type { RebornGuarantee } from "@/lib/data/rebornPointSection";

/** 保証カードの並びは `rebornGuarantee` と同じ4件を想定 */
const guaranteeCardStyles = [
	{
		Icon: HiOutlineArrowTrendingUp,
		label: "5年後売却時",
		value: "100%差額保証",
	},
	{
		Icon: HiOutlineCalendarDays,
		label: "短期節税",
		value: "4年〜6年",
	},
	{
		Icon: HiOutlineHomeModern,
		label: "サブリースによる",
		value: "安定収入",
	},
	{
		Icon: HiOutlineWrenchScrewdriver,
		label: "設備＆原状回復費用",
		value: "無料",
	},
] as const;

export type RebornGuaranteeProps = {
	guarantee: RebornGuarantee[];
};

/** 不動産売却計画書の3ステップ（カードグリッド） */
export function RebornGuarantee({ guarantee }: RebornGuaranteeProps) {
	return (
		<section id="rebornGuarantee" className="bg-[#f8f9fa] ">
			<div className="flex flex-col items-center justify-center  mx-auto max-w-6xl">
				<SplitText
					tag="h3"
					text="リスクを軽減する100%保証"
					className="text-lg font-bold text-navy md:text-4xl"
					textAlign="center"
					{...sectionHeadingSplitTextProps}
				/>

				<p className="mt-6 max-w-3xl leading-relaxed text-sm text-gray-700 md:mt-8 md:text-xl">
					不動産投資は、節税と同時に、修繕・空室・売却リスクを抱えるもの。
					<br />
					こうした落とし穴を回避し、顧問先の「後悔しない選択」を実現させる、
					<br />
					保証を標準化した仕組みを提供しています。
				</p>
				<div className="mt-8 grid w-full grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 md:mt-10 lg:grid-cols-4 lg:gap-5">
					{guarantee.map(({ description }, i) => {
						const { Icon, label, value } = guaranteeCardStyles[i % guaranteeCardStyles.length];

						return (
							<div
								key={description}
								className="group relative flex aspect-square w-full max-w-[280px] flex-col justify-center overflow-hidden rounded-xl border border-white/80 bg-white p-5 text-center shadow-[0_12px_34px_rgba(15,23,42,0.055)] transition-[box-shadow,transform] duration-300 before:absolute before:inset-x-0 before:top-0 before:h-1.5 before:bg-linear-to-r before:from-[#e8d8b8] before:via-gold before:to-[#e8d8b8] hover:shadow-[0_18px_48px_rgba(15,23,42,0.09)] motion-reduce:transition-none motion-reduce:hover:transform-none md:max-w-[300px] md:p-6 md:hover:-translate-y-0.5 lg:max-w-none lg:p-5"
							>
								<div
									className="relative mx-auto flex size-14 items-center justify-center rounded-full border-4 border-[#f3eee4] bg-navy text-gold shadow-[0_10px_20px_rgba(15,23,42,0.1)] md:size-16"
									aria-hidden
								>
									<Icon className="size-6 stroke-[1.7] md:size-7" />
								</div>
								<div className="relative mt-5 font-serif text-navy md:mt-6">
									<p className="text-sm leading-none md:text-xl">{label}</p>
									<p className="mt-3 text-lg font-semibold leading-none text-gold md:text-3xl">
										{value}
									</p>
									<span
										className="mx-auto mt-6 block h-px w-12 bg-gold-light"
										aria-hidden
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
