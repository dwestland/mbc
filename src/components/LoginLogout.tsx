import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

const LoginLogOut: React.FC = () => {
  // const [session] = useSession()
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="login-logout">
        <div>Hello, {session.user.name ?? session.user.email}&nbsp;-&nbsp;</div>
        <button type="button" onClick={() => signOut()}>
          Log Out
        </button>
      </div>
    )
  }

  return (
    <div className="login-logout">
      <button type="button" onClick={() => signIn()}>
        Log In / Sign Up
      </button>
    </div>
  )
}

export default LoginLogOut
