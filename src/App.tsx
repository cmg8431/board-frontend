import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<>react-dasdsadsboilerplate</>} />
      </Routes>
    </BrowserRouter>
  )
}
