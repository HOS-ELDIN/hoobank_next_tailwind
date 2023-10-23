import React from "react";
import { discount, robot, shadow01 } from "../assets";
import Image from "next/image";
import GetStarted from "./GetStarted";
import { hero } from '@/languages/data'

const Hero = ({lang}) => {
	return (
		<section id="home" className="flex md:flex-row flex-col paddingY ">
			<div className="flex-1 flexStart flex-col xl:px-0 sm:px-16 px-6 relative">
				<div className="flex flex-row items-center py-1.5 px-4 bg-discount-gradient rounded-[10px] mb-2">
					<Image
						src={discount}
						alt="discount sign"
						className="w-8 aspect-square"
					/>
					<p className="paragraph m-2">
						<span className="text-white">20% </span>DISCOUNT FOR
						<span className="text-white"> 1 MONTH </span>ACCOUNT
					</p>
				</div>

				<div className="flex flex-row justify-between items-center w-full">
					<h1 className="flex-1 ss:text-7xl text-[52px] font-semibold ss:leading-[100px] leadng-[75px]">
						The Next <br />
						<span className="text-gradient">Generation</span> <br />
					</h1>
					<div className="ss:flex hidden md:mr-4 mr-0 ">
						<GetStarted />
					</div>
				</div>
				<h1 className=" ss:text-[68px] text-[52px] font-semibold ss:leading-[100px] leading-[75px] w-full">
					{hero.heading[lang]}
				</h1>
				<p className="paragraph max-w-[470px] mt-5 ">
					Our team of experts uses a methodology to identify the credit cards
					most likely to fit your needs. We examine annual percentage rates,
					annual fees.
				</p>
				<div className="w-[195px] h-[324px] rounded-[324px] bg-white filter blur-[225px] absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" />
			</div>

			<div className="flex-1 flex flexCenter md:my-0 my-10 relative">
				<div className="relative z-[5]">
					<Image
						src={robot}
						alt="robot"
						className="w-full h-full relative z-[5]"
					/>

					<Image
						src={shadow01}
						alt=""
						className="w-full h-full absolute z-0 top-0 right-[53px]"
					/>
				</div>
				<div className="absolute z-0 w-[40%] h-[35%] top-0 pink__gradient" />
				<div className="absolute z-1 w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
				<div className="absolute z-0 w-[50%] h-[50%] bottom-20 right-20 blue__gradient" />
			</div>
		</section>
	);
};

export default Hero;
