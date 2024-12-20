const mainContainer = document.querySelector("#mainContainer");
const searchBar = document.querySelector("#searchBar")
const submitElement = document.querySelector("#submitButton");
const results = document.querySelector(".results");

async function getSimilarMovies(movieName) {
    try {
        const response = await fetch(`/movie?search=${movieName}`);
    if (!response.ok) {
        alert("There was a problem");
        return;
    }

        const data = await response.json();
        return data;
    } catch {
        console.error("There was a problem");
    }
}

mainContainer.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = await getSimilarMovies(searchBar.value);
    console.log(data);
    data.body.results.forEach((movie) => {
        results.innerHTML += `
            <div>
                <img src=https://image.tmdb.org/t/p/w200${movie.poster_path}/>
                <p class="">${movie.title}</p>
                <p class="">${movie.release_date}</p>
            </div>
        `;
    });
});