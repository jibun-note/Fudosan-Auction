/** `@/components/sesction/scheme` 用（サーバー・クライアント双方からインポート可） */
export type SchemeServiceIconKey = "building2" | "fileText" | "gavel";

export type SchemeService = {
	id: string;
	label: string;
	title: string;
	subtitle: string;
	/** 概要文（カード／ショーケースのリード） */
	description: string;
	details: string[];
	iconKey: SchemeServiceIconKey;
	href: string;
};

/** 玉UIの表示・aria 用（`label` が空のサービスは `title` を使う） */
export function schemeServiceBallCaption(service: SchemeService): string {
	return service.label || service.title;
}

export const schemeServices: SchemeService[] = [
	// {
	// 	id: "reborn",
	// 	label: "個人向け所得還付商品",
	// 	title: "b'CASA re-born",
	// 	subtitle: "「節税」「家賃収入」「売却益」の一挙三得",
	// 	description:
	// 		"家賃保証や売却時の価格保証など、保有から売却までをトータルで設計し、税務面のメリットも含めて資産価値を高めます。",
	// 	details: ["短期節税", "家賃保証", "売却時100%差額保証", "設備&原状回復費用０円"],
	// 	iconKey: "building2",
	// 	href: "#reborn",
	// },
	{
		id: "businessReborn",
		label: "法人向け税繰り延べ商品",
		title: "business re-born",
		subtitle: "経営の安定・利益の有効活用",
		description:
			"ご相談から売却までを一気通貫で支援し、繰延・減価償却の効果や各種保証で、法人の資金繰りとリスク管理を両立します。",
		details: ["大幅な税繰延べ効果", "いつでも売却可能", "売却時100%差額保証", "家賃収入＋設備保証"],
		iconKey: "fileText",
		href: "#businessReborn",
	},
	{
		id: "auction",
		label: "相続不動産売却支援",
		title: "売却計画書\n+\n不動産オークション",
		subtitle: "不動産価値の最大化し高値売却",
		description:
			"価値を正しく可視化し、オークションの仕組みで競争を生み出すことで、不動産の売却額を引き上げます。",
		details: [
			"土地分析",
			"検証試算",
			"最高売却可能額を提示",
			"オークションで高値売却",
			"相続や事業継承に最適",
		],
		iconKey: "gavel",
		href: "#salePlanSection",
	},
];
