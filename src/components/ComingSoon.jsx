import Form from "./Form";

const ComingSoon = () => {
	return (
		<div className="inter container w-full mx-auto bg-white lg:flex">
			{/* left section */}
			<div className="h-screen w-full px-5 py-3 lg:w-1/2 lg:px-10">
				{/* logo */}
				<div className="py-2 lg:py-5">
					<img className="h-12" src="/logo.svg" alt="logo" />
				</div>

				<div>
					{/* Text */}
					<div className="mt-8 lg:mt-10">
						<h1 className="text-3xl font-bold text-[#1A011E]">
							We are Coming Soon...
						</h1>
						<p className="mt-3 text-[#808080]">
							Lawtrolley is an online legal marketplace where users can buy
							legal templates, software, books, events and services from legal
							professionals anywhere in the world. We are currently building the
							perfect site for you, but in the meantime, feel free to sign up to
							our mailing list below and keep up to date with all the exciting
							things we have going on!
						</p>
					</div>

					{/* Lines */}
					<div className="mt-10 flex items-center gap-5">
						<div className="h-1 w-36 rounded-full bg-[#6B047C]"></div>
						<div className="h-1 w-36 rounded-full bg-[#F0E6F2]"></div>
					</div>

					{/* Form */}
					<Form />
				</div>
			</div>

			{/* right section */}

			<div className="relative hidden h-fit w-full overflow-hidden lg:block lg:h-screen lg:w-1/2">
				<img
					src="/img1.png"
					alt="img1"
					className="absolute -top-10 left-20 hidden h-72 lg:block"
				/>

				<img
					src="/img2.png"
					alt="img2"
					className="absolute right-0 top-1/4 hidden h-80 lg:block"
				/>

				<img
					src="/img3.png"
					alt="img3"
					className="-bottom-8 left-28 h-72 lg:absolute"
				/>
			</div>
		</div>
	);
};

export default ComingSoon;
