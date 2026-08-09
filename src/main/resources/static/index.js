//alert("Hello from javascript ");

var users = [
    {
        "userImage": "/images/jane.png",
        "name": "Jane",
        "gender": "Female",

    },
    {
        "userImage": "/images/john.png",
        "name": "John",
        "gender": "Male",

    }
]

var id = 0;

function toggleUser() {

    id = (id + 1) % users.length;

    var userImage = document.getElementById("userImage");
    var userName = document.getElementById("userName");
    var userGender = document.getElementById("userGender");

    userImage.src = users[id].userImage;
    userName.innerHTML = users[id].name;
    userGender.innerHTML = users[id].gender;
}

function randomUser() {
    console.log("function called successfully");
    fetch("https://randomuser.me/api")
        .then(function (response) {
            return response.json();

        })
        .then(function (response) {

            var userImage = document.getElementById("user-Image");
            var userName = document.getElementById("user-Name");
            var userGender = document.getElementById("user-Gender");

            userImage.src = response.results[0].picture.large;
            userName.innerHTML = response.results[0].name.first + " " + response.results[0].name.last;
            userGender.innerHTML = response.results[0].gender;

        })



}

function myRandomUser() {
    console.log("function called successfully");
    fetch("/api/users/random")
        .then(function (response) {
            return response.json();

        })
        .then(function (response) {

            var userImage = document.getElementById("user-Image");
            var userName = document.getElementById("user-Name");
            var userGender = document.getElementById("user-Gender");

            userImage.src = response.image;
            userName.innerHTML = response.name;
            userGender.innerHTML = response.gender;

        })



}