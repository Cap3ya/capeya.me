export const projects = [
  {
    title: "Rock Paper Scissors",
    image: {
      src: "./images/rockPaperScissors.png",
      alt: "Screenshot",
      height: "205",
      width: "364",
    },
    skills: ["HTML", "CSS", "TypeScript", "Jest"],
    text: "Play an endless battle against a well behaved bot!",
    livePreview: {
      href: "https://rock-paper-scissors-umber-ten.vercel.app/",
    },
    sourceCode: {
      href: "https://github.com/Cap3ya/rockPaperScissors",
    },
  },
  {
    title: "Calculator",
    image: {
      src: "./images/calculator.png",
      alt: "Screenshot",
      height: "205",
      width: "364",
    },
    skills: ["HTML", "CSS", "JavaScript"],
    text: "A calculator that allows to perform the four basic arithmetic operations.",
    livePreview: {
      href: "https://calculator-chi-two-62.vercel.app/",
    },
    sourceCode: {
      href: "https://github.com/Cap3ya/calculator",
    },
  },
  {
    title: "Library",
    image: {
      src: "./images/library.png",
      alt: "Screenshot",
      height: "205",
      width: "364",
    },
    skills: ["HTML", "CSS", "JavaScript"],
    text: "Use localStorage and JSON to add, remove and edit books from your library.",
    livePreview: {
      href: "https://library-self-three.vercel.app",
    },
    sourceCode: {
      href: "https://github.com/Cap3ya/library",
    },
  },
  {
    title: "Tic tac toe",
    image: {
      src: "./images/tictactoe.png",
      alt: "Screenshot",
      height: "205",
      width: "365",
    },
    skills: ["HTML", "CSS", "JavaScript", "HTMX"],
    text: "Read the rules, pick your character and play with a friend or againt an AI.",
    livePreview: {
      href: "https://tic-tac-toe-chi-gold-46.vercel.app/",
    },
    sourceCode: {
      href: "https://github.com/Cap3ya/ticTacToe",
    },
  },
  {
    title: "Tasty's Burgers",
    image: {
      src: "./images/restaurant.png",
      alt: "Screenshot",
      height: "205",
      width: "365",
    },
    skills: ["HTML", "CSS", "JavaScript", "WebPack"],
    text: "Full javaScript and bundled with WebPack. Use tabs to navigate between pages.",
    livePreview: {
      href: "https://restaurant-khaki-omega.vercel.app",
    },
    sourceCode: {
      href: "https://github.com/Cap3ya/restaurant",
    },
  },
  {
    title: "Afpa's Dwwm",
    image: {
      src: "./images/afpa.png",
      alt: "Screenshot",
      height: "205",
      width: "365",
    },
    skills: ["Figma", "HTML", "CSS"],
    text: "Had to wireframe, mockup and prototype a 5 pages responsive website.",
    livePreview: {
      href: "https://afpa-dwwm.vercel.app/",
    },
    sourceCode: {
      href: "https://github.com/Cap3ya/afpaDwwm",
    },
  },
  {
    title: "To-do list",
    image: {
      src: "./images/todolist.png",
      alt: "Screenshot",
      height: "205",
      width: "365",
    },
    skills: ["HTML", "CSS", "JavaScript"],
    text: "Front end to-do list. Login or signup. CRUD, filter and sort tasks.",
    livePreview: {
      href: "https://todolist-nu-flame.vercel.app/",
    },
    sourceCode: {
      href: "https://github.com/Cap3ya/todolist",
    },
  },
  {
    title: "Resume builder",
    image: {
      src: "./images/resumebuilder.png",
      alt: "Screenshot",
      height: "205",
      width: "365",
    },
    skills: ["HTML", "CSS", "JavaScript", "React"],
    text: "Don't start your resume from scratch. This site uses react's useState.",
    livePreview: {
      href: "https://resume-builder-rho-eight.vercel.app/",
    },
    sourceCode: {
      href: "https://github.com/Cap3ya/resumeBuilder",
    },
  },
];

export const projectSkills = projects.map(project => project.skills).reduce((pre, cur) => pre.concat(cur))
