import React from 'react'
var totalTime = parseInt(prompt("Enter time in seconds: "))


function App(){
  var [secondsLeft, setSecondsLeft] = React.useState(totalTime)
  var [timer, setTimer] = React.useState(false)
  React.useEffect(
   () => {

     if(timer){
       var intervalId = setInterval(
         () => {
           setSecondsLeft(secondsLeft => secondsLeft - 1)
       }, 1000)
     }
     if (secondsLeft === 0) {
       clearInterval(intervalId)
     }
     return () => clearInterval(intervalId)
   },[timer,secondsLeft]


 )

 function reset(){
   setSecondsLeft(totalTime)
   setTimer(false)
 }


  return(
    <div style={{textAlign: 'center'}}>
      <h2 style={{color: 'red'}}>Timer App</h2>
{
        !timer ? <button onClick={() => setTimer(true)}> Start </button> : <button onClick={reset}> Reset </button>
      }
      {
  timer &&
  <button onClick={() => setTimer(false)}> Pause </button>
}


      <h2>{secondsLeft} seconds left!</h2>

    </div>
  )
}

export default App