import { BrowserRouter, Route, Routes } from 'react-router-dom'

import {
  BoardPage,
  CreatePostPage,
  LoginPage,
  RegisterPage,
  PostPage,
} from './pages'
import { EditPostPage } from './pages/edit-post'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<BoardPage />} />
        <Route path="post" element={<PostPage />} />
        <Route path="create-post" element={<CreatePostPage />} />
        <Route path="edit-post" element={<EditPostPage />} />
        <Route path="auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
