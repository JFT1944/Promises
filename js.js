let randomNum = Math.floor(Math.random() * 50);

let baseURL = `http://numbersapi.com/${randomNum}`;

let facts = []

function put_on_page(facts){
    for (let fact of facts){
let newH3 = document.createElement('h3')
newH3.innerText = fact
document.querySelector('body').append(newH3)


}
let newHr = document.createElement('hr')
document.querySelector('body').append(newHr)}

axios.get(`${baseURL}${randomNum}`)
.then(
    favNum1 => {
        console.log(favNum1);
        facts.push(favNum1.data);
        return favNum2 = axios.get(`${baseURL}${randomNum + 1}`);
    }
).then(
    (favNum2) => {
        console.log(favNum2);
        facts.push(favNum2.data);
        return favNum3 = axios.get(`${baseURL}${randomNum + 2}`);
    }
).then(
    (favNum3) => {
        console.log(favNum3);
        facts.push(favNum3.data);
        return favNum4 = axios.get(`${baseURL}${randomNum + 3}`);
    }
).then(
    (favNum4) => {
        console.log(favNum4);
        facts.push(favNum4.data);
        console.log(facts)
        put_on_page(facts)
    }
).then(
console.log(facts)
).catch(err => {
    console.log(err);
})





// try{
    newFacts = []

for (let i = 0; i < 4; i++) {
    let favNumFact = axios.get(`${baseURL}${randomNum}`);
    newFacts.push(favNumFact)
}
Promise.all(newFacts).then((res) => {
    console.log(res);
    newN = []
    for (let fact of res){
        console.log(fact.data)
        newN.push(fact.data)
    }
    put_on_page(newN)
})











// favNumFact.then((res) => {
//   console.log(res.data);
// } )}catch(err){
//     console.log(err)
// }