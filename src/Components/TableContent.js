import React from "react";
import LineItemDisplay from "./LineItemDisplay";

const TableContent = (props) => {
  const distinctCat = [
    ...new Set(props.productData.map((uni) => uni.category)),
  ];

  return distinctCat.map((disCategory) => (
    <React.Fragment>
      <tr>
        <th colSpan='2'>{disCategory}</th>
      </tr>
      <LineItemDisplay
        displayData={props.productData.filter(
          (productItem) => productItem.category === disCategory
        )}
      />
    </React.Fragment>
  ));
};

export default TableContent;
