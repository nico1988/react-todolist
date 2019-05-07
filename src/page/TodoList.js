import React, { Component, Fragment} from 'react';
import Timer from './Timer'
class TodoList extends Component{
    render() {
        return (
            <Fragment>
                <Timer></Timer>
                hello , this is {this.props.name}
            </Fragment>
        )
    }
}

export default TodoList;