let navItems = [
    {   'name':'Home',
        'link': 'index.html'
    },
    {   'name':'Buy',
        'link': 'buy.html'
    },
    {   'name':'Bids',
    },
    {   'name':'Sell',
        'link':'indexSell.html'
    },
    {   'name':'Messages',
    },
    {
        'name': 'Location',
    },
    ]

function createNavbar () {
    let navbar = document.createElement('div');
    navbar.id = 'navbar';
    for(let item of navItems)
    {
        let navbarItem = document.createElement('a');
        navbarItem.className = 'navbarItem';
        navbarItem.innerText = item.name;
        navbarItem.href = item.link;
        navbar.appendChild(navbarItem);
    }
    document.body.prepend(navbar);
}

document.addEventListener('DOMContentLoaded', function () {
    createNavbar()
})
