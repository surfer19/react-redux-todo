import React from 'react';
import TodoList  from './TodoList';

class App extends React.Component {
    render() {
        return (
            <div className="container text-center">
                <h1>Todo app</h1>
                <div className="card"/>
                <TodoList/>            
            </div>
        );
    }
}
export default App;