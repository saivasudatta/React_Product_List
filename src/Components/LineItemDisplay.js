import React from "react";
import "./LineItemDisplay.css";

const LineItemDisplay = (props) => {
  return props.displayData.map(({ name, price, stocked }, index) => (
    <tr key={index}  >
      <td className={stocked? "":"noStock"}>{name}</td>
      {/* <td>{stocked.toString()}</td> */}

      <td>{price}</td>
    </tr>
  ));
};

export default LineItemDisplay;
