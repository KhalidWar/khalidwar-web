import techBrandLogo from "./TechBrandLogo";

const flutterLogo = techBrandLogo.filter((brand) => {
  return brand.title === "Flutter";
});
const reactLogo = techBrandLogo.filter((brand) => {
  return brand.title === "React";
});

const skillsData = [
  {
    id: 1,
    name: "Flutter",
    title: "Mobile app development",
    logo: flutterLogo,
    alt: "Flutter logo",
    items: [
      {
        id: 1,
        label: "Flutter cross-platform mobile app development.",
      },
      {
        id: 2,
        label: "Mobile app UI/UX design and research.",
      },
      {
        id: 3,
        label: "Manage app lifecycle from Figma sketches to app stores.",
      },
      {
        id: 4,
        label: "REST API, Firebase, and GraphQL integration among others.",
      },
      {
        id: 5,
        label:
          "Handling complex state and state management solutions such as BloC pattern.",
      },
      {
        id: 6,
        label:
          "Proficient in Dart language, dev tools, version control (Git), and CI/CD tools.",
      },
    ],
  },
  {
    id: 2,
    name: "React",
    title: "Website development",
    logo: reactLogo,
    alt: "React logo",
    items: [
      {
        id: 1,
        label: "React website development.",
      },
      {
        id: 2,
        label: "Proficient in HTML, CSS, and JavaScript.",
      },
      {
        id: 3,
        label: "Sufficient in utilizing third party packages and dependencies.",
      },
      {
        id: 4,
        label: "Knowledgable in web design and animations.",
      },
    ],
  },
];

export default skillsData;
