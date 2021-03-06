import { Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import List from './components/Todo/List';
import TaskForm from './components/Todo/Form';
import Footer from './components/Footer/Footer'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// const todo = mongoose.Schema({
//   text: { type: String, required: true },
//   assignee: { type: String },
//   complete: { type: Boolean, default:false },
//   difficulty: { type: Number, default: 1 },
// });

const data = [
  { id: 1, name: 'Declutter' },
  { id: 2, name: 'Sweep' },
  { id: 3, name: 'Vacuum' },
  { id: 4, name: 'Mop' },
];

let nextId = 5;

function App() {
  const [tasks, setTasks] = useState(data);
  
  console.log(tasks);
  
  function handleSave(formData) {
    const newTask = {
      ...formData,
      id: nextId++,
    };
    const newTasks = [
      ...tasks,
      newTask,
    ]
    setTasks(newTasks);
  }
  
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/About">
          <About/>
        </Route>
        <Route path="/List">
          <List listData={tasks}/>
        </Route>
        <Route path="/Form">
          <TaskForm onSave={handleSave}/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
