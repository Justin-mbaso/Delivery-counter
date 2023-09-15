import { hover } from '@testing-library/user-event/dist/hover'
import React,{Componet} from 'react'
import pizza from './pizza.png'
import './pizza.css'

const head={
 
}
const container = {
    backdropFilter:" blur(13px) saturate(180%)",
    // -webkit-backdropFilter: blur(13px) saturate(180%),
    backgroundColor: "rgba(17, 25, 40, 0.42)",
    borderRadius: "12px",
    border: "3px solid rgba(255, 255, 255, 0.125)",
    padding: "50px",
    marginTop: "50px",
    marginBottom: "50px",
}
const Counter={
    fontSize:"82px",
    borderRadius:"10px",
    background:"#565252",
    boxShadow:"inset 20px 20px 60px #494646,  inset -20px -20px 60px #635e5e"
}
const button={
    width:"150px",
    height:"40px",
    fontSize:"18px",
    padding:"10px",
    backgroundColor:"#f0f0f0",
    borderStyle:'none',
    borderRadius:"8px",
    boxShadow: " 0px 2px 10px 0px #F8F8FF",
    cursor: "pointer",
    border:"3px solid #696969"
    }
const pic= {
    marginBottom:"-60px",
}
class Pizza extends React.Component {
    constructor(props){
    super(props)
    this.state= {
        count:0
        }
    }

    takeOrder(){
        this.setState({
            count:this.state.count +1
        })
    
    }
    cancelOrder(){
        this.setState({
            count:this.state.count -1
        })
    }

    render(){
        return<div>
        <div className='container' style={container}>
        <img src={pizza} width="200" style={pic}/>
        <h1 style={{Color:" linear-gradient(243deg, rgb(209, 75, 75) 28.54%, rgb(237, 207, 55) 65.49%)"}}>Pizza Order Counter</h1>
        <h1 style={Counter}>{this.state.count}</h1>
        <button className='button' style={button} onClick={() => this.takeOrder()}>Take order</button><br/><br/>
        <button className='button' style={button} onClick={() => this.cancelOrder()}>Cancel order</button>
        </div>
        </div>
    }

}




export default Pizza;