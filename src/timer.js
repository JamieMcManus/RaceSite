import React from 'react';
//import ReactDOM from 'react-dom';

class Timer extends React.Component{
    //set days hrs etc 
    constructor(props){
        super(props);
        this.state={
            days:0,
            hours:0,
            minutes:0,
            seconds:0,
            
        }

    }


    componentWillMount(){
        this.countTime();
    }
    // Runs after mounting
    componentDidMount(){
        setInterval(()=> this.countTime(),1000);
    }
    // Add a zero if less than 10 
    addZero(num){
        if (num<10){
            return '0'+num;
        }
        else 
            return num;


    }

    countTime(){
        const deadline =new Date(2018,3,17);  // Deadline can be changed
        //Calculate time remaining
        const time = deadline-Date.parse(new Date())
        const seconds = Math.floor((time/1000)%60);
        const minutes = Math.floor((time/1000/60)%60);
        const hours = Math.floor(time/(1000*60*60)%24);
        const days = Math.floor(time/(1000*60*60*24));
        //set state of timer 
        this.setState({days:days,hours:hours,minutes:minutes,seconds:seconds})
    }
    
    //render method
    render(){
            return (
                <div>{this.addZero(this.state.days)} days {this.addZero(this.state.hours)} hrs {this.addZero(this.state.minutes)} min {this.addZero(this.state.seconds)} sec</div>

            )
    }
    


}
//ReactDOM.render(<Timer/>,document.getElementById("timerApp"));
console.log("test");

export default Timer;