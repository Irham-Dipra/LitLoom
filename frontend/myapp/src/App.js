// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import IndividualBook from './pages/IndividualBook';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Wishlist from './pages/Wishlist';
import SearchResults from './pages/SearchResults';
import AddBook from './pages/AddBook';
import MyBooks from './pages/MyBooks';
import ReadingStats from './pages/ReadingStats';
import Author from './pages/Author';
import Browse from './pages/Browse';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book/:id" element={<IndividualBook />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/my-books" element={<MyBooks />} />
        <Route path="/my-books/stats" element={<ReadingStats />} />
        <Route path="/author/:id" element={<Author />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </Router>
  );
}

export default App;