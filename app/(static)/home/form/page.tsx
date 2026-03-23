import MaterialRequestForm from "@/components/form";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "資料請求 | 不動産オークション",
	description:
		"サービス資料の送付先として、請求先の氏名・住所・電話番号をご入力ください。税理士の顧問先向け不動産オークションのご案内です。",
};

export default function MaterialRequestPage() {
	return (
		<div className="min-h-screen bg-white font-sans text-gray-900">
			<MaterialRequestForm />
		</div>
	);
}
