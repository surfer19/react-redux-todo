import React from 'react';
// import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
// import { Button } from 'reactstrap';

class TodoItem extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        };

        this.updateInputValue = this.updateInputValue.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    // just update value
    handleChange(val) {
        this.setState({
            text: val.target.value
        });
        console.log(this.state.text);
    }
    // get text and request API
    handleBlur(){
        console.log('blur = ', this.state.text);
    }

    render() {
        return (       
            <input value={this.state.text} 
                   onChange={evt => this.handleChange(evt)} 
                   onBlur={this.handleBlur}/>
        );        
    }
}
export default TodoItem;


// <form>
            //     <InputGroup>
            //         <InputGroupAddon addonType="prepend">
            //         <InputGroupText>
            //             <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            //         </InputGroupText>
            //         </InputGroupAddon>
            //         <Input placeholder="Check it out" onBlur={()=> this.props.actions.} />
            //     </InputGroup>
            // </form>