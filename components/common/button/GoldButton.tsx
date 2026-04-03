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
				"h-auto min-h-0 border-transparent bg-gold px-4 py-2.5 text-sm font-semibold text-white hover:bg-gold-light md:px-6 md:py-3 md:text-base",
				className,
			)}
		>
			<Link {...linkProps}>{children}</Link>
		</Button>
	);
}
