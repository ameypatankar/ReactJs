import React, {lazy, Suspense} from "react";
import ReactDOM from 'react-dom/client';

import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';

import { BrowserRouter, Routes, Route, Outlet } from "react-router";
// import Grocery from './components/Grocery';

const Grocery = lazy(()=> import('./components/Grocery'));

 const AppContainerComponent = () => (
    <div className="app">
        <Header />
        <Outlet />
    </div>
 );

 const root = ReactDOM.createRoot(document.getElementById('root'));

 root.render( 
    <BrowserRouter> 
        <Routes>
            <Route path="/" element={<AppContainerComponent />}>
                <Route path="/" element={<Body />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
                <Route 
                    path="/grocery" 
                    element={
                        <Suspense fallback={<h1>Loading...</h1>}>
                            <Grocery />
                        </Suspense>
                    } 
                />
            </Route>
        </Routes>
    </BrowserRouter>
); 