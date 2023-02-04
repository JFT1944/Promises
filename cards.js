let baseURL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'



// axios.get(`${baseURL}`).then((res) => {
//     console.log(res.data.deck_id)
//     return drawnCard = axios.get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`)}
// )
// .then(
//         (drawnCard) => {
//             console.log([drawnCard.data.cards[0].value, drawnCard.data.cards[0].suit]);
//             return drawnCard2 = axios.get(`https://deckofcardsapi.com/api/deck/${drawnCard.data.deck_id}/draw/?count=1`);

//         }
//     ).then((drawnCard2) => {
//         console.log([drawnCard2.data.cards[0].value, drawnCard2.data.cards[0].suit])
        
//         })

        // ______________________________________________________________________________________________________
        // ______________________________________________________________________________________________________
        // ______________________________________________________________________________________________________
        // ______________________________________________________________________________________________________

let zIndex = 2
let deckID = axios.get(`${baseURL}`).then((res) => {
    console.log(res.data.deck_id)
    sessionStorage.setItem('deckID', res.data.deck_id)})
    deckID.then(res => {
        console.log(res)
    })

    document.getElementById('new_card_button').addEventListener('click', (e) => {
        let newDeckID = sessionStorage.getItem('deckID')
        console.log(newDeckID)
        axios.get(`https://deckofcardsapi.com/api/deck/${newDeckID}/draw/?count=1`).then((res) => {
        let new_img = document.createElement('img')
        new_img.setAttribute('src', res.data.cards[0].image)
        new_img.setAttribute('style', `width: 100px; height: 150px; position: absolute; z-index: ${zIndex + 1}; transform: rotate(${Math.floor(Math.random() * 360)}deg) `)
        document.querySelector('#card_holder').append(new_img)

    }).catch(err => {
        console.log(err)
    })
})
