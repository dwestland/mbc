import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import NavbarOld from '@/components/NavbarOld'

const IndexPage = () => {
  const [session, loading] = useSession()

  if (loading) {
    return (
      <div className="container">
        <NavbarOld />
        <div>Loading...</div>
      </div>
    )
  }

  if (session) {
    // console.log('%c session ', 'background: black; color: white', session)

    return (
      <div className="container">
        <NavbarOld />
        <h1>mbc</h1>
        <div>
          Hello, {session.user.name ?? session.user.email}
          <br />
          <br />
          <button type="button" className="btn" onClick={() => signOut()}>
            Sign out
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <h1>mbc</h1>
      <br />
      <div>
        You are not logged in
        <br />
        <br />
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
      </div>
    </div>
  )
}

export default IndexPage
