import React from 'react'

const getYear= ()=>{
    const newDate= new Date();
    return newDate.getFullYear();
};

const user ={
    name:'Francis',
    lastname:'Jones',
    age:16
}




class Header extends React.Component{

    state = {
        active:false,
        keywords : ""
       }
    inputchange=(event)=>
    {
       // console.log(event.target.value);
       const value = event.target.value === '' ? false : true;
       this.setState({
        active:value,
        keywords : event.target.value
       });
      
    }
    render(){


        console.log(this.state.keywords)
     
        return( 
            <header style={{background:`${this.state.active ? 'red' : 'blue'}`}} >
            The date is {getYear()}
            User is {user.name}
            lastname {user.lastname}
    
            <div className="logo" >logo</div>
            <input onChange={this.inputchange}  ></input>
    
        </header>
    )
        }
}
    

export default Header;   