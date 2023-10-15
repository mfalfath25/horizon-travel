import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Titles = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Profile',
    url: `/profile/:id`,
  },
  {
    id: 3,
    title: 'Tourists',
    url: '/tourist',
  },
  {
    id: 4,
    title: 'Tourist Details',
    url: `/tourist/:id`,
  },
  {
    id: 5,
    title: 'Edit Tourist Details',
    url: `/tourist/edit/:id`,
  },
]

const Title = () => {
  const [title, setTitle] = useState('')
  const location = useLocation()

  const matchTitle = () => {
    const pathname = location.pathname
    const matchedTitle = Titles.find((title) => {
      const urlSegments = title.url.split('/')
      const pathnameSegments = pathname.split('/')

      if (urlSegments.length !== pathnameSegments.length) {
        return false
      }

      for (let i = 0; i < urlSegments.length; i++) {
        if (
          urlSegments[i] !== pathnameSegments[i] &&
          urlSegments[i] !== ':id'
        ) {
          return false
        }
      }

      return true
    })

    if (matchedTitle) {
      setTitle(matchedTitle.title)
    } else {
      setTitle('Not Found')
    }
  }

  useEffect(() => {
    matchTitle()
  }, [location])

  return <h1 className="pt-2 text-xl font-bold">{title}</h1>
}

export default Title
