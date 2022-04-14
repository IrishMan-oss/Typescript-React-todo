import React, { useState } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const keyPressHendler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(title);
      setTitle("");
    }
  };

  return (
    <div className="row">
      <div className="input-field col s5">
        <input
          placeholder="Добавить дело"
          id="first_name"
          type="text"
          className="validate"
          value={title}
          onChange={changeHandler}
          onKeyPress={keyPressHendler}
        />
        <label htmlFor="first_name" className="active">
          Введите название дела
        </label>
      </div>
    </div>
  );
};

export default TodoForm;
