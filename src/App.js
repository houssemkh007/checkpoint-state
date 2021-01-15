import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap'
import myimg from './myimg.jpg'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      person:[{fullName:"houssem",bio:"hhhhhh",imgSrc:myimg,profession: "ceo NASA "}],
      isShow:false,
      time:0
      
     }
  }
  showCard=()=>{
    
    this.setState({isShow:!this.state.isShow})
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({time:this.state.time+1})
    }, 1000);
  }
  displayTime=(time)=>{
  let hours = Math.floor(time/3600)
  let min=Math.floor((time%3600)/60)
  let sec=Math.floor((time%3600)%60)
  return <span>{hours.toString().padStart(2,0)}:{min.toString().padStart(2,0)}:{sec.toString().padStart(2,0)}</span>
  }
  render() { 
    return ( <div>
     <p>{this.displayTime(this.state.time)}</p>
     <br></br>
      <Button onClick={this.showCard}>show me </Button>
      {this.state.isShow?
    this.state.person.map(el=>(
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.imgSrc} />
      <Card.Body>
        <Card.Title>{el.fullName}</Card.Title>
        <Card.Text>
        {el.bio}
        </Card.Text>
        <Card.Text>
        {el.profession}
        </Card.Text>

        
      </Card.Body>
    </Card>
    )):<h1>click on the button to show this card </h1>}
    </div> );
  }
}
 
export default App;