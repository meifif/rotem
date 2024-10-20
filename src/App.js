import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AccessibilityDeclaration from './pages/AccessibilityDeclaration';
import Home from "./pages/Home";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/accessibility" element={<AccessibilityDeclaration/>}/>
            </Routes>
        </Router>
    );
};

export default App;