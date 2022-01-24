function digitalClock(){
    //get unit
    const date =new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let year = date.getFullYear();
    let status = "AM";
    if(hr>12){
        hr = hr-12;
        status = "PM"
    }
    hr = (hr<10) ? "0"+hr : hr;
    min = (min<10) ? "0"+min : min;
    sec = (sec<10) ? "0"+sec : sec;
    //day & month
    let dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let monthName = ["January","February","March","April","May","June","July","Auguest","September","Octobar","November","December"]
    //dayInfo
    let day = `${dayName[date.getDay()]}, ${date.getDate()} ${monthName[date.getMonth()]} ${year}`;
    //UI display
    document.getElementById("day").innerHTML = day;
    document.getElementById("hr").innerHTML = hr;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
setInterval(digitalClock,1000)
}
digitalClock();