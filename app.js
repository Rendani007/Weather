// Instantiate the two classes (fetch , UI)

const ft = new Fetch();
const ui = new UI();

//adding event listeners to the UI
const search = document.getElementById("searchUser");
const button = document.getElementById("submit");

button.addEventListener("click", () => {
    const currentVal = search.value;

    //get method in fetch class
    ft.getCurrent(currentVal).then((data) => {//getting access to the data
        //call the UI method
        ui.populateUI(data);
        //call save toLS(local storage)
        // ui.saveToLS(data);
    });
});
