/**
 * E-Safety Questionnaire Questions Database
 * This file contains all possible questions for the e-safety assessment.
 * Questions are organized by category for easier management.
 */

const questionDatabase = {
  // SCAM QUESTIONS
  scams: [
    {
      question:
        "You get a message claiming you’ve won a $500 gift card. What should you do first?",
      options: [
        "Click the link to claim it",
        "Reply and ask who it's from",
        "Report it as suspicious",
        "Ignore it and delete immediately",
      ],
      scores: [0, 0, 3, 1],
    },
    {
      question:
        "What’s the most reliable way to verify if a message asking for money is real?",
      options: [
        "Ask them directly via that message",
        "Send money and check later",
        "Call the person through a trusted number",
        "Look at their profile picture",
      ],
      scores: [0, 0, 3, 1],
    },
    {
      question:
        "An ad says you can double your money by “investing now.” What’s your first thought?",
      options: [
        "It sounds like a smart move",
        "It’s likely a scam",
        "I’ll try with a small amount",
        "I’ll share it with friends",
      ],
      scores: [0, 3, 0, 0],
    },
    {
      question:
        "A caller says they’re from the ATO (tax office) and you owe money. What’s the best action?",
      options: [
        "Pay immediately",
        "Give them your details",
        "Hang up and call ATO directly",
        "Stay on the line for more info",
      ],
      scores: [0, 0, 3, 0],
    },
  ],

  // PHISHING QUESTIONS
  phishing: [
    {
      question:
        "Your bank sends an email saying “Verify your account now!” with a link. What do you do?",
      options: [
        "Click the link to log in",
        "Forward the email to friends",
        "Contact the bank through their website",
        "Reply to the email to ask",
      ],
      scores: [0, 0, 3, 0],
    },
    {
      question: "Which of these is a sign of a phishing attempt?",
      options: [
        "Personalised greeting",
        "Urgent tone and unknown link",
        "Secure domain name",
        "perfect grammar and spelling",
      ],
      scores: [0, 3, 0, 1],
    },
    {
      question:
        "A message says your delivery is delayed and includes a suspicious link. What should you do?",
      options: [
        "Click and enter your info",
        "Ignore and delete",
        "Share with others to check",
        "Call the delivery company using the link",
      ],
      scores: [0, 3, 0, 0],
    },
    {
      question: "How should you handle unexpected attachments in emails?",
      options: [
        "Download and check",
        "Open if it’s from someone you know",
        "Scan with antivirus first",
        "Trust if subject line looks familiar",
      ],
      scores: [0, 0, 3, 0],
    },
  ],

  // MALWARE
  malware: [
    {
      question:
        "Your child wants to install a game they found in an ad. What’s safest?",
      options: [
        "Download it directly",
        "Ask a friend if it’s okay",
        "Only install apps from official stores",
        "Allow it after checking the screenshots",
      ],
      scores: [0, 0, 3, 0],
    },
    {
      question: "A pop-up says your computer is infected. What do you do?",
      options: [
        "Click to fix it",
        "Close your browser and ignore",
        "Restart your PC",
        "Trust the warning and download software",
      ],
      scores: [0, 3, 0, 0],
    },
    {
      question: "What’s the safest way to use a USB someone gives you?",
      options: [
        "What’s the safest way to use a USB someone gives you?",
        "Use antivirus to scan it first",
        "Use only on public computers",
        "Open only image files",
      ],
      scores: [0, 3, 0, 0],
    },
    {
      question: "What’s a common way malware spreads?",
      options: [
        "Email attachments from unknown senders",
        "Using strong passwords",
        "Saving to the cloud",
        "Browsing news sites",
      ],
      scores: [3, 0, 0, 0],
    },
  ],

  // ONLINE HARASSMENT
  harassment: [
    {
      question:
        "Your child receives repeated unwanted messages online. What’s your response?",
      options: [
        "Ignore and move on",
        "Block and report the sender",
        "Tell them to stop messaging",
        "Delete the app",
      ],
      scores: [0, 3, 0, 1],
    },
    {
      question: "Which is an example of online harassment?",
      options: [
        "Posting public compliments",
        "Sharing someone’s photo with permission",
        "Repeatedly mocking someone online",
        "Asking for help in a group chat",
      ],
      scores: [0, 0, 3, 0],
    },
    {
      question:
        "You notice someone is being bullied in a group chat. What’s the right action?",
      options: [
        "Watch quietly",
        "Join in to tease",
        "Stand up and report it",
        "Leave the chat",
      ],
      scores: [0, 0, 3, 0],
    },
    {
      question: "What’s one way to reduce online harassment risks?",
      options: [
        "Post all your opinions publicly",
        "Share personal info freely",
        "Adjust privacy settings",
        "Accept friend requests from everyone",
      ],
      scores: [0, 0, 3, 0],
    },
  ],

  // INAPPROPRIATE CONTENT
  inappropriate: [
    {
      question:
        "What should a child do if they come across violent or explicit content?",
      options: [
        "Share with friends",
        "Keep watching",
        "Report and tell a trusted adult",
        "Bookmark for later",
      ],
      scores: [0, 0, 3, 0],
    },
    {
      question:
        "Which tool helps prevent exposure to inappropriate websites?  ",
      options: [
        "VPN",
        "Parental control software",
        "Incognito mode",
        "Auto-fill browser tools",
      ],
      scores: [0, 3, 0, 0],
    },
    {
      question: "What’s a sign a game may not be suitable for your child?",
      options: [
        "Cartoon graphics",
        "Age rating is 18+",
        "It’s free",
        "It’s popular on TikTok",
      ],
      scores: [0, 3, 0, 0],
    },
    {
      question:
        "Which approach helps prevent children from seeing harmful content online?",
      options: [
        "Checking browsing history daily",
        "Giving them full independence",
        "Using age filters and settings",
        "Asking friends what their kids watch",
      ],
      scores: [0, 0, 3, 0],
    },
  ],

  // PRIVACY AND TRACKING
  privacy: [
    {
      question: "A website asks to access your microphone. What do you do?",
      options: [
        "Always allow",
        "Say yes without thinking",
        "Only allow if necessary and trusted",
        "Disable your sound instead",
      ],
      scores: [0, 0, 3, 0],
    },
    {
      question: "What’s a “cookie” on a website used for?",
      options: [
        "Saving passwords",
        "Tracking user activity",
        "Making sites load faster",
        "Blocking malware",
      ],
      scores: [0, 3, 0, 0],
    },
    {
      question:
        "What kind of personal info should your child avoid sharing online?",
      options: [
        "Favourite show",
        "Pet’s name",
        "Home address and school",
        "Favourite food",
      ],
      scores: [0, 0, 3, 0],
    },
    {
      question: "What is a good practice when creating an online account?",
      options: [
        "Use the same password everywhere",
        "Skip privacy settings",
        "Set your profile to “Public”",
        "Choose private account settings",
      ],
      scores: [0, 0, 0, 3],
    },
    {
      question: "How do tracking pixels impact privacy?",
      options: [
        "They speed up your device",
        "They track your behavior online",
        "They stop spam",
        "They protect your passwords",
      ],
      scores: [0, 3, 0, 0],
    },
  ],
};

// Categories for scoring and recommendations
const categoryInfo = {
  scams: {
    name: "Scams",
    recommendations: [
      "Notice different scam patterns",
      "Stay updated with the latest scam trends",
      "If it's too good to be true, then it may be a scam",
    ],
  },
  phishing: {
    name: "Phishing",
    recommendations: [
      "Be aware and diligent of your information",
      "Stay updated with the latest phishing trends",
      "Use Anti-Virus software to stay protected",
    ],
  },
  malware: {
    name: "Malware",
    recommendations: [
      "Differentiate what is real and what is malware",
      "Research the apps and platforms your child uses",
      "Use Anti-Virus software to stay protected",
    ],
  },
  harassment: {
    name: "Online Harassment",
    recommendations: [
      "Learn about common online risks like cyberbullying and predatory behavior",
      "Research the apps and platforms your child uses",
      "Develop guidelines about appropriate content and sharing",
    ],
  },
  inappropriate: {
    name: "Inappropriate Content",
    recommendations: [
      "Find age-appropriate monitoring solutions that respect privacy",
      "Gradually adjust monitoring as children demonstrate responsibility",
      "Be transparent about monitoring instead of doing it secretly",
    ],
  },
  privacy: {
    name: "Privacy and Tracking",
    recommendations: [
      "Be mindful of the data that is being collected",
      "Establish privacy measures to prevent being tracked",
      "Discuss your own online decision-making process out loud",
    ],
  },
};

/**
 * Selects random questions from each category to create a balanced questionnaire
 * @param {number} questionCount - Total number of questions to select
 * @param {number} questionsPerCategory - Number of questions to select from each category
 * @returns {Array} Array of selected question objects with category property added
 */
function getRandomQuestions(questionCount = 25, questionsPerCategory = 3) {
  const selectedQuestions = [];
  const categories = Object.keys(questionDatabase);

  // Ensure we don't try to select more questions than exist
  if (questionsPerCategory * categories.length < questionCount) {
    questionsPerCategory = Math.floor(questionCount / categories.length);
  }

  // Select questions from each category
  categories.forEach((category) => {
    const categoryQuestions = questionDatabase[category];
    const shuffled = [...categoryQuestions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, questionsPerCategory);

    // Add category to each question
    selected.forEach((question) => {
      selectedQuestions.push({
        ...question,
        category: category,
      });
    });
  });

  // If we need more questions to reach the target count
  let remaining = questionCount - selectedQuestions.length;
  if (remaining > 0) {
    // Create a pool of remaining questions from all categories
    const remainingPool = [];
    categories.forEach((category) => {
      const used = selectedQuestions.filter(
        (q) => q.category === category
      ).length;
      const unused = questionDatabase[category].filter(
        (q) => !selectedQuestions.some((sq) => sq.question === q.question)
      );

      unused.forEach((q) =>
        remainingPool.push({
          ...q,
          category: category,
        })
      );
    });

    // Shuffle and select the remaining needed questions
    const shuffled = [...remainingPool].sort(() => 0.5 - Math.random());
    const additionalQuestions = shuffled.slice(0, remaining);
    selectedQuestions.push(...additionalQuestions);
  }

  // Shuffle the final selected questions
  return selectedQuestions.sort(() => 0.5 - Math.random());
}

// Export for use in other scripts
export { getRandomQuestions, categoryInfo };
