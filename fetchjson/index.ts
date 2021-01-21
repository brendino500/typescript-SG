import axios from 'axios'

const  url = 'http://jsonplaceholder.typicode.com/todos/1'

// defines the structure of an object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data as Todo;
  const id = todo.id
  const title = todo.title
  const finished = todo.completed

  console.log(`
    The Todo with ID:${id}
    Has a title of: ${title}
    Completed: ${finished}
  `)
})
