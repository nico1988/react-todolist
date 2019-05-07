import React,{ Component} from 'react';
class TodoItem extends Component {
    constructor(props){
        super(props)
        this.handleItemClick=this.handleItemClick.bind(this)
    }
    render(){
        return <li onClick={this.handleItemClick.bind(this)}>{this.props.content}</li>
    }
    handleItemClick(){
        this.props.handleItemClick(this.props.index)
        // const list = [...this.state.list]
        // list.splice(index,1)
        // this.setState({
        //     list: list
        // })
    }
}
export default TodoItem;