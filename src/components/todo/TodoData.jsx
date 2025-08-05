
const TodoData = (p) =>{
  const {todos} = p;
    return (
    <div className="todo-data">
      {todos.map((item,index) => {
        console.log(item,index);
      return (
      <div className={`todo-item ${index}`}  key={item.id}>
          <div>{item.name}</div>
          <button>Delete</button>
        </div>
      );
      })}
     
    </div>);
}
export default TodoData;