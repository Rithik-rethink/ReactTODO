import React from 'react';
import './App.css';
import {ITEMS} from './shared.js';
window.id = 0;
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items : ITEMS,
      task : ""
    }
  }

  handleChange(event){
    var val = event.currentTarget.value;
    this.setState({
      task: val
    })
    
  }
  additems(e){
    const p = {id:++window.id , name:this.state.task};
    this.state.items.push(p);
    this.setState({
      items : this.state.items
    })
    e.preventDefault();
  }
  
  render() {
      const tasks = this.state.items.map((task)=>{
        return(
          <div>
            <div id = {task.id}>{task.id}. {task.name}<input type = 'checkbox' className = 'ml-5'></input></div><br></br>
          </div>
        );
      })
      return (
      <div className="App">
        <div className = 'container'>
          <div className = 'row text'>
            <div className = 'col-12 align-self-center'>TO-DO List</div>
          </div> 
          <div className = 'row text'>
          <div className = 'col-12 align-self-center'>
            <form >
              <input type = 'text' placeholder = 'enter task' onChange = {(event) => this.handleChange(event)}></input>  
              <button className = 'btn textl ml-3' onClick = {this.additems.bind(this)}>Submit</button>
            </form>       
          </div>
          </div>
          <div className = 'text'>
            {tasks}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
