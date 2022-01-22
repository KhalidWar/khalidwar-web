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
    logo: flutterLogo,
    alt: "Flutter logo",
    items: [
      {
        id: 1,
        label: "Flutter app development",
      },
      {
        id: 2,
        label: "Mobile app UI design and UX research",
      },
      {
        id: 3,
        label: "Transform Figma designs into functioning apps",
      },
      {
        id: 4,
        label: "REST API, Firebase, and GraphQL integration among others",
      },
      {
        id: 5,
        label:
          "Handling complex state and state management solutions such as BloC pattern",
      },
      {
        id: 6,
        label:
          "Proficient in dev tools such as version control (Git) and CI/CD tools",
      },
    ],
  },
  {
    id: 2,
    name: "React",
    logo: reactLogo,
    alt: "React logo",
    items: [
      {
        id: 1,
        label: "React web development",
      },

      {
        id: 2,
        label: "Proficient in HTML, CSS, and JavaScript",
      },
      {
        id: 3,
        label: "API Integration",
      },
      {
        id: 4,
        label: "Firebase, Firestore, and GraphQL Integration",
      },
      {
        id: 5,
        label: "Version Control (Git)",
      },
      {
        id: 6,
        label: "CI/CD ",
      },
    ],
  },
];

export default skillsData;
