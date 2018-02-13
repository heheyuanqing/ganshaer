import React,{Component} from 'react';
import '../style/login.css'
class Logup extends Component{
    render(){
        return(
            <div className="logupContainer">
                <div className="title">
                    <span>干啥儿</span>
                </div>
                <div className="input-group">
                    <div className="input">
                        <span>邮箱：</span>
                        <input type="text"/>
                    </div>
                    <div className="input">
                        <span>昵称：</span>
                        <input type="text"/>
                    </div>
                    <div className="input">
                        <span>密码：</span>
                        <input type="password"/>
                    </div>
                    <div>
                        <button>注册</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Logup;