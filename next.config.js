module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'www.mybeachcams.com',
      'mybeachcams-images.s3.us-west-1.amazonaws.com',
    ],
  },
  env: {
    IMAGE_SRC_ROOT: process.env.IMAGE_SRC_ROOT,
  },
}
