export const SectionCreator = () => {

  const createHomeSection = () => {
    const home = document.createElement("div");
    const title = document.createElement("h1");
    const spanTitle = document.createElement("span");
    const description = document.createElement("p");
    const homeBtn = document.createElement("button");
    const list = [title, description, homeBtn];

    home.classList.add("home");
    home.style.opacity = "0";
    description.classList.add("home-description");
    homeBtn.classList.add("home-btn");

    spanTitle.innerHTML = "Epicurean Heaven Offers You";
    title.appendChild(spanTitle);
    title.innerHTML += "The best tasting experience";

    console.log(title);
    description.innerHTML =
      "Epicurean Heaven is a restaurant, bar and coffee roastery located on Cánada. We have awesome recipes and the most talented chefs in town!";
    homeBtn.innerHTML = "GET A RESERVATION NOW";

    list.forEach((item) => {
      home.appendChild(item);
    });

    setTimeout(() => {
      home.style.opacity = "1";
    }, 50);

    return home;
  };

  const createAboutSection = () => {
    const about = document.createElement("div");
    const info = document.createElement("div");
    const title = document.createElement("h2");
    const spanTitle = document.createElement("span");
    const description = document.createElement("p");
    const aboutBtn = document.createElement("button");
    const img = document.createElement("div");

    about.classList.add("about");
    about.style.opacity = "0";
    info.classList.add("about-info");
    img.classList.add("about-img");

    spanTitle.innerHTML = "ABOUT US";
    title.appendChild(spanTitle);
    title.innerHTML += "Epicurean Heaven";

    description.innerHTML =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsam distinctio aut illum corporis dignissimos. Magnam esse dolorum dolorem laborum.";
    aboutBtn.innerHTML = "READ MORE";

    img.classList.add("about-img");

    info.appendChild(title);
    info.appendChild(description);
    info.appendChild(aboutBtn);

    about.appendChild(info);
    about.appendChild(img);

    setTimeout(() => {
      about.style.opacity = "1";
    }, 50);


    return about;
  };

  const createMenuSection = () => {
    const menu = document.createElement("div");
    const title = document.createElement("h2");
    const spanTitle = document.createElement("span");
    const description = document.createElement("p");
    const cardContainer = document.createElement("div");
    for (let index = 0; index < 8; index++) {
      let card = document.createElement("div");
      card.classList.add("card");
      let h3 = document.createElement("h3");
      h3.innerHTML = "Lorem, ipsum.";
      card.appendChild(h3);
      cardContainer.appendChild(card);
    };

    menu.classList.add("menu");
    menu.style.opacity = "0";
    cardContainer.classList.add("menu-container");

    spanTitle.innerHTML = "MENU";
    title.appendChild(spanTitle);
    title.innerHTML += "The Best Of Us";
    description.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, numquam.";
    
    menu.appendChild(title);
    menu.appendChild(description);
    menu.appendChild(cardContainer);

    setTimeout(() => {
      menu.style.opacity = "1";
    }, 50);


    return menu;
  };

  return { createHomeSection, createAboutSection, createMenuSection };
};
