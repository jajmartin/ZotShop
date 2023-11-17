let searchResults;

function searchListings(searchString) {
    searchResults = listings.filter((listing) => {
        return listing['name'].toLowerCase().includes(searchString.toLowerCase());
    })
    return searchResults;
}

function populateSearch(searchString) {
    return createListingsContainer(searchListings(searchString));
}

function clearSearchResults() {
    while (document.getElementById("searchResultsContainer").lastElementChild) {
        document.getElementById("searchResultsContainer").removeChild(document.getElementById("searchResultsContainer").lastElementChild);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Execute code after the DOM is fully loaded
    console.log('DOM Loaded');

    var slider = document.getElementById("range");
    var output = document.getElementById("value");
    output.innerHTML = slider.value;

    searchResults = listings.filter(listing => listing['type'] === 'buy');
    document.getElementById("searchResultsContainer").append(createListingsContainer(searchResults));

    slider.oninput = function () {
        output.innerHTML = this.value;
        let matchedListings = searchResults.filter((listing) => {
            return listing['price'] <= this.value;
        })
        clearSearchResults();
        document.getElementById("searchResultsContainer").append(createListingsContainer(matchedListings));
    };

    document.getElementById("search-button").addEventListener('click', () => {
        let searchString = document.getElementById("searchInput").value;
        clearSearchResults();
        document.getElementById("searchResultsContainer").append(populateSearch(searchString))
    });
})

