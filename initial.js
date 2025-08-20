document.addEventListener("DOMContentLoaded", (event) =>
{
    let today = new Date();

    const Y = String(today.getFullYear());
    const M = String(today.getMonth() + 1).padStart(2,"0");
    const D = String(today.getDate()).padStart(2,"0");
    const h = String(today.getHours()).padStart(2,"0");
    const m = String(today.getMinutes()).padStart(2,"0");
    const s = String(today.getSeconds()).padStart(2,"0");
    
    //value="2017-06-01T08:30" />
    const formatted = Y + "-" + M + "-" + D + "T" + h + ":" + m + ":" + s;

    document.getElementById("inizio").value = formatted;
    document.getElementById("fine").value = formatted;
    console.log("set now date " + formatted);
});