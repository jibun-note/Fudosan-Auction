import Link from "next/link";

const sitemapItems = [
	{ label: "税理士のメリット", href: "#merit" },
	{ label: "他方式との比較", href: "#comparison" },
	{ label: "成功事例", href: "#case-study" },
	{ label: "利用の流れ", href: "#flow" },
	{ label: "よくある質問", href: "#faq" },
];

export default function Footer() {
	return (
		<footer className="bg-navy-dark text-white">
			<section id="company" className="px-6 py-12">
				<div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
					<div>
						<h3 className="font-semibold">会社情報</h3>
						<p className="mt-3 text-sm text-white/80">
							株式会社 不動産オークション
							<br />
							〒100-0001 東京都千代田区千代田1-1
							<br />
							宅地建物取引業免許: 東京都知事(1)第XXXXX号
							<br />
							加盟団体: ○○不動産協会、△△保証協会
						</p>
					</div>
					<div>
						<h3 className="font-semibold">サイトマップ</h3>
						<ul className="mt-3 space-y-2 text-sm text-white/80">
							{sitemapItems.map((item) => (
								<li key={item.href}>
									<Link href={item.href} className="hover:text-white">
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className="font-semibold">お問い合わせ</h3>
						<p className="mt-3 text-sm text-white/80">
							TEL: 03-1234-5678（平日9:00-18:00）
							<br />
							Email: info@fudosan-auction.example.com
						</p>
					</div>
				</div>
			</section>
			<section className="border-t border-white/10 px-6 py-6">
				<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
					<div className="flex gap-6 text-sm text-white/70">
						<Link href="/privacy" className="hover:text-white">
							プライバシーポリシー
						</Link>
						<span>|</span>
						<Link href="#" className="hover:text-white">
							利用規約
						</Link>
					</div>
					<p className="text-sm text-white/60">© 2024 Fudosan Auction Inc. All Rights Reserved.</p>
				</div>
			</section>
		</footer>
	);
}
