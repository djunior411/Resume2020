var str = " Derrick Junior"; 
var res = str.toUpperCase();
console.log("Name:" + (res))

console.log( "Career: Fullstack Developer")
console.log("Description: I work it from the front to the back")

console.log("My interests:")
console.log("* Cartoon Network")
console.log("* Cooking traditional meals")
console.log("* Interstellar traveling")

console.log("Previous Experience:")
console.log("Jumprope Tae Kwon Do, Plate balancing, Unicycle yoga Trainer, apple shiner")

console.log("My skills:")
console.log("hoola hooping")
console.log("Epic story Teller")
console.log("Unix")

function displayPosition (name, career, description){
console.log("Name: "+ name)
console.log("Career: "+ career)
console.log("description: " + description)
}
displayPosition("Tom", "Astronaut", "Space Traveller")
displayPosition("Phillip", "Trucker", "Logistics")
displayPosition("Rob", "Barista", "Produce coffee related beverages")

function displaySkill (skills, coolness){
    console.log("My skills: "+ skills)
    console.log("Coolnes"+ coolness)
}

function displaySkill(skills, coolness){
    if(coolness === true) {
        console.log("BAM:" + skills)
    } else {
        console.log(skills)
    }
}
displaySkill('JavaScript', true);