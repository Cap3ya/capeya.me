export const data = [
  {
    title: "Rock Paper Scissors",
    image: {
      src: "./images/projects/rockPaperScissors.png",
      alt: "Screenshot",
      height: "205",
      width: "364",
    },
    skills: ["Html", "Css", "Typescript", "Jest"],
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
      src: "./images/projects/calculator.png",
      alt: "Screenshot",
      height: "205",
      width: "364",
    },
    skills: ["Html", "Css", "Javascript"],
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
      src: "./images/projects/library.png",
      alt: "Screenshot",
      height: "205",
      width: "364",
    },
    skills: ["Html", "Css", "Javascript"],
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
      src: "./images/projects/tictactoe.png",
      alt: "Screenshot",
      height: "205",
      width: "365",
    },
    skills: ["Html", "Css", "Javascript", "Htmx"],
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
      src: "./images/projects/restaurant.png",
      alt: "Screenshot",
      height: "205",
      width: "365",
    },
    skills: ["Html", "Css", "Javascript", "WebPack"],
    text: "Full Javascript and bundled with WebPack. Use tabs to navigate between pages.",
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
      src: "./images/projects/afpa.png",
      alt: "Screenshot",
      height: "205",
      width: "365",
    },
    skills: ["Figma", "Html", "Css"],
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
      src: "./images/projects/todolist.png",
      alt: "Screenshot",
      height: "205",
      width: "365",
    },
    skills: ["Html", "Css", "Javascript"],
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
      src: "./images/projects/resumebuilder.png",
      alt: "Screenshot",
      height: "205",
      width: "365",
    },
    skills: ["Html", "Css", "Javascript", "React"],
    text: "Don't start your resume from scratch. This site uses react's useState.",
    livePreview: {
      href: "https://resume-builder-rho-eight.vercel.app/",
    },
    sourceCode: {
      href: "https://github.com/Cap3ya/resumeBuilder",
    },
  },
  {
    title: "BlackJack",
    image: {
      src: "./images/projects/blackjack.png",
      alt: "Screenshot",
      height: "205",
      width: "365",
    },
    skills: ["Html", "Css", "Javascript"],
    text: "Team project for Afpa's DWWM 2023. Let's beat the dealer.",
    livePreview: {
      href: "https://blackjack-one-rho.vercel.app/",
    },
    sourceCode: {
      href: "https://github.com/Cap3ya/blackjack",
    },
  },
  {
    title: "Jeu du Pendu",
    image: {
      src: "./images/projects/jeudupendu.png",
      alt: "Screenshot",
      height: "205",
      width: "365",
    },
    skills: ["Html", "Css", "Javascript"],
    text: "Project for Afpa's DWWM 2023. Find a word in less than nine errors.",
    livePreview: {
      href: "https://jeu-du-pendu-wine.vercel.app/",
    },
    sourceCode: {
      href: "https://github.com/Cap3ya/jeuDuPendu",
    },
  },
];

export const dataSkills = data.map(project => project.skills).reduce((pre, cur) => pre.concat(cur))
