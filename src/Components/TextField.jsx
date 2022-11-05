import React from "react";

const TextField = ({ label, inputProps, onChange, value }) => {
  return (
    <div className="form-group">
      <label className="label">{label}</label>
      <input
        className="input"
        {...inputProps}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default TextField;
