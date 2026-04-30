import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Button } from "../../ui/button";

const goldButtonClassName = cn(
	"h-auto min-h-0 shrink-0 border-transparent px-4 py-1.5 text-sm font-semibold text-white md:px-6 md:py-2 md:text-base",
	"inline-flex items-center justify-center gap-2 rounded-md",
	"bg-linear-to-r from-[#a67c2e] to-[#c5a55a] shadow-md duration-200",
	"hover:bg-transparent hover:brightness-110 hover:scale-[1.02]",
);

type GoldButtonAsLink = Omit<React.ComponentProps<typeof Link>, "className"> & {
	className?: string;
};

type GoldButtonAsButton = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
	className?: string;
	children: React.ReactNode;
	href?: never;
};

export type GoldButtonProps = GoldButtonAsLink | GoldButtonAsButton;

function isGoldButtonLink(props: GoldButtonProps): props is GoldButtonAsLink {
	return "href" in props;
}

export function GoldButton(props: GoldButtonProps) {
	const className = cn(goldButtonClassName, props.className);
	if (isGoldButtonLink(props)) {
		const { children, className: _c, ...linkProps } = props;
		return (
			<Button asChild className={className}>
				<Link {...linkProps}>{children}</Link>
			</Button>
		);
	}
	const { children, className: _c, type = "button", ...buttonProps } = props;
	return (
		<Button type={type} className={className} {...buttonProps}>
			{children}
		</Button>
	);
}
