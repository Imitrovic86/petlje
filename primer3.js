const temperature=[
    { "datum": "1.12.2023.", "izmereno":8},
    { "datum": "2.12.2023.", "izmereno":4},
    { "datum": "3.12.2023.", "izmereno":2},
    { "datum": "4.12.2023.", "izmereno":6},
    { "datum": "5.12.2023.", "izmereno":-1},
    { "datum": "6.12.2023.", "izmereno":-3},
    { "datum": "7.12.2023.", "izmereno":3},
]

//1. Kolika je srednja vrednost izmerenih temperatura?
let suma_temperatura = 0
for (let t of temperature) {
    suma_temperatura += t.izmereno
}
const sr_vr = suma_temperatura / temperature.length
console.log("Srednja izmerena temperatura:", sr_vr)

//2. Kolika je maksimalna temperatura i kad je izmerena?
let max_t=temperature[0]
for(let t of temperature){
    if(t.izmereno>max_t.izmereno){
        max_t=t
    }
}
console.log("Maksimalna temperatura je:", max_t.izmereno)
console.log("Izmerena je datuma:", max_t.datum)

//3. Kolika je minimalna temperatura i kad je izmerena?
let min_t=temperature[0]
for(let t of temperature){
    if(t.izmereno<min_t.izmereno){
        min_t=t
    }
}
console.log("Minimalna temperatura je:", min_t.izmereno)
console.log("Izmerena je datuma:", min_t.datum)

//4. Da li ima temperatura u opsegu od 0 do 4 stepeni
//i kada su izmerene?
const temperature_0_do_4=[]
for (let t of temperature) {
    if(t.izmereno>=0 && t.izmereno <=4) {
        temperature_0_do_4.push(t)
    }
}
if(temperature_0_do_4.length >0) {
    for (let t of temperature_0_do_4){
        console.log( "Temperatura je:", t.izmereno)
        console.log("Temperatura je izmerena:", t.datum)
    }

}
else {
    console.log("Nema temperatura za opseg od 0 do 4.")
}