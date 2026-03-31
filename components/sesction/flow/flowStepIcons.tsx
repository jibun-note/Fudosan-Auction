/**
 * lib/data/flow-steps の iconKey と react-icons コンポーネントの対応表。
 * データ層はキーのみ持ち、描画側でアイコンを解決する。
 */
import type { ComponentType } from "react";
import { FaHandshake } from "react-icons/fa6";
import {
	HiOutlineChatBubbleBottomCenterText,
	HiOutlineCurrencyYen,
	HiOutlineDocumentText,
	HiOutlineScale,
} from "react-icons/hi2";

import type { FlowStepIconKey } from "@/lib/data/flow-steps";

type FlowStepIconProps = {
	className?: string;
	strokeWidth?: number;
};

export const flowStepIcons: Record<
	FlowStepIconKey,
	ComponentType<FlowStepIconProps>
> = {
	document: HiOutlineDocumentText,
	currencyYen: HiOutlineCurrencyYen,
	scale: HiOutlineScale,
	handshake: FaHandshake,
	chatBubble: HiOutlineChatBubbleBottomCenterText,
};
