// 1: CREATING VARIABLES
const getInput = document.getElementById('itemInput');
const addButton = document.getElementById('addBtn');
const item = document.getElementById('itemList');
const cleanallbtn = document.getElementById('cleanbtn');


//2: CREATING FUNCTION TO ADD ITEM TO THE LIST
function addItem() {
    //3: CREATES NEW VARIABLE TO STORE THE LIST
    const itemText = getInput.value.trim(); //Remove extra spaces

    //4: CHECKS IF VARIABLE ISN'T EMPTY. IF THE USER TYPED SOMETHING, THE CODE WILL DO THE STEPS 4.1 - 4.6
    if (itemText !== "") { 
        const listItem = document.createElement('li'); //4.1: Creates new variable and new item element
        listItem.textContent = itemText; //4.2: Define the item's text to display the item in the list
        
        //4.3: Creates a Clean List btn for each item
        const removebutton = document.createElement('button');
        removebutton.textContent = "❌";

        removebutton.addEventListener('click', () => { //Adding event to the btn
            listItem.remove();
        });
        
        listItem.appendChild(removebutton); //4.4: Add remove btn to the list 
        item.appendChild(listItem); //4.5: Adds item to the list
        getInput.value = ""; //4.6: Cleans the input to receive more items

        //5. If the user, didn't type something, the code will do this:
    } else {
        alert('Type an item before adding it'); 
    }
}

//6: Event for the add button
addButton.addEventListener('click', addItem);

//7: Allow add items with 'ENTER' key
getInput.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        addItem();
    }
});

//8: Delete all list btn
cleanallbtn.addEventListener('click', () =>{
    item.innerHTML = ""; //removes all li elements
});
