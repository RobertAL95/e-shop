import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/global.css';
import { Layout } from '../containers/layout';
import { Login } from '../templates/Login';
import { RecoveryPassword } from '../templates/RecoveryPassword';
import { SendEmail } from '../templates/SendEmail';
import { NewPassword } from '../templates/NewPassword';
import { MyAccount } from '../templates/MyAccount';
import { CreateAccount } from '../templates/CreateAccount';
import { Checkout } from '../templates/Checkout';
import { Orders } from '../templates/Orders';
import { Home } from '../templates/Home.jsx';
import { NotFound } from '../templates/NotFound';
import { AppContext } from '../context/AppContext.js';
import { useInitialState } from '../hooks/useInitialState.js';

const App = () => {
	const initialState = useInitialState();
	return (
		<AppContext.Provider value={initialState}>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/login" element={<Login />} />			
						<Route exact path="/recovery-password" element={<RecoveryPassword />} />
						<Route exact path="/send-email" element={<SendEmail/>} />
						<Route exact path="/new-password" element={<NewPassword/>} />
						<Route exact path="/account" element={<MyAccount/>} />
						<Route exact path="/signup" element={<CreateAccount/>} />
						<Route exact path="/checkout" element={<Checkout/>} />
						<Route exact path="/orders" element={<Orders/>} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Layout>
			</BrowserRouter> 
		</AppContext.Provider>
	);
}

export default App;