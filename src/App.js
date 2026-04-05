import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AccessibilityDeclaration from './pages/AccessibilityDeclaration';
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import FloatingContactButton from './components/FloatingContactButton';

const App = () => {
    return (
        <Router>
            <FloatingContactButton />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/accessibility" element={<AccessibilityDeclaration/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
    );
};

export default App;