const rememberDescription = `Inspired by games like Universal Paperclips and A Dark Room, Re:member is a product of my curiosity-driven exploration of game design, aiming to construct an engaging experience where various components intricately depend on each other, offering users meaningful choices. The project is specifically crafted to deepen my understanding of TypeScript within the React framework and to master the use of Sass for CSS styling. While the game currently has a defined endpoint, I have exciting plans for the future, including expanding the narrative and introducing new game mechanics to keep the experience dynamic and engaging.`;

const rememberTechStack = ['React', 'TypeScript', 'Sass', 'Vite'];

const rememberKeyFeatures = [
  {
    name: 'Interconnected Gameplay Mechanics:',
    description: `At the heart of the game is a dynamic "gameState" object that encapsulates the user's progress and decisions. The player's choices intricately shape the unlocking of new mechanics and upgrades, influencing both the timing and speed at which these elements become available. This interconnected system creates a personalized and evolving gaming experience based on individual player strategies and decisions. Notably, a featured game mechanic involves a simon-says-like game, serving as part of a decryption method to unlock an in-game cryptocurrency.`,
  },
  {
    name: 'TypeScript & React Integration:',
    description: `The game is built on the foundations of TypeScript integrated with React. TypeScript's strong typing offers a structured & reliable environment for implementing game logic. This integration simplifies development, ensuring a smooth and manageable project. I wanted to utilize more modern technologies for efficiency and a more enjoyable game development experience.
`,
  },
  {
    name: 'Responsive Design for Seamless Gaming:',
    description: `Experience a smooth gaming journey on various devices. The game is playable on both desktop and on mobile because the responsive design ensures a user-friendly interface, making gameplay enjoyable wherever you are. On mobile, the game features a simple tabbing structure for quick navigation, while the desktop version keeps things neatly organized in a straightforward bento-box layout.`,
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
