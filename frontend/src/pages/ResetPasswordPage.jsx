import { useState } from "react";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { useNavigate, useParams, Link } from "react-router-dom";
import Input from "../components/Input";
import { Lock } from "lucide-react";
import toast from "react-hot-toast";

const ResetPasswordPage = () => {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const [errors, setErrors] = useState({
		password: "",
		confirmPassword: "",
	});

	const { resetPassword, isLoading } = useAuthStore();
	const { token } = useParams();
	const navigate = useNavigate();

	const strongPasswordRegex =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()[\]{}\-_=+|;:'",.<>/\\]).{8,}$/;

	const validate = () => {
		const newErrors = {};

		if (!password.trim()) {
			newErrors.password = "Password is required";
		} else if (!strongPasswordRegex.test(password)) {
			newErrors.password =
				"Password must be 8+ chars with uppercase, lowercase, number & special character";
		}

		if (!confirmPassword) {
			newErrors.confirmPassword = "Please confirm your password";
		} else if (password !== confirmPassword) {
			newErrors.confirmPassword = "Passwords do not match";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validate()) return;

		try {
			await resetPassword(token, password);
			toast.success("Password reset successful. Redirecting to login...");
			setTimeout(() => navigate("/login"), 2000);
		} catch (err) {
			toast.error(
				err?.response?.data?.message || "Invalid or expired reset link"
			);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
		>
			<div className="p-8">
				<h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
					Reset Password
				</h2>

				<p className="text-sm text-gray-400 text-center mb-6">
					Enter a new password for your account.
				</p>

				<form onSubmit={handleSubmit}>
					<Input
						icon={Lock}
						type={showPassword ? "text" : "password"}
						placeholder="New Password"
						value={password}
						error={errors.password}
						onChange={(e) => {
							setErrors({ ...errors, password: "" });
							setPassword(e.target.value);
						}}
					/>
					

					<Input
						icon={Lock}
						type={showPassword ? "text" : "password"}
						placeholder="Confirm Password"
						value={confirmPassword}
						error={errors.confirmPassword}
						onChange={(e) => {
							setErrors({ ...errors, confirmPassword: "" });
							setConfirmPassword(e.target.value);
						}}
					/>

					<div className="flex justify-end mt-2">
						<button
							type="button"
							onClick={() => setShowPassword(!showPassword)}
							className="text-sm text-emerald-400 hover:underline"
						>
							{showPassword ? "Hide password" : "Show password"}
						</button>
					</div>

					<motion.button
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className="w-full py-3 px-4 mt-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 transition"
						type="submit"
						disabled={isLoading}
					>
						{isLoading ? "Resetting..." : "Set New Password"}
					</motion.button>
				</form>

				<p className="text-center mt-6 text-sm text-gray-400">
					Go back to{" "}
					<Link to="/login" className="text-emerald-400 hover:underline">
						Login
					</Link>
				</p>
			</div>
		</motion.div>
	);
};

export default ResetPasswordPage;
