import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CakeList from './CakeList';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CakeList />} />
            </Routes>
        </Router>
    );
}

export default App;