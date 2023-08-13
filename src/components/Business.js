import React from "react";
import { features } from "../constants";
import Button from "./Button";
import Image from "next/image";

const Business = () => {
	return (
		<section className="section " id="features">
			<div className="sectionInfo">
				<h2 className="heading2 ">
					You do the business, <br className="hidden sm:block" /> we’ll handle
					the money.
				</h2>
				<p className="paragraph max-w-[470px] mt-6 mb-12">
					With the right credit card, you can improve your financial life by
					building credit, earning rewards and saving money. But with hundreds
					of credit cards on the market.
				</p>
				<Button />
			</div>
			<div className="sectionImg flex-col gap-4 ">
				{features.map((feat) => (
					<div
						key={feat.id}
						className="flexCenter gap-5 rounded-[20px] select-none p-5 max-w-[472px] feature-card flex-col text-center xs:flex-row xs:text-left"
					>
						<div className="bg-dimBlue w-16 h-16  rounded-full flexCenter shrink-0">
							<Image
								src={feat.icon}
								alt={feat.id}
								className="w-8 h-8 object-contain"
							/>
						</div>
						<div>
							<h3 className="text-[18px] font-semibold leading-6 capitalize mb-2">
								{feat.title}
							</h3>
							<p className="text-dimWhite">{feat.content}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Business;
