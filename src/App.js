import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Auth, Home } from './pages';

const App = () => {
	return (
		<BrowserRouter>
			<div className='wrapper'>
				<Routes>
					<Route path='*' element={<Auth />} />
					<Route path='/in' element={<Home />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
