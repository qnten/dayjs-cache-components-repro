import { Suspense } from "react";

export function generateStaticParams() {
	return [{ id: "1" }];
}
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Suspense fallback={"loading"}>{children}</Suspense>
			</body>
		</html>
	);
}
