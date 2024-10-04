const Form = () => {
	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const { firstname, lastname, email } = Object.fromEntries(formData);
		console.log({ firstname, lastname, email });
	};
	return (
		<div className="w-full">
			<form
				onSubmit={handleSubmit}
				className="mt-10 flex w-full flex-col gap-4 py-3"
			>
				<div className="w-full gap-4 space-y-4 lg:flex lg:space-y-0">
					{/* First name */}
					<div className="flex w-full flex-col gap-2">
						<label
							htmlFor="firstname"
							className="w-fit cursor-pointer text-sm font-semibold"
						>
							First name
						</label>
						<input
							type="text"
							name="firstname"
							placeholder="First name"
							id="firstname"
							className="rounded-lg border border-[#F2F2F2] bg-[#FAFAFA] px-3 py-3 text-[#666666] transition-colors duration-300 placeholder:text-sm placeholder:text-[#808080] focus:border-[#D1B1D6] focus:shadow-md focus:outline-none"
							required
						/>
					</div>

					{/* Last name */}
					<div className="flex w-full flex-col gap-2">
						<label
							htmlFor="lastname"
							className="w-fit cursor-pointer text-sm font-semibold"
						>
							Last name
						</label>
						<input
							type="text"
							name="lastname"
							id="lastname"
							placeholder="Last name"
							className="rounded-lg border border-[#F2F2F2] bg-[#FAFAFA] p-3 px-3 text-[#666666] caret-current transition-colors duration-300 placeholder:text-sm placeholder:text-[#808080] focus:border-[#D1B1D6] focus:shadow-md focus:outline-none"
							required
						/>
					</div>
				</div>
				{/* Email */}
				<div className="flex w-full flex-col gap-2">
					<label
						htmlFor="email"
						className="w-fit cursor-pointer text-sm font-semibold"
					>
						Email
					</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Your email"
						autoComplete="on"
						className="rounded-lg border border-[#F2F2F2] bg-[#FAFAFA] p-3 px-3 text-[#666666] caret-current transition-colors duration-300 placeholder:text-sm placeholder:text-[#808080] focus:border-[#D1B1D6] focus:shadow-md focus:outline-none"
						required
					/>
				</div>
				<button
					type="submit"
					className="mt-3 w-full cursor-pointer rounded-lg bg-[#6B047C] p-3 text-white transition-colors duration-300 hover:bg-[#6B047C]/90"
				>
					Join Mailing list
				</button>
			</form>
		</div>
	);
};

export default Form;
