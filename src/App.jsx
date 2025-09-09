import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';


function App() {
return (
<BrowserRouter>
<nav style={{ padding: '10px', background: '#222', color: '#fff' }}>
<Link style={{ margin: '0 10px', color: '#0f0' }} to="/">Home</Link>
<Link style={{ margin: '0 10px', color: '#0f0' }} to="/register">Register</Link>
</nav>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/register" element={<Register />} />
</Routes>
</BrowserRouter>
);
}


export default App;