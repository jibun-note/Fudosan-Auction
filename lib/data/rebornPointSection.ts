/** `@/components/sesction/RebornPointSection` 用（サーバー・クライアント双方からインポート可） */

import type { AchievementCardData } from "@/components/sesction/common/achievement-card/achievement-card-type";

export type RebornPointIconKey =
	| "receiptPercent"
	| "homeModern"
	| "shieldCheck"
	| "buildingLibrary"
	| "lifebuoy";

export type RebornPointSummaryItem = {
	iconKey: RebornPointIconKey;
	title: string;
	description?: string;
};

export type RebornRentUpCase = {
	settled: string;
	name: string;
	units: number;
	purchaseYen: string;
	purchaseYield: string;
	rentAtSale: string;
	currentRent: string;
	rentUp: string;
	upRatePerRoom: string;
	currentYield: string;
	targetYield5y: string;
};

/** 賃料UP事例テーブル（ヘッダー・列とセルスタイルの対応） */
export type RebornRentUpCaseColumnVariant = "default" | "accent";

export type RebornRentUpCaseColumn = {
	key: keyof RebornRentUpCase;
	label: string;
	variant: RebornRentUpCaseColumnVariant;
	/** 物件名列（折り返し・tabular-nums なし） */
	isMultilineName?: boolean;
};

export const rebornPointSummary: RebornPointSummaryItem[] = [
	{
		iconKey: "receiptPercent",
		title: "大幅な課税の繰延べ効果あり",
	},
	{
		iconKey: "homeModern",
		title: "副収入／サブリースによる安定の家賃収入",
		description: "（4年固定、さらに4年延長可）",
	},
	{
		iconKey: "shieldCheck",
		title: "買取保証／4年後に当初購入価格の100%",
	},
	{
		iconKey: "buildingLibrary",
		title: "融資利用可",
		description: "不動産担保、運転資金の一部として",
	},
	{
		iconKey: "lifebuoy",
		title: "安心サポート",
		description:
			"売主、自社運営・管理 物件選定、融資、建物・設備・入居保証、運営・管理、売却までの全てをサポート。保有期間中の追加負担もありません。",
	},
];

export const rebornRentUpCaseColumns: RebornRentUpCaseColumn[] = [
	{ key: "settled", label: "決済日", variant: "default" },
	{ key: "name", label: "物件名", variant: "default", isMultilineName: true },
	{ key: "units", label: "部屋数（戸）", variant: "default" },
	{ key: "purchaseYen", label: "ご購入時金額（円）", variant: "default" },
	{ key: "purchaseYield", label: "ご購入時利回り", variant: "accent" },
	{ key: "rentAtSale", label: "販売時家賃総額（円）", variant: "default" },
	{ key: "currentRent", label: "現家賃総額（円）", variant: "default" },
	{ key: "rentUp", label: "家賃UP総額（円）", variant: "default" },
	{ key: "upRatePerRoom", label: "1室辺りのUP率", variant: "default" },
	{ key: "currentYield", label: "現家賃の利回り", variant: "default" },
	{ key: "targetYield5y", label: "5年後目標利回り", variant: "accent" },
];

export const rebornRentUpCases: RebornRentUpCase[] = [
	{
		settled: "2021/6/18",
		name: "b'CASA 日吉 re-born",
		units: 6,
		purchaseYen: "46,900,000",
		purchaseYield: "6.3%",
		rentAtSale: "2,964,000",
		currentRent: "3,600,000",
		rentUp: "636,000",
		upRatePerRoom: "121%",
		currentYield: "7.6%",
		targetYield5y: "9.0%",
	},
	{
		settled: "2021/6/29",
		name: "b'CASA 井土ヶ谷I re-born",
		units: 8,
		purchaseYen: "55,900,000",
		purchaseYield: "6.3%",
		rentAtSale: "3,468,000",
		currentRent: "4,308,000",
		rentUp: "840,000",
		upRatePerRoom: "124%",
		currentYield: "7.7%",
		targetYield5y: "9.2%",
	},
	{
		settled: "2021/12/27",
		name: "b'CASA 井土ヶ谷II re-born",
		units: 8,
		purchaseYen: "59,900,000",
		purchaseYield: "6.4%",
		rentAtSale: "3,852,000",
		currentRent: "4,776,000",
		rentUp: "924,000",
		upRatePerRoom: "123%",
		currentYield: "7.9%",
		targetYield5y: "9.5%",
	},
];

/** 家賃アップ実績カード（`RebornRentUpAchievementCard`）— 文言差し替えで再利用可 */
export const rebornRentUpAchievementCard: AchievementCardData = {
	title: "昨年1年間家賃アップ実績",
	oldRentLabel: "旧平均家賃",
	oldRentAmount: "40,497",
	arrowLabel: "家賃アップ",
	newRentLabel: "新平均家賃",
	newRentAmount: "48,145",
	increasePercent: "19%",
	increaseBadgeSuffix: "UP!",
	footer: "物件利回りの上昇により、物件売却価格は上昇！",
	currencyUnit: "円",
};
