const luriaDescription = `Luria is a production-ready SaaS browser extension that auto-generates high-quality flashcards from online course videos. Built to streamline the study process, Luria extracts transcripts from Udemy and similar platforms, uses Gemini AI for card generation, and supports exports to CSV, AnkiConnect, and APKG. The project showcases end-to-end full-stack development, serverless architecture on AWS, and third-party API integration, all packaged in a clean, responsive UI optimized for a browser extension environment.`;

const luriaTechStack = [
  'React',
  'TypeScript',
  'AWS Lambda',
  'AWS API Gateway',
  'AWS DynamoDB',
  'Firebase',
  'Stripe',
];

const luriaKeyFeatures = [
  {
    name: 'AI-Powered Flashcard Generation:',
    description: `Luria uses Gemini AI to generate flashcards from extracted video transcripts, supporting cloze deletions, question-answer pairs, and custom prompt templates for different learning styles.`,
  },
  {
    name: 'Serverless AWS Backend:',
    description: `A fully serverless backend built with AWS Lambda, API Gateway, and DynamoDB. Secrets are managed with SSM Parameter Store, and role-based access is handled via custom auth logic.`,
  },
  {
    name: 'Multiple Export Formats:',
    description: `Users can export flashcards to CSV, push directly to Anki using AnkiConnect, or download .apkg decks through a custom-built Node packaging system.`,
  },
  {
    name: 'Responsive 800×600 Extension UI:',
    description: `The interface is designed specifically for the 800×600 browser extension viewport, optimized for readability and fast interaction without clutter.`,
  },
];

const luriaChallenges = [
  {
    name: 'Extracting Transcripts from Course Platforms:',
    description: `Implemented a DOM-based scraping solution to pull transcripts from Udemy video pages, formatting the content for clean parsing and seamless AI prompt injection.`,
  },
  {
    name: 'Packaging Flashcards for Anki:',
    description: `Generating .apkg files on the backend meant digging into the internals of Anki's SQLite format and dynamically bundling decks based on user input.`,
  },
  {
    name: 'Scoped API Key Access & Auth:',
    description: `Implementing secure API key storage with encrypted SSM parameters and enforcing access control per user required thoughtful IAM design and validation logic across Lambda functions.`,
  },
];

export { luriaDescription, luriaTechStack, luriaKeyFeatures, luriaChallenges };
