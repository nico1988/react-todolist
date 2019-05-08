import React, { Component, Fragment} from 'react';
// import Timer from './Timer'
import "../style.css"
import TodoItem from './TodoItem'
class TodoList extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
        this.state = {
            inputValue:'nico',
            list:['wade','touchUI']
        }
        /**
         * 批量绑定this
         */
        this.handleInputChange = this.handleInputChange.bind(this) 
        this.handleInputClick = this.handleInputClick.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.handleItemClick = this.handleItemClick.bind(this)
    }
    render() {
        return (
            <Fragment>
                <TodoItem content={"nico"}/>
                <label htmlFor="insertArea">输入内容</label>
                <div>
                    <input
                        id="insertArea" 
                        className="input"
                        onChange={this.handleInputChange}
                        onKeyDown={this.handleInputClick}
                        value={this.state.inputValue}/>
                    <button onClick={this.handleButtonClick}>点击添加更多</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
                {/* <Timer></Timer>
                hello , this is {this.props.name} */}
            </Fragment>
        )
    }
    handleInputChange(e){
        const value = e.target.value;
        /**
         * 新的setstate的写法
         * 第一个参数是prevState
         * 新的写法
         *  */
        this.setState(()=> ({ // es6 return 简写
            inputValue:value
        }))
        // this.setState({inputValue:e.target.value}) // 原来的写法
    }
    handleInputClick(e){
        if(e.keyCode === 13){
            this.handleButtonClick(e)
        }
    }
    handleButtonClick(e){
        let value = this.state.inputValue.trim();
        if(value){
            /**
             * 新的setstate的写法
             * 第一个参数是prevState  避免不小心改变state的状态
             * 新的写法
             *  */
            this.setState((prevState)=> ({ // es6 return 简写
                list: [...prevState.list, value],
                inputValue:''
            }))
            // this.setState({
            //     list: [...this.state.list, value],
            //     inputValue:''
            // })
        }
    }
    getTodoItem(){
        return(
            this.state.list.map((item,index)=>{
                return (
                    <Fragment>
                        <TodoItem
                            key={index}
                            handleItemClick={this.handleItemClick.bind(this)} // bind this
                            list={this.state.list}
                            content={item}  
                            index={index}/>
                    </Fragment>
                )
            })
        )
    }
    handleItemClick(index){
        // const list = [...this.state.list]
        // list.splice(index,1)
        // 老的写法
        // this.setState({
        //     list: list
        // })
        /**
         * 新的setstate的写法
         * 第一个参数是prevState  避免不小心改变state的状态
         * 新的写法
         *  */
        this.setState((prevState)=>{
            const list = [...prevState.list]
            list.splice(index,1);
            return {
                list
            }
        })
    }
}

export default TodoList;