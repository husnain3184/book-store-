import { React, useState } from 'react';
import axios from 'axios';
import configra from '../../envirment/env'
const  BookForm = () =>{
  const [bookname ,setBookName] = useState('');
  const [author ,setAuthor] = useState('');
  const [discription ,setdDiscription] = useState('');
  const [erro ,seterro] = useState('');
  const [success ,setsuccess] = useState('');
  const URLAPI = configra.API_URL;
  





 const HandleBookName = (e) =>{
  setBookName(e.target.value)

 }
 const HandleAutherName = (e) =>{
  setAuthor(e.target.value)
 }
 const HandleBookDisc = (e) =>{
  setdDiscription(e.target.value)
 }

 const HandleSubmit = async(e) =>{
  e.preventDefault();
  if(bookname === '' || author === '' || discription === ''){
    seterro('this filed is requrid')
  }
  else{
    setsuccess('success')
    seterro('')
    setBookName('')
    setAuthor('')
    setdDiscription('')
window.location.replace("/book-list");
    

  }
  const data = {
    name:bookname,
    author:author,
    discription:discription
  }
  const config = {
    method: 'post',
    url:URLAPI,
    data:data,
    header:{
      "Content-Type": "application/json"
    }

  }
  
  const response = await axios(config)
  console.log(response)



   
 }

  return (
    <>
    <div className=" container">
      <div className="col-sm-6">
        <h1 className="mt-5 mb-5">Create Book </h1>
            <form onSubmit={HandleSubmit}>
                <div className="mb-3">
                  <label forhtml="exampleFormControlInput1" className="form-label">Book Name</label>
                  <input type="text" onChange={HandleBookName} className="form-control" id="name" />
                </div>
                <div className="mb-3">
                  <label forhtml="exampleFormControlInput1" className="form-label">Author Name</label>
                  <input type="text" onChange={HandleAutherName} className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                  <label forhtml="exampleFormControlTextarea1" className="form-label">Book discription</label>
                  <textarea onChange={HandleBookDisc} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit"   className="btn btn-primary">Submit</button>
          </form>
              {erro && <div className="alert alert-danger mt-2" role="alert">{erro}</div>}
              {success && <div className="alert alert-success mt-2" role="alert">{success}</div>}

      </div>
    </div>
    </>
  );

}

export default BookForm;
