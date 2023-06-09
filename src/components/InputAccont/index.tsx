import { type InputHTMLAttributes, forwardRef } from "react";

interface InputAccountProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  id: string;
  error?: string;
}

export const InputAccount = forwardRef<HTMLInputElement, InputAccountProps>(
  ({ id, label, error, ...props }, ref) => {
    return (
      <div className="max-w-xs ">
        <label
          htmlFor={id}
          className="font-inter text-sm font-semibold text-brown"
        >
          {label}
        </label>

        <input
          ref={ref}
          id={id}
          className="border-solid border border-gray-100 rounded-lg outline-none py-3 px-4 w-80"
          {...props}
        />
        {error != null && <span className="text-red-600 ">{error}</span>}
      </div>
    );
  }
);

InputAccount.displayName = "InputAccount";
