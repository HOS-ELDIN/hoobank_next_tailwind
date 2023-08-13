import React from "react";
import { apple, bill, google } from "../assets";
import Image from "next/image";

const Billing = () => {
	return (
		<section className="sectionReverse justify-between" id="product">
			<div className="sectionImgReverse">
				<Image src={bill} alt="billing" className="w-full h-full relative" />
				<div className="absolute z-[3] -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient" />
				<div className="absolute z-0 -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full blue__gradient" />
			</div>
			<div className="sectionInfo !flex-initial">
				<h2 className="heading2">
					Easily control your <br className="hidden sm:block" /> billing &
					invoicing.
				</h2>
				<p className="paragraph max-w-[470px] mt-6 mb-12">
					Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
					aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
					placerat.
				</p>
				<div className="flex justify-start items-center gap-8">
					<Image src={apple} alt="apple store" className="w-[128px] h-[42px] object-contain cursor-pointer" />
					<Image src={google} alt="google play" className="w-[128px] h-[42px] object-contain cursor-pointer" />
				</div>
			</div>
		</section>
	);
};

export default Billing;
