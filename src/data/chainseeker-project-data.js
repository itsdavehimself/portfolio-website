const chainseekerDescription = `ChainSeeker is my first ever full-stack web development project,
                dedicated to creating a utility app tailored for disc golf
                enthusiasts. As an avid disc golfer myself, I developed this
                application to meet the unique needs of the disc golf community.
                This project is more than just a showcase of my skills;
                it's a passion project born out of my love for disc golf.
                ChainSeeker was crafted with the goal of enhancing the disc golf
                experience, initially for my personal use and that of a few
                friends. See you on the fairway!`;

const chainseekerTechStack = [
  'MongoDB',
  'Express',
  'React + JSX',
  'Node.js',
  'Tailwind CSS',
  'JWT',
];

const chainseekerKeyFeatures = [
  {
    name: 'Score Tracking System:',
    description: 'Effortlessly record and monitor your disc golf rounds.',
  },
  {
    name: 'Create Friend Profiles:',
    description: `You can create friend profiles inside the app so that you can
                play together and keep track of everyone's scores.`,
  },
  {
    name: 'Performance Statistics:',
    description: `Track and review your performance and see how well you are doing
                against your friends.`,
  },
  {
    name: 'Mobile-First Design:',
    description: `This project was created using a mobile-first approach as the
                app lends itself to be used typically on the fairway.`,
  },
  {
    name: 'Responsive Design:',
    description: `Enjoy the app seamlessly on various devices, making it your
                go-to companion during disc golf adventures.`,
  },
];

const chainseekerChallenges = [
  {
    name: 'Perfromance Statistics:',
    description: `Creating intuitive performance statistics posed a challenge, met
                with solutions using Chart.js for effortless bar graph
                generation. I further crafted a custom bar graph from scratch
                using Tailwind CSS and JavaScript logic, enhancing visual
                representation.`,
  },
  {
    name: 'Authentication:',
    description: `Implementing secure JWT authentication presented a challenge,
                addressed by leveraging libraries for streamlined token
                management. Additionally, I successfully crafted a custom JWT
                authentication system, ensuring robust security measures.`,
  },
  {
    name: 'Database Privacy:',
    description: `Ensuring secure password storage through salting and hashing in
                the database posed a challenge. I successfully implemented
                robust solutions, employing cryptographic techniques to enhance
                password security.`,
  },
];

export {
  chainseekerDescription,
  chainseekerTechStack,
  chainseekerKeyFeatures,
  chainseekerChallenges,
};
