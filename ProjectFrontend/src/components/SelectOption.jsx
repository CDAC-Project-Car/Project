import React from 'react';

function SelectOption({ cities }) {
  return (
    <>
      <option  value="">Select RTO Location</option>
      {cities.map((city, index) => (
        <option key={index} value={city}>
          {city}
        </option>
      ))}
    </>
  );
}

export default SelectOption;
