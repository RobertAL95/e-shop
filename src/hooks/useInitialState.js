import {useState} from "react";

const initialState = {
    cart:[],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payLoad) => {
        setState({
            ...state,
            cart:[...state.cart, payLoad]
        });
    };

    const removeFromCart = (payLoad) => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payLoad.id),
        })
    }

    return {
        state,
        addToCart,
        removeFromCart
    }
}

export {useInitialState};