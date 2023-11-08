const plats = document.querySelector(".plats");

const menus = [
  {
    id: 1,
    name: "Samosa",
    img: "../images/samosa.jpg",
  },
  {
    id: 2,
    name: "Poulet Tikka Masala",
    img: "../images/tikka.jpg",
  },
  {
    id: 3,
    name: "Rouleau de Kati",
    img: "../images/kati.jpg",
  },
  {
    id: 4,
    name: "Murghmakhani",
    img: "../images/murghmakani.jpg",
  },
  {
    id: 5,
    name: "Poulet Vindaloo Curry",
    img: "../images/vindaloo.jpg",
  },
  {
    id: 6,
    name: "Masala Dosa",
    img: "../images/dosa.jpg",
  },
  {
    id: 7,
    name: "Riz Basmati",
    img: "../images/riz.jpg",
  },
  {
    id: 8,
    name: "Pain Naan",
    img: "../images/naan.jpg",
  },
  {
    id: 9,
    name: "Soupe Daal",
    img: "../images/soupe.jpg",
  },
];

const createPlat = (title, imageUrl) => {
  const plat = document.createElement("div");
  plat.classList.add("plat");
  plats.appendChild(plat);

  const platImg = document.createElement("div");
  platImg.style.backgroundImage = `url(${imageUrl})`;
  platImg.classList.add("plat-img");
  plat.appendChild(platImg);

  const platTitle = document.createElement("div");
  platTitle.classList.add("plat-title");
  platTitle.innerHTML = title;
  plat.appendChild(platTitle);
};
menus.map((menu) => {
  createPlat(menu.name, menu.img);
});
