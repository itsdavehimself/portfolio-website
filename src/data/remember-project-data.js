const rememberDescription = `Inspired by games like Universal Paperclips and A Dark Room, Re:member is my exploration of game design, crafting an engaging experience where components intricately depend on each other, offering meaningful choices. The project deepens my understanding of TypeScript in React and mastery of Sass for CSS styling. Alongside this, it enhances my proficiency in testing using Vitest and Jest. While the game has a defined endpoint, future plans include expanding the narrative and introducing new mechanics for a dynamic experience.`;

const rememberTechStack = [
  'React',
  'TypeScript',
  'Sass',
  'Vite',
  'Vitest',
  'Jest',
];

const rememberKeyFeatures = [
  {
    name: 'Interconnected Gameplay Mechanics:',
    description: `The game's core is the dynamic "gameState" object, tracking user progress. Player choices drive mechanic and upgrade unlocking, determining availability speed. This system allows players to create individual strategies. A key mechanic is a simon-says-like game, part of a decryption method to unlock in-game cryptocurrency.`,
  },
  {
    name: 'TypeScript & React Integration:',
    description: `The game combines TypeScript and React for reliable game logic in a streamlined development process, utilizing modern technologies for efficiency and a smooth experience.`,
  },
  {
    name: 'Responsive Design for Seamless Gaming:',
    description: `Enjoy seamless gaming on desktop and mobile. Responsive design ensures a user-friendly interface, featuring simple tabbing for mobile and a neat bento-box layout for desktop convenience.`,
  },
  {
    name: 'Local Storage & Base64 Encoding:',
    description: `The game employs local storage for automatic game saving, ensuring player progress is always preserved. To facilitate easy loading, a base64 encoded string is generated that can be saved for loading later on.`,
  },
];

const rememberChallenges = [
  {
    name: 'Saving Game Progress:',
    description: `An important part of the incremental/idle gaming experience is periodically saving progress. By utilizing local storage, the game ensures that player progress is saved every 2 minutes. An additional step was to generate a base64 encoded string that a player can used to load a previous game state on any device.`,
  },
  {
    name: 'Creating Desktop & Mobile Friendly Layouts:',
    description: `Creating a layout that plays both on mobile & desktop was quite challenging to ensure a smooth user experience. The ideal set up allows the player to see as much of the game as possible to ensure that nothing is missed. On mobile, there needed to be compromise, so a tabulated version of the game was developed. A fixed footer navbar allows a player to be notified of upgrades available. On desktop, a bento-box layout was devloped for easy navigation on a single page.`,
  },
  {
    name: 'Clean Reusable Components & Functions:',
    description: `Utilizing the modularity of React and components was a major focus with this project. As the game utilizes many functions to do computations and update the state of the game, creating reusable and pure functions was a necessity to create human-readable code that will be easy to maintain in the future.`,
  },
];

export {
  rememberDescription,
  rememberTechStack,
  rememberKeyFeatures,
  rememberChallenges,
};
