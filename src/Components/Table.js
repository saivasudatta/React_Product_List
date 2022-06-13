import React from "react";
import TableContent from "./TableContent";

const Table = (props) => {
  console.log(props.productData);

  let filteredProductsData = props.checkStock
    ? props.productData.products.filter(
        (inStockProducts) => inStockProducts.stocked === props.checkStock
      )
    : props.productData.products;

    if (props.searchProduct != null) {
     filteredProductsData = filteredProductsData.filter((filteredPData)=>(filteredPData.name.includes(props.searchProduct)));
      
    }
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
        {/* <TableContent
            productData={
              props.checkStock
                ? props.productData.products.filter(
                    (inStockProducts) =>
                      inStockProducts.stocked === props.checkStock
                  )
                : props.productData.products
            }
          /> */}
          <TableContent
            productData={
             filteredProductsData
            }
          />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
