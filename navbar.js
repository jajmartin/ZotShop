let navItems = [
    {   'name':'Home',
        'link': 'index.html'
    },
    {   'name':'Buy',
    },
    {   'name':'Bids',
    },
    {   'name':'Sell',
    },
    {   'name':'Messages',
    },
    {
        'name': 'Location',
    },
    ]

function createNavbar (navbar) {
    for(let item of navItems)
    {
        let navbarItem = document.createElement('a');
        navbarItem.className = 'navbarItem';
        navbarItem.innerText = item.name;
        navbarItem.href = item.link;
        navbar.appendChild(navbarItem);
    }
}

window.onload = (event) => {
    createNavbar(document.getElementById('navbar'));
};
