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
	{
		id: "reborn",
		label: "個人向け所得還付商品",
		title: "b'CASA re-born",
		subtitle: "「節税」「家賃収入」「売却益」の一挙三得",
		description:
			"家賃保証や売却時の価格保証など、保有から売却までをトータルで設計し、税務面のメリットも含めて資産価値を高めます。",
		details: [
			"家賃保証契約による安定的な「インカムゲイン」",
			"売却時の価格保証による「キャピタルロス」保証",
			"高収入の方は総合課税による「損益通算」",
			"保有期間中の一切の修繕など負担なし",
			"専属公認会計士、税理士による「5年間確定申告無料」",
		],
		iconKey: "building2",
		href: "#reborn",
	},
	{
		id: "businessReborn",
		label: "法人向け繰り延べ商品",
		title: "business re-born",
		subtitle: "「法人税が高い」と感じた企業オーナー様必見",
		description:
			"ご相談から売却までを一気通貫で支援し、繰延・減価償却の効果や各種保証で、法人の資金繰りとリスク管理を両立します。",
		details: [
			"ご相談から売却までワンストップサポート",
			"保険商品等に代わる優位性",
			"税金繰延べ効果",
			"減価償却アップ",
			"各種鑑定書、調査書などを発行",
			"修理・設備・買取「藤和安心保証システム」",
		],
		iconKey: "fileText",
		href: "#businessReborn",
	},
	{
		id: "auction",
		label: "",
		title: "不動産売却計画書\n+\n不動産オークション",
		subtitle: "不動産価値の最大化",
		description:
			"価値を正しく可視化し、オークションの仕組みで競争を生み出すことで、不動産の売却額を引き上げます。",
		details: [
			"不動産の価値を最大化して売る",
			"土地の価値を知れば、買い手は動く",
			"オークションでさらに高値売却",
		],
		iconKey: "gavel",
		href: "#plan",
	},
];
