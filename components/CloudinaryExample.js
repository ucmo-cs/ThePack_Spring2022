// Example component showing how to use Cloudinary images.

import Image from 'next/image'

export default function CloudinaryExample() {
    return (
        <Image
            src='sample.jpg'
            layout='fill'
            alt='Sample image'
        />
    )
}