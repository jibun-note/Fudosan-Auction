/**
 * Flow セクション共通の色・タイミング・アクセシビリティ用クラス断片。
 * UI の見た目を一箇所で調整するための定数群。
 */

/** 参考: GOLD / GOLD_LIGHT */
export const FLOW_GOLD = "#c5a55a";
export const FLOW_GOLD_LIGHT = "#e8d5a0";
/** アクティブ円グラデの左上（メインよりやや濃い程度／#92753c は濃すぎるため中間トーン） */
export const FLOW_GOLD_DEEP = "#ab8d4b";
/** メインカード背景（参考デザイン寄せのディープネイビー） */
export const CARD_BG = "#1c2e49";
export const FLOW_CREAM = "#f9f8f6";
/** カード内の大きなステップ数字（背景よりわずかに明るいトーン） */
export const CARD_STEP_DIGIT = "#314b6b";
/** タイムライン番号円: アクティブ（左上＝濃い → 右下＝薄い） */
export const GRADIENT_STEP_ACTIVE = `linear-gradient(to bottom right, ${FLOW_GOLD_DEEP} 0%, ${FLOW_GOLD} 48%, ${FLOW_GOLD_LIGHT} 100%)`;
export const CONNECTOR_TRACK = "#dcd5c8";
export const STEP_LABEL_MUTED = "#a3a3a3";
export const FOCUS_OUTLINE_GOLD =
	"focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c5a55a]";
/** モバイル: この距離（px）以上の水平スワイプで前後ステップへ */
export const SWIPE_THRESHOLD_PX = 56;
/** 自動で次のステップへ進むまでの時間（接続線アニメと同期） */
export const AUTO_SLIDE_MS = 5500;
