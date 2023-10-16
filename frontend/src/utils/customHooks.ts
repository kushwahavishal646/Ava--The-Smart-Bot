import { useState } from 'react';

const useToggle = (intialValue: boolean) : [boolean, (value?: boolean) => void] => {
  const [toggle, setToggle] = useState(intialValue);

  const toggleFunction = (value?: boolean) => {
    if (typeof value === 'boolean') {
      setToggle(value);
    } else {
      setToggle((state) => !state);
    }
  };

  return [toggle, toggleFunction];
};

export default useToggle;
