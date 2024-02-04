const dog1 = {
    heading: "Bucket Case",
    image: "images/black-dog.jpg",
    caption: "Just hanging out waiting for water",
    altTag: "Black dog in bucket"
};

const dog2 = {
    heading: "Golden Dog",
    image: "images/gold-dog.jpg",
    caption: "Just looking at the sun",
    altTag: "Gold dog sitting on grass"
};

const dog3 = {
    heading: "Snowman and Dog",
    image: "images/snow-dog.jpg",
    caption: "Playing with the snowman",
    altTag: "Dog playing in the snow"
};

const dog4 = {
    heading: "Dog Love",
    image: "images/white-dogs.jpg",
    caption: "Just two loving dogs",
    altTag: "White dogs showing affection"
};

function chooseDog(dogNum) {
    if (dogNum == 1) {
        loadMe(dog1, 1);
    } else if (dogNum == 2) {
        loadMe(dog2, 2);
    } else if (dogNum == 3) {
        loadMe(dog3, 3);
    } else if (dogNum == 4) {
        loadMe(dog4, 4);
    }

    document.activeElement.style.display = "none";
}

function loadMe(dog, dogNum) {
    document.getElementById("heading" + dogNum).innerHTML = dog.heading;
    document.getElementById("img" + dogNum).src = dog.image;
    document.getElementById("img" + dogNum).style.display = "block";
    document.getElementById("p" + dogNum).innerHTML = dog.caption;
    document.getElementById("img" +dogNum).setAttribute('alt', dog.altTag);
}
