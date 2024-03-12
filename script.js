const currentTime = () =>{
    let currTime = new Date().toLocaleTimeString();
    document.getElementById("clock").innerHTML = currTime
};

setInterval(() => {
    currentTime();
}, 1000);

