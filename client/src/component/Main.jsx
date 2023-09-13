import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Post from './Post'

function Main(){
  return (
    <div className='p-3 border mt-3 rounded' style={{height:'100%'}}>

        <div class="card mb-4">
          <div class="card-header">
            <strong>New Post</strong>
          </div>
          <div class="card-body">
            <div className='px-3'>
              <input className='form-control' type="text" name="" id="" />
            </div>
            <div className='p-3'>
              <textarea className='form-control' name="" id="" cols="30" rows="5"></textarea>
            </div>
            <div className='px-3 d-flex justify-content-between'>
                <label className='form-label' htmlFor="files">Select Image</label>
                <input type="file" name="" id="files" className='form-control form-control-sm' />
                <button className='btn btn-primary px-3'>Post</button>
            </div>
          </div>
        </div>
        <div>
          <h5>My Posts</h5>
          <Post/>
        </div>
    </div>
  )
}

export default Main