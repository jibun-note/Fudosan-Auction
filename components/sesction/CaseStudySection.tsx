import Link from "next/link";

export default function CaseStudySection() {
  const appraisal = 6800;
  const winning = 7320;
  const diff = winning - appraisal;
  const appraisalWidth = (appraisal / winning) * 100;

  return (
    <section id="case-study" className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-[var(--navy)] md:text-3xl">
          実例でわかる&quot;差額&quot;と&quot;税務効果&quot;
        </h2>
        <div className="mt-2 h-1 w-16 bg-[var(--gold)]" />
        <div className="mt-12 rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <p className="text-lg font-semibold text-[var(--navy)] md:text-xl">
            【匿名事例】築20年区分マンション(都心)
          </p>
          <p className="mt-2 text-base leading-relaxed text-gray-600 md:text-base">
            同条件でも&quot;売り方&quot;でこれだけの差が生まれます。
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-4">
              <div className="rounded border border-gray-200 bg-gray-50 p-4">
                <p className="text-base text-gray-600">一般仲介の査定額</p>
                <p className="mt-1 text-2xl font-bold text-gray-700">
                  {appraisal.toLocaleString()}万円
                </p>
              </div>
              <div className="rounded border-2 border-amber-200 bg-amber-50 p-4">
                <p className="text-base text-gray-600">オークション落札額</p>
                <p className="mt-1 text-2xl font-bold text-[var(--navy)]">
                  {winning.toLocaleString()}万円
                </p>
                <p className="mt-2 text-base font-semibold text-green-600">
                  +{diff}万円 UP
                </p>
              </div>
            </div>
            <div>
              <p className="mb-2 text-lg font-semibold text-[var(--navy)] md:text-xl">
                査定額 vs 落札額
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div
                    className="h-6 rounded bg-gray-300"
                    style={{ width: `${appraisalWidth}%` }}
                  />
                  <span className="text-base text-gray-600">
                    査定 {appraisal}万
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-full rounded bg-amber-200" />
                  <span className="text-base text-gray-600">
                    落札 {winning}万
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 rounded-lg bg-[var(--accent-blue)] p-6">
            <p className="text-base leading-relaxed text-gray-700 md:text-base">
              譲渡価額の上昇に伴う税額変動も事前にシミュレーション。手取り額の最大化を目指します。（※長期譲渡所得・控除適用前で計算）
            </p>
            <p className="mt-2 font-mono text-base text-gray-800">
              譲渡所得 = 譲渡価額 - (取得費 + 譲渡費用)
            </p>
            <p className="mt-2 text-base text-gray-600">
              ※別控除や特例適用の分岐についても資料で詳しく解説します。
            </p>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="#"
              className="inline-block rounded-md bg-[var(--navy)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--navy-dark)]"
            >
              匿名事例集・税務シミュレーション相談
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
