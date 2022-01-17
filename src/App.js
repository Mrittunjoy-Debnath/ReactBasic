import React, { useState ,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const nayoks = ["Rajjak","Jasim","Bapparaj","Shuvo","Loskor"];
    const products = [
        {name:'photoshop', price:'$90.99'},
        {name:'Illustrator', price:'$60.00'},
        {name:'Pdf Reader', price:'$06.99'},
    ]
    const productNames = products.map(product => product.name);
    console.log(productNames);
    return ( 
        <div className = "App">
        <header className = "App-header" >
            <p> I am a React Person</p>
            <Users></Users>
            <Counter></Counter>
            <ul>
            {/* dynamic nayok */}
                {
                    nayoks.map(nayok => <li>{nayok}</li>)
                }
            {/* dynamic product */}
            <p>dynamic product 1</p>
                {
                    products.map(product => <li>{product.name}</li>)
                }
                <p>dynamic product 2</p>
                {
                    products.map(pd => <Product product={pd}></Product>)
                }
                <li>{nayoks[0]}</li>
                <li>{nayoks[1]}</li>
                <li>{nayoks[2]}</li>
            </ul>
            <Product product={products[0]}></Product>
            <Product product={products[1]}></Product>
         </header> 
         </div>
    );
}

function Users(props){
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data => setUsers(data));
    },[])

    return(
        <div>
            <h2>Dynamic Users :{users.length}</h2>
            <ul>
            {
                users.map(user => <li>{user.name}</li>)
            }
            </ul>
        </div>
    );
}

function Counter(props){
    const [count,setCount] = useState(12);
    const handleIncrease =()=>{
        const newCount = count+1;
        setCount(newCount);
    };

    return(
        <div>
        <h1>Count : {count}</h1>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={()=>setCount(count-1)}>Decrease</button>
        </div>
    );
}

{/*
function Person(props){
    const personStyle = {
        border: '2px solid red',
        margin:'10px'
    }
    return (
        <div style ={personStyle}>
            <h1>Name : {props.nayok}</h1>
            <h3>Hero of {props.nayika}</h3>
        </div>
    );
}
*/}
function Product(props){
    const productStyle = {
        border: '2px solid red',
        margin:'10px'
    }

    const {name,price} = props.product;

    return (
        <div style ={productStyle}>
            <h1>{name}</h1>
            <h3>{price}</h3>
            <button>Buy Now</button>
        </div>
    );
}

export default App;