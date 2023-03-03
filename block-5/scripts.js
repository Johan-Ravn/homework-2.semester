let start = document.querySelector("#start_button");
start.addEventListener("click", check_bool);

document.getElementById("beerForm").addEventListener('submit', function(event) {
    event.preventDefault();
    change_header();
});

function check_bool() {
    let pushed_radio_buttons = document.querySelectorAll(`#beerForm fieldset input[type="radio"]`);
    for (let item of pushed_radio_buttons) {
        console.log(`${item.value} = ${item.checked}`);
    }
}

function create_header() {
    const newH1 = document.createElement("h1");
    const content = document.createTextNode("Beer type");
    newH1.append(content);
    const upperForm = document.getElementById("beerForm");
    document.body.insertBefore(newH1, upperForm);
}

function change_header() {
    const currentText_input = document.getElementById("text-field").value;
    document.getElementsByTagName("h1")[0].innerHTML = currentText_input;
}

create_header();
