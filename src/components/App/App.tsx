//== import
// components
import NewTaskInput from '../NewTaskInput';
import TasksCounter from '../TasksCounter';
import Tasks from '../Tasks';
// style
import './app.scss';

function App() {
  return (
    <div className="app">
      <NewTaskInput />
      <TasksCounter />
      <Tasks />
    </div>
  );
}

//== exp
export default App;
