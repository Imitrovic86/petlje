const temperature = [12,16,24,11,15,10,21]

//1. Kolika je prosecna izmerena temperatura?
let suma_temperatura = 0
for (let t of temperature) {
    suma_temperatura += t//suma_temperatura = suma_temperatura + t

}
const sr_vr = suma_temperatura / temperature.length
console.log("Prosecna izmerena temperatura:", sr_vr)

//2. Kolika je maksimalna izmerena temperatura?
let max_t = temperature[0]
for (let t of temperature) {
    if(t>max_t){
        max_t = t
    }
}
console.log("Maksimalna temperatura:", max_t)
//3. Kolika je minimalna izmerena temperatura?let max_t = temperature[0]
let min_t = temperature [0]
for (let t of temperature) {
    if(t<min_t){
        min_t = t
    }
}
console.log("Minimalna temperatura:", min_t)

// 4. Da li ima temperatura u opsegu od 12 do 18 stepeni?
const temperature_12_do_18=[]
for (let t of temperature) {
    if(t>=12 && t<=18) {
        temperature_12_do_18.push(t)
    }
}
if(temperature_12_do_18.length >0){
console.log("Temperature od 12 do 18:", temperature_12_do_18.join(", "))}
else {
    console.log("Nema temperatura koje odgovaraju opsegu od 12 do 18")
}


