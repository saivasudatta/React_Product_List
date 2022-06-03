import "./App.css";
import "./Components/Search";
import Table from "./Components/Table";
import Search from "./Components/Search";
import { useState } from "react";
function App() {
  const [isChecked, setIsChecked] = useState(false);

  let productsList = {
    headers: ["Name", "Price"],
    products: [
      {
        category: "Sporting Goods",
        price: "$49.99",
        stocked: true,
        name: "Football",
      },
      {
        category: "Sporting Goods",
        price: "$9.99",
        stocked: true,
        name: "Baseball",
      },
      {
        category: "Sporting Goods",
        price: "$29.99",
        stocked: false,
        name: "Basketball",
      },
      {
        category: "Electronics",
        price: "$99.99",
        stocked: true,
        name: "iPod Touch",
      },
      {
        category: "Electronics",
        price: "$399.99",
        stocked: false,
        name: "iPhone 5",
      },
      {
        category: "Electronics",
        price: "$199.99",
        stocked: true,
        name: "Nexus 7",
      },
    ],
  };

  function onChangeHandler() {
    console.log("Before set state" + isChecked);
    setIsChecked(!isChecked);
    console.log("After set state" + isChecked);
  }

  return (
    <div className='main'>
      <Search type={"text"} placeholder={"Search products"} />
      <Search type={"checkbox"} onchange={onChangeHandler}>
        <label>Only Show Products in Stock</label>
      </Search>
      <Table productData={productsList} />
    </div>
  );
}

export default App;
