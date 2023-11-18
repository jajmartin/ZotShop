function createListingCard(listing) {
    let name = document.createElement('h2');
    name.innerText = listing.name;
    let price = document.createElement('h4');
    price.innerText = "$" + listing.price;
    let img = document.createElement('img');
    img.src = listing.img;
    img.alt = 'Image of ' + listing.name;
    img.className = 'listingImg'

    let card = document.createElement('div');
    card.className = 'listingCard';
    card.append(img, name, price);
    return card;
}

function createListingsContainer(listings)
{
    let listingsContainer = document.createElement('div');
    listingsContainer.className = "listingsContainer"

    for(let listing of listings) {
        listingsContainer.append(createListingCard(listing));
    }

    return listingsContainer;
}

function createListingsContainerByIndex(start, end, type) {
    let listingsContainer = document.createElement('div');
    listingsContainer.className = "listingsContainer"

    let data = listings.slice(start, end).filter((listing) => {
        return listing['type'] === type;
    })

    return createListingsContainer(data);
}

function createBuyListingsContainer(start, end) {
    return createListingsContainerByIndex(start, end, 'buy');
}

function createBidListingsContainer(start, end) {
    return createListingsContainerByIndex(start, end, 'bid');
}