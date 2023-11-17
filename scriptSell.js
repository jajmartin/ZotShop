function openEditModal(clickedButton) {
    console.log("Button works!");
    var item = clickedButton.closest('.sale');

    // Extracting the current item attributes
    var itemName = item.querySelector(".itemInfo #itemName").textContent;
    var itemPrice = item.querySelector(".itemInfo #itemPrice").textContent;
    var itemLoc = item.querySelector(".itemInfo #itemLoc").textContent;

    // Applying them as the "default" in modal input fields
    document.getElementById("itemNameEdit").value = itemName;
    document.getElementById("itemPriceEdit").value = itemPrice;
    document.getElementById("itemLocEdit").value = itemLoc;

    clickedButton.classList.add("active");

    // Show the modal
    document.getElementById('editModal').style.display = 'block';
    document.querySelector('.modal-content').style.display = 'flex';
    document.querySelector('.modal-content #inputGroup').style.display = "flex";
}

function closeEditModal() {
    document.getElementById('editModal').style.display = 'none';
    document.querySelector('.modal-content').style.display = 'none';
    document.querySelector('.modal-content #inputGroup').style.display = "none";
}

function saveChanges() {
    var itemNameNew = document.getElementById("itemNameEdit").value;
    var itemPriceNew = document.getElementById("itemPriceEdit").value;
    var itemLocNew = document.getElementById("itemLocEdit").value;

    // Find the closest sale to the edited button
    var editedButton = document.querySelector("#editItem.active");
    var editedSale = editedButton.closest('.sale');

    // Update the values
    editedSale.querySelector(".itemInfo #itemName").textContent = itemNameNew;
    editedSale.querySelector(".itemInfo #itemPrice").textContent = itemPriceNew;
    editedSale.querySelector(".itemInfo #itemLoc").textContent = itemLocNew;

    closeEditModal();
}