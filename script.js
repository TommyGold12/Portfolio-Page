//* PROJECT CATEGORY OPEN HAMBURGER MENU
let category = document.querySelector('.projects_category')
console.log(document.querySelector('.hamburger'))
document.querySelector('.hamburger').addEventListener('click', e => {
    if (category.classList.contains('displayNone')) {
        category.classList.remove('displayNone');
        category.classList.add('displayBlock');
    }
    else {
        category.classList.add('displayNone');
        category.classList.remove('displayBlock');
    }
})


//* RESIZE DISPLAY NONE/ BLOCK
const width = function (e) {

    if (window.innerWidth <= 425) {
        category.classList.add('displayNone');
        category.classList.remove('displayBlock');
    }
    else {
        category.classList.remove('displayNone');
    }
}
window.addEventListener('load', width)
window.addEventListener('resize', width)


let projects = [
    project_1 = {
        id: 'fitzone',
        name: 'FitZone app',
        date: 'February 2024',
        img: 'img/correct-signal-svgrepo-com.svg',
        p_1: 'My biggest project with mockAPI database',
        p_2: 'Register and take advantage of all the possibilities',
        p_3: 'Possibility to put, delete and edit data',
        p_4: 'Full responsive design with high loading performance',
        wallpaper: 'img/project1-img.jpg',
        link: 'https://tommygold12.github.io/FitZone/'
    },
]

const overlay = document.querySelector('.overlay');
//*OPEN MESSAGE OVERLAY
document.querySelectorAll('.sendMessage').forEach(function (e) {
    e.addEventListener('click', function (each) {
        overlay.classList.remove('displayNone');
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    })
})

//* CLOSE MESSAGE OVERLAY
document.querySelector('.overlay').addEventListener('click', function (e) {
    console.log(e)

    if (e.target === overlay) {
        overlay.classList.add('displayNone');
    }
})

document.onkeydown = function (e) {
    if (e.key === 'Escape') {
        overlay.classList.add('displayNone')
    }

}


//*Project category animation
document.querySelectorAll('.ctg a').forEach(function (e) {
    //active first element

    e.addEventListener('click', function (each) {
        //remove active class
        document.querySelectorAll('.ctg a').forEach(function (active) {
            if (active.parentElement.classList.contains('hoverLine')) {
                active.parentElement.classList.remove('hoverLine');
                active.classList.remove('hoverColor')
            }
        })

        //add active class
        let parent = each.target.parentElement;
        parent.classList.add('hoverLine');
        e.classList.add('hoverColor')
    })
})


// * * * * PROJECT CATEGORY SELECT * * * *
const categoryTemplate = function (name, date, img, p_1, p_2, p_3, p_4, wallpaper, id) {
    let bio = document.querySelector('.bio').innerHTML = `  <h2>${name}</h2>
                                                                <span>${date}</span>
                                                            <div>
                                                                <img src=${img}>
                                                                <p>${p_1}</p>
                                                            </div>
                                                            <div>
                                                                <img src=${img}>
                                                                <p>${p_2}</p>
                                                            </div>
                                                            <div>
                                                                <img src=${img}>
                                                                <p>${p_3}</p>
                                                            </div>
                                                            <div>
                                                                <img src=${img}>
                                                                <p>${p_4}</p>
                                                            </div>
                                                            <a data-category="${id}" id="open_project" onclick = "openProject(this)">Open project</a>
                                                            `
    let project_image = document.querySelector('.project_image').innerHTML = `<img src="${wallpaper}">`
}

//* FUNCTION FOR SELECT CATEGORY
document.querySelectorAll('.ctg a').forEach(function (e) {
    e.addEventListener('click', function (each) {
        let ctgName = each.target.innerHTML.toLowerCase().replace(' ', '').trim();
        for (const key of projects) {
            if (key.id === ctgName) {
                categoryTemplate(key.name, key.date, key.img, key.p_1, key.p_2, key.p_3, key.p_4, key.wallpaper, key.id)
                console.log(key.link)
            }
        }
    })
});


// * * * * LOAD FIRST CATEGORY * * * *
const defaultLoad = function (e) {
    let value = projects[0];
    categoryTemplate(value.name, value.date, value.img, value.p_1, value.p_2, value.p_3, value.p_4, value.wallpaper, value.id)
}
defaultLoad()


function openProject(e) {
    for (const key of projects) {
        if (e.getAttribute('data-category') === key.id) {
            window.open(key.link)
        }
    }
}



//*SCROLL INTO VIEW
document.querySelectorAll('.nav_links a').forEach(function (e) {
    e.addEventListener('click', function (each) {
        each.preventDefault()
        const id = each.target.getAttribute('href');
        console.log(document.querySelector(id))
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
        })
    })
})

document.querySelector('.browseProjects').addEventListener('click', function (e) {
    e.preventDefault();
    let section = document.querySelector('#page2');
    section.scrollIntoView({
        behavior: 'smooth',
    })

})


//*INTERSECTED NAVLINE
const header = document.querySelector('.header')
const navline = document.querySelector('.nav_bar');

const stickyNav = function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
        navline.classList.add('positionFixed')
    }
    else {
        navline.classList.remove('positionFixed')
    }
}

const obsOption = {
    root: null,
    treshold: 0,
}

const observer = new IntersectionObserver(stickyNav, obsOption);
observer.observe(header);


//*INTERSECTED BLUR LOADING
const blurDiv = document.querySelectorAll('.pages');
const columnHeight = document.querySelector('.blur').getBoundingClientRect().height;
const reveal = function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            console.log(entry)
            entry.target.classList.add('reveal');
        }
    })
}

const obsOption2 = {
    root: null,
    treshold: 0.8,
    rootMargin: `-${columnHeight / 2}px`
}

const observer2 = new IntersectionObserver(reveal, obsOption2);
blurDiv.forEach(el => observer2.observe(el));


//* VALIDATION USER DATA
let config = {
    'name': {
        required: true,
        minLength: 3,
        maxLength: 20,
    },
    'surename': {
        required: true,
        minLength: 3,
        maxLength: 20,
    },
    'email': {
        required: true,
        email: true,
        minLength: 5,
        maxLength: 30,
    },
    'message': {
        required: true,
        minLength: 5,
    }
}

let validator = new Validator(config);

// Obavijest o poslanoj poruci
document.querySelector('.messageForm').addEventListener('submit', function (e) {
    e.preventDefault();
    if (validator.validationPassed()) {
        alert('Message was send!')
        overlay.classList.add('displayNone');
    }
})



