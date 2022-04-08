import axios from 'axios'
import { useState, useEffect } from 'react'
import Loading from '../Loading'
import withAuth from '../withAuth'

function Links({ component: Component, session, ...props }) {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState()
  const [error, setError] = useState()

  async function getWuphfUser() {
    const res = await axios.get('/api/me').catch((err) => {
      setError({ data: err.response.data, status: err.response.status })
    })
    setUser(res?.data)
    setLoading(false)
  }

  useEffect(() => {
    getWuphfUser()
  }, [session])

  if (loading) return <Loading />
  if (error) console.error(error)

  const links = [
    {
      id: 1,
      text: 'home',
      url: '/',
    },
    {
      id: 2,
      text: 'profile',
      url: `/user/${user && user.userName}`,
    },
    {
      id: 3,
      text: 'settings',
      url: '/settings/',
    },
  ]

  return links.map((link) => (
    <Component {...props} key={link.id} text={link.text} url={link.url} />
  ))
}

export default withAuth(Links)
