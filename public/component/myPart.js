import React,{Component} from 'react';

export default class MyPart extends Component{
    render(){
        return(
            <div className="myPart">
                <div className="creatEntry">
                    <div className="plus">+</div>
                    <span>创建任务</span>
                </div>
                <div className="myTask">
                    <a href="#">我的任务</a>
                    <ul className="taskList">
                        <li><a href="">每天阅读</a></li>
                        <li><a href="">每天学习</a></li>
                        <li><a href="">每天写算法</a></li>
                        <li><a href="">每天加油</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}