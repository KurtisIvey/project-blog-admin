import React from "react";

const Input = ({
  name,
  label,
  type,
  placeholder,
  onChange,
  value,
  minlength,
}) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder ? placeholder : null}
        required
        onChange={(e) => onChange(e.target.value)}
        value={value}
        minLength={minlength ? 6 : 0}
        autoComplete="off"
      />
    </div>
  );
};

export default Input;
