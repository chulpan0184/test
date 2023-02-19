/* eslint-disable linebreak-style */
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import classNames from 'classnames'
import { DeleteTodoModal } from '../TodoListItem/Modals/DeleteTodoModal/DeleteTodoModal'
import { EditTodoModal } from '../TodoListItem/Modals/EditTodoModal/EditTodoModal'
import { useTodoListMethodsContext } from '../../contexts/TodoListContextProvider'

export function TodoDeteil() {
  const { todoId } = useParams()

  const { getTodoById } = useTodoListMethodsContext()
  const currentTodo = getTodoById(todoId)
  console.log({ currentTodo })

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const openDeleteModalHandler = () => {
    setIsDeleteModalOpen(true)
  }

  const openEditModalHandler = () => {
    setIsEditModalOpen(true)
  }

  return (
    <div>
      {JSON.stringify(currentTodo)}
      <button
        onClick={openEditModalHandler}
        type="button"
        className={classNames(
          'btn',
          'mx-2',
          'btn-warning',
        )}
      >
        Edit
      </button>
      <button
        onClick={openDeleteModalHandler}
        type="button"
        className="btn btn-danger"
      >
        Delete
      </button>
      <DeleteTodoModal
        isOpen={isDeleteModalOpen}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
        title={currentTodo.title}
        id={currentTodo.id}
      />
      <EditTodoModal
        isOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        title={currentTodo.title}
        id={currentTodo.id}
      />
    </div>
  )
}
