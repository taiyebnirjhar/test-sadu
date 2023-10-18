import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function BrandProducts() {
  const [BrandData, setBrandData] = useState({});

  const [product, setProduct] = useState([]);

  const location = useLocation();

  function getLastSegmentFromUrl(url) {
    const parts = url.split("/");
    return parts[parts.length - 1];
  }

  function getDataById(dataArray, id) {
    const item = dataArray.find((obj) => {
      return obj.id == id;
    });
    return item;
  }

  const pathId = getLastSegmentFromUrl(location.pathname);

  useEffect(() => {
    fetch("/brandProducts.json")
      .then((res) => res.json())
      .then((data) => {
        const filterData = getDataById(data, pathId);

        setProduct(filterData.products);
        setBrandData(filterData);
      });
  }, [pathId]);

  return (
    <div>
      <div>brand name : {setBrandData.brandName}</div>
      {product &&
        product.map((item, index) => {
          const { brand, name, price } = item;

          return (
            <div key={index}>
              <div>{brand}</div>
              <div>{name}</div>
              <div>{price}</div>
            </div>
          );
        })}
      <div>
        <img
          src={setBrandData.brandImage}
          alt=""
          className="w-[300px] mx-auto"
        />
      </div>
    </div>
  );
}
