import React from "react";
import { stats } from "../constants";

const Stats = () => {
	return (
		<section className="flex w-full justify-around items-center flex-wrap gap-6 flex-col sm:flex-row mb-6 sm:mb-20">
			{stats.map((stat, index) => (
				<>
					<div key={stat.id} className="flexCenter gap-4 ">
						<span className="ss:text-[41px] text-[35px] font-semibold leading-[43px] ss:leading-[54px]">
							{stat.value}
						</span>
						<p className="text-gradient ss:text-[21px] text-[18px] font-normal leading-[21px] ss:leading-[27px] uppercase">
							{stat.title}
						</p>
					</div>
					{index !== stats.length - 1 && (
						<div className="w-[1px] bg-white h-[14px] hidden md:block " />
					)}
				</>
			))}
		</section>
	);
};

export default Stats;
