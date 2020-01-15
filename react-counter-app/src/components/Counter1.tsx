import React from "react";
import { connect } from "react-redux";
import counter1Actions from '../store/actions/counter1';
const Counter1: React.FC = (props: any) => {
  return (
    <div>
      <p>Counter1：{props.number}</p>
      <button id="counter1-increment" className="change-btn" onClick={props.increment1}>+</button>
      <button id="counter1-decrement" className="change-btn" onClick={props.decrement1}>-</button>
      <button id="counter1-asyncIncrement" className="change-btn" onClick={props.asyncIncrement1}>+</button>
    </div>
  );
};
const mapStateToProps = state => state.counter1;
const mapDispatchToProps = counter1Actions;
export default connect(mapStateToProps, mapDispatchToProps)(Counter1);
