import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {

  const [products, setProducts] = useState([]);

//se saca el fecth de los datos del UseEffec
  async function fetchData() {
    const response = await axios(API);
    setProducts(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return products;
};

export {useGetProducts};

