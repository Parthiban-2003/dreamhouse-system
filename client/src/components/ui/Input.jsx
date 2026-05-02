import { memo } from "react";

const Input = memo(
  ({ label, type = "text", register, name, error, ...rest }) => {
    return (
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium text-gray-600">
          {label}
        </label>

        <input
          type={type}
          {...register(name)}
          {...rest}
          className={`w-full px-4 py-2 border rounded-xl outline-none focus:ring-2 ${
            error
              ? "border-red-500 focus:ring-red-400"
              : "focus:ring-blue-500"
          }`}
        />

        {error && (
          <p className="text-red-500 text-sm mt-1">{error.message}</p>
        )}
      </div>
    );
  }
);

export default Input;