import React , {Component} from 'react'
import ReactDOM from 'react-dom'
import JSON from './db.json'
//COMPONENTS
import Header from './components/header'
import NewsList from './components/news_list'
class App extends Component{

  state ={
    news:JSON
  }

 render(){
  return (
    <div className='Wrapper' >
      <Header/>
      <NewsList news={this.state.news} donkey="me" />
    </div>
  
  )
 }
  
}

ReactDOM.render(<App/>,document.querySelector('#root'));