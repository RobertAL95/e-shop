import React, {useState, useContext} from 'react';
import '@styles/Header.scss';
import {Menu} from '@components/Menu'
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import {AppContext} from '../context/AppContext.js';
import {MyOrder} from '../containers/MyOrder.jsx';
import {useGetProducts} from '../hooks/useGetProducts';


const API = 'https://api.escuelajs.co/api/v1/categories';

const API2 = 'https://fakestoreapi.com/products?limit=5';


const Header = () => {

	const products = useGetProducts(API2);


	const [toggleOrders, setToogleOrders] = useState(false);

	const {state} = useContext(AppContext);

	const [toggle, setToogle] = useState(false);

	const handleToggle = () => {
		setToogle(!toggle);
	}


	return (
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
						robert.20.ven@gmail.com
					</li>
					<li className="navbar-shopping-cart" 
					onClick={()=> setToogleOrders(!toggleOrders)}>
						<img src={shoppingCart} alt="shopping cart" />
						
							{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
						
					</li>
				</ul>
			</div>
			{
				toggle && <Menu/>
			}
			{
				toggleOrders && <MyOrder/>
			}
		</nav>
	);
}

export {Header};