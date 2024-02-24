async function todoList(){
    const response= await fetch ('https://jsonplaceholder.typicode.com/todos');
    const data= await response.json();
    console.log(data);
}
todoList();