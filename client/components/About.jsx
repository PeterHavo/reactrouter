import React from 'react';
import ItemDetails from './itemDetails.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

class About extends React.Component {
constructor(props){
  super(props);
   this.state = {
      name: ''
     
    
      
    };
    
}
componentWillMount(){
 console.log(this.returnPromiseFun())
  this.findIndexArows ();
  
 
   

}

   returnPromiseFun (){
      let  testPromiseCalculate = new Promise(function(resolve, reject){
          setTimeout(function(){
            resolve(1+1);
          },3000);
       });
         
         testPromiseCalculate.then((data) => {return (data+1)}).then((datasub)=>{console.log(datasub + 3)})
        
    
}


findIndexArows () {
  const arrIndex = this.props.arrValue;
  const data = this.props.data;
  const found = []; 

  
   //najst v array index a vratit ho 
   for (var i = 0 ; i < data.length; i++) {
     if (data[i].id == this.props.arrValue)
            {found.push(data[i] );
              this.setState({currentText:data[i]})
              // console.log(this.state.currentText)
             }
     else 
            { 
              // console.log(`Could not find array index ${arrIndex} to appropriate data set ID: ${data[i].id} `);
             }
   };
 
   

   
}


  render() {
    const  data = this.props.data;
    const arrValue = this.props.arrValue
   
    
    return (
     <div >
        <h1 style={{textAlign: 'center'}}>{`this is index arrow:${arrValue}`}</h1>
      

        <div>
          <ItemDetails className="container-fluid" data={this.state.currentText} key={this.state.arrIndex}/>
        </div>
        

      </div>);
      
      

  }
}
About.defaultProps = {arrValue:0}
export default About;