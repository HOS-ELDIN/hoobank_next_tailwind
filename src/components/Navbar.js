"use client";
import Image from "next/image";
import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<nav className="w-full flex py-6 justify-between items-center navbar">
			<Image src={logo} alt="logo" className="w-[124px] h-[32px]" />
			<ul className="list-none sm:flex hidden items-center justify-end gap-10 ">
				{navLinks.map((link, index) => (
					<li
						key={link.id + index}
						className=" font-normal cursor-pointer text-base text-dimWhite hover:text-white"
					>
						<a href={`#${link.id}`}>{link.title} </a>
					</li>
				))}
			</ul>
			<div className="sm:hidden flex flex-1 justify-end items-center">
				<Image
					src={toggle ? close : menu}
					alt="menu"
					className="cursor-pointer w-[28px] h-[28px] object-contain"
					onClick={() => setToggle((prev) => !prev)}
				/>
				<div
					className={`${
						toggle ? "flex" : "hidden"
					} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar	z-50`}
				>
					<ul className="list-none flex flex-col items-center justify-center gap-10 w-full">
						{navLinks.map((link, index) => (
							<li
								key={link.id + index}
								className=" font-normal cursor-pointer  text-base text-dimWhite hover:text-white"
							>
								<a href={`#${link.id}`}>{link.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
