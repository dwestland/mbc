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

  // 301 Redirects
  async redirects() {
    return [
      {
        source: '/california/san_diego',
        destination: '/california/san-diego',
        permanent: true,
      },
      {
        source: '/california/los_angeles',
        destination: '/california/los-angeles',
        permanent: true,
      },
      {
        source: '/california/central_coast',
        destination: '/california/central-coast',
        permanent: true,
      },
      {
        source: '/california/san_francisco',
        destination: '/california/san-francisco',
        permanent: true,
      },
      {
        source: '/florida/southeast-keys',
        destination: '/florida/florida-keys',
        permanent: true,
      },
    ]
  },
}
