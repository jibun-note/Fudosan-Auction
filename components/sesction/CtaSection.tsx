import Link from "next/link";

/** LP下部の行動喚起（資料請求・説明会申込）セクション */
export default function CtaSection() {
	return (
		<section className="border-b border-white/10 bg-navy-dark px-4 py-10 text-white md:px-6 md:py-16">
			<div className="mx-auto max-w-4xl text-center">
				{/* 見出し・リード文 */}
				<h2 className="text-lg font-bold md:text-2xl">
					顧問先の資産価値を最大化する新しい一手を、今すぐご提案ください。
				</h2>
				<p className="mt-3 text-sm leading-relaxed text-white/80 md:mt-4 md:text-base">
					オンラインでのご説明も随時対応しております。最短で即日のお打ち合わせも可能です。
				</p>
				{/* 主要CTAリンク */}
				<div className="mt-6 flex justify-center md:mt-8">
					<Link
						href="/home/form"
						className="inline-flex items-center justify-center rounded-md bg-gold px-8 py-3 text-sm font-semibold text-white transition hover:bg-gold-light md:px-10 md:py-3.5 md:text-base"
					>
						無料面談に申し込む
					</Link>
				</div>
			</div>
		</section>
	);
}
