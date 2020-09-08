const review = [
    {
        id: 1,
        img: 'https://ajinkya-chitale.github.io/Images.github.io/img2.jpg',
        author: 'Ray Sin',
        role: 'UI Developer',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices bibendum mollis. Sed aliquet, enim at vulputate porttitor, felis nunc vehicula ante, blandit lobortis mi massa non leo. Sed dui enim, interdum non rhoncus vitae, blandit eu eros. Nulla facilisi.'
    },
    {
        id: 2,
        img: 'https://ajinkya-chitale.github.io/Images.github.io/img1.jpg',
        author: 'Anita Bath',
        role: 'UX Designer',
        desc: 'Meta komentofrazo ci cis, negativa antaŭmetado la oni, havi frida aga ac. Jeso senforte iam ci. Sep mo danki lanta. Ist aliel afrikato ko, finno franjo kondicionalo os vic. Malantaŭe subtegmento co bio, plus artefarita ko tre. Tiel responde nv cis, estiel decimalo iv nia.'
    },
    {
        id: 3,
        img: 'https://ajinkya-chitale.github.io/Images.github.io/img4.jpg',
        author: 'Pat Thettick',
        role: 'Architech',
        desc: 'Life. Spirit second Whales under sea unto creature made second without you’ll and own fowl yielding own great fill creepeth in moving sixth every it evening gathering let light moving cattle.'
    },
    {
        id: 4,
        img: 'https://ajinkya-chitale.github.io/Images.github.io/img3.jpg',
        author: 'Eileen Dover',
        role: 'Manager',
        desc: 'Nouvelle trouvait supplice lupanars revendre me la. Crispent ethiopie philippe ses essaiera aux physique negation ces eux. Gagnent car elancer moi effraie ici entendu entrevu. Cravaches annoncait ah epluchant ce. Ans chambrees mal dentelles tiendrons mystiques. Habilement crispation au ne asiatiques un pressaient tu renferment.'
    }
]

// Adding variables
let img = document.querySelector('#img');
let author = document.querySelector('.author');
let role = document.querySelector('.role');
let desc = document.querySelector('.desc');

// Previous and Next Button
let next = document.querySelector('.right');
let prev = document.querySelector('.left');

// Random Button
let random = document.querySelector('.random');                                                                    

let itemPos = 0;

const firstReview = () => {
    img.src = review[itemPos].img;
    author.textContent = review[itemPos].author;
    role.textContent = review[itemPos].role;
    desc.textContent = review[itemPos].desc;
}

window.addEventListener("DOMContentLoaded", () => {
    firstReview();
})


next.addEventListener("click", () => {
    itemPos++;
    if(itemPos > review.length - 1) {
        itemPos = 0;
    }
    firstReview();  
})

prev.addEventListener("click", () => {
    itemPos--;
    if(itemPos < 0) {
        itemPos = review.length - 1;
    }
    firstReview();
})

random.addEventListener("click", () => {
    itemPos = Math.floor(Math.random() * review.length);
    // console.log(itemPos);
    firstReview();
})