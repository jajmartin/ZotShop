function createListingCard(index) {
    let listing = listings[index]

    let name = document.createElement('h2');
    name.innerText = listing.name;
    let price = document.createElement('h4');
    price.innerText = "$" + listing.price;
    let img = document.createElement('img');
    img.src = listing.img;
    img.alt = 'item'
    img.className = 'listingImg'

    let card = document.createElement('div');
    card.className = 'listingCard';
    card.append(img, name, price);
    return card;
}

function createListingsContainer(start, end, type) {
    let listingsContainer = document.createElement('div');
    listingsContainer.className = "listingsContainer"

    for(let i = start; i < end; ++i) {
        if(listings[i]['type'] === type) {
            listingsContainer.append(createListingCard(i));
        }
    }

    return listingsContainer;
}

function createBuyListingsContainer(start, end) {
    return createListingsContainer(start, end, 'buy');
}

function createBidListingsContainer(start, end) {
    return createListingsContainer(start, end, 'bid');
}