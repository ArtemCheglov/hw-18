const images = [{
        url: 'https://cdn.pixabay.com/photo/2025/05/11/22/08/old-barn-9594035_1280.jpg',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://cdn.pixabay.com/photo/2017/08/06/00/27/yoga-2587066_640.jpg',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://cdn.pixabay.com/photo/2025/01/08/15/12/pine-marten-9319353_1280.jpg',
        alt: 'Group of Horses Running',
    },
];

const gallery = document.querySelector("#gallery")

const galleryList = images.map(({ url, alt }) => {
    return `<li class="gallery__img"><img src="${url}" alt="${alt}"></li>`
}).join('')

gallery.insertAdjacentHTML("beforeend", galleryList)