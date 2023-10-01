'use client'

import { useEffect , useState } from "react";

export default function Page() {
    const [product , setProduct] = useState([]);

    useEffect(()=>{
        async function fetchdata(){
        let data = await fetch("https://dummyjson.com/products");
        data = await data.json();
        setProduct(data.products)
        }
        fetchdata();
    },[])
  return (
    <div>
      <h1>
        {
            product.map((item)=>{
                <h3>{item.type}</h3>
            })
        }
      </h1>
    </div>
  );
}
