import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import { TodoListContextWrapper } from './contexts/TodoListContextProvider'
import { TodosPage } from './components/Pages/TodosPage/TodosPage'
import { ContactsPage } from './components/Pages/ContactsPage/ContactsPage'
import { TodoDeteil } from './components/TodoDeteil/TodoDeteil'
import { TodosCreate } from './components/TodosCreate/TodosCreate'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'contactsPage',
        element: <ContactsPage />,
      },
      {
        path: 'todosPage/',
        element: <TodosPage />,
      },
      {
        path: 'todosPage/:todoId',
        element: <TodoDeteil />,
      },
      {
        path: 'todosPage/create',
        element: <TodosCreate />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <TodoListContextWrapper>
      <RouterProvider router={router} />
    </TodoListContextWrapper>
  </React.StrictMode>,
)
