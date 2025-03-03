import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');

  return (
    <div className='flex'>
      <Sidebar showSidebar={showSidebar} setActivePage={setActivePage} />
      <Dashboard showSidebar={showSidebar} setShowSidebar={setShowSidebar} activePage={activePage} />
      
    </div>
  );
}

export default App;
