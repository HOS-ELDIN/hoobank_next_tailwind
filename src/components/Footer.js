import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="flexCenter sm:pt-16 pt-6 flex-col">
			<div className="flexStart flex-col md:flex-row mb-10 w-full gap-10 ">
				<div className="flex flex-col flex-1 justify-start">
					<Image
						src={logo}
						alt="logo"
						className="w-[266px] h-[72px] object-contain cursor-pointer"
					/>
					<p className="paragraph mt-8 max-w-[310px]">
						A new way to make the payments easy, reliable and secure.
					</p>
				</div>

				<div className="flex flex-[1.5] flex-row w-full justify-between flex-wrap mt-10 md:mt-0 gap-8">
					{footerLinks.map((col, index) => (
						<div key={col.title + index}>
							<h3 className="text-lg font-medium leading-7 mb-6">
								{col.title}
							</h3>
							<ul className="flex flex-col text-dimWhite leading-6 gap-3">
								{col.links.map((link) => (
									<li key={link.name} className="hover:text-secondary">
										<a href={link.link} className="leading-6">
											{link.name}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<div className="border-t-[1px] border-dimWhite py-8 flex justify-between w-full flex-col md:flex-row text-center gap-5">
				<p className="paragraph">
					Copyright &copy; {new Date().getFullYear()} HooBank. All Rights
					Reserved.
				</p>
				<div className="flexCenter gap-5 px-4">
					{socialMedia.map((icon) => (
						<a href={icon.link} key={icon.id} className="button">
							<Image src={icon.icon} alt={icon.id} />
						</a>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
