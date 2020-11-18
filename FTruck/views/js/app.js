// var counter = 1;
const allLinks = document.querySelectorAll('#navigation li');
const items = document.querySelectorAll('.slider img');
const btnDiscover = document.querySelector('.btn-discover');
console.log(btnDiscover);

allLinks.forEach(link => {
    link.addEventListener('click', function () {
        const linkActif = document.querySelector('.active');
        const text = link.innerHTML;
        //console.log(text);
        const btnDiscoverLink = document.getElementsByTagName('a');

        if (text === "Concept") {
            items[1].classList.remove('active-img');
            items[2].classList.remove('active-img');
            items[0].classList.add('active-img');
            //console.log(counter);
            linkPage("concept");
        }
        if (text === "Bagels") {
            items[0].classList.remove('active-img');
            items[2].classList.remove('active-img');

            items[1].classList.add('active-img');
            linkPage("bagels");

        }
        if (text === "Click&amp;Collect") {
            items[0].classList.remove('active-img');
            items[1].classList.remove('active-img');
            items[2].classList.add('active-img');
            linkPage("click&Collect");
        }
        if (link.classList !== "active") {
            linkActif.classList.remove('active');
            link.classList.add('active');
        }

        function linkPage(file) {
            // //change first letter toLowerCase
            // const textMin = text.charAt(0).toLowerCase() + text.substr(1);
            //Link to selection page
            console.log(btnDiscoverLink[0].setAttribute('href', `./${file}.html`));
        }
        console.log(btnDiscover);
        console.log(allLinks);

    })
})

