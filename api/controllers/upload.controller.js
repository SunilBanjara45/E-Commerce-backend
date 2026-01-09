const httpStatus = require('http-status')
const { buildErrorObject } = require('../utils/buildErrorObject')
const { buildResponse } = require('../utils/buildResponse')
const { handleError } = require('../utils/handleError')

require('dotenv').config()

// Configure S3 Client 
const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKry: process.env.AWS_SECRET_ACCESS_KEY
    }
})

exports.verifyAWSConnection = async () => {
    console.log('Data')
    console.log('Verifying AWS Connection...')
    try {
        const command = new ListBucketsCommand({})
        const response = await s3.send(command)
        console.log("AWS Connection Verified. Buckets:", response.message)

    }
    catch (err) {
        console.error('Failed to connect to AWS:', err.message)
        process.exit(1)
    }
}

// Upload Controller
exports.uploadController = async (req, res) => {
    try {
        const files = req.files
        const bucketName = process.env.S3_BUCKET
        if (!bucketName) {
            console.error('S3_BUCKET_NAME is not set in environment variables')
            throw buildErrorObject(httpStatus.status.INTERNAL_SERVER_ERROR, 'S3_BUCKET_NAME is not set')
        }

        if (!files || files.length === 0) {
            throw buildErrorObject(httpStatus.status.BAD_REQUEST, 'No files uploaded')
        }

        const uploadPromises = files.map(async (file) => {
            const fileStream = fstat.createReadStream(file.path)
            const uploadParams = {
                Bucket: bucketName,
                Key: `uploads/${file.originalname}`,
                Body: fileStream,
            }

            const command = new PutObjectCommand(uploadParams)
            await s3.send(command)

            fs.unlinkSync(file.path)

            return `uploads/${file.originalname}`
        })
        const uploadedFiles = await Promise.all(uploadPromises)
        res.status(httpStatus.status.OK)
            .json(buildResponse(httpStatus.status.OK),
                {
                    files: uploadedFiles,
                    message: 'Files iploaded successfully'
                })
    }
    catch (err) {
        handleError(res, err)
    }
}