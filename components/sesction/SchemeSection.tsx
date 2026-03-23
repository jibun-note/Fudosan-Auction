import Link from "next/link";
import { FaThumbsUp } from "react-icons/fa";
import { HiOutlineShieldCheck, HiOutlineUserGroup } from "react-icons/hi2";

const cards = [
	{
		icon: FaThumbsUp,
		title: "顧客満足度アップ",
		description:
			"相見積もり不要、競争入札で透明性の高い納得の価格へ。固定の「言い値」ではなく「競争」で導く適正高値が満足を生みます。",
	},
	{
		icon: HiOutlineShieldCheck,
		title: "信頼強化",
		description:
			"入札プロセスの完全可視化で、顧問先への説明責任が果たしやすくなります。いつ・誰が・いくらで入札したかを開示します。",
	},
	{
		icon: HiOutlineUserGroup,
		title: "差別化",
		description:
			"他士業や同業者との差別化に繋がる独自提案が可能に。資産売却の選択肢としてオークションを提示できる強み。",
	},
];

export default function SchemeSection() {
	return (
		<section id="merit" className="bg-white px-6 py-20">
			<div className="mx-auto max-w-6xl">
				<h2 className="text-2xl font-bold text-[var(--navy)] md:text-3xl">
					税理士に&quot;価値&quot;が返る売却スキーム
				</h2>
				<div className="mt-2 h-1 w-16 bg-[var(--gold)]" />
				<p className="mt-4 text-gray-600">
					顧問先への付加価値提案が、先生ご自身の信頼とビジネスを強化します。
				</p>
				<div className="mt-12 grid gap-8 md:grid-cols-3">
					{cards.map(({ icon: Icon, title, description }) => (
						<div
							key={title}
							className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm"
						>
							<Icon className="size-10 text-[var(--gold)]" />
							<h3 className="mt-4 text-lg font-semibold text-[var(--navy)] md:text-xl">
								{title}
							</h3>
							<p className="mt-2 text-base leading-relaxed text-gray-600 md:text-base">
								{description}
							</p>
						</div>
					))}
				</div>
				<div className="mt-12 rounded-lg border-l-4 border-blue-400 bg-[var(--accent-blue)] p-6">
					<h3 className="font-semibold text-[var(--navy)]">紹介スキーム例</h3>
					<p className="mt-2 text-sm text-gray-700">
						先生からのご紹介後、弊社専門スタッフが共同でご同席し、オークションプロセスを丁寧に説明します。成果の共有方法や守秘義務、利益相反ポリシーについては、個別にご説明資料を用意しております。
					</p>
					<Link
						href="#"
						className="mt-4 inline-block text-sm font-medium text-blue-600 underline hover:text-blue-800"
					>
						紹介スキーム資料はこちら≫
					</Link>
				</div>
			</div>
		</section>
	);
}
