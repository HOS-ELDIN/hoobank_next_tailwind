import React from "react";
import { arrowUp } from "../assets";
import Image from "next/image";
const GetStarted = () => {
	return (
		<div className="flexCenter w-[140px] h-[140px] rounded-full bg-blue-gradient p-0.5 cursor-pointer">
			<div className="flexCenter flex-col bg-primary w-full h-full rounded-full">
				<p className="font-medium text-[18px] leading-[23px]">
					<span className="text-gradient mr-2">Get</span>
					<Image
						src={arrowUp}
						alt="arrow up"
						className="w-[23px] aspect-square object-contain inline"
					/>
				</p>

				<p className="text-gradient font-medium text-[18px] leading-[23px]">
					Started
				</p>
			</div>
		</div>
	);
};

export default GetStarted;
