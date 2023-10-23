'use client'
import {
	Navbar,
	Billing,
	CardDeal,
	Business,
	Clients,
	CTA,
	Stats,
	Footer,
	Testimonials,
	Hero,
} from "@/components";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const [lang, setLang] = useState("en");

	return (
		<main className="bg-primary w-full overflow-hidden text-white font-poppins">
			{/* this is for navbar */}
			<div className="paddingX flexCenter">
				<div className="boxWidth">
					<Navbar lang={lang} setLang={setLang} />
				</div>
			</div>

			{/* this is for hero section */}
			<div className="flexStart">
				<div className="boxWidth">
					<Hero lang={lang} />
				</div>
			</div>

			{/* this is for the rest sections */}
			<div className="flexStart paddingX">
				<div className="boxWidth">
					<Stats />
					<Business />
					<Billing />
					<CardDeal />
					<Testimonials />
					<Clients />
					<CTA />
				</div>
			</div>

			<div className="flexStart paddingX bg-black">
				<div className="boxWidth">
					<Footer />
				</div>
			</div>
		</main>
	);
}
