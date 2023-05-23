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
      <>
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
        {error ?? <span className="text-red-500">{error}</span>}
      </>
    );
  }
);

InputAccount.displayName = "InputAccount";
