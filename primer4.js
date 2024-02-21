const proizvodi = [
    { "naziv": "Mleko 1L", "cena": 129.99 },
    { "naziv": "Hleb Sava", "cena": 54.99 },
    { "naziv": "Dukat cokoladno mleko 0.2L", "cena": 72.99 },
    { "naziv": "Edamer sir 200g", "cena": 299.99 },

]
// Koji je najskuplji proizvod i koja mu je cena?
let max_pr = proizvodi[0]
for (let p of proizvodi) {
    if (p.cena > max_pr.cena) {
        max_pr = p
    }
}
console.log("Najskuplji proizvod je:", max_pr.naziv)
console.log("Cena mu je:", max_pr.cena)

// Koji proizvodi su u opsegu od 100 do 200 i 
//koja im je cena?

const proizvodi_od_100_do_200 = []
for (let p of proizvodi) {
    if (p.cena >= 100 && p.cena <= 200) {
        proizvodi_od_100_do_200.push(p)
    }
}
if (proizvodi_od_100_do_200.length > 0) {
    for (let p of proizvodi_od_100_do_200) {
        console.log("Proizvod:", p.naziv)
        console.log("Cena:", p.cena)
    }
} else {
    console.log("Nema proizvoda za cene od 100 do 200.")
}
// Sortiraj proizvode po rastucoj ceni
for (let i = 0; i < proizvodi.length - 1; i++) {
    for (let j = i + 1; j < proizvodi.length; j++) {
        if (proizvodi[i].cena > proizvodi[j].cena) {
            const tmp = proizvodi[i]
            proizvodi[i] = proizvodi[j]
            proizvodi[j] = tmp
        }
    }
}
console.log(proizvodi)

// Sortiranje proizvoda po nazivu Z-A
// ABC rastuce
// CBA opadajuce
for (let i = 0; i < proizvodi.length - 1; i++) {
    for (let j = i + 1; j < proizvodi.length; j++) {
        if(proizvodi[i].naziv.localeCompare(proizvodi[j].naziv) < 0) {

            const tmp = proizvodi[i]
            proizvodi[i] = proizvodi[j]
            proizvodi[j] = tmp
        }
    }
}

console.log(proizvodi)