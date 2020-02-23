// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1.
    //Defines the default state value of the class object. 
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2.
    //Changes the state mentioned above in the current class. 
    this.setState({ userInput: e.target.value})
  }

  render(){
    // 3.
    //Declaring a variable that defines what userInput is in relation to the state above. 
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. */}
          //Event! An on change event at that! 
          onChange={ this.robot }
          {/* 5. */}
          //Value being declared as a prop
          value={ userInput }
        />

        <div>
          {/* 6.
          Component call start*/}
          <GoodRobot
            {/* 7. 
            State prop being declared within component call. */}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8.
      //Required div wrapper start tag
      <div>
        <h3>Good Robot</h3>
        {/* 9. 
        Heading 4 tag for text display that will include a call of userInput prop, which will copy whatever the user typed.*/}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10.
//Exporting the component out to be used in the app component(or wherever else it may need to be called.)
export default GoodRobot
