const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

// code to get the seconds of the time 

  const seconds = now.getSeconds();


  const secondsDegrees = ((seconds / 60) * 360) - 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

// code to get the minutes of time
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) - 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

//   code to get hours
  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) - 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// code to run the function every second
setInterval(setDate, 1000);