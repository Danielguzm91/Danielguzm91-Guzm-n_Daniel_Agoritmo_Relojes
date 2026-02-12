const watches = [
    { name: "Apple Watch Ultra 2", desc: "Máxima integración y rendimiento premium", score: 0 },
    { name: "Garmin Fenix 7", desc: "Rendimiento deportivo profesional", score: 0 },
    { name: "Samsung Galaxy Watch 6", desc: "Equilibrio entre estilo y tecnología", score: 0 },
    { name: "Huawei Watch GT 4", desc: "Gran batería y diseño elegante", score: 0 },
    { name: "Coros Apex 2", desc: "Optimizado para atletas avanzados", score: 0 },
    { name: "Suunto 9 Peak", desc: "Resistencia extrema y precisión", score: 0 }
];

let currentPair = [];

function getRandomPair() {
    let indexA = Math.floor(Math.random() * watches.length);
    let indexB;

    do {
        indexB = Math.floor(Math.random() * watches.length);
    } while (indexA === indexB);

    currentPair = [indexA, indexB];

    document.getElementById("nameA").innerText = watches[indexA].name;
    document.getElementById("descA").innerText = watches[indexA].desc;

    document.getElementById("nameB").innerText = watches[indexB].name;
    document.getElementById("descB").innerText = watches[indexB].desc;
}

function vote(selectedIndex) {
    const winnerIndex = currentPair[selectedIndex];
    watches[winnerIndex].score += 1;

    getRandomPair();
}

function showRanking() {
    const rankingDiv = document.getElementById("ranking");

    let sorted = [...watches].sort((a, b) => b.score - a.score);

    rankingDiv.innerHTML = "<h2>Ranking Actual</h2>";

    sorted.forEach((watch, index) => {
        rankingDiv.innerHTML += 
            `<p>${index + 1}. ${watch.name} - ${watch.score} puntos</p>`;
    });
}

getRandomPair();
