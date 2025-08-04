
const TodoData = (p) =>{
  const {todos} = p;
    return (
    <div className="todo-data">
      <div>{JSON.stringify(todos)}</div>
    </div>);
}
export default TodoData;