import {
	HiOutlineChartBarSquare,
	HiOutlineCalculator,
	HiOutlineLightBulb,
	HiOutlineCheckCircle,
} from "react-icons/hi2";

const pillars = [
	{
		icon: HiOutlineChartBarSquare,
		step: "01",
		title: "物件分析",
		subtitle: "豊富な資料を元にあらゆる角度から徹底分析",
		description:
			"近隣地盤の調査結果から近隣の不動産価格、家賃、アクセスや生活施設、土地の利用履歴や浸水の可能性に至るまで、売却価格変動の大きな要因となるデータを元に多角的分析を行います。",
	},
	{
		icon: HiOutlineCalculator,
		step: "02",
		title: "検証・試算",
		subtitle: "物件を多角的に検証し最大限の利益を試算",
		description:
			"豊富な資料に基づく物件の分析と調査を経て、その土地を売却するにはいかなる方法が考えられ、コストを考慮に入れた最高売却可能額はいくらになるかの検証と試算を行います。",
	},
	{
		icon: HiOutlineLightBulb,
		step: "03",
		title: "結論・提案",
		subtitle: "迅速に結論を導きベストの選択をご提案",
		description:
			"緻密な分析と検証・試算により導かれる「その土地を最も高く売る方法」をご提案。一般の不動産業者が出す査定額とは全く異なった観点から算出された売却価格をご提示します。",
	},
] as const;

const useCases = [
	"遊休地を高く売りたい",
	"相続や転居のため自宅を処分したい",
	"老朽化した自宅マンションを売りたい",
	"投資用賃貸物件・一棟アパートを売りたい",
	"築古の商業ビルを処分したい",
	"工場・店舗跡地を売りたい",
] as const;

export default function PlanSection() {
	return (
		<section id="plan" className="bg-[#f8f9fa] px-4 py-12 md:px-6 md:py-20">
			<div className="mx-auto max-w-6xl">
				<h2 className="text-lg font-bold text-navy md:text-3xl">「不動産売却計画書」の中身とは…</h2>
				<div className="mt-2 h-1 w-16 bg-gold" />
				<p className="mt-6 max-w-3xl leading-relaxed text-gray-700 md:mt-8 md:text-base">
					豊富な物件資料とそれに基づき行われる様々な検証、そしてそこから導かれる
					<br />
					「その土地を最も高く売るための結論」によって構成された「不動産売却計画書」。
					<br />
					その土地をどう利用するか、どうすればより高く売れるのかをご提案します。
				</p>
				{/* ── YouTube 動画 ── */}
				<div className="mt-8 md:mt-10">
					<div className="relative mx-auto aspect-video max-w-xl overflow-hidden rounded-xl border border-gray-200 bg-black/90 shadow-[0_16px_45px_rgba(15,23,42,0.18)]">
						<iframe
							className="absolute inset-0 h-full w-full"
							src="https://www.youtube-nocookie.com/embed/MlIg1--4If8?rel=0"
							title="3分で分かる！「不動産売却計画書」のヒミツ"
							loading="lazy"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
						/>
					</div>
					<p className="mt-3 text-center text-xs text-gray-500 md:text-sm">
						3分で分かる！「不動産売却計画書」のヒミツ
					</p>
				</div>
				{/* ── 3つの柱 ── */}
				<div className="mt-14 md:mt-20">
					<h3 className="text-center text-base font-bold text-navy md:text-2xl">
						不動産売却計画書の3つのステップ
					</h3>
					<div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-3 md:gap-8">
						{pillars.map(({ icon: Icon, step, title, subtitle, description }) => (
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
								<h4 className="mt-4 text-lg font-bold text-navy md:text-xl">{title}</h4>
								<p className="mt-1.5 text-sm font-semibold text-gold">{subtitle}</p>
								<p className="mt-3 text-sm leading-relaxed text-gray-600">{description}</p>
							</div>
						))}
					</div>
				</div>
				{/* ── 売却価格アップ事例 ── */}
				<div className="mt-14 md:mt-20">
					<div className="overflow-hidden rounded-2xl border border-gold/30 bg-linear-to-br from-[#fdfaf3] to-white shadow-[0_10px_40px_rgba(30,58,95,0.08)]">
						<div className="h-1 bg-gold" aria-hidden />
						<div className="px-5 py-8 md:px-10 md:py-10">
							<h3 className="text-center text-base font-bold leading-snug text-navy md:text-xl">
								不動産売却計画書で売却価格が大幅アップ！
							</h3>
							<div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6 md:gap-8">
								<div className="w-full max-w-56 rounded-xl border border-gray-200 bg-white px-5 py-5 text-center shadow-sm">
									<p className="text-xs font-semibold text-gray-500 md:text-sm">
										古家つきの土地
									</p>
									<p className="mt-2 text-2xl font-bold tabular-nums text-navy md:text-3xl">
										3,000<span className="text-base font-semibold md:text-lg">万円</span>
									</p>
									<p className="mt-1 text-xs text-gray-500">一般査定額</p>
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
										売却計画書
									</span>
								</div>

								<div className="w-full max-w-56 rounded-xl border-2 border-gold/60 bg-linear-to-b from-white to-[#fff9eb] px-5 py-5 text-center shadow-md">
									<p className="text-xs font-semibold text-gold md:text-sm">
										建売住戸3棟の価値
									</p>
									<p className="mt-2 text-2xl font-bold tabular-nums text-navy md:text-3xl">
										5,000<span className="text-base font-semibold md:text-lg">万円</span>
									</p>
									<p className="mt-1 text-xs font-semibold text-gold">売却計画書の査定額</p>
								</div>

								<div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-red-500 via-red-500 to-amber-400 text-center font-bold text-white shadow-lg ring-4 ring-red-100 md:size-24">
									<span className="flex flex-col leading-tight">
										<span className="text-xl md:text-2xl">2,000</span>
										<span className="text-[0.6rem] md:text-xs">万円 UP!</span>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* ── こんなケースにおすすめ ──
				<div className="mt-14 md:mt-20">
					<h3 className="text-center text-base font-bold text-navy md:text-2xl">
						こんなケースは「不動産売却計画書」をおすすめします
					</h3>
					<div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-2 md:mt-10 md:gap-4">
						{useCases.map((text) => (
							<div
								key={text}
								className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50/70 px-4 py-3.5 md:px-5 md:py-4"
							>
								<HiOutlineCheckCircle className="size-5 shrink-0 text-gold md:size-6" />
								<span className="text-sm font-medium text-navy md:text-base">{text}</span>
							</div>
						))}
					</div>
				</div> */}
			</div>
		</section>
	);
}
