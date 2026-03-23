import { HiOutlineBanknotes, HiOutlineCalculator, HiOutlineEye } from "react-icons/hi2";
import Image from "next/image";

const benefits = [
	{
		icon: HiOutlineBanknotes,
		title: "高額売却の可能性",
		description:
			"購入希望者を一堂に集め、競争原理を最大限に活用。需要が価格を押し上げ、市場が認める最高価格での売却が期待できます。",
	},
	{
		icon: HiOutlineEye,
		title: "透明性・安心感",
		description:
			"入札履歴や条件がすべて可視化されるため、売却プロセスが明快です。「買い叩かれる」不安を払拭し、納得感のある取引を実現します。",
	},
	{
		icon: HiOutlineCalculator,
		title: "税務シミュレーション連動",
		description:
			"譲渡所得税や法人税、各種特例の適用まで、顧問税理士と連携し事前に提示。売却後の手残りを正確に把握した上で意思決定が可能です。",
	},
];

export default function MaximizeSection() {
	return (
		<section className="bg-gray-50 px-4 py-12 md:px-6 md:py-20">
			<div className="mx-auto max-w-6xl">
				<h2 className="text-lg font-bold text-[var(--navy)] md:text-3xl">
					オークションが&quot;顧問先の利益&quot;を最大化
				</h2>
				<div className="mt-2 h-1 w-16 bg-[var(--gold)]" />
				<div className="mt-8 grid gap-8 md:mt-12 md:gap-12 lg:grid-cols-2 lg:items-center">
					<div className="relative aspect-video overflow-hidden rounded-lg">
						<Image
							src="/images/AdobeStock_712266529_Preview.jpeg"
							alt="オープンプランのモダンなリビング、キッチン、屋外パティオガーデン"
							fill
							className="object-cover"
							sizes="(max-width: 1024px) 100vw, 50vw"
						/>
					</div>
					<div className="space-y-6 md:space-y-8">
						{benefits.map(({ icon: Icon, title, description }, i) => (
							<div key={title} className="flex gap-3 md:gap-4">
								<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-[var(--gold)] md:h-12 md:w-12">
									<Icon className="size-8 md:size-10" />
								</div>
								<div>
									<h3 className="text-base font-semibold text-[var(--navy)] md:text-xl">
										{i + 1}. {title}
									</h3>
									<p className="mt-1.5 text-sm leading-relaxed text-gray-600 md:mt-2 md:text-base">
										{description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
