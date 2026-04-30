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

export const rebornIntroVideo = {
	embedUrl: "https://www.youtube.com/embed/rkfF8KZLkG8?si=OA-jVj45N1JiLbgv",
	title: "【3分で分かる】資産を「守る」「増やす」「最大化する」re-born不動産とは？【富裕層の資産形成の決定版】",
} as const;

export type RebornGuarantee = {
	description: string;
};

/** リスクを軽減する100%保証ないの４つの内容 */
export const rebornGuarantee: RebornGuarantee[] = [
	{
		description: "5年後売却時100％差額保証",
	},
	{
		description: "短期節税（４年）",
	},
	{
		description: "サブリースによる安定収入",
	},
	{
		description: "設備＆原状回復費用（無料）",
	},
];

/** 納税額比較（`RebornAchievement`）— 図表の文言・数値 */
export type RebornTaxScenarioRow = {
	label: string;
	value: string;
	/** 納税額など赤字強調 */
	valueEmphasis?: boolean;
};

export type RebornTaxScenarioBlock = {
	title: string;
	/** ヘッダー直下の補足（例：物件価格） */
	subTitle?: string;
	rows: RebornTaxScenarioRow[];
	/** 左：何もしなかった＝灰系／右：購入時＝マゼンタ系 */
	variant: "neutral" | "purchase";
};

export type RebornTaxAchievementSummary = {
	formulaLeft: string;
	formulaRight: string;
	/** 差額の数値部分のみ（太字赤） */
	diffAmount: string;
	diffSuffix: string;
	/** 「4」年間…の年数 */
	yearsHighlight: string;
	/** 年数の直後に続く文言 */
	savedMiddle: string;
	/** 合計の数値 */
	savedAmount: string;
	savedUnit: string;
};

export type RebornTaxAchievementData = {
	/** カード天部タイトル（未使用なら省略） */
	title?: string;
	/** 中央の丸＋矢印直下（`AchievementCard` の arrowLabel と同役割） */
	arrowLabel?: string;
	intro: string;
	scenarioNothing: RebornTaxScenarioBlock;
	scenarioPurchase: RebornTaxScenarioBlock;
	summary: RebornTaxAchievementSummary;
	disclaimer: string;
};

export const rebornTaxAchievement: RebornTaxAchievementData = {
	arrowLabel: "納税比較",
	intro: "「何もしなかった場合」と「b'CASA re-bornを購入した場合」では納税額に大きな差が生まれます。",
	scenarioNothing: {
		variant: "neutral",
		title: "何もしなかった場合",
		rows: [
			{
				label: "課税所得(年収3,000万円) (所得税・住民税税率50%)",
				value: "2,700万円",
			},
			{ label: "納税額／年間", value: "1,090万円", valueEmphasis: true },
		],
	},
	scenarioPurchase: {
		variant: "purchase",
		title: "b'CASA re-bornを購入した場合",
		subTitle: "（物件価格：6,000万円）",
		rows: [
			{
				label: "課税所得(損益通算後) (所得税・住民税税率50%)",
				value: "2,270万円",
			},
			{ label: "納税額／年間", value: "526万円", valueEmphasis: true },
		],
	},
	summary: {
		formulaLeft: "1,090万円",
		formulaRight: "526万円",
		diffAmount: "564",
		diffSuffix: "万円／年",
		yearsHighlight: "4",
		savedMiddle: "年間で得した納税金額は 合計",
		savedAmount: "2,256",
		savedUnit: "万円",
	},
	disclaimer: "売却時は、別途、長期譲渡税688万円を支払います。",
};
