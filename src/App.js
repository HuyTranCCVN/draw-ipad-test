import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

const Home = React.lazy(() => import('./Home'));
const Test = React.lazy(() => import('./Test'));


function App() {

  return (
    <div className="App">
      <Suspense>  
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
