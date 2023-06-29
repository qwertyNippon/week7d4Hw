// .fetch()  looks very similar to requests.get()
// const res = fetch('https://pokeapi.co/api/v2/pokemon/')
// .then((res) => {return res.json()}).then((data) => { data.name}(name => {console.log(data)});
// .then((res) => {return res.json()}).then((data) => {console.log(data)});

// with fetch() you'll commonly see fetch().then().then().catch()

// let's look at async await syntax
const res = fetch('https://pokeapi.co/api/v2/pokemon/', {
    method: 'GET',
    name
})
    .then(res => {
        if (res.ok) {
            console.log('Good')
        } else {
            console.log('Nope')
        }
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))

// Seperate attempt

    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(poke => {
            const qwerty = `<li>${poke.name}</li>`;

            document.getElementById('pokemon').insertAdjacentElement('beforeend', qwerty);
        });
    })

// I was trying different ways to do

const poke = async () => {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const dat =  await resp.json();
    console.log('Async await fetch-', dat);
    return dat
}
poke();

// a quick example for post/put/delete requests/routes

// const getCatFactFetchPostExample = async () => {
//     const resp = await fetch('https://catfact.ninja/fact', {
//         method : 'POST',
//         body : {},
//         headers :{}
//     });
// }

// let's talk about one other way- Axios

// let getData = async () => {
//     const response = await axios.get('https://catfact.ninja/fact');
//     console.log('Async/await AXIOS-', response.data);
//     return response.data
// }
// getData();

// make some stuff:
// typical setup getData() => loadData() => clearData()

let loadData = async () => {
    let data = await getData();
    console.log(data);
    // do something- make some html
    let newRow = `<tr><th scope="row"></th><td>${data.name}</td></tr>`;
    document.getElementById('pokemon').insertAdjacentHTML('afterbegin', newRow);
}

let clearData = () => {
    document.getElementById('pokemon').innerHTML = '';
}