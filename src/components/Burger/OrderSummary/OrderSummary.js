import React, {Component} from 'react';
import Aux from "../../../hoc/Aux";
import Button from '../../UI/Button/Button';
import '../../UI/Button/Button.css';

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('Order summary will update');
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>
                {igKey}</span>:{this.props.ingredients[igKey]}
            </li> );
        });
    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total Price:{this.props.price}</p>
            <p>Continue to checkout?</p>
            <Button btnType='BDanger' clicked={this.props.purchaseCancelled}>Cancel</Button>
            <Button btnType='BSuccess' clicked={this.props.purchaseContinued}>Continue</Button>
        </Aux>
        );
    }
}


export default OrderSummary;