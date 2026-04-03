import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
	title: "反社会的勢力に対する基本方針 | 藤和コーポレーション",
	description: "藤和コーポレーションの反社会的勢力に対する基本方針についてご案内します。",
};

function Section({ children }: { children: ReactNode }) {
	return <div className="text-pretty text-sm leading-relaxed text-gray-700 [&_li_p]:pl-6">{children}</div>;
}

export default function AntisocialForcesPolicyPage() {
	return (
		<>
			<Section>
				<p>
					藤和コーポレーション株式会社は、市民社会の秩序や安全、企業の健全な生活に脅威を与える反社会的勢力（集団や個人または支配、影響を受けている関係者）に対する基本方針を宣言します。
				</p>

				<div className="bg-white">
					<div className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
						<h1 className="text-2xl font-bold text-gray-900 md:text-3xl pb-10">
							反社会的勢力に対する基本方針
						</h1>
						<p className="mb-10">
							藤和コーポレーション株式会社は、市民社会の秩序や安全、企業の健全な生活に脅威を与える反社会的勢力（集団や個人または支配、影響を受けている関係者）に対する基本方針を宣言します。
						</p>
						<ol className="list-none! space-y-2">
							<li>
								<strong>第1条</strong>
								<br />
								<p>当社は反社会的勢力とは、取引を含めた一切の関係を遮断します。</p>
							</li>
							<li>
								<strong>第2条</strong>
								<br />
								<p>
									当社は相手方が反社会的勢力であるかどうか常に注意を払うとともに、反社会的勢力と知らずに何等かの関わりをもってしまった場合は、相手方が反社会的勢力と判明した時点、あるいは反社会的勢力との疑いが生じた時点で、速やかに関係解消に努めます。
								</p>
							</li>
							<li>
								<strong>第3条</strong>
								<br />
								<p>
									当社は反社会的勢力による不当要求に対し、組織全体として対応するとともに、対応する役職員の安全確保に努めます。
								</p>
							</li>
							<li>
								<strong>第4条</strong>
								<br />
								<p>
									当社は反社会的勢力による不当要求に備え、警察・暴力追放運動推進センター・弁護士等の外部の専門機関と連携し、組織的かつ適正に対応します。
								</p>
							</li>
							<li>
								<strong>第5条</strong>
								<br />
								<p>
									当社は反社会的勢力による不当要求には応じず、民事・刑事の両面から法的対応を行います。
								</p>
							</li>
							<li>
								<strong>第6条</strong>
								<br />
								<p>当社は反社会的勢力に対して、裏取引や資金提供は絶対に行いません。</p>
							</li>
						</ol>
						<p className="mt-6 justify-end text-right text-gray-700">以上</p>
					</div>
				</div>
			</Section>
		</>
	);
}
