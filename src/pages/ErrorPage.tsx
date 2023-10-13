import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError() as Error & { statusText?: string }

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage
