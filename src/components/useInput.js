import { useState } from "react";

const useInput = (initialVal, validator) => {
  const [value, setValue] = useState(initialVal);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;

    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
    console.log(value);
  };

  return { value, onChange };
};

export { useInput };