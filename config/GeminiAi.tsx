/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require('@google/generative-ai');

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'application/json',
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: 'user',
      parts: [
        {
          text: 'Create kids story on description for 0-5 Years kids, Educational story, and all images in Paper cut style: story of boy and Magic School, give me 5 chapters, With detailed image text prompt for each of chapter and image prompt for story cover book with story name, all in JSON field format.',
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: '```json\n{\n  "story_name": "The Boy Who Found Magic School",\n  "cover_image": {\n    "description": "A paper-cut image of a boy, with wide eyes and a curious expression, standing in front of a colorful, whimsical school building. The school has a swirling, magical-looking door and windows, and a sign that reads \'Magic School\' in swirling letters.",\n    "style": "Paper cut"\n  },\n  "chapters": [\n    {\n      "chapter_title": "The Lost Toy",\n      "description": "A young boy named Leo is playing with his favorite toy spaceship in his backyard. He accidentally throws it over the fence into the woods. He looks for it, but can\'t find it. He\'s sad and worried.",\n      "image": {\n        "description": "A paper-cut image of Leo, a boy with brown hair and bright blue eyes, looking sadly over a fence into a dark, green forest. His spaceship toy is lying on the ground, hidden in the shadows.",\n        "style": "Paper cut"\n      }\n    },\n    {\n      "chapter_title": "Following the Rainbow",\n      "description": "Leo follows a colorful rainbow that appears in the sky after a rain shower. He believes it might lead him to his lost toy. He finds himself walking through the woods, amazed by the beautiful colors.",\n      "image": {\n        "description": "A paper-cut image of Leo walking along a path in the woods. A vibrant rainbow arches over the trees, leading him deeper into the forest. The leaves on the trees are green and vibrant, and there are colorful mushrooms growing along the path.",\n        "style": "Paper cut"\n      }\n    },\n    {\n      "chapter_title": "The Magic School",\n      "description": "At the end of the rainbow, Leo finds a beautiful and strange school. It\'s made of candy, with chocolate walls and gumdrop windows. A sign above the door says \'Magic School\'.",\n      "image": {\n        "description": "A paper-cut image of Leo looking up in awe at the \'Magic School\'. The school is made of chocolate, with gumdrop windows and a candy cane roof. A sign above the door says \'Magic School\' in swirling, candy-colored letters. There are students dressed in colorful robes, playing with magical objects.",\n        "style": "Paper cut"\n      }\n    },\n    {\n      "chapter_title": "Making Friends",\n      "description": "Leo meets some new friends at the Magic School, including a friendly talking cat and a girl who can fly. They show him magical tricks and introduce him to the wonder of magic.",\n      "image": {\n        "description": "A paper-cut image of Leo standing with his new friends: a talking cat with a purple scarf and a girl with long, flowing hair and magical wings. They are smiling and laughing together, surrounded by colorful, magical objects.",\n        "style": "Paper cut"\n      }\n    },\n    {\n      "chapter_title": "Finding the Toy",\n      "description": "Leo\'s new friends help him find his lost spaceship toy, using magic and laughter. He realizes that sometimes, even when you lose something, it can lead you to something even better.",\n      "image": {\n        "description": "A paper-cut image of Leo, his new friends, and his spaceship toy floating in the air, surrounded by sparkly magic. They are smiling and happy, and Leo is holding his toy tightly.",\n        "style": "Paper cut"\n      }\n    }\n  ]\n}\n```',
        },
      ],
    },
  ],
});
