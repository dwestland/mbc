import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'

const LoginLogOut: React.FC = () => {
  console.log('boom')

  const [session] = useSession()

  if (session) {
    console.log('%c session ', 'background: black; color: white', session)

    return (
      <>
        Hello, {session.user.name ?? session.user.email}
        <button type="button" className="btn" onClick={() => signOut()}>
          Sign out
        </button>
      </>
    )
  }

  return (
    <>
      <button type="button" className="btn" onClick={() => signIn()}>
        Sign in
      </button>
      <p>Or</p>
      <button
        type="button"
        className="btn button-as-link"
        onClick={() => signIn()}
      >
        Sign up
      </button>
    </>
  )
}

export default LoginLogOut
