import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/Homepage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={< Homepage />} />
            </Routes>
        </Router>
    );
}

export default App;