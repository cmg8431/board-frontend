import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { LoginPage, RegisterPage } from './pages'
import { globalAccessTokenState } from './store/user'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
