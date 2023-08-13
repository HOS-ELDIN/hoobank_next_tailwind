import React from "react";
import Button from "./Button";
import Image from "next/image";
import { card } from "../assets";

const CardDeal = () => {
	return (
		<section className="section">
			<div className="sectionInfo">
				<h2 className="heading2 ">
					Find a better card deal <br className="hidden sm:block" />
					in few easy steps.
				</h2>
				<p className="paragraph max-w-[470px] mt-6 mb-12">
					Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
					aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
				</p>
				<Button />
			</div>
			<div className="sectionImg">
				<Image src={card} alt="card" className="w-full h-full " />
			</div>
		</section>
	);
};

export default CardDeal;
