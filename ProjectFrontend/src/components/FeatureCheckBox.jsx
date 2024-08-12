import React from 'react';

const FeatureCheckbox = ({ id, label, checked, onChange }) => {
  return (
    <div className="custom-control custom-checkbox">
      <input
        type="checkbox"
        className="custom-control-input me-2"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label className="custom-control-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default FeatureCheckbox;
