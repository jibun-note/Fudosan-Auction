"use client";

import {
	HiOutlineBanknotes,
	HiOutlineClock,
	HiOutlineHomeModern,
	HiOutlineShieldCheck,
} from "react-icons/hi2";
import SplitText, { sectionHeadingSplitTextProps } from "@/components/SplitText";
import type { RebornGuarantee } from "@/lib/data/rebornPointSection";

/** 保証カードの並びは `rebornGuarantee` と同じ4件を想定 */
const guaranteeIcons = [
	HiOutlineBanknotes,
	HiOutlineClock,
	HiOutlineHomeModern,
	HiOutlineShieldCheck,
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
				<div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:mt-10 md:gap-6">
					{guarantee.map(({ description }, i) => {
						const Icon = guaranteeIcons[i % guaranteeIcons.length];
						return (
							<div
								key={description}
								className="group relative flex gap-4 rounded-xl border border-gold-light/90 bg-white px-4 py-4 shadow-sm transition-[border-color,box-shadow,transform] duration-300 motion-reduce:transition-none md:gap-5 md:px-5 md:py-5 hover:border-gold/35 hover:shadow-[0_12px_36px_rgba(30,58,95,0.08)] motion-reduce:hover:transform-none md:hover:-translate-y-0.5"
							>
								<span
									className="pointer-events-none absolute inset-y-3 left-0 w-1 rounded-full bg-linear-to-b from-gold-light via-gold to-gold-light opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none"
									aria-hidden
								/>
								<div
									className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e8d5a0] text-[#92753c] shadow-inner md:h-12 md:w-12"
									aria-hidden
								>
									<Icon className="size-5.5 md:size-6" />
								</div>
								<p className="flex min-w-0 flex-1 items-center text-left text-sm font-semibold leading-relaxed text-navy md:text-base">
									<span className="text-gray-700">{description}</span>
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
