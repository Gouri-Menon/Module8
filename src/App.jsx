import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [activePage, setActivePage] = useState('home');

  return (
    <div className='flex'>
      <Sidebar showSidebar={showSidebar} setActivePage={setActivePage} />
      <Home showSidebar={showSidebar} setShowSidebar={setShowSidebar} activePage={activePage} />
      
    </div>
  );
}

export default App;
