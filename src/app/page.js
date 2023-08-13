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

export default function Home() {
	return (
		<main className="bg-primary w-full overflow-hidden text-white font-poppins">
			{/* this is for navbar */}
			<div className="paddingX flexCenter">
				<div className="boxWidth">
					<Navbar />
				</div>
			</div>

			{/* this is for hero section */}
			<div className="flexStart">
				<div className="boxWidth">
					<Hero />
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
