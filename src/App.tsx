import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <main className="flex h-[100dvh] w-full flex-col bg-slate-100">
        <div className="border-b-[1px] border-slate-400 bg-slate-200 p-2 text-center text-2xl font-bold">
          Horizon Travel
        </div>
        <Outlet />
      </main>
    </>
  )
}

export default App
