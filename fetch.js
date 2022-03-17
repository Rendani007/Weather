class Fetch{
    async getCurrent(input) {
        const myKey = "d4f7b4464d1e885891a21e3831d28f1d";

        // store data from the fetch method returns in the response variable
        const response = await fetch(
            // custom url
            `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
        );
        
        // data is grabbed in JSON format and is returned
        const data = await response.json();

        console.log(data);
        
        //data returned for future access 
        return data;
    }
}