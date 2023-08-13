import React from "react";
import Button from "./Button";

const CTA = () => {
	return (
		<section className="bg-black-gradient-2 rounded-[20px] md:py-[72px] md:px-24 p-6 ss:p-10 backdrop:blur-[5px] flex md:flex-row flex-col  items-center  text-center md:text-left sm:my-20 my-6 gap-6 box-shadow">
			<div className="flex flex-col flex-1">
				<h2 className="heading2">Let’s try our service now!</h2>
				<p className="paragraph max-w-[470px] mt-6 mx-auto md:mx-0">
					Everything you need to accept card payments and grow your business
					anywhere on the planet.
				</p>
			</div>
			<div className="flexCenter ">
				<Button />
			</div>
		</section>
	);
};

export default CTA;
