import React from "react";
import { Routes, Route} from 'react-router-dom';
import Navmenu from "./Components/Navbar/Navbar";
import TextUtility from "./Components/Textutility/Textutility";
import BookForm from "./Components/Bookentery/BookForm";
import BookList from "./Components/Bookentery/BookList";
import BookUpdate from "./Components/Bookentery/BookUpdate"

function App() {
  const  menuLiks = [
    {
      name:'Text Utility',
      slug:'/'
    },
    {
      name:'Book form',
      slug:'/book-form'
    },
    {
      name:'Book List',
      slug:'/book-list'
    }
  ]
  return (
   <>
      <Navmenu menuLiks={menuLiks}/>
   <div className="container">
     <div className="mt-4">
  <Routes>
    <Route path="/" element={<TextUtility />} />
    <Route path="/book-form" element={<BookForm />} />
    <Route path="/book-list" element={<BookList />} />
    <Route path="/update-book/:id" element={<BookUpdate />} />
</Routes>
</div>
</div>
   </>
  );
}

export default App;
