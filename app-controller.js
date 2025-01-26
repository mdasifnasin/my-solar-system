// console.log('We are inside client.js');

// /* on page load  */
// window.onload = function() {
//     const planet_id = document.getElementById("planetID").value
//     console.log("onLoad - Request Planet ID - " + planet_id)

//     fetch("/os", {
//             method: "GET"
//         })
//         .then(function(res) {
//             if (res.ok) {
//                 return res.json();
//             }
//             thrownewError('Request failed');
//         }).catch(function(error) {
//             console.log(error);
//         })
//         .then(function(data) {
//             document.getElementById('hostname').innerHTML = `Pod - ${data.os} `
//           //  document.getElementById('environment').innerHTML = ` Env - ${data.env}  `
//         });
// };



// const btn = document.getElementById('submit');
// if (btn) {
//     btn.addEventListener('click', func);
// }

// function func() {
//     const planet_id = document.getElementById("planetID").value
//     console.log("onClick Submit - Request Planet ID - " + planet_id)

//     fetch("/planet", {
//             method: "POST",
//             body: JSON.stringify({
//                 id: document.getElementById("planetID").value
//             }),
//             headers: {
//                 "Content-type": "application/json; charset=UTF-8"
//             }
//         })
//         .then(function(res2) {
//             if (res2.ok) {
//                 return res2.json();
//             }
//             thrownewError('Request failed.');
//         }).catch(function(error) {
//             alert("Ooops, We have 8 planets.\nSelect a number from 0 - 8")
//             console.log(error);
//         })
//         .then(function(data) {
//             document.getElementById('planetName').innerHTML = ` ${data.name} `

//             const element = document.getElementById("planetImage");
//             const image = ` ${data.image} `
//             element.style.backgroundImage  = "url("+image+")"

//             const planet_description = ` ${data.description} `
//             document.getElementById('planetDescription').innerHTML = planet_description.replace(/(.{80})/g, "$1<br>");

          
//         });

// }


//COmment########################################################################################//

console.log('We are inside client.js');

/* on page load */
window.onload = function () {
    document.getElementById('hostname').innerHTML = "Static Environment";
};

const btn = document.getElementById('submit');
if (btn) {
    btn.addEventListener('click', func);
}

function func() {
    const planet_id = parseInt(document.getElementById("planetID").value, 10);
    console.log("onClick Submit - Request Planet ID - " + planet_id);

    // Simulated static response
    const staticPlanets = [
        { id: 1, name: "Mercury", description: "Closest planet to the Sun.", image: "mercury.jpg" },
        { id: 2, name: "Venus", description: "Second planet from the Sun.", image: "venus.jpg" },
        // Add more static planet details as needed
    ];

    const planet = staticPlanets.find(p => p.id === planet_id);

    if (planet) {
        document.getElementById('planetName').innerHTML = planet.name;

        const element = document.getElementById("planetImage");
        element.style.backgroundImage = "url(" + planet.image + ")";

        const planet_description = planet.description;
        document.getElementById('planetDescription').innerHTML = planet_description.replace(/(.{80})/g, "$1<br>");
    } else {
        alert("Planet not found. Please enter a valid ID.");
    }
}
