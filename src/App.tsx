import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { BoardPage, LoginPage, RegisterPage } from './pages'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<BoardPage />} />
        <Route path="auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
