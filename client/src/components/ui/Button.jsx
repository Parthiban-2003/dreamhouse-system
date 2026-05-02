import { memo } from "react";

const Button = memo(
  ({ children, type = "button", onClick, loading, variant = "primary" }) => {
    const base =
      "w-full py-2 px-4 rounded-xl font-medium transition duration-200";

    const variants = {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      outline: "border border-gray-300 hover:bg-gray-100",
    };

    return (
      <button
        type={type}
        onClick={onClick}
        disabled={loading}
        className={`${base} ${variants[variant]} ${
          loading ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Please wait..." : children}
      </button>
    );
  }
);

export default Button;