const brojevi = [2,7,4,3,5,6,1]
            //   0 1 2 3 4 5 6 
// [1,2,3,4,5,6,7]
/*const index=2
console.log(brojevi[index])

for(let i =0; i<=6; i++) {
    console.log(brojevi[i])
}
*/
for(let i = 0; i < brojevi.length-1; i++) {
    for (let j = i+1; j < brojevi.length; j++) {
        if(brojevi[i] > brojevi[j]) {
            const tmp = brojevi[i]
            brojevi[i] = brojevi[j]
            brojevi[j] = tmp
        }
    }
}
console.log(brojevi)