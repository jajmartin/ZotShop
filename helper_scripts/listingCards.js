function getListing(index) {
    return listings[index]
}

function createListingCard(index) {
    let listing = getListing(index)

    let name = document.createElement('h2');
    name.innerText = listing.name;
    let price = document.createElement('h4');
    price.innerText = listing.price;
    let location = document.createElement('h4');
    location.innerText = listing.location;
    let img = document.createElement('img');
    img.src = listing.img;
    img.alt = 'item'

    let card = document.createElement('div');
    card.className = 'listingCard';
    card.append(img, name, price, location);
    return card;
}

function createListingCards(indexArray) {
    let listings = document.createElement('div');
    listings.className = "listingCardsContainer"

    for(let index in indexArray) {
        listings.append(createListingCard(index));
    }

    return listings;
}