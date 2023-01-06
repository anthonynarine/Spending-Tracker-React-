import React, { useState } from 'react';

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";


function ExpenseItem({title, amount, date}) {

    const [itemTitle, setItemTitle] = useState(title)

    const handleClick = () => {
        setItemTitle("updated")
        console.log(itemTitle)
    };
    

    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description" >
                <h2>{title}</h2>
                <div className="expense-item__price" >${amount}</div>
            </div>
            <button onClick={handleClick}>Change Title</button>
        </Card>
    );
    
};

export default ExpenseItem;


                // toLocalString \\
// toLocalString built in method accessible on all date objects 
// this method helps outputting dates in human readable formats
// it takes in two arugments as show above


// date.getFullYear(); \\
// another build in method which just extractss the 
// year as a four digit Number
