import React, { Component, Fragment} from 'react';
import Timer from './Timer'
class TodoList extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
        this.state = {
            inputValue:'nico',
            list:['学习英文','学习react']
        }
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input onChange={this.handleCange.bind(this)} onKeyPress={this.handleButtonClick.bind(this)} value={this.state.inputValue}/>
                    <button onClick={this.handleButtonClick.bind(this)}>点击添加更多</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>
                        })
                    }
                </ul>
                {/* <Timer></Timer>
                hello , this is {this.props.name} */}
            </Fragment>
        )
    }
    handleCange(e){
        this.setState({inputValue:e.target.value})
    }
    handleButtonClick(e){
        if(this.state.inputValue){
            this.setState({
                list: [...this.state.list, this.state.inputValue],
                inputValue:''
            })
        }
    }
    handleItemClick(index){
        const list = [...this.state.list]
        list.splice(index,1)
        this.setState({
            list: list
        })
    }
}

export default TodoList;