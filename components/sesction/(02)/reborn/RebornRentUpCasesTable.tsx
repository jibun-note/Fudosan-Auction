import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { RebornRentUpCase, RebornRentUpCaseColumn } from "@/lib/data/rebornPointSection";
import { rebornRentUpCaseColumns } from "@/lib/data/rebornPointSection";

const headClass: Record<RebornRentUpCaseColumn["variant"], string> = {
	default: "bg-gray-100 px-1.5 py-2 text-center font-semibold text-navy md:px-2",
	accent: "bg-linear-to-br from-red-500 to-amber-400 px-1.5 py-2 text-center font-bold text-white md:px-2",
};

function cellClass(col: RebornRentUpCaseColumn): string {
	if (col.variant === "accent") {
		return "bg-linear-to-br from-red-500 to-amber-400 px-1.5 py-2 text-center font-bold tabular-nums text-white md:px-2";
	}
	if (col.isMultilineName) {
		return "max-w-40 whitespace-normal px-1.5 py-2 text-center text-navy md:max-w-none md:px-2";
	}
	return "px-1.5 py-2 text-center tabular-nums text-navy md:px-2";
}

export type RebornRentUpCasesTableProps = {
	rows: RebornRentUpCase[];
};

export function RebornRentUpCasesTable({ rows }: RebornRentUpCasesTableProps) {
	return (
		<div className="rounded-b-lg border border-t-0 border-gray-200 bg-white">
			<Table className="min-w-230 text-xs md:text-sm">
				<TableHeader>
					<TableRow className="border-gray-200 hover:bg-transparent">
						{rebornRentUpCaseColumns.map((col) => (
							<TableHead key={col.key} className={headClass[col.variant]}>
								{col.label}
							</TableHead>
						))}
					</TableRow>
				</TableHeader>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.settled + row.name} className="border-gray-200">
							{rebornRentUpCaseColumns.map((col) => (
								<TableCell key={col.key} className={cellClass(col)}>
									{row[col.key]}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
