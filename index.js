let searchbar = document.getElementById('searchbar');
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('newestBuyContainer').append(createBuyListingsContainer(0, listings.length));
    document.getElementById('newestBidContainer').append(createBidListingsContainer(0, listings.length))
})

function search(listing) {
    let searchPattern = new RegExp(searchString);
    searchPattern = new RegExp('/.*' + searchPattern + '.*/i');
    // iterate through listings.json
    // for each item that matches the search string
    return listings.filter((listing) => {
        return listing['name'].match(searchPattern);
    })
    // append the card to container
    // output to the container
}

function populateSearch(searchResults) {
    document.body.append(createListingsContainer(searchResults));
}
