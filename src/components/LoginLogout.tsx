import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'

const LoginLogOut: React.FC = () => {
  console.log('boom')

  const [session] = useSession()

  if (session) {
    console.log('%c session ', 'background: black; color: white', session)

    return (
      <div className="login-logout">
        Hello, {session.user.name ?? session.user.email}&nbsp;-&nbsp;
        <button type="button" onClick={() => signOut()}>
          Log Out
        </button>
      </div>
    )
  }

  return (
    <div className="login-logout">
      <button type="button" onClick={() => signIn()}>
        Login In
      </button>
      &nbsp;/&nbsp;
      <button type="button" onClick={() => signIn()}>
        Sign Up
      </button>
    </div>
  )
}

export default LoginLogOut
