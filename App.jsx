import React, { Component } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Error from './Error'
export default class App extends Component {
  constructor(){
    super()
    this.state={
      language:"hi",
      search:""
    }
this.changeLanguage=this.changeLanguage.bind(this);
this.changeSearch=this.changeSearch.bind(this);
  }
  changeLanguage(input){
  this.setState({language:input})
  }
  changeSearch(input){
    this.setState({search:input})
  }
  render() {
    return (
    <BrowserRouter>
    <Navbar changeLanguage={this.changeLanguage} changeSearch={this.changeSearch}/>
    <Routes>
    <Route path='/' element={<Home />}></Route>

<Route path='/All' element={< Home search={this.state.search} language={this.state.language} q='All'/>}></Route>
<Route path='/Politics' element={< Home search={this.state.search} language={this.state.language} q='Politics'/>}></Route>
<Route path='/Crime' element={< Home search={this.state.search} language={this.state.language} q='Crime'/>}></Route>
<Route path='/Science' element={< Home search={this.state.search} language={this.state.language} q='Science'/>}></Route>
<Route path='/Cricket' element={< Home search={this.state.search} language={this.state.language} q='Cricket'/>}></Route>
<Route path='/IPL' element={< Home search={this.state.search} language={this.state.language} q='IPL'/>}></Route>
<Route path='/Economics' element={< Home search={this.state.search} language={this.state.language} q='Economics'/>}></Route>
<Route path='/India' element={< Home search={this.state.search} language={this.state.language} q='India'/>}></Route>
<Route path='/Other' element={< Home search={this.state.search} language={this.state.language} q='Other'/>}></Route>
<Route path='/*' element={<Error/>}> </Route>

<Route path='/Technology' element={< Home search={this.state.search} language={this.state.language} q='Technology'/>}></Route>




    </Routes>
    <Footer/>
    </BrowserRouter>

    )
  }
}
