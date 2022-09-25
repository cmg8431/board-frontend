import { BrowserRouter, Route, Routes } from 'react-router-dom'

import {
  BoardPage,
  CreatePostPage,
  LoginPage,
  RegisterPage,
  PostPage,
} from './pages'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<BoardPage />} />
        <Route path="post" element={<PostPage />} />
        <Route path="create-post" element={<CreatePostPage />} />
        <Route path="auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
