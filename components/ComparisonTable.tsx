import Link from "next/link";

/** 画像デザインに合わせた比較表用カラー */
const headerNavy = "#2D325A";
const headerGold = "#C5A352";
const labelBg = "#F9F9F9";
const bodyMuted = "#4a5568";

const rows = [
	{
		label: "売却価格",
		intermediary: "市況や交渉次第",
		purchase: "即時だが低め",
		auction: "競争で高値期待",
	},
	{
		label: "スピード",
		intermediary: "買主次第（長期化リスク）",
		purchase: "最短",
		auction: "期間設計可能（2-6週間）",
	},
	{
		label: "透明性",
		intermediary: "中（交渉過程が不透明）",
		purchase: "低（業者提示額のみ）",
		auction: "高（入札プロセス透明）",
	},
	{
		label: "顧客満足度",
		intermediary: "中（価格不満リスク）",
		purchase: "低（安く売った感覚）",
		auction: "高（納得感が高い）",
	},
];

/** 末尾の全角括弧内を補足として小さく表示 */
function DataCellText({
	text,
	className,
	parenClassName,
}: {
	text: string;
	className: string;
	parenClassName: string;
}) {
	const i = text.lastIndexOf("（");
	if (i > 0 && text.endsWith("）")) {
		const main = text.slice(0, i).trim();
		const paren = text.slice(i);
		return (
			<>
				<span className={className}>{main}</span>
				<span className={parenClassName}>{paren}</span>
			</>
		);
	}
	return <span className={className}>{text}</span>;
}

const mobileParen = "mt-1 block text-xs font-normal leading-snug opacity-80";

const mobileColumns = [
	{
		key: "intermediary" as const,
		title: "一般仲介",
		titleBg: headerNavy,
		bodyColor: bodyMuted,
		emphasis: false,
	},
	{
		key: "purchase" as const,
		title: "不動産買取",
		titleBg: headerNavy,
		bodyColor: bodyMuted,
		emphasis: false,
	},
	{
		key: "auction" as const,
		title: "オークション",
		titleBg: headerGold,
		bodyColor: headerGold,
		emphasis: true,
	},
];

export default function ComparisonTable() {
	return (
		<section id="comparison" className="bg-white px-4 py-12 md:px-6 md:py-20">
			<div className="mx-auto max-w-6xl">
				<h2 className="text-lg font-bold text-navy md:text-3xl">
					仲介/買取/オークションの違いが一目で
				</h2>
				<div className="mt-2 h-1 w-16 bg-gold" />

				{/* モバイル: 見切れ防止のカード型（行ごとに3方式を縦並び） */}
				<div className="mt-8 space-y-3 md:mt-12 md:hidden">
					{rows.map((row) => (
						<div
							key={row.label}
							className="overflow-hidden rounded-[10px] border border-gray-200 shadow-[0_4px_24px_rgba(45,50,90,0.06)]"
						>
							<div
								className="px-3 py-2.5 text-sm font-bold"
								style={{ backgroundColor: labelBg, color: headerNavy }}
							>
								{row.label}
							</div>
							<dl className="divide-y divide-gray-100 bg-white">
								{mobileColumns.map((col) => {
									const text = row[col.key];
									return (
										<div key={col.key} className="px-3 py-2.5">
											<dt className="flex items-center gap-2">
												<span
													className="rounded px-2 py-0.5 text-[10px] font-bold text-white"
													style={{ backgroundColor: col.titleBg }}
												>
													{col.title}
												</span>
											</dt>
											<dd
												className="mt-2 text-sm leading-relaxed"
												style={{ color: col.bodyColor }}
											>
												<DataCellText
													text={text}
													className={col.emphasis ? "font-semibold" : "font-normal"}
													parenClassName={
														col.emphasis
															? "mt-1 block text-xs font-normal leading-snug opacity-90"
															: mobileParen
													}
												/>
											</dd>
										</div>
									);
								})}
							</dl>
						</div>
					))}
				</div>

				{/* タブレット以上: 表レイアウト */}
				<div className="mt-8 hidden overflow-x-auto md:mt-12 md:block">
					<div
						className="overflow-hidden rounded-[10px] shadow-[0_4px_24px_rgba(45,50,90,0.08)]"
						style={{ minWidth: "min(100%, 520px)" }}
					>
						<table className="w-full min-w-[520px] border-collapse text-[0.8125rem] md:min-w-[640px] md:text-base">
							<thead>
								<tr>
									<th
										className="px-3 py-3 text-center text-[0.8125rem] font-bold text-white md:px-6 md:py-6 md:text-[1.05rem]"
										style={{ backgroundColor: headerNavy, width: "18%" }}
									>
										比較
									</th>
									<th
										className="px-2 py-3 text-center text-[0.8125rem] font-bold text-white md:px-5 md:py-6 md:text-[1.05rem]"
										style={{ backgroundColor: headerNavy, width: "22%" }}
									>
										一般仲介
									</th>
									<th
										className="px-2 py-3 text-center text-[0.8125rem] font-bold text-white md:px-5 md:py-6 md:text-[1.05rem]"
										style={{ backgroundColor: headerNavy, width: "22%" }}
									>
										不動産買取
									</th>
									<th
										className="px-3 py-3 text-center text-[0.8125rem] font-bold text-white md:px-6 md:py-6 md:text-[1.05rem]"
										style={{
											backgroundColor: headerGold,
											width: "30%",
											minWidth: "8.5rem",
										}}
									>
										オークション
									</th>
								</tr>
							</thead>
							<tbody>
								{rows.map((row) => (
									<tr key={row.label} className="border-b border-gray-100 last:border-b-0">
										<td
											className="px-3 py-2.5 text-left text-[0.8125rem] font-bold leading-relaxed md:px-6 md:py-[1.125rem] md:text-[1.05rem]"
											style={{ backgroundColor: labelBg, color: headerNavy }}
										>
											{row.label}
										</td>
										<td
											className="bg-white px-2 py-2.5 text-center align-middle leading-snug md:px-5 md:py-[1.125rem] md:leading-relaxed"
											style={{ color: bodyMuted }}
										>
											<DataCellText
												text={row.intermediary}
												className="font-normal"
												parenClassName="mt-0.5 block text-[0.8125rem] font-normal leading-snug opacity-80 md:mt-0 md:inline md:text-[0.875rem]"
											/>
										</td>
										<td
											className="bg-white px-2 py-2.5 text-center align-middle leading-snug md:px-5 md:py-[1.125rem] md:leading-relaxed"
											style={{ color: bodyMuted }}
										>
											<DataCellText
												text={row.purchase}
												className="font-normal"
												parenClassName="mt-0.5 block text-[0.8125rem] font-normal leading-snug opacity-80 md:mt-0 md:inline md:text-[0.875rem]"
											/>
										</td>
										<td
											className="bg-white px-3 py-2.5 text-center align-middle leading-snug md:px-6 md:py-[1.125rem] md:leading-relaxed"
											style={{ color: headerGold }}
										>
											<DataCellText
												text={row.auction}
												className="font-semibold"
												parenClassName="mt-0.5 block text-[0.8125rem] font-normal leading-snug opacity-90 md:mt-0 md:inline md:text-[0.875rem]"
											/>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				<p className="mt-4 text-right text-[0.65rem] leading-relaxed text-gray-400 md:text-sm">
					※価格保証/最低落札価格の設計も可能です。工期・条件により変動します。
				</p>
				<Link
					href="#"
					className="mt-4 inline-block text-sm font-medium text-gold underline decoration-gold/40 underline-offset-2 transition hover:text-gold-light hover:decoration-gold md:mt-6 md:text-base"
				>
					より詳細な比較資料をダウンロード
				</Link>
			</div>
		</section>
	);
}
