import { SectionCreator } from "./sectionCreator";
import { HeaderManagement } from "./headerManagement";
import './meyerReset.css';
import './styles.css';

const SectionManagement = () => {
  const header = HeaderManagement();
  const body = document.querySelector("body");
  const content = document.querySelector(".content");

  const sectionCreator = SectionCreator();
  content.appendChild(sectionCreator.createHomeSection());
  header.setActiveItem(header.getHomeItem());
  body.appendChild(header.getHeader());


  const sectionListeners = () => {
    header.getHomeItem().addEventListener("click", () => {
      header.setActiveItem(header.getHomeItem());
      content.innerHTML = "";
      content.appendChild(sectionCreator.createHomeSection());
    });

    header.getAboutItem().addEventListener("click", () => {
      header.setActiveItem(header.getAboutItem()), (content.innerHTML = "");
      content.appendChild(sectionCreator.createAboutSection());
    });

    header.getMenuItem().addEventListener("click", () => {
      header.setActiveItem(header.getMenuItem()), (content.innerHTML = "");
      content.appendChild(sectionCreator.createMenuSection());
    });
  };

  sectionListeners();
};

SectionManagement();