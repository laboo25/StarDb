import React, { useState, useEffect } from 'react';
import Preloader from './Preeloader';
import './App.css'
import Home from './components/Navbar/Home'
import '@fancyapps/ui/dist/fancybox/fancybox.css';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <>
      <div className="App">
        {loading ? (
          <Preloader />
        ) : (
          <div title='content'>
            

            <Home />




          </div>
        )}
      </div>
    </>
  )
}

export default App
