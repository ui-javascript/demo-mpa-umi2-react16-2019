import React, { Component, useState, useEffect } from "react"
import ReactDOM from "react-dom"

import useForm from 'react-hook-form';

function App() {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook

  // callback when validation pass
  const onSubmit = data => {
    debugger
    console.log(data);
  };

  return (
    <form className={"p-2"} onSubmit={handleSubmit(onSubmit)}>
      <div className={"mt-2"}>
        <input name="firstname" ref={register} /> {/* register an input */}
      </div>

      <div className={"mt-2"}>
        <input name="lastname" ref={register({ required: true })} />
        {errors.lastname && 'Last name is required.'}
      </div>


      <div className={"mt-2"}>
        <input name="age" ref={register({ pattern: /\d+/ })} />
        {errors.age && 'Please enter number for age.'}
      </div>

      <div className={"mt-2"}>
        <input type="submit"
          // value={'提交'}
        />
      </div>


    </form>
  );
}


ReactDOM.render(<App />, document.getElementById("root"));
