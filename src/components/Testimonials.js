import React from "react";
import { feedback } from "../constants";
import { FeedbackCard } from "../components";

const Testimonials = () => {
	return (
		<section className="paddingY flexCenter flex-col relative " id="clients">
			<div className="absolute z-0 w-3/5  h-3/5 -right-1/2 rounded-full blue__gradient" />

			<div className="flex w-full justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
				<h2 className="heading2">
					What people are <br className="sm:block hidden" /> saying about us
				</h2>
				<div className="w-full md:mt-0 mt-6">
					<p className="paragraph max-w-[450px] ">
						Everything you need to accept card payments and grow your business
						anywhere on the planet.
					</p>
				</div>
			</div>

			<div className="flex justify-center items-stretch flex-col sm:flex-row w-full flex-wrap relative z-[1]">
				{feedback.map((card) => (
					<FeedbackCard key={card.id} {...card} />
				))}
			</div>
		</section>
	);
};

export default Testimonials;
