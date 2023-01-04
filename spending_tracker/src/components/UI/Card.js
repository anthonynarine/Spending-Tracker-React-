import "./Card.css"

function Card(props) {
    const classes = "card " + props.className;
    //destructuring cannot be used because we are adding to porps. 
    return <div className={classes}>{props.children}</div>;

};

export default Card;


// Childre is a reserved name and the value of this prop 
// will always be the content between the opening and closing
// tags of your custom component. in this case the content 
// between the opening and closing card tag of the custom 
// conpoenent.