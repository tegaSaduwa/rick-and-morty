import React from "react";

const Select = ({ name, onChange, info }) => {
  console.log(info);
  return (
    <div className="d-flex justify-content-center  mt-3">
      <span className="col-6 mt-3 mx-3">
        <div className="input-group mb-3">
          <select
            onChange={onChange}
            onInput={onChange}
            name="select"
            className="form-select"
            id={name}
          >
            <option value="">Choose by Character</option>

            {info?.map(({ name, id }) => (
              <option value={name} key={id}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </span>
    </div>
  );
};

export default Select;
