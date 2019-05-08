import React,{ Component} from 'react';
import PropTypes from 'prop-types'
class TodoItem extends Component {
    constructor(props){
        super(props)
        this.handleItemClick=this.handleItemClick.bind(this) // bind的自身组件
    }
    render(){
        const {content} = this.props;
        return (
            <li onClick={this.handleItemClick.bind(this)}>{content}
                <i>{this.props.name}</i>
            </li>
        )
    }
    handleItemClick(){
        const { handleItemClick,index } = this.props; // 解构赋值
        handleItemClick(index)
    }
}
TodoItem.propTypes = { // 类似vue的props
    content: PropTypes.string.isRequired,
    handleItemClick: PropTypes.func,
    index: PropTypes.string
}
TodoItem.defaultProps = {
    name:" hello , this is not come from parent"
}
export default TodoItem; 