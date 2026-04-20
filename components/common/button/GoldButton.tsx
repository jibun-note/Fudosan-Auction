import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Button } from "../../ui/button";

export type GoldButtonProps = Omit<React.ComponentProps<typeof Link>, "className"> & {
	className?: string;
};

export function GoldButton({ className, children, ...linkProps }: GoldButtonProps) {
	return (
		<Button
			asChild
			className={cn(
				"h-auto min-h-0 shrink-0 border-transparent px-4 py-1.5 text-sm font-semibold text-white md:px-6 md:py-2 md:text-base",
				"inline-flex items-center justify-center gap-2 rounded-md",
				"bg-linear-to-r from-[#a67c2e] to-[#c5a55a] shadow-md duration-200",
				"hover:bg-transparent hover:brightness-110 hover:scale-[1.02]",
				className,
			)}
		>
			<Link {...linkProps}>{children}</Link>
		</Button>
	);
}
