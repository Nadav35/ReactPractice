import React, { useState, useEffect } from 'react';

export default function FormWithHooks(props) {
  const name = useFormInput('Mary');
  const surname = useFormInput('Poppins');
  const width = useWindowWidth();

  useEffect(() => {
    document.title = `${name} ${surname}`;
  });


  return (
    <div className="form-container">
      <div className="first-name">
        <label htmlFor="name">Name</label>
        <input {...name} />
      </div>
      <div className="surname">
        <label htmlFor="surname">Surname</label>
        <input {...surname} />

      </div>
      <div className="width">
        {width}
      </div>
    </div>
  );
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  };
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return width;
}