import {
	HiOutlineBuildingLibrary,
	HiOutlineHomeModern,
	HiOutlineLifebuoy,
	HiOutlineReceiptPercent,
	HiOutlineShieldCheck,
} from "react-icons/hi2";
import Image from "next/image";
import { rebornPointSummary, type RebornPointIconKey } from "@/lib/data/rebornPointSection";

/** `rebornPointSummary` の iconKey と react-icons の対応（データ側は文字列のみ） */
const rebornPointIcons: Record<RebornPointIconKey, typeof HiOutlineReceiptPercent> = {
	receiptPercent: HiOutlineReceiptPercent,
	homeModern: HiOutlineHomeModern,
	shieldCheck: HiOutlineShieldCheck,
	buildingLibrary: HiOutlineBuildingLibrary,
	lifebuoy: HiOutlineLifebuoy,
};

/** 上段：ヒーロー画像 + ポイント一覧（文言・件数は rebornPointSummary） */
export function RebornPointHeroSummary() {
	return (
		<div className="mt-8 grid gap-8 md:mt-12 md:gap-12 lg:grid-cols-2 lg:items-stretch">
			<div className="flex min-h-0 flex-col lg:h-full">
				<div className="relative aspect-video w-full min-h-0 flex-1 overflow-hidden rounded-lg lg:aspect-auto">
					<Image
						src="/images/AdobeStock_712266529_Preview.jpeg"
						alt="オープンプランのモダンなリビング"
						fill
						className="object-cover"
						sizes="(max-width: 1023px) 100vw, 552px"
					/>
				</div>
			</div>
			<ul className="list-none space-y-6 p-0 md:space-y-7">
				{rebornPointSummary.map(({ iconKey, title, description }, i) => {
					const Icon = rebornPointIcons[iconKey];
					return (
						<li key={title} className="flex gap-3 md:gap-4">
							<div
								className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8d5a0] text-gold md:h-12 md:w-12"
								aria-hidden
							>
								<Icon className="size-5 md:size-6 text-[#92753c]" />
							</div>
							<div className="flex min-w-0 flex-1 gap-2 pt-0.5 md:gap-2.5">
								<span className="shrink-0 tabular-nums text-base font-semibold leading-snug text-gold md:text-lg">
									{i + 1}.
								</span>
								<div className="min-w-0">
									<h3 className="text-base font-semibold leading-snug text-navy md:text-lg">
										{title}
									</h3>
									{description ? (
										<p className="mt-1.5 text-sm leading-relaxed text-gray-600 md:mt-2 md:text-base">
											{description}
										</p>
									) : null}
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
