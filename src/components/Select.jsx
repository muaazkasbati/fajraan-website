import React from "react";
import { fieldClass, labelClass } from "./Input";

const toId = (s) => (s ? s.toLowerCase().replace(/[^a-z0-9]+/g, "-") : undefined);

const Select = ({ label = "", id, name, options = [], placeholder = "Select an option", required = false, className = "", ...rest }) => {
  const fieldId = id || toId(label || placeholder);
  return (
    <div className={`relative text-left ${className}`}>
      {label && (
        <label htmlFor={fieldId} className={labelClass}>
          {label}
          {required && <span className="text-secondary"> *</span>}
        </label>
      )}
      <select id={fieldId} name={name || fieldId} required={required} defaultValue="" className={`${fieldClass} appearance-none pr-8 cursor-pointer`} {...rest}>
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" className="pointer-events-none absolute bottom-4 right-1 text-primary">
        <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  );
};

export default Select;
