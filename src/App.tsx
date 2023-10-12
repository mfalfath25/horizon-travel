import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <main className="flex h-[100dvh] w-full flex-col">
        From App Component
        <Outlet />
      </main>
    </>
  );
}

export default App;
