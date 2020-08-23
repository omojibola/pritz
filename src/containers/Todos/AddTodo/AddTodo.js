import React, { useState } from "react";
import Button from "../../../components/UI/Forms/Button/Button";

const AddTodo = ({}) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <Button color='main' contain>
      Add Note
    </Button>
  );
};

export default AddTodo;
