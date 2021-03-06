import React from 'react';
import Header from './features/Header/Header';
import Subreddits from './features/Subreddits/Subreddits';
import Home from './features/Home/Home';
import './App.css';

function App() {
  return (
   <>
    <Header/>
    <main>
      <Home />
    </main>
    <aside>
      <Subreddits />
    </aside>
   </>
  );
}

export default App;
