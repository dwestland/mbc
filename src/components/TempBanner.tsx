import React from 'react'

interface TopBannerProps {
  message: string
}

const TempBanner: React.FC<TopBannerProps> = ({ message }) => {
  if (!message) return null

  return (
    <div
      style={{
        backgroundColor: '#f8d7da',
        border: '1px solid #f5c6cb',
        color: '#721c24',
        marginBottom: '0px',
        padding: '10px',
        textAlign: 'center',
      }}
    >
      {message}
    </div>
  )
}

export default TempBanner
