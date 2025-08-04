import { useState } from "react";

const TodoNew = (props) =>{

    const [text,setText] = useState("quangit");
    const {addNewTodo} = props;
    const handleClick = () =>{
      console.log(text)
      addNewTodo(text);
    }
    const handleOnChange = (e) =>{
      setText(e);
    }
    return (<div>
      <div className="add-block">
        <input type="text" placeholder="Enter your task" onChange={(e)=>handleOnChange(e.target.value)}/>
        <button style={{cursor:"pointer"} }onClick={handleClick}>Add</button>
      </div>
      <div>my text is :{text}</div>
    </div>
    );
}
export default TodoNew;