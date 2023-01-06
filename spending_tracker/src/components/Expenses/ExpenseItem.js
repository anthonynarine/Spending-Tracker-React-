import React from 'react';

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";


function ExpenseItem({title, amount, date}) {
  
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={date} />
                <div className="expense-item__description" >
                    <h2>{title}</h2>
                    <div className="expense-item__price" >${amount}</div>
                </div>
            </Card>
        </li>
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
