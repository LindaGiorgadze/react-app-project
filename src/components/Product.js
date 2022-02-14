import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://lindagiorgadze.github.io/FakeServer/products.json')
        .then((response) => response.json())
        .then((fetchedData) => setData(fetchedData.Products))
    }, []);
    // console.log('Data:', data);

    let params = useParams();
    console.log(params);
    let id = params.productId;
    console.log(id);
    // console.log(data[id-1]);
    let filteredData = data.filter(product => parseInt(product.id) === parseInt(id))
    .map(item => item)
    console.log(filteredData);

    return (
        <div className="ProductPage">
            <h3>Product</h3>
            <span>{params.productId}</span>
            {
                filteredData.map(item => {
                    return (
                        <>
                            <h4>{item.title}</h4>
                            <span>{item.Category}</span>
                        </>
                    )
                })
            }
        </div>
    )
}