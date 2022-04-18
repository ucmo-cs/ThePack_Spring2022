
function Links({ component: Component, user, ...props }) {
  // if (loading) return <Loading />
  // if (error) console.error(error)

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

export default Links
