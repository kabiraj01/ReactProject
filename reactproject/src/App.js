import './App.css';
import Todo from './components/Todo/Todo'
import TodoProvider from './context/TodoContext';

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoProvider>
        <Todo></Todo>
      </TodoProvider>
    </div>
  );
}
export default App;
