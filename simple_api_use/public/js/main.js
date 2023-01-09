let generate_btn = document.getElementById('generate');

//generate function 
const generate = () => {
    let quote_p = document.getElementById('quote');
    let author = document.getElementById('author');

    let random_number = Math.floor(Math.random() * 1643);

    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            quote_p.innerHTML = data[random_number].text;
            author.innerHTML = data[random_number].author ? data[random_number].author : 'Anonym';


        });
}

window.addEventListener('load', () => {
    generate()
})


generate_btn.addEventListener('click', () => generate());
