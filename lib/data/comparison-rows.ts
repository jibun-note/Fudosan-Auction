/** `@/components/sesction/comparison` 用（サーバー・クライアント双方からインポート可） */
export type ComparisonRow = {
	label: string;
	intermediary: string;
	purchase: string;
	auction: string;
};

export const comparisonRows: ComparisonRow[] = [
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
