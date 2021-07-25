import React, { useState } from "react";
import Todo from "../Todo/Todo";

interface ITodo {
  singleTodo: string;
  priority: string;
}
const TodoHolder = () => {
  const [todo, setTodo] = useState<ITodo>({
    singleTodo: "",
    priority: "",
  });
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setTodoList([...todoList, todo]);
  };

  const handleRemove = (todo: string) => {
    const newTodoList = todoList.filter((data) => data.singleTodo !== todo);
    setTodoList(newTodoList);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="todo__input__box">
        <input
          className="todo__input"
          name="singleTodo"
          type="text"
          onChange={handleChange}
          placeholder="Type your todo"
          required
        />

        <select
          className="todo__select"
          name="priority"
          onChange={(e) =>
            setTodo({ ...todo, [e.target.name]: e.target.value })
          }
          required
        >
          <option value="">Select the priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button type="submit" className="todo__sub__btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </form>

      {todoList.map((tod) => (
        <Todo
          key={tod.singleTodo}
          singleTodo={tod.singleTodo}
          priority={tod.priority}
          handleRemove={handleRemove}
        />
      ))}
    </div>
  );
};

export default TodoHolder;
