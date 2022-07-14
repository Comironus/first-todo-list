import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
	const [tasks, setTasks] = useState(['Start', 'Finish']);

  const handleInput = (event) => setInput(event.target.value);
	const handleSubmit = () => setTasks([...tasks, input]);
	const handleDelete = (task) => {
    const filteredArr = tasks.filter((item) => item !== task);
		setTasks(filteredArr);
	};

return (
	<div className='area bg-gray-300 font-mono'>
		<div>
		<div>
			<h1>Todo List</h1>
			<input value={input}onChange={handleInput} 
			className='border-solid border-2 border-black rounded-lg'/>
			<button 
			onClick={handleSubmit} 
			className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full'>
				+
			</button>
		</div>
		<ul>
			{tasks.map((task, index) => (
				<li key={index}>
					{index + 1}. {task}
					<button
					 onClick={() => handleDelete(task)} 
					 className='bg-red-500 hover:bg-red-700 text-white font-bold py- px-2 rounded-full '>
						×
					</button>
				</li>
			))}
		</ul>
	</div>
	</div>
	);
			}

export default App;
