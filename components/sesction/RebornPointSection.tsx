import {
	HiOutlineBuildingLibrary,
	HiOutlineHomeModern,
	HiOutlineLifebuoy,
	HiOutlineReceiptPercent,
	HiOutlineShieldCheck,
} from "react-icons/hi2";
import Image from "next/image";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const rentUpCases = [
	{
		settled: "2021/6/18",
		name: "b'CASA 日吉 re-born",
		units: 6,
		purchaseYen: "46,900,000",
		purchaseYield: "6.3%",
		rentAtSale: "2,964,000",
		currentRent: "3,600,000",
		rentUp: "636,000",
		upRatePerRoom: "121%",
		currentYield: "7.6%",
		targetYield5y: "9.0%",
	},
	{
		settled: "2021/6/29",
		name: "b'CASA 井土ヶ谷I re-born",
		units: 8,
		purchaseYen: "55,900,000",
		purchaseYield: "6.3%",
		rentAtSale: "3,468,000",
		currentRent: "4,308,000",
		rentUp: "840,000",
		upRatePerRoom: "124%",
		currentYield: "7.7%",
		targetYield5y: "9.2%",
	},
	{
		settled: "2021/12/27",
		name: "b'CASA 井土ヶ谷II re-born",
		units: 8,
		purchaseYen: "59,900,000",
		purchaseYield: "6.4%",
		rentAtSale: "3,852,000",
		currentRent: "4,776,000",
		rentUp: "924,000",
		upRatePerRoom: "123%",
		currentYield: "7.9%",
		targetYield5y: "9.5%",
	},
] as const;

const benefits = [
	{
		icon: HiOutlineReceiptPercent,
		title: "大幅な課税の繰延べ効果あり",
	},
	{
		icon: HiOutlineHomeModern,
		title: "副収入／サブリースによる安定の家賃収入",
		description: "（4年固定、さらに4年延長可）",
	},
	{
		icon: HiOutlineShieldCheck,
		title: "買取保証／4年後に当初購入価格の100%",
	},
	{
		icon: HiOutlineBuildingLibrary,
		title: "融資利用可",
		description: "不動産担保、運転資金の一部として",
	},
	{
		icon: HiOutlineLifebuoy,
		title: "安心サポート",
		description:
			"売主、自社運営・管理 物件選定、融資、建物・設備・入居保証、運営・管理、売却までの全てをサポート。保有期間中の追加負担もありません。",
	},
];

export default function RebornPointSection() {
	return (
		<section id="reborn-point" className="bg-white px-4 py-12 md:px-6 md:py-20">
			<div className="mx-auto max-w-6xl">
				<h2 className="text-lg font-bold text-navy md:text-3xl">
					b&apos;CASA re-born不動産のポイントまとめ
				</h2>
				<div className="mt-2 h-1 w-16 bg-gold" />
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
						{benefits.map(({ icon: Icon, title, description }, i) => (
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
						))}
					</ul>
				</div>

				<div className="mt-14 border-t border-gray-200 pt-14 md:mt-20 md:pt-20">
					<h3 className="text-center text-base font-bold leading-snug text-navy md:text-2xl md:leading-snug">
						さらに！ b&apos;CASA re-born不動産は物件賃料のアップも実現します！
					</h3>

					<div className="mt-8 md:mt-10">
						<p className="bg-gradient-to-r from-[#2D325A] via-[#3b4274] to-[#1b2040] px-3 py-2.5 text-center text-xs font-semibold text-white md:px-4 md:text-sm">
							re-born賃貸管理部による物件賃料UP事例
						</p>
						<div className="rounded-b-lg border border-t-0 border-gray-200 bg-white">
							<Table className="min-w-230 text-xs md:text-sm">
								<TableHeader>
									<TableRow className="border-gray-200 hover:bg-transparent">
										<TableHead className="bg-gray-100 px-1.5 py-2 text-center font-semibold text-navy md:px-2">
											決済日
										</TableHead>
										<TableHead className="bg-gray-100 px-1.5 py-2 text-center font-semibold text-navy md:px-2">
											物件名
										</TableHead>
										<TableHead className="bg-gray-100 px-1.5 py-2 text-center font-semibold text-navy md:px-2">
											部屋数（戸）
										</TableHead>
										<TableHead className="bg-gray-100 px-1.5 py-2 text-center font-semibold text-navy md:px-2">
											ご購入時金額（円）
										</TableHead>
										<TableHead className="bg-linear-to-br from-red-500 to-amber-400 px-1.5 py-2 text-center font-bold text-white md:px-2">
											ご購入時利回り
										</TableHead>
										<TableHead className="bg-gray-100 px-1.5 py-2 text-center font-semibold text-navy md:px-2">
											販売時家賃総額（円）
										</TableHead>
										<TableHead className="bg-gray-100 px-1.5 py-2 text-center font-semibold text-navy md:px-2">
											現家賃総額（円）
										</TableHead>
										<TableHead className="bg-gray-100 px-1.5 py-2 text-center font-semibold text-navy md:px-2">
											家賃UP総額（円）
										</TableHead>
										<TableHead className="bg-gray-100 px-1.5 py-2 text-center font-semibold text-navy md:px-2">
											1室辺りのUP率
										</TableHead>
										<TableHead className="bg-gray-100 px-1.5 py-2 text-center font-semibold text-navy md:px-2">
											現家賃の利回り
										</TableHead>
										<TableHead className="bg-linear-to-br from-red-500 to-amber-400 px-1.5 py-2 text-center font-bold text-white md:px-2">
											5年後目標利回り
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{rentUpCases.map((row) => (
										<TableRow key={row.settled + row.name} className="border-gray-200">
											<TableCell className="px-1.5 py-2 text-center tabular-nums text-navy md:px-2">
												{row.settled}
											</TableCell>
											<TableCell className="max-w-40 whitespace-normal px-1.5 py-2 text-center text-navy md:max-w-none md:px-2">
												{row.name}
											</TableCell>
											<TableCell className="px-1.5 py-2 text-center tabular-nums text-navy md:px-2">
												{row.units}
											</TableCell>
											<TableCell className="px-1.5 py-2 text-center tabular-nums text-navy md:px-2">
												{row.purchaseYen}
											</TableCell>
											<TableCell className="bg-linear-to-br from-red-500 to-amber-400 px-1.5 py-2 text-center font-bold tabular-nums text-white md:px-2">
												{row.purchaseYield}
											</TableCell>
											<TableCell className="px-1.5 py-2 text-center tabular-nums text-navy md:px-2">
												{row.rentAtSale}
											</TableCell>
											<TableCell className="px-1.5 py-2 text-center tabular-nums text-navy md:px-2">
												{row.currentRent}
											</TableCell>
											<TableCell className="px-1.5 py-2 text-center tabular-nums text-navy md:px-2">
												{row.rentUp}
											</TableCell>
											<TableCell className="px-1.5 py-2 text-center tabular-nums text-navy md:px-2">
												{row.upRatePerRoom}
											</TableCell>
											<TableCell className="px-1.5 py-2 text-center tabular-nums text-navy md:px-2">
												{row.currentYield}
											</TableCell>
											<TableCell className="bg-linear-to-br from-red-500 to-amber-400 px-1.5 py-2 text-center font-bold tabular-nums text-white md:px-2">
												{row.targetYield5y}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					</div>

					<div className="mt-14 md:mt-20">
						<p className="mb-6 text-center text-base font-bold text-navy md:mb-8 md:text-xl">
							［ 昨年1年間家賃アップ実績 ］
						</p>
						<div className="overflow-hidden rounded-2xl border border-gold/30 bg-linear-to-br from-[#fdfaf3] to-white shadow-[0_10px_40px_rgba(30,58,95,0.08)]">
							<div className="h-1 bg-gold" aria-hidden />
							<div className="px-5 py-8 md:px-10 md:py-10">
								<div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6 md:gap-8">
									<div className="w-full max-w-56 rounded-xl border border-gray-200 bg-white px-5 py-5 text-center shadow-sm">
										<p className="text-xs font-semibold text-gray-500 md:text-sm">
											旧平均家賃
										</p>
										<p className="mt-2 text-2xl font-bold tabular-nums text-navy md:text-3xl">
											40,497
											<span className="text-base font-semibold md:text-lg">円</span>
										</p>
									</div>

									<div className="flex flex-col items-center gap-1">
										<div className="flex size-12 items-center justify-center rounded-full bg-linear-to-br from-red-500 to-amber-400 shadow-md md:size-14">
											<svg
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												className="size-5 text-white md:size-6"
												aria-hidden
											>
												<path
													d="M6 12h9.5M13 7l5 5-5 5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</div>
										<span className="text-[0.65rem] font-bold text-red-500 md:text-xs">
											家賃アップ
										</span>
									</div>

									<div className="w-full max-w-56 rounded-xl border-2 border-gold/60 bg-linear-to-b from-white to-[#fff9eb] px-5 py-5 text-center shadow-md">
										<p className="text-xs font-semibold text-gold md:text-sm">
											新平均家賃
										</p>
										<p className="mt-2 text-2xl font-bold tabular-nums text-navy md:text-3xl">
											48,145
											<span className="text-base font-semibold md:text-lg">円</span>
										</p>
									</div>

									<div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-red-500 via-red-500 to-amber-400 text-center font-bold text-white shadow-lg ring-4 ring-red-100 md:size-24">
										<span className="flex flex-col leading-tight">
											<span className="text-xl md:text-2xl">19%</span>
											<span className="text-[0.6rem] md:text-xs">UP!</span>
										</span>
									</div>
								</div>

								<p className="mt-8 text-center text-base font-bold leading-snug text-navy md:text-xl md:leading-snug">
									物件利回りの上昇により、物件売却価格は上昇！
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
