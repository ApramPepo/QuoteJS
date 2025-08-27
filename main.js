const quote = document.querySelector(".quote");
const randomBtn = document.querySelector(".randomize");
const author = document.querySelector(".auth");
const api_url = "https://thequoteshub.com/api/"

async function getQuote(url) {
        const response = await fetch(url);
        const data = await response.json();
        quote.textContent = data.text;
        author.textContent = data.author;
}

getQuote(api_url);


randomBtn.addEventListener("click", () => {
    getQuote(api_url);
})