function digitalClock(){
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let format = "AM";
    if(hours==0){
        hours = 12;
    }
    if(hours > 12){
        hours= hours-12;
        format = "PM"
    }
    hours = hours < 10 ? '0'+ hours : hours;
    minutes = minutes < 10 ? '0'+ minutes : minutes;
    seconds = seconds < 10 ? '0'+ seconds : seconds;
    let time = `${hours}:${minutes}:${seconds}`;
    let clock = document.getElementById("clock");
    let formatStatus = document.getElementById("format");
    clock.innerHTML = time;
    formatStatus.innerHTML = format;
    setInterval(digitalClock,1000);
}
digitalClock();
