import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import About from './About.jsx';
import  {Content} from '../public/data.js';







class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      name: '',
      language:'Eng'
    };
  }
 onClickFunctionLeft(){
    console.log('buton was clicked ');
    const clickedButton = this.state.arrowindex || 0 
    
    this.setState({arrowindex:clickedButton-1 })
    let afterClickedState = this.state.arrowindex;
    console.log(afterClickedState)
 }

 checkIfIndexLast(){
    let  testPromiseCalculate = new Promise(function(resolve, reject){
          setTimeout(function(){
            resolve(1+1);
          },3000);
       });
         
         testPromiseCalculate.then((data) => {return (data+1)}).then((datasub)=>{console.log(datasub + 3)})
 }

 onClickFunctionRight(){
    console.log('buton was clicked ');
    const clickedButton = this.state.arrowindex || 0 
   
      this.setState({arrowindex:clickedButton+1 })
    let afterClickedState = this.state.arrowindex;
    console.log(afterClickedState)
    
   
 }
 componentWillMount() {
  }
  render() {

 

    return (
       <div className="container">
        <div className="text-center">
            <div className=" btn-group">
             <h2 value={this.state.arrowIndex}></h2>
             <span className="glyphicon glyphicon-arrow-left"  onClick = {this.onClickFunctionLeft.bind(this)} ></span>
             <span className="glyphicon glyphicon-arrow-right"  onClick = {this.onClickFunctionRight.bind(this)} ></span>
            
         
            </div>
            
         </div>   
         <About arrValue={this.state.arrowindex}
          data = {this.props.content}
          key = {this.state.arrowindex}
          />
      </div>
    );
  }
}

App.defaultProps = {content:Content}
export default App;