import { ChangeEvent, FocusEvent, ReactNode } from "react";

interface FieldProps {
  name: string;
  label: string;
  value: string;
  setField: (e: ChangeEvent) => void;
  setBlur: (e: FocusEvent) => void;
  error?: string;
  helperText?: string;
  children?: ReactNode;
}

export default function CustomerInputField({
  name,
  label,
  value,
  setField,
  setBlur,
  helperText,
  error,
}: FieldProps) {
  return (
    <div className="py-4">
      <div className="flex flex-wrap justify-start items-center gap-4">
        <label htmlFor={name} className="font-bold mb-2 capitalize">
          {label}
        </label>
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <input
        type="text"
        name={name}
        value={value}
        onChange={(e) => setField(e)}
        onBlur={(e) => setBlur(e)}
        className="w-full rounded-xl p-2 bg-[#d9d9d9] text-black"
        disabled={name === "country"}
      />
      {helperText && (
        <div className="mt-1 text-gray-500">
          <p>{helperText}</p>
        </div>
      )}
    </div>
  );
}

export function CustomerSelectField({
  name,
  label,
  value,
  setField,
  setBlur,
  error,
  children,
}: FieldProps) {
  return (
    <div className="py-4">
      <div className="flex flex-wrap justify-start items-center gap-4">
        <label htmlFor={name} className="font-bold mb-2 capitalize">
          {label}
        </label>
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <select
        name={name}
        value={value}
        onChange={(e) => setField(e)}
        onBlur={(e) => setBlur(e)}
        className="w-full rounded-xl p-2 bg-[#d9d9d9] text-black"
        style={{}}
      >
        {children}
      </select>
    </div>
  );
}
