import React from 'react';
import { Button } from 'antd';
export default class Demo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            num:1,
        }
    }
    _increase=()=>{
        const {num}=this.state
        console.log("num",num);
        this.setState((state)=>({
            num:state.num+1
        }))
        this.setState((state)=>({
            num:state.num+1
        }))
        console.log("num",num);
    }
    render(){
        const {num}=this.state;
        let arr1=[1],arr2=[2];
        console.log(arr1.concat(arr2),arr1,arr2);
        return (
            <div>
                <p>{num}</p>
                <Button onClick={function(){this._increase()}}>增加</Button>
            </div>
        )
    }
}