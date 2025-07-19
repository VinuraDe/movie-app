import React, { useState } from "react";
import { X } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  required?: boolean;
  error?: string | undefined;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", placeholder, className, ...props }, ref) => {
    const [inputValue, setInputValue] = useState("");

    const isPasswordType = type === "password";
    const canClear =
      (type === "text" || type === "email") && inputValue.length > 0;

    const effectiveType = "text"

    const handleClear = () => {
      setInputValue("");
      if (props.onChange) {
        const event = {
          target: { value: "" },
        } as React.ChangeEvent<HTMLInputElement>;
        props.onChange(event);
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      if (props.onChange) {
        props.onChange(e);
      }
    };

    return (
      <div className="relative w-full">
        <input
          type={effectiveType}
          placeholder={placeholder}
          ref={ref}
          value={inputValue}
          onChange={handleChange}
          className={`
            w-full
            rounded
            px-6
            py-2
            text-gray-900
           placeholder:text-[#9FA4A8]
            placeholder:font-medium
            focus:outline-none
            focus:ring-2
            focus:ring-black
            focus:border-transparent
            ${isPasswordType || canClear ? "pr-12" : ""}
            ${className}
          `}
          style={{
            borderRadius: "5px",
            paddingTop: "8px",
            paddingRight: isPasswordType || canClear ? "48px" : "16px",
            paddingBottom: "8px",
            paddingLeft: "24px",
          }}
          {...props}
        />

        {canClear && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            <X size={18} aria-label="Clear input" />
          </button>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
