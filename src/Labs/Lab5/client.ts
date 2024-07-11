import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;


// fetch specific welcome message
export const fetchWelcomeMessage = async () => {
    const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
    return response.data;
  };
  


// Help with asynchronous version of pulling assignment object
const ASSIGNMENT_API = `${REMOTE_SERVER}/lab5/assignment`;

// pull whole assignemnt
export const fetchAssignment = async () => {
  const response = await axios.get(`${ASSIGNMENT_API}`);
  return response.data;
};

//pull assignment title
export const updateTitle = async (title: string) => {
  const response = await axios.get(`${ASSIGNMENT_API}/title/${title}`);
  return response.data;
};



// Help with asynchronous version of pulling array object
const TODOS_API = `${REMOTE_SERVER}/lab5/todos`;

// fetch the remote todo array (3.5.6)
export const fetchTodos = async () => {
    const response = await axios.get(TODOS_API);
    return response.data;
};

// delete a todo item (incorrectly w/ get)
export const removeTodo = async (todo: any) => {
    const response = await axios.get(`${TODOS_API}/${todo.id}/delete`);
    return response.data;
};

// delete todo item with delete
export const deleteTodo = async (todo: any) => {
    const response = await axios.delete(`${TODOS_API}/${todo.id}`); // no /delete in URL 
    return response.data;
};
  


  
  
// create a todo item (incorrectly w/ get)
export const createTodo = async () => {
    const response = await axios.get(`${TODOS_API}/create`);
    return response.data;
};
  

// create new item with post
export const postTodo = async (todo: any) => {
    const response = await axios.post(`${TODOS_API}`, todo);
    return response.data; //returns singular new item which can be appended to existing list?
};
  

// update an existing item with PUT
export const updateTodo = async (todo: any) => {
    const response = await axios.put(`${TODOS_API}/${todo.id}`, todo);
    return response.data;
  };
  
  
