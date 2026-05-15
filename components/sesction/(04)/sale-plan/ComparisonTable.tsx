import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { ComparisonRow } from "@/lib/data/comparisonSection";

/** 画像デザインに合わせた比較表用カラー */
const headerNavy = "#2D325A";
const headerGold = "#C5A352";
const labelBg = "#F9F9F9";
const bodyMuted = "#4a5568";

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

export type ComparisonTableProps = {
	rows: ComparisonRow[];
};

export default function ComparisonTable({ rows }: ComparisonTableProps) {
	return (
		<>
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
			<div className="mt-8 hidden md:mt-12 md:block">
				<div
					className="overflow-hidden rounded-[10px] shadow-[0_4px_24px_rgba(45,50,90,0.08)]"
					style={{ minWidth: "min(100%, 520px)" }}
				>
					<Table className="min-w-[520px] border-collapse text-[0.8125rem] md:min-w-[640px] md:text-lg">
						<TableHeader>
							<TableRow className="border-gray-100 hover:bg-transparent">
								<TableHead
									className="h-auto px-3 py-2 text-center text-[0.8125rem] font-bold leading-tight text-white md:px-6 md:py-3 md:text-[1.15rem]"
									style={{ backgroundColor: headerNavy, width: "18%" }}
								>
									比較
								</TableHead>
								<TableHead
									className="h-auto px-2 py-2 text-center text-[0.8125rem] font-bold leading-tight text-white md:px-5 md:py-3 md:text-[1.15rem]"
									style={{ backgroundColor: headerNavy, width: "22%" }}
								>
									一般仲介
								</TableHead>
								<TableHead
									className="h-auto px-2 py-2 text-center text-[0.8125rem] font-bold leading-tight text-white md:px-5 md:py-3 md:text-[1.15rem]"
									style={{ backgroundColor: headerNavy, width: "22%" }}
								>
									不動産買取
								</TableHead>
								<TableHead
									className="h-auto px-3 py-2 text-center text-[0.8125rem] font-bold leading-tight text-white md:px-6 md:py-3 md:text-[1.15rem]"
									style={{
										backgroundColor: headerGold,
										width: "30%",
										minWidth: "8.5rem",
									}}
								>
									オークション
								</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{rows.map((row) => (
								<TableRow
									key={row.label}
									className="border-gray-100 last:border-b-0 hover:bg-transparent"
								>
									<TableCell
										className="whitespace-normal px-3 py-2.5 text-left text-[0.8125rem] font-bold leading-relaxed md:px-6 md:py-[1.125rem] md:text-[1.15rem]"
										style={{ backgroundColor: labelBg, color: headerNavy }}
									>
										{row.label}
									</TableCell>
									<TableCell
										className="whitespace-normal bg-white px-2 py-2.5 text-center align-middle leading-snug md:px-5 md:py-[1.125rem] md:leading-relaxed"
										style={{ color: bodyMuted }}
									>
										<DataCellText
											text={row.intermediary}
											className="font-normal"
											parenClassName="mt-0.5 block text-[0.8125rem] font-normal leading-snug opacity-80 md:mt-0 md:inline md:text-[0.975rem]"
										/>
									</TableCell>
									<TableCell
										className="whitespace-normal bg-white px-2 py-2.5 text-center align-middle leading-snug md:px-5 md:py-[1.125rem] md:leading-relaxed"
										style={{ color: bodyMuted }}
									>
										<DataCellText
											text={row.purchase}
											className="font-normal"
											parenClassName="mt-0.5 block text-[0.8125rem] font-normal leading-snug opacity-80 md:mt-0 md:inline md:text-[0.975rem]"
										/>
									</TableCell>
									<TableCell
										className="whitespace-normal bg-white px-3 py-2.5 text-center align-middle leading-snug md:px-6 md:py-[1.125rem] md:leading-relaxed"
										style={{ color: headerGold }}
									>
										<DataCellText
											text={row.auction}
											className="font-semibold"
											parenClassName="mt-0.5 block text-[0.8125rem] font-normal leading-snug opacity-90 md:mt-0 md:inline md:text-[0.975rem]"
										/>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</div>
		</>
	);
}
