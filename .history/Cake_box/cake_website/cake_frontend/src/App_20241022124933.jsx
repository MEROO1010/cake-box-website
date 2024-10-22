import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Homepage from './components/HomePage/Homepage';
import Logo from './components/Header/Logo';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/logo" element={ <Logo/>} />
                
            </Routes>
           
        </Router>
    );
}

export default App;