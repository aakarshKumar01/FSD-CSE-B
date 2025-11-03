import { useState,useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Book from "./component/Book";
import Footer from "./component/Footer";

function App() {
  // const books = [
  //   {images : "" , title : 'Physice' , price : 367},
  //   {images : "" , title : 'Physice' , price : 367},
  //   {images : "" , title : 'Physice' , price : 367}
  // ]

  const [books, setBooks] = useState([])

  useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(data=>{
        const fdata = data.filter((i) => i.category === "electronics")
        setBooks(fdata)});
    },[])

  return (
    
    <>
      <div className="container">
        {
          books.map((b, i) =>(
            <Book key = {i} book = {b}/>
          ))
        }
       
      </div>
      <Footer />
    </>
  );
}

export default App;
