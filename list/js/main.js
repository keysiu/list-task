// mockup start
const list = [
];
// mockup end


const $ul = document.querySelector('ul#list');

const removeItem = ($element) => {
    list.splice(list.indexOf($element.value));
    $ul.removeChild($element);
};

const addItem = (item) => {
    const $li = document.createElement('li');
    $li.className = "list-item";
    $li.innerText = item;
    $li.addEventListener('click', (event) => {
        // console.log(
        //     event.target,
        //     $li,
        //     event.target === $li
        // );
        removeItem(event.target);
    });
    $ul.appendChild($li);
    list.push(item);
};

const updateItem = () => {};

list.forEach((el, index) => {
    addItem(el);
});


// FORM PATH
const $form = document.querySelector('form#user');
const $input = $form.querySelector('input[name="user_name"]');

$form.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = $input.value;
    const $msg = document.querySelector("div#msg");
    // check validation
    if (value.length >= 1 && list.includes(value) === false && list.length < 11) {
        $msg.className = "check-valid";
        $msg.innerText = "";
        addItem(value);
        $input.value = '';
    } else {

        // homework
        $input.value = "";
        if (value.length < 1) { 
            $msg.innerText = "Hey! Try to type more than one symbol...";
            $msg.className = "check-not-valid";
         }
        else if (list.includes(value)) {
            $msg.innerText = "Oh... We already have that item, try something else.";
            $msg.className = "check-not-valid";
        }
        else if (list.length > 9) {
            $msg.innerText = "Now we have too much items, delete some and try again.";
            $msg.className = "check-not-valid";};
        
    }
});









