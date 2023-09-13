import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../img/logo.png'
import user from '../img/user.jpeg'

function Header(){
  return (
    <div className="container">
        <div className='row p-1' id='menu-bar'>
            <div className='col-3 d-flex justify-content-center align-items-center gap-5'>
                <div className='py-4' title='Settings' class='hand'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="var(--blue)" class="bi bi-gear-fill" viewBox="0 0 16 16">
                     <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                    </svg>
                </div>
                <div title='Messages' class='hand'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="var(--blue)" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
                    </svg>
                </div>
                <div title='Notifications' class='hand'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="var(--blue)" class="bi bi-bell-fill" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                    </svg>
                </div>
            </div>
            <div className='col-6 d-flex justify-content-center align-items-center'>
                <img src={logo} alt="" srcset="" height={80} width={220}/>
            </div>
            <div className='col-3 d-flex justify-content-center align-items-center'>
                <div className='d-flex gap-2 justify-content-center align-items-center'>
                    <span><strong>Vishwa</strong></span>
                    <div className='rounded-circle hand' 
                        style={{backgroundImage:`url(${user})`,backgroundSize:'cover',backgroundPosition:'center',width:'50px',height:'50px'}}>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Header