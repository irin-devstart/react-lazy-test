import React, { memo, useEffect, useState } from "react";
interface Props {
  countChild: number;
  handleChangeCount: () => void;
}
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: 130;
  };
}
const Child = (props: Props) => {
  const [productsResource, setProductsResource] = useState([]);
  console.log("Call = ", props.countChild);
  useEffect(() => {
    console.log("call useEffect");

    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProductsResource(data));
  }, []);

  return (
    <div>
      <button onClick={props.handleChangeCount}>change countChild</button>
      <h1>Child {props.countChild}</h1>

      {productsResource.map((val: Product, key) => (
        <div
          key={key}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>
            {key + 1}. {val.title}
          </p>

          <img src={val.image} alt={val.title} width="100" loading="lazy" />
        </div>
      ))}
    </div>
  );
};

export default memo(Child);
