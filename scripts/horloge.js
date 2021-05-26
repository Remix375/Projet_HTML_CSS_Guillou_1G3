const time = () => {
    let d = new Date();
    
    let time = d.toTimeString()
    
    document.getElementById("heure").innerHTML = time.substring(0, 8);

}

time()
setInterval(time, 1000)