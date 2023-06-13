const endDate = "2023-06-15 14:40:00";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");
// const clock = () => {

// }
function clock() {
    const end = new Date(endDate);
    const now = new Date();
    // console.log(end)
    // console.log(now)

    const diff = (end - now) / 1000;
    // console.log(diff)


    if (diff < 0) return;

    // convert into days;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    // console.log(Math.floor(diff / 3600 / 24));

    inputs[1].value = Math.floor(diff / 3600) % 24;
    // console.log(Math.floor(diff / 3600) % 24)

    inputs[2].value = Math.floor(diff / 60) % 60;
    // console.log(Math.floor(diff / 60) % 60)


    inputs[3].value = Math.floor(diff) % 60;
    // console.log(Math.floor(diff) % 60)

}

// initial call
clock()

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */

setInterval(
    () => {
        clock()
    },
    1000
)