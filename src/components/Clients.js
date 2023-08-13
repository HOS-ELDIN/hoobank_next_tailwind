import React from "react";
import { clients } from "../constants";
import Image from "next/image";

const Clients = () => {
	return (
		<section className="paddingY flex items-center justify-around flex-wrap gap-4 ">
			{clients.map((client) => (
				<div key={client.id} className="flexCenter flex-1 ">
					<Image
						src={client.logo}
						alt={client.logo}
						className=" sm:w-48 w-24 object-contain"
					/>
				</div>
			))}
		</section>
	);
};

export default Clients;
