import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { ToastStyles } from '@/components/ui/ToastAlert'

function App() {
  return (
    <>
      <main className="bg-backdrop flex h-[100dvh] w-full flex-col bg-slate-100 bg-repeat">
        <div className="border-b-[1px] border-slate-400 bg-slate-200 p-2 text-center text-2xl font-bold">
          Horizon Travel
        </div>
        <Outlet />
      </main>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          style: ToastStyles,
        }}
      />
    </>
  )
}

export default App
