import {age} from "./data.js";
export default function Cart() {

    let items = [
        {
            name:"Tomatoes",
            price:40,
        },
        {
            name:"Pasta",
            price:20
        },
        {
            name:"Coconut",
            price:50
        }

    ];

    return (
        <div>
        <h4 className="title">Cart</h4>
        {items.map((item,index)=>{
            return(
                <CartItem key={index} item={item}/>
            )
        })}
        <Banner content="현대카드"/>
        <Btn color="blue"/>
        </div>
    )
} 

function Btn({color}){
    return <button style={{background:color}}>버튼</button>
}



function Banner({content}){
    return <h5> {content} 결제 행사중</h5>
}


function CartItem({item}){


    return(
        <div className="cart-item">
        <p>{item.name}</p>
        <p>${item.price}</p>
        <p>1개</p>
        </div>
    )
}