function time(){
    let d= new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
var interval=setInterval(time, 1000);