import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const s3 = new AWS.S3();

exports.deletePhoto = (bucketName, keyName, cb ) => {
  s3.deleteObject({
    Bucket: bucketName, 
    Key: keyName 
  }, (err, data) => {
    if (err) {
      console.error(`error deleting key: ${keyName} in bucket: ${bucketName}`, err );
    }
    cb(data);
  });
}

exports.addPhoto = (bucket, file, filename, cb) => {
  const buf = Buffer.from(file, 'base64');
  s3.upload({
    Bucket: bucket,
    Key: filename,
    Body: buf,
    ACL: 'public-read',
    ContentType: 'image/jpeg',
    ContentEncoding: 'base64',
  }, (err, data) => {
    if (err) {
      console.error(`error uploading photo: ${filename}`, err)
    }
    cb(data)
  });
}