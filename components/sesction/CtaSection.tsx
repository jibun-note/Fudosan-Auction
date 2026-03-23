import Link from "next/link";

export default function CtaSection() {
	return (
		<section className="border-b border-white/10 bg-navy-dark px-4 py-10 text-white md:px-6 md:py-16">
			<div className="mx-auto max-w-4xl text-center">
				<h2 className="text-lg font-bold md:text-2xl">
					顧問先の資産価値を最大化する新しい一手を、今すぐご提案ください。
				</h2>
				<p className="mt-3 text-sm leading-relaxed text-white/80 md:mt-4 md:text-base">
					オンラインでのご説明も随時対応しております。最短で即日のお打ち合わせも可能です。
				</p>
				<div className="mt-6 flex flex-wrap justify-center gap-2 md:mt-8 md:gap-4">
					<Link
						href="/home/form"
						className="rounded-md bg-gold px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gold-light md:px-6 md:py-3 md:text-base"
					>
						無料で資料請求する
					</Link>
					<Link
						href="/home/seminar"
						className="rounded-md border border-white bg-transparent px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 md:px-6 md:py-3 md:text-base"
					>
						オンライン説明会に申込む
					</Link>
				</div>
			</div>
		</section>
	);
}
