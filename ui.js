//got data from fetch.js and feeding the data into UI methods
// populating the data here
class UI{
    constructor() {
        this.uiContainer = document.getElementById("content");
        this.city;
    }

    populateUI(data) {
        
        // add inner html
        this.uiContainer.innerHTML = `
         
        <div class="card mx-auto mt-5" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h5 class="card-title">${data.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Wind speed: ${data.wind.speed}</h6>
                // need to convert temperature formula
                <h6 class="card-subtitle mb-2 text-muted">Highs of ${data.main.temp_max}. Lows of ${data.main.temp_min}</h6>
                <p class="card-text">Weather conditions are described as: ${data.weather[0].description}</p>
            </div>  
        </div>  
        `;
    }
}