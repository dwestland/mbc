module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'www.mybeachcams.com',
      'images.mybeachcams.com',
      'mybeachcams-images.s3.us-west-1.amazonaws.com',
    ],
  },
  env: {
    AWS_IMAGE_SRC_ROOT: process.env.AWS_IMAGE_SRC_ROOT,
  },
  crossOrigin: 'anonymous',
}
