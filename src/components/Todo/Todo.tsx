import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import { useState } from "react";

interface ISingleTodo {
  singleTodo: string;
  priority: string;
  handleRemove: (singleTodo: string) => void;
}
const Todo = ({ singleTodo, priority, handleRemove }: ISingleTodo) => {
  const [todoDone, setTodoDone] = useState(false);
  return (
    <div className="todo_box">
      <div className="check__box" onClick={() => setTodoDone(!todoDone)}>
        {todoDone ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
      </div>
      <h3 className={todoDone ? "text__throw" : "text__normal"}>
        {singleTodo}
      </h3>
      <p>{priority}</p>
      <button
        className="todo__remove__btn"
        onClick={() => handleRemove(singleTodo)}
      >
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
            d="M20 12H4"
          />
        </svg>
      </button>
    </div>
  );
};

export default Todo;
