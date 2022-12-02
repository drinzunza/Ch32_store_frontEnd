import "./cartProduct.css";

const CartProduct = (props) => {

    const getTotal = () => {
        let total = props.data.price * props.data.quantity;
        return total.toFixed(2);
    };

    return (
        <div className="cart-product">
            <img src={'/images/' + props.data.image} alt="" />

            <div className='description'>
                <h5>{props.data.title}</h5>
                <p>{props.data.category}</p>
            </div>

            <label>{props.data.price.toFixed(2)}</label>
            <label>{props.data.quantity}</label>
            <label>{getTotal()}</label>

        </div>
    )
};

export default CartProduct;