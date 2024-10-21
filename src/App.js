import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AccessibilityDeclaration from './pages/AccessibilityDeclaration';
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

const App = () => {
    return (
        <div id="root">
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/accessibility" element={<AccessibilityDeclaration/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                </Routes>
            </Router>
        </div>
    );
};

export default App;