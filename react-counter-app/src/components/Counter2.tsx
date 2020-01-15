import React from "react";
import { connect } from "react-redux";
import counter2Actions from '../store/actions/counter2';
const Counter2: React.FC = (props: any) => {
  return (
    <div>
      <p>Counter2：{props.number}</p>
      <button id="counter2-increment" className="change-btn" onClick={props.increment2}>+</button>
      <button id="counter2-decrement" className="change-btn" onClick={props.decrement2}>-</button>
      <button id="counter2-asyncIncrement" className="change-btn" onClick={props.asyncIncrement2}>+</button>
    </div>
  );
};
const mapStateToProps = state => state.counter2;
const mapDispatchToProps = counter2Actions;
export default connect(mapStateToProps, mapDispatchToProps)(Counter2);
