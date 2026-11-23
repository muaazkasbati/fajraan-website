import React from "react";

export const fieldClass =
  "w-full rounded-none border-0 border-b border-primary/20 bg-transparent px-0 py-3 text-[17px] text-ink placeholder:text-muted/70 outline-none transition-colors focus:border-primary focus-visible:outline-none";

export const labelClass = "block text-[13px] font-semibold uppercase tracking-[0.06em] text-muted";

const toId = (s) => (s ? s.toLowerCase().replace(/[^a-z0-9]+/g, "-") : undefined);

const Input = ({ label = "", id, name, required = false, className = "", type = "text", autoComplete = "off", ...rest }) => {
  const fieldId = id || toId(label || rest.placeholder);
  return (
    <div className={`text-left ${className}`}>
      {label && (
        <label htmlFor={fieldId} className={labelClass}>
          {label}
          {required && <span className="text-secondary"> *</span>}
        </label>
      )}
      <input id={fieldId} name={name || fieldId} type={type} required={required} autoComplete={autoComplete} className={fieldClass} {...rest} />
    </div>
  );
};

export default Input;
