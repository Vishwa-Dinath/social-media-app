import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import user from '../img/user.jpeg'


function Contacts(){
  const [contactData, setContactData] = useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then(
      response => response.json()
    ).then(
      data =>{
        setContactData(data)
      }
    )
  },[])

  return (
    <div id='contact-container' className="p-2" style={{height:'100%'}}>
        <div className='p-2 rounded-2 border' style={{height:'100%'}}>
          <h4 className='mb-4 text-center'>Contacts</h4>
          {contactData.map((contact=>(
              <div key={contact.id} className='d-flex justify-content-start gap-2 mb-5 bg-light rounded py-1'>
                <div className='rounded-circle hand' 
                  style={{backgroundImage:`url(${user})`,backgroundSize:'cover',backgroundPosition:'center',width:'60px',height:'60px'}}>
                </div>
                <div style={{maxWidth:'120px'}}>
                  <div>{contact.username}</div>
                  <div className='fs-6'>{contact.email}</div>
                  <div>{contact.phone}</div>
                </div>
              </div>
          )))}
        </div>
    </div>
    
  )
}

export default Contacts