import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-screen min-w-0 flex-col overflow-x-clip">
			<Header />
			<main className="min-w-0 flex-grow">{children}</main>
			<Footer />
		</div>
	);
}
