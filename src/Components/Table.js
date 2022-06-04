import React from "react";
import TableContent from "./TableContent";

const Table = (props) => {
  console.log(props.productData);
  return (
    <div>
      <table>
        <thead>
          <tr>
            {props.productData.headers.map((headerData, index) => (
              <th key={index}>{headerData}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <TableContent
            productData={
              props.checkStock
                ? props.productData.products.filter(
                    (inStockProducts) =>
                      inStockProducts.stocked === props.checkStock
                  )
                : props.productData.products
            }
          />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
