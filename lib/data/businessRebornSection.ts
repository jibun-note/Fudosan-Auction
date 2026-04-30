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
			"宅地建物取引士/一般社団法人レトロフィットジャパン協会による、権利・遵法性・雨漏り・シロアリ・耐久年数評価など重要な項目をチェック。",
			"土地・建物調査の上、不動産鑑定評価書を発行、評価。土地建物割合を明記し発行します。",
		],
	},
	{
		iconKey: "shieldCheck",
		title: "お引渡し後",
		subtitle: "中古アパートのリスクを完全保証",
		description: [
			"サブリース契約により、物件保有期間中の家賃収入を保証します。",
			"設備保証による、所有期間中住宅設備機器、退去時の原状回復費用のすべてを無制限で保証。",
		],
	},
	{
		iconKey: "documentCurrencyYen",
		title: "売却時",
		subtitle: "売却時100％差額保証",
		description: [
			"不動産市状にかかわらず、当初購入価格の100％を保証。",
			"出口が約束された透明性で安心して所有いただける設計です。",
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
		answer: "弊社の積み上げてきたノウハウと特別な計算方法により、物件の仕入れを行います。\nオーナー様への売買契約書へも建物および土地の価額を明確に記載します。\n尚、不動産鑑定評価書や有識者による意見も踏まえて、建物割合を定めています。",
	},
	{
		question: "融資は利用可能ですか？",
		answer: "既存取引の金融機関のご利用も可能です。ご希望により提携金融機関のご紹介をさせていただきます。不動産担保、運転資金の一部として融資利用できます。融資金額は物件価格の50%～100%です。融資期間は5年～15年です。\n証券担保ローンも利用可能です。",
	},
	{
		question: "購入後の不動産管理はどうすればよろしいでしょうか？",
		answer: "藤和安心保障システムにより完全バックアップによる家賃の完全保証から、所有期間中の修繕の完全補償などの様々なサービスを提供させていただきます。\n管理戸数2,700戸　入居率98% ご安心下さい。",
	},
	{
		question: "事業継承など株価評価減の対策になりますか？",
		answer: "株価評価減に活用できます。保有3年移行は、現預金等で所有しているより、投資不動産は評価額が大幅に低くなります。さらに築古不動産のため、建物評価は低くなります。",
	},
];
