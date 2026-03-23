import Link from "next/link";

export default function CaseStudySection() {
	const appraisal = 6800;
	const winning = 7320;
	const diff = winning - appraisal;
	const appraisalWidth = (appraisal / winning) * 100;

	return (
		<section id="case-study" className="bg-gray-50 px-4 py-12 md:px-6 md:py-20">
			<div className="mx-auto max-w-6xl">
				<h2 className="text-lg font-bold text-navy md:text-3xl">
					実例でわかる&quot;差額&quot;と&quot;税務効果&quot;
				</h2>
				<div className="mt-2 h-1 w-16 bg-gold" />
				<div className="mt-8 rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:mt-12 md:p-8">
					<p className="text-base font-semibold text-navy md:text-xl">
						【匿名事例】築20年区分マンション(都心)
					</p>
					<p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">
						同条件でも&quot;売り方&quot;でこれだけの差が生まれます。
					</p>
					<div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-2 md:items-center md:gap-8">
						<div className="space-y-3 md:space-y-4">
							<div className="rounded border border-gray-200 bg-gray-50 p-3 md:p-4">
								<p className="text-sm text-gray-600 md:text-base">一般仲介の査定額</p>
								<p className="mt-1 text-xl font-bold text-gray-700 md:text-2xl">
									{appraisal.toLocaleString()}万円
								</p>
							</div>
							<div className="rounded border-2 border-amber-200 bg-amber-50 p-3 md:p-4">
								<p className="text-sm text-gray-600 md:text-base">オークション落札額</p>
								<p className="mt-1 text-xl font-bold text-navy md:text-2xl">
									{winning.toLocaleString()}万円
								</p>
								<p className="mt-2 text-sm font-semibold text-green-600 md:text-base">
									+{diff}万円 UP
								</p>
							</div>
						</div>
						<div>
							<p className="mb-2 text-base font-semibold text-navy md:text-xl">
								査定額 vs 落札額
							</p>
							<div className="space-y-2">
								<div className="flex items-center gap-2">
									<div
										className="h-6 rounded bg-gray-300"
										style={{ width: `${appraisalWidth}%` }}
									/>
									<span className="text-sm text-gray-600 md:text-base">
										査定 {appraisal}万
									</span>
								</div>
								<div className="flex items-center gap-2">
									<div className="h-6 w-full rounded bg-amber-200" />
									<span className="text-sm text-gray-600 md:text-base">
										落札 {winning}万
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-6 rounded-lg bg-accent-blue p-4 md:mt-8 md:p-6">
						<p className="text-sm leading-relaxed text-gray-700 md:text-base">
							譲渡価額の上昇に伴う税額変動も事前にシミュレーション。手取り額の最大化を目指します。（※長期譲渡所得・控除適用前で計算）
						</p>
						<p className="mt-2 font-mono text-xs text-gray-800 md:text-base">
							譲渡所得 = 譲渡価額 - (取得費 + 譲渡費用)
						</p>
						<p className="mt-2 text-sm text-gray-600 md:text-base">
							※別控除や特例適用の分岐についても資料で詳しく解説します。
						</p>
					</div>
					<div className="mt-6 text-center md:mt-8">
						<Link
							href="#"
							className="inline-block rounded-md bg-navy px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-dark md:px-6 md:py-3 md:text-base"
						>
							匿名事例集・税務シミュレーション相談
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
