import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Auth } from './pages';

const App = () => {
	return (
		<BrowserRouter>
			<div className='wrapper'>
				<Auth />
			</div>
		</BrowserRouter>
	);
};

export default App;
