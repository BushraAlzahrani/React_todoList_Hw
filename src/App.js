import './App.css';
import {Component} from 'react';


class App extends Component{
  
 state={
      tasks: []
    }

    addTask=()=>{
    
      this.setState({tasks: this.state.tasks.concat(document.getElementById("userTask").value)});

    }

  render(){

    let todoList = this.state.tasks.map((task) => {
      return <li>{task}</li>
  
    });

    return(
      <div className='App'>
    <div className='tasks'>
    <h1>Tasks:</h1>
    <input type="text" id="userTask"/> 
    <button type="button" onClick={this.addTask}>Add Task</button>
    <ul>
    {todoList}
    </ul> 
      </div> 
      </div>
    )
  }}


export default App;

