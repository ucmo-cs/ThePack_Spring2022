import cloudinary from 'cloudinary'

const formidable = require('formidable')

// Must disable body parser to read the incoming form data
export const config = {
    api: {
        bodyParser: false,
    },
}

export default function handler(req, res) {
    const form = new formidable.IncomingForm()
    form.parse(req, async function (err, fields, files) {
        const [fileName] = Object.keys(files)
        const file = files[fileName]
        const { public_id, url } = await cloudinary.v2.uploader.upload(file.filepath, {
            public_id: `uploads/${file.newFilename}`,
            overwrite: true,
        })
        res.json({ public_id, url })
    })
}
