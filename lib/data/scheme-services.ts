/** `@/components/sesction/scheme` 用（サーバー・クライアント双方からインポート可） */
export type SchemeServiceIconKey = "building2" | "fileText" | "gavel";

export type SchemeService = {
	id: string;
	name: string;
	label: string;
	title: string;
	subtitle: string;
	description: string;
	details: string[];
	iconKey: SchemeServiceIconKey;
	href: string;
};

export const schemeServices: SchemeService[] = [
	{
		id: "reborn",
		name: "b'CASA re-born\n不動産",
		label: "「法人税対策」が\n高いと言われた！",
		title: "b'CASA re-born\n不動産",
		subtitle: "b'CASA re-born不動産により節税と資産形成を実現！",
		description: "「法人税が高い！」と言われた企業オーナー様必見",
		details: [
			"ご相談から売却までワンストップ・サポート",
			"保険商品等に代わる優位性",
			"税金繰延べ効果",
			"減価償却アップ",
			"各種鑑定書、調査書などを発行",
			"修理・設備・買取「藤和安心保証システム」",
		],
		iconKey: "building2",
		href: "https://towa-corporation.jp/re-born_hojin/",
	},
	{
		id: "sales-plan",
		name: "不動産\n売却計画書",
		label: "安く売らないために！",
		title: "不動産\n売却計画書",
		subtitle: "あなたの不動産価値の最大化が目的です",
		description:
			"土地の価値（価格）はその利用方法で決まります。私たちは、分譲住宅、投資用アパートマンション、医療テナントなど様々な利用方法を専門スタッフが検証の上、ご提案。その土地の価値を引き出し、最大化いたします。",
		details: [
			"豊富な資料を元にあらゆる角度から徹底分析",
			"物件を多角的に検証し最大限の利益を試算",
			"迅速に結論を導きベストの選択をご提案",
		],
		iconKey: "fileText",
		href: "https://hudousantakakuuritai.com/keikakusyo/",
	},
	{
		id: "auction",
		name: "不動産の\nジャパン\nオークション",
		label: "高く売るために！",
		title: "不動産の\nジャパンオークション",
		subtitle: "なぜ、不動産のジャパンオークションは高く売れるのか?",
		description:
			"その土地に何が建てられるか、どんな活用法があるのかあなたはご存知ですか？各専門分野のプロである私たちにお任せください。あなたの不動産の本当の価値を見極めます！",
		details: [
			"不動産の価値を最大化して売る",
			"土地の価値を知れば、書いては動く",
			"オークションでさらに高値売却",
		],
		iconKey: "gavel",
		href: "https://hudousantakakuuritai.com/jpnauction/",
	},
];
