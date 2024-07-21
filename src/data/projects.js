import HoneyMovies from "../assets/honey-movies.jpeg";
import SliderScreen from "../assets/honey-movies-slider.jpeg";
import CardScreen from "../assets/honey-movies-cards.jpeg";

import Waikiki from "../assets/waikiki.png";
import WaikikiCards from "../assets/waikiki-cards.png";
import WaikikiNewYear from "../assets/waikiki-new-year.png";

export const projects = [
  {
    name: "Honey Movies",
    poster: HoneyMovies,
    description:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
    id: 1,
    url: "",
    tools: ["html", "css", "javascript"],
    tags: "Interaction Design / Front End Development",
    screens: [SliderScreen, CardScreen],
    playground:
      "This project was a front-end challenge from Frontend Mentor. It’s aplatform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
  },
  {
    name: "LC Waikiki",
    poster: Waikiki,
    description:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
    id: 2,
    url: "",
    tools: ["html", "css"],
    tags: "Interaction Design / Front End Development",
    screens: [WaikikiCards, WaikikiNewYear],
    playground:
      "This project was a front-end challenge from Frontend Mentor. It’s aplatform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes.I’ve learned something new with each project, helping me to improve and adapt my style.",
  },
];
