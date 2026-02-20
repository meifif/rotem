import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AccessibilityDeclaration from './pages/AccessibilityDeclaration';
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
    return (
        <div id="root">
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/accessibility" element={<AccessibilityDeclaration/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Router>
        </div>
    );
};

export default App;