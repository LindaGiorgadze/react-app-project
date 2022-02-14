import TodoApp from "./TodoApp";
import Form from './Form';
import Counter from './Counter';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://lindagiorgadze.github.io/FakeServer/products.json')
        .then((response) => response.json())
        .then((fetchedData) => setData(fetchedData.Products))
    }, [])
    console.log('Data:', data);

    const [inputValue, setInputValue] = useState(0);
    const [startValue, setStartValue] = useState();
    return (
        <div className="Home">
            <div className="productsContainer">
                {
                    data.map(product => {
                        return (
                            <Link key={product.id} to={`/${product.id}`}>
                                <div className="ProductBox" >
                                    <h3>{product.title}</h3>
                                    <span>{product.Category}</span>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
            <TodoApp/>
            
            <Form />
            <input 
                type='number' 
                placeholder='Type Number' 
                value={inputValue}
                onChange={(e) => {
                setInputValue(e.target.value);
                }}
            />
            <button onClick={()=> setStartValue(parseInt(inputValue))} >
                Change start value
            </button>
            {/* { startValue && <Counter start={startValue} increase={1} /> } */}
            
            {/* <Counter  increase={5} />
            <Counter start={300}  /> */}
        </div>
    )
}