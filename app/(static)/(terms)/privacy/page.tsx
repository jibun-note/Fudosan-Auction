import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
	title: "個人情報に関する基本方針 | 藤和コーポレーション",
	description:
		"藤和コーポレーションの個人情報に関する基本方針、利用目的、開示手続き等についてご案内します。",
};

/** トップページ周辺コンポーネント（Footer 等）と同一の連絡先・会社情報 */

function Section({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
	return (
		<section id={id} className="border-b border-gray-200 pb-10 last:border-b-0 last:pb-0">
			<h2 className="mb-6 mt-10 text-xl font-bold text-gray-900 first:mt-6">{title}</h2>
			<div className="text-pretty text-sm leading-relaxed text-gray-700 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-6 [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
				{children}
			</div>
		</section>
	);
}

export default function PrivacyPage() {
	return (
		<>
			<div className="bg-white">
				<div className="container mx-auto max-w-4xl px-4 py-12 md:py-16 [&_p]:indent-[1em] [&_p.text-right]:indent-0">
					<h1 className="text-2xl font-bold text-gray-900 md:text-3xl pb-10">
						個人情報保護に関する基本方針
					</h1>
					<p className="mb-10">
						藤和コーポレーション株式会社は、個人情報の保護に関する法律、個人情報の保護に関する法律施行令等を尊重・遵守し、個人情報の適正な取扱いと保護に努めます。
					</p>

					<Section title="個人情報とは">
						<p>
							個人情報とは、氏名、郵便番号、住所、電話番号、メールアドレス、年齢、生年月日、性別、査定・買取・販売された不動産取引に関する情報、住宅ローン審査
							情報、アンケート内容、その他各種サービスの受付票・申込書・契約書などの記述により、個人を特定できる情報をいいます。
						</p>
					</Section>

					<Section id="purpose" title="個人情報の利用目的">
						<p>
							当社は、上記「個人情報の取得」に従い取得した個人情報を、次の利用目的の達成に必要な範囲内において取り扱うものといたします。
						</p>
						<ol className="mt-4 list-decimal space-y-2 pl-6">
							<li>
								<strong>当社事業に関する顧客動向分析及び商品開発等の調査分析</strong>
							</li>
							<li>
								<strong>当社事業に関する営業活動</strong>
							</li>
							<li>
								<strong>申込・契約等における本人確認及び信用調査</strong>
							</li>
							<li>
								<strong>申込・契約等の履行に伴う各種案内</strong>
							</li>
							<li>
								<strong>顧客満足度等のアンケート調査の案内</strong>
							</li>
							<li>
								<strong> 当社への来訪者の確認及び来訪者への対応内容の記録</strong>
							</li>
							<li>
								<strong>
									当社事業の推進及び1〜6の利用目的の達成に必要な範囲内での個人情報の第三者への開示・提供
								</strong>
							</li>
						</ol>
					</Section>

					<Section id="disclosure" title="保有個人データ及び第三者への開示・提供">
						<p>
							当社は、上記「個人情報の取得」に従い取得した個人情報を次の場合を除き第三者に提供することはいたしません。
						</p>
						<ol className="list-disc space-y-3 pl-6">
							<li className="list-disc">ご本人より同意が得られた場合</li>
							<li className="list-disc">法令に基づく場合</li>
							<li className="list-disc">
								国の機関もしくは地方公共団体より開示を求められ、法令の定める範囲で協力する必要がある場合
							</li>
							<li className="list-disc">
								当社事業の推進及び利用目的の達成に必要な範囲内での第三者への開示・提供
							</li>
						</ol>
						<p className="mt-4">
							<strong>＜個人情報を開示・提供する第三者の例示＞</strong>
						</p>
						<ol className="list-disc">
							<li className="list-disc">国の機関もしくは地方公共団体又はその委託を受けた者</li>
							<li className="list-disc">
								利用目的の達成に必要な範囲内で業務を委託した場合の当該業務の委託先
							</li>
							<li className="list-disc">
								当社事業の範囲内で業務の委託を受けた場合の当該業務の委託先
							</li>
						</ol>
					</Section>

					<Section id="procedure" title="個人情報の管理・保護">
						<p>
							当社は、個人情報への不正アクセス、個人情報の紛失・破壊・改ざん・漏洩などを防止するために適切かつ合理的なレベルで安全対策を実施いたします。また、個人情報を取り扱う社員などに対して、個人情報保護の教育を実施するなど啓発活動に努めます。
						</p>
					</Section>

					<Section id="handling" title="個人情報に関するお問い合わせ">
						<p>
							ご提供された個人情報に対する質問や開示、訂正、利用停止等の請求については、次の連絡先までお問合せください。開示、訂正、利用停止等に必要な所定の手続などをご案内します。但し、内容によってはご要望に応じられない場合があります。
						</p>
						<p className="mt-6 indent-0!">
							【受付窓口】
							<br />
							藤和コーポレーション株式会社 個人情報保護管理者
							<br />
							<br />
							[所在地] 〒108-0075
							<br />
							東京都港区港南2-16-1 品川イーストワンタワー8階
							<br />
							[TEL] 03-6433-9933
							<br />
							[E-MAIL] info@oyasan.jp
						</p>
					</Section>
				</div>
			</div>
		</>
	);
}
