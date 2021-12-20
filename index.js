const form = document.querySelector("#send-form")
const firstName = document.querySelector('input[name="firstName"]')


form.addEventListener("submit", onSubmit);


function onSubmit(e) {
    e.preventDefault();
    console.log('im here')
    if (firstName.value === "") {
        alert("pleas enter your name and select country");
    } else {
        alert("done,we'll contact you");
    }
}
// for (let i = 0; i < 5; i++) {
//     text += "The number is " + i + "<br>";
//   }


function add_img(name) {
    const img = document.createElement('img');
    img.src = './images/' + name
    const pic = document.querySelector('#images-loop')
    pic.appendChild(img);
}

const images = ["londen.jpeg", "passport.jpeg", "plane.jpeg", "travel.webp"]


for (let i = 0; i < images.length; i++) {

    setTimeout(
        function timer() {
            add_img(images[i]);
        },
        i * 2000
    );
}





