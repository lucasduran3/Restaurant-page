export const HeaderManagement = () => {
  const header = document.createElement("header");
  const logo = document.createElement("div");
  const topnav = document.createElement("nav");
  const homeItem = document.createElement("a");
  const aboutItem = document.createElement("a");
  const menuItem = document.createElement("a");
  const shopItem = document.createElement("a");
  const resItem = document.createElement("a");
  const itemsList = [homeItem, aboutItem, menuItem, shopItem, resItem];
  let activeItem = homeItem;

  logo.classList.add("logo");
  topnav.classList.add("topnav");

  logo.innerHTML = "LOGO";
  homeItem.innerHTML = "HOME";
  aboutItem.innerHTML = "ABOUT";
  menuItem.innerHTML = "MENU";
  shopItem.innerHTML = "SHOP";
  resItem.innerHTML = "RESERVATION";

  header.appendChild(logo);
  header.appendChild(topnav);

  itemsList.forEach((item) => {
    topnav.appendChild(item);
  });

  const setActiveItem = (item) => {
    itemsList.forEach(i => {
        if(i !== item){
            i.classList.remove("activeItem");
        } else {
            i.classList.add("activeItem");
        }
    });
  };

  const getHomeItem = () => homeItem;
  const getAboutItem = () => aboutItem;
  const getMenuItem = () => menuItem;
  const getShopItem = () => shopItem;
  const getResItem = () => resItem;
  const getActiveItem = () => activeItem;
  const getHeader = () => header;

  return {
    setActiveItem,
    getHomeItem,
    getAboutItem,
    getMenuItem,
    getShopItem,
    getResItem,
    getActiveItem,
    getHeader,
  };
};
