import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <PostList></PostList>
      <Footer></Footer>
    </div>
  );
}

export default App;
