'use client'
import Image from "next/image";

import { useState } from "react";
export default function List() {

    const [items, setItems] = useState([
        {
            name:"Tomatoes",
            price:40,
            count: 0

        },
        {
            name:"Pasta",
            price:20,
            count: 0
        },
        {
            name:"Coconut",
            price:50,
            count: 0

        }

    ]);

    

    return (
     <div>
        <h4 className="title">상품 목록</h4>
        { items.map((item, index)=>{
            return(
                <div className="food" key={index}>
                    {/* <Image src={tomato} className="food-img"/> */}
                    <img src={`/food${index}.png`} className="food-img" alt="food" />
                    <h4>{item.name} ${item.price}</h4>
                    <span>수량: {item.count}</span>
                    <button onClick={()=>{
                        const newItems = [...items];
                        newItems[index].count++;
                        setItems(newItems);
                    }}>+</button>

                    <button onClick={()=>{
                        const newItems = [...items];
                        newItems[index].count--;
                        setItems(newItems);
                    }}>-</button>
                </div>
            )
        })}
        
     </div>
    );
  }
  