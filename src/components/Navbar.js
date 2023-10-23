"use client";
import Image from "next/image";
import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = ({lang,setLang}) => {
	const [toggle, setToggle] = useState(false);
	const handleLang = (e) => {
		console.log(e.target.value);
		setLang(e.target.value);
	};
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

			{/* <label
				htmlFor="language"
				className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>
				Select an option
			</label>
			<select
				id="language"
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				onChange={(e) => handleLang(e)}
			>
				<option value="en">English</option>
				<option value="ar">العربية</option>
			</select> */}

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
