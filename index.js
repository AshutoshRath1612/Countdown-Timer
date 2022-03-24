

let countdownSubmit = document.getElementById('countdownSubmit')

countdownSubmit.addEventListener('click' ,setCountdown);

var audio = new Audio("https://raw.githubusercontent.com/Xiija/TestFiles/master/Yuki%20%26%20Tako%2001.mp3")
function ringbell(){
    audio.play();
}
let countdown ="";
const date = document.getElementById('datee');
const time = document.getElementById('timee');

    document.getElementById('showTime').style.display = "none";

    function setCountdown(e){
    
    e.preventDefault();
   
     countdown = new Date(date.value + " " + time.value);
    console.log(`Setting Countdown for ${countdown}`);
    
    let now = new Date();

    let timetocountdown = countdown - now;
    // console.log(timetocountdown)
    setInterval(() => {
        let showSeconds;let showMinutes;let showHour
        let timeleft = (countdown - new Date())/1000;
        console.log(timeleft)
        if(timeleft>60){
             showSeconds = Math.floor( timeleft%60);
             showMinutes = Math.floor( timeleft/60);
             if (showMinutes > 60) {
                 showHour = Math.floor( showMinutes/60);
                showMinutes = Math.floor( showMinutes%60);
            }
            else{
                showHour=00;
            }
        }
        else{
             showSeconds = Math.floor( timeleft);
             showMinutes= 00;
             showHour=00;
        }
       
        console.log(showHour + " " + showMinutes + " "+ showSeconds)
        document.getElementById('showHour').innerHTML = showHour;
        document.getElementById('showMinutes').innerHTML = showMinutes;
        document.getElementById('showSeconds').innerHTML = showSeconds;
        document.getElementById('showTime').style.display = "block";
        if (showSeconds<0) {
            let hours12 = countdown.getHours();
            let am_pm = "";
            if(hours12>=12){
                hours12 -= 12;
                am_pm = "PM";
            }
            else{
                if (hours12 == 0) {
                    hours12 = 12;
                }
                am_pm = "AM";
            }
            document.getElementById('showTime').innerHTML =  `Countdown ended. Countdown was set for : ${hours12}:${countdown.getMinutes()}:${countdown.getSeconds()}0 ${am_pm} for date ${countdown.getDate()}/${countdown.getMonth()}/${1900 +countdown.getYear()}`;
            
        }
    }, 1000);
    if (timetocountdown >=0) {
        setTimeout(() => {
            ringbell();
        }, timetocountdown);
    }
    date.value="";  time.value="";
}