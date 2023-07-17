import { Project } from './types';

export const emptyProject: Project = {
  _id: '',
  name: '',
  description: '',
  description2: '',
  description3: '',
  github_link: '',
  deployed_link: '',
  pictures: '',
  tech_lang: [
    {
      name: '',
      description: '',
    },
  ],
  clients: [
    {
      name: '',
      description: '',
    },
  ],
  teammates: [
    {
      name: '',
      github_link: '',
    },
  ],
};

export const projectInfo: Project[] = [
  {
    _id: {
      $oid: '64a15fdfd77ceac1e021b89c',
    },
    name: 'Little Crushing Cars',
    description:
      'This is a game where you have to avoid to crush with the rest of the cars. You move the car with the mouse pointer and every 10 seconds 5 random cars will appear. ',
    description2:
      'I created this game in 2011 using Processing when I was working with Arduino. ',
    description3:
      'The game works only in windows. To play the game, you have to have Java JDK installed, then extract the files (it is 2 times compressed to avoid the antivirus warnings from windows). Then you just execute the sketch_aug11a.exe.',
    pictures:
      '../../../assets/images/projects/LittleCrushingCars/LittleCrushingCars.png',
    deployed_link:
      'https://drive.google.com/file/d/1PZtImxxW_DivhES0RQMcCff58uvNslQi/view?usp=sharing',
    tech_lang: [
      {
        name: 'Processing',
        description:
          'Processing is a flexible software sketchbook and a language for learning how to code within the context of the visual arts.',
      },
    ],
  },
  {
    _id: {
      $oid: '64a162ead77ceac1e021b89e',
    },
    name: 'Tech Lodge',
    description:
      'This is my first website created for a fictitious company called Tech Lodge that focuses on providing startups and technology companies with the ideal space to boost their creativity in a natural and beautiful environment, with access to high-end communications and the best technological resources. ',
    description2:
      'The website uses HTML, CSS, and JavaScript. JS is used in the packages page to check for the options the user selects, to delete the selection, in the contact page to validate the email the user enters and to save the information in a local file.',
    description3: 'This site is implemented on Github.',
    pictures: '../../../assets/images/projects/TechLodge/TechLodge.png',
    clients: [
      {
        name: 'Wild Code School',
        description: 'School',
      },
    ],
    deployed_link: 'https://sebasbar.github.io/techLodge/index.html',
    github_link: 'https://github.com/SebasBar/techLodge',
    tech_lang: [
      {
        name: 'HTML',
        description:
          'The HyperText Markup Language or HTML(HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser.',
      },
      {
        name: 'CSS',
        description:
          'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.',
      },
      {
        name: 'JavaScript',
        description:
          'JavaScript is a programming language that conforms to the ECMAScript specification.[9] JavaScript is high-level, often just-in-time compiled, and multi-paradigm.',
      },
    ],
  },
  {
    _id: {
      $oid: '64a6b06744689f41b04aa113',
    },
    name: 'Best Shop',
    description:
      'This website uses Ebay API to create a search bar, favorite page and a category bar among other features.',
    description2:
      'The website uses HTML, CSS, JavaScript, React, font awesome and React Router.',
    description3:
      'This webpage was never deployed and the eBay license is expired. If you have an eBay license you can add it and use the application.',
    github_link: 'https://github.com/SebasBar/best-shop-react',
    pictures: '../../../assets/images/projects/BestShop/BestShop.png',
    tech_lang: [
      {
        name: 'HTML',
        description:
          'The HyperText Markup Language or HTML(HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser.',
      },
      {
        name: 'CSS',
        description:
          'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.',
      },
      {
        name: 'JavaScript',
        description:
          'JavaScript is a programming language that conforms to the ECMAScript specification.[9] JavaScript is high-level, often just-in-time compiled, and multi-paradigm.',
      },
      {
        name: 'React',
        description:
          'React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.',
      },
    ],
    clients: [
      {
        name: 'Wild Code School',
        description: 'Education',
      },
    ],
    teammates: [
      {
        name: 'Fakhira Yakub',
        github_link: 'https://github.com/fakhirayaqub',
      },
      {
        name: 'Said Simba',
        github_link: 'https://github.com/Said1458',
      },
    ],
    __v: 0,
  },
  {
    _id: {
      $oid: '64ad543e998794d72e300be8',
    },
    name: 'Cellular Automata',
    description:
      'Personal project based on Cellular Automaton (hover over to know what is a Cellular Automata). This website uses just HTML, CSS, and JavaScript.',
    description2:
      "A cellular automaton is a collection of 'colored' cells on a grid of specified shape that evolves through a number of discrete time steps according to a set of rules based on the states of neighboring cells.",
    description3: '',
    github_link: 'https://github.com/SebasBar/CellularAutomata',
    pictures:
      '../../../assets/images/projects/CellularAutomata/CellularAutomata.png',
    deployed_link: 'https://sebasbar.github.io/CellularAutomata/',
    tech_lang: [
      {
        name: 'HTML',
        description:
          'The HyperText Markup Language or HTML(HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser.',
      },
      {
        name: 'CSS',
        description:
          'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.',
      },
      {
        name: 'JavaScript',
        description:
          'JavaScript is a programming language that conforms to the ECMAScript specification.[9] JavaScript is high-level, often just-in-time compiled, and multi-paradigm.',
      },
    ],
    __v: 0,
  },
];
