import React from "react";
import { useDispatch } from "react-redux";
import { incCounter, resetCounter } from "../../lib/action/action";

const Hero = () => {
  let dispatch = useDispatch();
  return (
    <div className="hero">
      <div className="container">
        <div className="hero_contents">
          <h1>Hero</h1>
          <button onClick={() => dispatch(incCounter(1))}>increment</button>
          <button onClick={() => dispatch(incCounter(10))}>increment</button>
          <button onClick={() => dispatch(incCounter(100))}>increment</button>
          <button onClick={() => dispatch(resetCounter())}>reset</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
