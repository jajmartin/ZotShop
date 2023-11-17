document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('newestBuyContainer').append(createBuyListingsContainer(0, listings.length));
    document.getElementById('newestBidContainer').append(createBidListingsContainer(0, listings.length))
})