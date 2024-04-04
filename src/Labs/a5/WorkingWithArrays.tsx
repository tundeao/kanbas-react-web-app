import axios from "axios";
import { useEffect, useState } from "react";

const API_BASE = process.env.REACT_APP_API_BASE;

function WorkingWithArrays() {
	const API = `${API_BASE}/a5/todos`;
	const [todo, setTodo] = useState({
		id: 1,
		title: "NodeJS Assignment",
		description: "Create a NodeJS server with ExpressJS",
		due: "2021-09-09",
		completed: false,
	});
	const [todos, setTodos] = useState<any[]>([]);
	const fetchTodos = async () => {
		const response = await axios.get(API);
		setTodos(response.data);
	};
	useEffect(() => {
		fetchTodos();
	}, []);

	const removeTodo = async (todo: any) => {
		const response = await axios.get(`${API}/${todo.id}/delete`);
		setTodos(response.data);
	};

	const createTodo = async () => {
		const response = await axios.get(`${API}/create`);
		setTodos(response.data);
	};

	const fetchTodoById = async (id: any) => {
		const response = await axios.get(`${API}/${id}`);
		setTodo(response.data);
	};

	const postTodo = async () => {
		const response = await axios.post(API, todo);
		setTodos([...todos, response.data]);
	};

	const deleteTodo = async (todo: any) => {
		const response = await axios.delete(`${API}/${todo.id}`);
		setTodos(todos.filter((t) => t.id !== todo.id));
	};

	const updateTodo = async () => {
		const response = await axios.put(`${API}/${todo.id}`, todo);
		setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
	};

	return (
		<div>
			<h3>Working with Arrays</h3>
			<h4>Retrieving Arrays</h4>
			<a className="btn btn-primary" href={API}>
				Get Todos
			</a>
			<h4>Retrieving an Item from an Array by ID</h4>
			<input
				value={todo.id}
				onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value) })}
			/>
			<a href={`${API}/${todo.id}`}>Get Todo by ID</a>
			<h3>Filtering Array Items</h3>
			<a href={`${API}?completed=true`}>Get Completed Todos</a>
			<h3>Creating new Items in an Array</h3>
			<a href={`${API}/create`}>Create Todo</a>
			<h3>Deleting from an Array</h3>
			<a href={`${API}/${todo.id}/delete`}>Delete Todo with ID = {todo.id}</a>
			<h3>Updating an Item in an Array</h3>
			<input
				type="text"
				value={todo.title}
				onChange={(e) =>
					setTodo({
						...todo,
						title: e.target.value,
					})
				}
			/>
			<a href={`${API}/${todo.id}/title/${todo.title}`}>
				Update title to {todo.title}
			</a>{" "}
			<br />
			<input
				type="text"
				value={todo.description}
				onChange={(e) =>
					setTodo({
						...todo,
						description: e.target.value,
					})
				}
			/>
			<a href={`${API}/${todo.id}/description/${todo.description}`}>
				Update description to {todo.description}
			</a>
			<br />{" "}
			<input
				type="checkbox"
				checked={todo.completed.valueOf()}
				onChange={(e) =>
					setTodo({
						...todo,
						completed: e.target.checked,
					})
				}
			/>
			<a href={`${API}/${todo.id}/completed/${todo.completed}`}>
				Update completed to {todo.completed.valueOf().toString()}
			</a>
			<br />
			<h4>Todos List</h4>
			<button onClick={createTodo}>Create Todo</button>
			<button onClick={postTodo}> Post Todo </button>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<input checked={todo.completed} type="checkbox" readOnly />
						{todo.title}
						<p>{todo.description}</p>
						<p>{todo.due}</p>
						<button
							onClick={() => deleteTodo(todo)}
							className="btn btn-danger float-end ms-2">
							Delete
						</button>
						<button onClick={updateTodo}>Update Todo</button>
					</li>
				))}
			</ul>
		</div>
	);
}
export default WorkingWithArrays;