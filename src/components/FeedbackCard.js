import React from "react";
import { quotes } from "../assets";
import Image from "next/image";

const FeedbackCard = ({ content, name, title, img, id }) => {
	return (
		<div className="feedback-card px-10 py-14 rounded-[20px] flex flex-col sm:w-[370px] justify-between">
			<div>
				<Image src={quotes} alt="quotes" className="w-[43] h-[28]" />
				<p className="mt-10 mb-6 text-lg leading-8">{content}</p>
			</div>
			<div className="flex items-center gap-4 justify-start">
				<Image src={img} alt={name} className="w-12 h-12 shrink-0" />
				<div>
					<h4 className="text-xl leading-8">{name}</h4>
					<p className="text-dimWhite ">{title}</p>
				</div>
			</div>
		</div>
	);
};

export default FeedbackCard;
