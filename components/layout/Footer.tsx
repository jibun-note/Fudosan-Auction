import Link from "next/link";

const sitemapItems = [
	{ label: "サービス", href: "#scheme-cards" },
	{ label: "re-born", href: "#reborn" },
	{ label: "business re-born", href: "#businessReborn" },
	{ label: "不動産売却計画書＋オークション", href: "#salePlan" },
];

export default function Footer() {
	return (
		<footer className="bg-navy-dark text-white">
			<section id="company" className="px-6 py-12">
				<div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
					<div>
						<h3 className="font-semibold">会社情報</h3>
						<p className="mt-3 text-xs text-white/80">
							藤和コーポレーション　株式会社
							<br />
							〒108-0075 東京都港区港南2-16-1 品川イーストワンタワー8階
							<br />
							建設業許可　東京都知事（特-1）第150358号　建築
							<br />
							建設業許可　東京都知事（般-1）第150358号　土木
							<br />
							建設業許可　東京都知事（特-2）第150358号　解体
							<br />
							建築士事務所　東京都知事免許登録　第62641号一級建築士事務所
							<br />
							宅地建物取引業者免許　東京都知事（1）第102684号
							<br />
							賃貸住宅管理業者登録　国土交通大臣（1）第005966号
							<br />
							総合不動産投資顧問業　総合-第167号
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
						<p className="mt-3 text-xs text-white/80">
							[代表] TEL：03-6433-9933／FAX：03-6433-9950
							<br />
							[賃貸管理部] TEL：03-6433-0199／FAX：03-6433-0059
						</p>
					</div>
				</div>
			</section>
			<section className="border-t border-white/10 px-6 py-6">
				<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
					<div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/70 md:justify-start">
						<Link
							href="/privacy"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-white"
						>
							個人情報に関する基本方針
						</Link>
						<span>|</span>
						<Link
							href="/antisocial"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-white"
						>
							反社会的勢力に対する基本方針
						</Link>
					</div>
					<p className="text-sm text-white/60">© 2024 Fudosan Auction Inc. All Rights Reserved.</p>
				</div>
			</section>
		</footer>
	);
}
