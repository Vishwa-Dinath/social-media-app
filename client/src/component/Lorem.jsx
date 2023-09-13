import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import picture1 from '../img/1.jpeg'


function Lorem(){

  const [loremData, setLoremData] = useState([]);

  useEffect(()=>{
    fetch("https://picsum.photos/v2/list?page=1&limit=10").then(
      response => response.json()
    ).then(
      data =>{
        setLoremData(data)
      }
    )
  },[])

  return (
    <div className="p-1" style={{height:'100%'}}>
        <div className='p-2 rounded-2 border' style={{height:'100%'}}>
          <h4 className='mb-4 text-center'>Lorem Posts</h4>
          {loremData.map((lorem)=>(
            <div key={lorem.id} className='d-flex justify-content-center gap-2 p-2'>
              <div class="card">
                  <img src={lorem.download_url} alt="Invalid format" srcset="" />
                  <div class="card-body">
                      <p class="card-text"><strong>Post by : </strong>{lorem.author}</p>
                  </div>
              </div>
          </div>
          ))}
          {/* <div className='d-flex justify-content-center gap-2 p-2'>
            <div class="card">
                <img src={picture1} alt="Invalid format" srcset="" />
                <div class="card-body">
                    <p class="card-text"><strong>Post by : </strong>Vishwa</p>
                </div>
            </div>
          </div> */}
        </div>
    </div>
    
  )
}

export default Lorem