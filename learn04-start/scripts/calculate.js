function addDate() {
    let today = new Date ();
    document.getElementById("myDate").innerHTML = today;
    document.getElementById("name").value = "";
    document.getElementById("rm1length").value = "";
    document.getElementById("rm1width").value = "";
    document.getElementById("rm1height").value = "";
    document.getElementById("rm1cost").value = "";
}

function estimate() {
    let name = document.getElementById("name").value;
    let numRooms = document.getElementById("rooms").value;
    
    let totalCost = 0;

    for (let i = 1; i <= numRooms; i++) {
        let length = parseFloat(document.getElementById("rm" + i + "length").value);
        let width = parseFloat(document.getElementById("rm" + i + "width").value);
        let height = parseFloat(document.getElementById("rm" + i + "height").value);
        let totalSqFt = ((length * height * 2) + (length * width * 2));
        let cost = (totalSqFt * 0.65);

        document.getElementById("rm" + i + "cost").value = cost.toFixed(2);

        totalCost += cost;
    }

    document.getElementById("estimate").innerHTML = name + "  your estimate is $" + totalCost.toFixed(2);
}


function showScreen() {
    numRooms = document.getElementById("rooms").value;
    if (numRooms == 1) {
        document.getElementById("room2").style.display = "none";
        document.getElementById("room3").style.display = "none";
    } else if (numRooms == 2) {
        document.getElementById("room2").style.display = "block";
        document.getElementById("room3").style.display = "none";
    } else if (numRooms == 3) {
        document.getElementById("room2").style.display = "block";
        document.getElementById("room3").style.display = "block";
    }
}
