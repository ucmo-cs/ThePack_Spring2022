import {useState} from 'react'
import axios from 'axios'

export default function CloudinaryUploadExample() {
    const [image, setImage] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append(image.name, image);
        
        const res = await axios.post('/api/imageuploadexample', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
    }

    function handleFileChange(e) {
        setImage(e.target.files[0]);
    }

    return (
        <div>
            <h1>Upload an image to Cloudinary</h1>
            <form onSubmit={handleSubmit}>
                <input type='file' name='file' onChange={handleFileChange} />
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
} 