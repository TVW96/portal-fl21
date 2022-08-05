
const quotesDiv = document.getElementById('quote')


fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(json => {
        console.log(json.message)
        quotesDiv.innerHTML = `<p>${json.message}</p>`
    })
   