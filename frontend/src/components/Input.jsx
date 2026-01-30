const Input = ({ icon: Icon, error, ...props }) => {
	return (
		<div className="mb-3">
			<div
				className={`flex items-center rounded-lg px-4 py-3 border 
				transition-colors duration-200
				${error
						? "border-red-500 focus-within:border-red-500"
						: "border-gray-600 focus-within:border-emerald-500"
					}`}
			>
				{Icon && (
					<Icon
						className={`mr-3 ${error ? "text-red-400" : "text-emerald-400"
							}`}
						size={18}
					/>
				)}

				<input
					{...props}
					className="bg-transparent outline-none flex-1 text-white placeholder-gray-400"
				/>
			</div>

			{error && (
				<p className="text-red-400 text-xs mt-1">
					{error}
				</p>
			)}
		</div>
	);
};

export default Input;
