const clock = document.querySelector('#clock');
const alarm = new Audio('discordalarm.mp3');
alarm.loop = true;
let alarmTime = null;
let alarmTimeout = null;

function displayTime () {
  const d = new Date();
  const hour = formatTime(d.getHours());
  const minute = formatTime(d.getMinutes());
  const second = formatTime(d.getSeconds());

    clock.innerText = `${hour} : ${minute} : ${second}`;

    function formatTime(time) {
      if (time < 10) {
        return '0' + time;
      }
      return time;
    }
}

setInterval(displayTime, 1000);

displayTime();

function setAlarmTime (value) {
  alarmTime = value;
}

function setAlarm () {
  if(alarmTime) {
    const current = new Date();
    const timeToAlarm = new Date(alarmTime);
  

  if (timeToAlarm > current) {
    const timeout = timeToAlarm.getTime() - current.getTime();
    alarmTimeout = setTimeout(() => alarm.play(), timeout);
    alert('Alarm Set');
  }
}
}

function clearAlarm() {
  alarm.pause();
  if (alarmTimeout) {
    clearTimeout(alarmTimeout);
    alert('Alarm cleared');
  }
}