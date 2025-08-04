
const TodoData = (p) =>{
  const {todos} = p;
    console.log(p);
    return (
    <div className="todo-data">
      <div>My name is {p.name}</div>
      <div>My age is {p.data.age}</div>
      <div>I'm from {p.data.address}</div>
      <div>{JSON.stringify(p.todos)}</div>
    </div>);
}
export default TodoData;