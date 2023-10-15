import { useRouteError, useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError() as Error & { statusText?: string }
  const navigate = useNavigate()

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <p>Sorry, the page you are looking for doesn't exist.</p>
      <p>{error?.statusText || error?.message}</p>
      <br />
      <button
        className="btn btn-outline btn-md text-lg"
        onClick={() => navigate('/', { replace: true })}
      >
        Home
      </button>
    </div>
  )
}

export default ErrorPage
