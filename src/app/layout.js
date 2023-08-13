import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: "normal",
	display: "swap",
	variable: "--font-poppins",
});

export const metadata = {
	title: "Hoo Bank",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={poppins.variable}>
			<body className={poppins.className}>{children}</body>
		</html>
	);
}