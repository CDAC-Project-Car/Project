export function Select({
  id,
  options,
  value,
  onChange,
  defaultOption,
  disabled,
}) {
  return (
    <select
      id={id}
      value={value || ""}
      onChange={onChange}
      disabled={disabled}
      className="form-select"
    >
      <option value="">{defaultOption}</option>
      {options.map((option) => {
        if (option.carModelId !== -1) {
          return (
            <option value={option.carModelId}>{option.carSeriesName}</option>
          );
        }

        return (
          <option value={option.carSeriesName}>{option.carSeriesName}</option>
        );
      })}
    </select>
  );
}
