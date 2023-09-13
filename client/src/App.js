import React from 'react'
import Main from './component/Main'
import Header from './component/Header'
import Contacts from './component/Contacts'
import Lorem from './component/Lorem'

function App(){
  return (
    <div>
        <Header/>
        <div class="container">
          <div className='row'>
            <div className='col-3'>
              <Contacts/>
            </div>
            <div className='col-6'>
              <Main/>
            </div>
            <div className='col-3'>
              <Lorem/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App