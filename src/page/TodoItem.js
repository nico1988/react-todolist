import React,{ Component} from 'react';
class TodoItem extends Component {
    constructor(props){
        super(props)
        this.handleItemClick=this.handleItemClick.bind(this) // bind的自身组件
    }
    render(){
        const {content} = this.props;
        return (
            <li onClick={this.handleItemClick.bind(this)}>{content}</li>
        )
    }
    handleItemClick(){
        const { handleItemClick,index } = this.props; // 解构赋值
        handleItemClick(index)
    }
}
export default TodoItem; 