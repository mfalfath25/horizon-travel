import { MdCardTravel } from 'react-icons/md'

const HomePage = () => {
  return (
    <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center gap-4">
      <h1 className="text-center text-3xl font-bold text-black">
        Welcome to Horizon Travel Agency
      </h1>
      <MdCardTravel size={60} className="animate-pulse" />
      <p>
        To manage tourists, go to the <kbd className="kbd kbd-sm">Tourists</kbd>{' '}
        page
      </p>
    </div>
  )
}

export default HomePage
