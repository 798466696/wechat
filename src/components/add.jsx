import React from "react";
import {withRouter} from 'react-router-dom'
import '../assets/css/add-bar.css'
const mess = require('../assets/img/other/mess.svg');
const addFri = require('../assets/img/other/add-fri.svg');
const sao = require('../assets/img/other/sao.svg');
const shou = require('../assets/img/other/shou.svg');
const help = require('../assets/img/other/help.svg');
const List = [
  {icon: mess,text:'发起群聊'},
  {icon: addFri,text:'添加朋友'},
  {icon: sao,text:'扫一扫'},
  {icon: shou,text:'收付款'},
  {icon: help,text:'帮助与反馈'},
];
class Add extends React.Component {
  render() {
    return (
     <div
       className='bar-container'
     >
       <div
         className='sanjiao'
       />
       <div
         className='add-bar'
       >
         {List.map((item,index) =>
           <div
             className='bar-item'
             onClick={() => {
               if (index === 1) {
                 this.props.history.push('/add/friend')
               }
             }}
           >
             <img src={item.icon} alt=""/>
             <span>{item.text}</span>
           </div>
         )}
       </div>
     </div>
    )
  }
}
export default withRouter(AddFriend)