import { type InputHTMLAttributes, forwardRef } from "react";

interface InputAccountProps extends InputHTMLAttributes<HTMLInputElement> {
  htmlFor: string;
  label: string;
  name: string;
  id: string;
}

export const InputAccount = forwardRef<HTMLInputElement, InputAccountProps>(
  ({ htmlFor, label, ...props }, ref) => {
    return (
      <>
        <label
          htmlFor={htmlFor}
          className="font-inter text-sm font-semibold text-brown"
        >
          {label}
        </label>
        <input
          ref={ref}
          className="border-solid border border-gray-100 rounded-lg outline-none py-3 px-4 w-80"
          {...props}
        />
      </>
    );
  }
);

InputAccount.displayName = "InputAccount";
