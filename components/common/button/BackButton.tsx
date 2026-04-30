"use client";

import { useRouter } from "next/navigation";
import * as React from "react";

import { ChevronLeftIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type BackButtonProps = Omit<React.ComponentProps<"button">, "type" | "onClick"> & {
	children: React.ReactNode;
};

/** ブラウザ履歴の一つ前に戻る。表示は `children` に任せる */
export function BackButton({ children, className, ...props }: BackButtonProps) {
	const router = useRouter();

	return (
		<Button
			type="button"
			variant="ghost"
			onClick={() => router.back()}
			className={cn(
				"h-auto min-h-0 gap-1 px-0 py-1 text-sm font-medium text-foreground cursor-pointer hover:bg-transparent hover:underline",
				className,
			)}
			{...props}
		>
			<ChevronLeftIcon className="size-4 shrink-0" aria-hidden />
			{children}
		</Button>
	);
}
