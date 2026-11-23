import React from "react";
import { fieldClass, labelClass } from "./Input";

const toId = (s) => (s ? s.toLowerCase().replace(/[^a-z0-9]+/g, "-") : undefined);

const Textarea = ({ label = "", id, name, required = false, className = "", rows = 5, ...rest }) => {
  const fieldId = id || toId(label || rest.placeholder);
  return (
    <div className={`text-left ${className}`}>
      {label && (
        <label htmlFor={fieldId} className={labelClass}>
          {label}
          {required && <span className="text-secondary"> *</span>}
        </label>
      )}
      <textarea id={fieldId} name={name || fieldId} rows={rows} required={required} className={`${fieldClass} resize-y`} {...rest} />
    </div>
  );
};

export default Textarea;
