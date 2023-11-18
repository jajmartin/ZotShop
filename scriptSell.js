function openEditModal(clickedButton) {
    console.log("Button works!");
    var item = clickedButton.closest('.sale');

    // Extracting the current item attributes
    var itemName = item.querySelector(".itemInfo #itemName").textContent;
    var itemPrice = item.querySelector(".itemInfo #itemPrice").textContent;
    var itemLoc = item.querySelector(".itemInfo #itemLoc").textContent;

    // Applying them as the "default" in modal input fields
    document.getElementById("itemNameEdit").value = itemName;
    document.getElementById("itemPriceEdit").value = itemPrice.substring(1);
    document.getElementById("itemLocEdit").value = itemLoc;

    clickedButton.classList.add("active");

    // Show the modal
    document.getElementById('editModal').style.display = 'block';
    document.querySelector('.modal-content').style.display = 'flex';
    // document.querySelector('.modal-content #inputGroup').style.display = "flex";
}

function closeEditModal() {
    document.getElementById('editModal').style.display = 'none';
    document.querySelector('.modal-content').style.display = 'none';
    // document.querySelector('.modal-content #inputGroup').style.display = "none";
}

function saveChanges() {
    var itemNameNew = document.getElementById("itemNameEdit");
    var itemPriceNew = document.getElementById("itemPriceEdit");
    var itemLocNew = document.getElementById("itemLocEdit");

    // Find the closest sale to the edited button
    var editedButton = document.querySelector("#editItem.active");
    var editedSale = editedButton.closest('.sale');

    // CHECKING VALID INPUTS
    let containsError = false; //boolean error value

    // checking empty inputs
    // for new name
    // Correct way (at least a)
    if (itemNameNew.value.trim().length < 1) {
        containsError = true;
        itemNameNew.classList.add("error");
    }
    else {
        itemNameNew.classList.remove("error");
    }

    // for new price
    // Correct way (at least $0.00)
    if (!(itemPriceNew.value.length >= 3 && itemPriceNew.value[itemPriceNew.value.length - 3] === ".")) {
        containsError = true;
        itemPriceNew.classList.add("error");
    }
    else {
        itemPriceNew.classList.remove("error");
    }

    // Update the values if everything is good
    if (!containsError) {
        editedSale.querySelector(".itemInfo #itemName").textContent = itemNameNew.value;
        editedSale.querySelector(".itemInfo #itemPrice").textContent = "$" + itemPriceNew.value;
        editedSale.querySelector(".itemInfo #itemLoc").textContent = itemLocNew.value;

        closeEditModal();
    }
}