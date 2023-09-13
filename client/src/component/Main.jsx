import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Post from './Post'
import Axios from 'axios'

function Main(){

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imagePath, setImagePath] = useState(null);

  const handlePostClick = async () => {
    try {
      const postData = {
        title: title,
        description: description,
        image: imagePath,
      };
  
      const response = await Axios.post('http://localhost:4000/posts', postData);
  
      if (response.status === 200) {
        console.log("saved");
      } else {
        // Handle error response from the server
        console.error('Error:', response.data.message);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  


  return (
    <div className='p-3 border mt-3 rounded' style={{height:'100%'}}>

        <div class="card mb-4">
          <div class="card-header">
            <strong>New Post</strong>
          </div>
          <div class="card-body">
            <div className='px-3'>
              <input className='form-control' type="text" name="" id="" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='p-3'>
              <textarea className='form-control' name="" id="" cols="30" rows="5" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div className='px-3 d-flex justify-content-between'>
                <label className='form-label' htmlFor="files">Select Image</label>
                <input type="file" name="" id="files" className='form-control form-control-sm' onChange={(e) => setImagePath(e.target.files[0].name)}/>
                <button className='btn btn-primary px-3' onClick={handlePostClick}>Post</button>
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