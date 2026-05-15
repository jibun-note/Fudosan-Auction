/** アイコンは `BusinessRebornGuarantee.tsx` の `businessRebornGuaranteeIcons` と対応 */
export type BusinessRebornGuaranteeIconKey =
	| "documentMagnifyingGlass"
	| "shieldCheck"
	| "documentCurrencyYen";

export type BusinessRebornGuarantee = {
	iconKey: BusinessRebornGuaranteeIconKey;
	title: string;
	subtitle: string;
	description: string[];
};

/** 法人税対策の決定版の保証 */
export const businessRebornGuarantee: BusinessRebornGuarantee[] = [
	{
		iconKey: "documentMagnifyingGlass",
		title: "お引渡し前",
		subtitle: "土地建物の検査を実施",
		description: [
			"遵法性・雨漏り・シロアリ・耐久年数評価など重要項目を確認。",
			"土地建物割合を明記し、不動産鑑定評価書を発行。",
			"出口が約束された透明性で安心して所有いただける設計です。",
		],
	},
	{
		iconKey: "shieldCheck",
		title: "お引渡し後",
		subtitle: "中古アパートのリスクを完全保証",
		description: [
			"サブリース契約により、物件保有期間中の家賃収入を保証。",
			"住宅設備機器、退去時の原状回復費用のすべてを無制限で保証。",
		],
	},
	{
		iconKey: "documentCurrencyYen",
		title: "売却時",
		subtitle: "100％差額保証",
		description: [
			"不動産市況の変動にかかわらず、当初購入価格の100%を保証。",
			"出口が明確で、安心して所有いただける透明性の高い設計。",
		],
	},
];

/** `@/components/sesction/FaqSection` 用（サーバー・クライアント双方からインポート可） */

export type BusinessRebornFaqItem = {
	question: string;
	answer: string;
};

export const businessRebornFaqItems: BusinessRebornFaqItem[] = [
	{
		question: "この税繰延べ商品を税務署はどう考えるのか？",
		answer: "弊社では、積み上げてきたノウハウと独自の計算方法をもとに、物件の仕入れを行っております。\nまた、オーナー様との売買契約書には、建物および土地それぞれの価額を明確に記載いたします。\nなお、建物割合の算定にあたっては、不動産鑑定評価書や有識者の意見も踏まえ、適切に設定しております。",
	},
	{
		question: "融資は利用可能ですか？",
		answer: "既存のお取引金融機関をご利用いただくことも可能です。\nまた、ご希望に応じて提携金融機関のご紹介も承っております。\n融資につきましては、不動産担保や運転資金の一部としてご利用いただけます。\n融資金額は物件価格の50%～100%、融資期間は5年～15年を想定しております。\nなお、証券担保ローンのご利用も可能です。",
	},
	{
		question: "購入後の不動産管理はどうすればよろしいでしょうか？",
		answer: "弊社の安心保障システムにより、家賃保証をはじめ、所有期間中の修繕費用保証など、さまざまなサポートをご提供しております。\n万全のバックアップ体制のもと、安心して運用いただける環境を整えております。\n管理戸数3,040戸、入居率96.3%の実績を有しておりますので、安心してお任せください。",
	},
	{
		question: "事業継承など株価評価減の対策になりますか？",
		answer: "保有3年以降は、現預金等で保有する場合と比較して、投資用不動産は評価額が相対的に低くなる傾向があります。\nまた、築古不動産であるため建物評価も低く抑えられ、結果として株価評価減対策としてもご活用いただけます。",
	},
];
