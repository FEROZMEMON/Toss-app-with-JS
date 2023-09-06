const img = document.querySelector("img")
let p = document.querySelector("p")

function chand() {

    const random = Math.ceil(Math.random() * 2)
    console.log(random);
    if (random === 1) {
        p.innerHTML = " congratulation you won the Toss"
        img.src = "./assets/chand.jpg"
    }
    else {
        p.innerHTML = "bad luck you loss the Toss"
        img.src = "./assets/masjid.jpg"

    }


}

function masjid() {

    const random = Math.ceil(Math.random() * 2)
    console.log(random);
    if (random === 1) {
        p.innerHTML = " congratulation you won the Toss"
        img.src = "./assets/masjid.jpg"
    }
    else {
        p.innerHTML = "bad luck you loss the Toss"
        img.src = "./assets/chand.jpg"

    }


}

