export type AchievementCardData = {
	title: string;
	oldRentLabel: string;
	oldRentAmount: string;
	/** 左カード：金額直下の補足（任意） */
	oldCaption?: string;
	arrowLabel: string;
	newRentLabel: string;
	newRentAmount: string;
	/** 右カード：金額直下の補足（任意） */
	newCaption?: string;
	increasePercent: string;
	increaseBadgeSuffix: string;
	footer: string;
	currencyUnit: string;
};
