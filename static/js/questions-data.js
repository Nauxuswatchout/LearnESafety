/**
 * E-Safety Questionnaire Questions Database
 * This file contains all possible questions for the e-safety assessment.
 * Questions are organized by category for easier management.
 */

const questionDatabase = {
  // Technical safety knowledge questions
  technical: [
    {
      question: "Which of these passwords is most secure?",
      options: [
        "password123",
        "MyChild'sName2010",
        "Tr0ub4dor&3!Zx",
        "qwerty987",
      ],
      scores: [0, 1, 3, 0],
    },
    {
      question: "What do you do when installing a new app for your child?",
      options: [
        "Install whatever they want",
        "Quickly check the age rating",
        "Read reviews and check settings",
        "Research the app, adjust privacy settings, and discuss rules for use",
      ],
      scores: [0, 1, 2, 3],
    },
    {
      question: "What's your approach to parental controls?",
      options: [
        "Don't use them at all",
        "Basic content filters on the home internet",
        "Device-level controls on some devices",
        "Comprehensive controls appropriate for age, with regular updates",
      ],
      scores: [0, 1, 2, 3],
    },
    {
      question: "How do you secure your home Wi-Fi network?",
      options: [
        "I use the default password that came with the router",
        "I created a simple password that's easy to remember",
        "I use a strong password but share it with neighbors/visitors",
        "I use a strong unique password and WPA2/WPA3 encryption",
      ],
      scores: [0, 1, 2, 3],
    },
    {
      question:
        "How often do you update the software on your family's devices?",
      options: [
        "I ignore update notifications",
        "I update when devices stop working properly",
        "I update occasionally when I remember",
        "I ensure automatic updates are enabled and regularly check for updates",
      ],
      scores: [0, 1, 2, 3],
    },
  ],

  // Parent-child communication questions
  communication: [
    {
      question: "How do you discuss online interactions with your child?",
      options: [
        "I don't, they'll figure it out",
        "Only when problems arise",
        "Occasional conversations about being nice online",
        "Regular discussions about digital citizenship and online behavior",
      ],
      scores: [0, 1, 2, 3],
    },
    {
      question:
        "How would you respond if your child encountered inappropriate content online?",
      options: [
        "They probably won't tell me",
        "Tell them not to look at it again",
        "Block the content and briefly discuss why it's inappropriate",
        "Use it as a teaching opportunity, adjust controls, and maintain open dialogue",
      ],
      scores: [0, 1, 2, 3],
    },
    {
      question:
        "What do you teach your child about sharing personal information online?",
      options: [
        "Haven't discussed it",
        "Just told them not to share anything",
        "Explained what personal information is and why not to share it",
        "Comprehensive discussions about what is safe to share in different contexts",
      ],
      scores: [0, 1, 2, 3],
    },
    {
      question: "What's your approach to teaching digital literacy?",
      options: [
        "The school should handle that",
        "I answer questions if they ask",
        "Occasional discussions about evaluating online information",
        "Ongoing education about critical thinking and media literacy skills",
      ],
      scores: [0, 1, 2, 3],
    },
    {
      question: "How do you talk to your child about cyberbullying?",
      options: [
        "I haven't discussed it with them",
        "I told them to ignore bullies online",
        "I've explained what cyberbullying is and to tell me if it happens",
        "Regular conversations about recognizing, preventing, and responding to cyberbullying",
      ],
      scores: [0, 1, 2, 3],
    },
  ],

  // Threat awareness questions
  awareness: [
    {
      question:
        "How would you recognize if your child is experiencing cyberbullying?",
      options: [
        "They'd just tell me if it happened",
        "Watch for crying after using devices",
        "Notice changes in mood, device use, and social patterns",
        "Regular check-ins about online experiences and watching for behavioral changes",
      ],
      scores: [0, 1, 2, 3],
    },
    {
      question:
        "How familiar are you with the apps and platforms your child uses?",
      options: [
        "Not familiar at all",
        "I know the names but not how they work",
        "I understand the basics of most apps they use",
        "I've researched or tried most platforms they use",
      ],
      scores: [0, 1, 2, 3],
    },
    {
      question: "What do you know about phishing and scams targeting children?",
      options: [
        "Very little",
        "I know what phishing is but not how it targets kids",
        "I understand common tactics used to trick children",
        "Comprehensive knowledge of various scams and how to prevent them",
      ],
      scores: [0, 1, 2, 3],
    },
    {
      question: "How do you stay updated on new online safety concerns?",
      options: [
        "I don't keep up with this information",
        "I hear things from other parents occasionally",
        "I read articles when they come across my feed",
        "I actively seek information and updates on e-safety",
      ],
      scores: [0, 1, 2, 3],
    },
    {
      question:
        "What would you do if you noticed a stranger interacting with your child online?",
      options: [
        "Nothing, it's normal to make friends online",
        "Tell my child to block them without investigating",
        "Ask my child about the person and check their conversation",
        "Investigate fully, discuss online stranger danger, and report if necessary",
      ],
      scores: [0, 1, 2, 3],
    },
  ],

  // Setting healthy boundaries questions
  boundaries: [
    {
      question: "How do you handle your child's screen time?",
      options: [
        "No limits, they manage their own time",
        "Loose guidelines but no enforcement",
        "Set time limits but make exceptions frequently",
        "Clear, consistent limits appropriate for their age",
      ],
      scores: [0, 1, 2, 3],
    },
    {
      question:
        "What would you do if your child wanted to post pictures online?",
      options: [
        "Let them post whatever they want",
        "Tell them not to post any pictures ever",
        "Allow it on private accounts only",
        "Discuss appropriate content, privacy settings, and potential consequences",
      ],
      scores: [0, 0, 2, 3],
    },
    {
      question: "What's your approach to online gaming?",
      options: [
        "Any game is fine, it's just entertainment",
        "Check age ratings only",
        "Research content and disable chat features",
        "Research games, discuss content, monitor interactions, and set time limits",
      ],
      scores: [0, 1, 2, 3],
    },
    {
      question:
        "What would you do if your child wanted to meet someone they met online?",
      options: [
        "Let them meet whoever they want",
        "Forbid it entirely without discussion",
        "Ask questions about who it is first",
        "Have extensive conversation, verify identity, and accompany if appropriate",
      ],
      scores: [0, 1, 2, 3],
    },
    {
      question: "How do you handle device use during family meals?",
      options: [
        "Everyone uses devices freely during meals",
        "I try to discourage it but don't enforce rules",
        "No devices during dinner only",
        "We have device-free family meals as a consistent rule",
      ],
      scores: [0, 1, 2, 3],
    },
  ],

  // Appropriate monitoring questions
  monitoring: [
    {
      question: "How often do you check your child's online activities?",
      options: [
        "Never, I respect their privacy completely",
        "Rarely, only if I suspect an issue",
        "Occasionally, with casual check-ins",
        "Regularly, with open communication about it",
      ],
      scores: [0, 1, 2, 3],
    },
    {
      question:
        "What would you do if your child received a friend request from someone you don't know?",
      options: [
        "Let them accept it, it's their decision",
        "Tell them to reject it without explanation",
        "Ask who it is but accept their answer",
        "Discuss who it might be and help them evaluate if it's safe",
      ],
      scores: [0, 1, 2, 3],
    },
    {
      question: "How do you balance respecting privacy and ensuring safety?",
      options: [
        "Complete privacy, no monitoring",
        "Only check when there's a problem",
        "Some monitoring with limited explanation",
        "Age-appropriate monitoring with open communication about why",
      ],
      scores: [0, 1, 2, 3],
    },
    {
      question: "How do you monitor your child's social media use?",
      options: [
        "I don't monitor their social media",
        "I occasionally look at their public posts",
        "I'm connected to them on platforms but don't actively check",
        "I'm connected, review their friends/activities and discuss regularly",
      ],
      scores: [0, 1, 2, 3],
    },
    {
      question: "How do you handle monitoring your child's private messages?",
      options: [
        "I never check their private messages",
        "I only check if I suspect a problem",
        "I spot-check occasionally based on their age",
        "I have age-appropriate access with clear communication about why",
      ],
      scores: [0, 1, 2, 3],
    },
  ],

  // Positive role modeling questions
  modeling: [
    {
      question:
        "How do you handle your own social media presence as it relates to your children?",
      options: [
        "Share whatever I want about them",
        "Share cute photos but not embarrassing ones",
        "Only share occasional photos with limited audiences",
        "Ask permission before posting about them and respect their digital footprint",
      ],
      scores: [0, 1, 2, 3],
    },
    {
      question: "How do you model healthy technology use?",
      options: [
        "I don't think about it",
        "I try not to use my phone too much around them",
        "I follow some tech-free times and talk about digital well-being",
        "I actively model balanced tech use and discuss my choices with them",
      ],
      scores: [0, 1, 2, 3],
    },
    {
      question: "What do you do when you receive messages during family time?",
      options: [
        "I always respond to messages immediately",
        "I try to wait but usually respond quickly",
        "I usually wait until family time is over unless it's urgent",
        "I set my phone to Do Not Disturb during family time",
      ],
      scores: [0, 1, 2, 3],
    },
    {
      question: "How do you handle your own privacy settings on social media?",
      options: [
        "I don't adjust privacy settings at all",
        "I use basic privacy settings but don't update them",
        "I have moderate privacy settings that I check occasionally",
        "I maintain strict privacy settings and review them regularly",
      ],
      scores: [0, 1, 2, 3],
    },
    {
      question: "How do you demonstrate respectful online communication?",
      options: [
        "I don't pay attention to how I communicate online around my children",
        "I try not to be obviously rude but don't make a special effort",
        "I generally avoid negative interactions when my children are present",
        "I actively demonstrate and discuss respectful online communication",
      ],
      scores: [0, 1, 2, 3],
    },
  ],
};

// Categories for scoring and recommendations
const categoryInfo = {
  technical: {
    name: "Technical Safety Knowledge",
    recommendations: [
      "Research and implement appropriate parental controls for your devices",
      "Learn about strong password creation and enable two-factor authentication",
      "Stay updated on privacy settings for the platforms your child uses",
      "Consider taking an online course about digital safety tools",
      "Ensure your home network is secured with a strong password and up-to-date security",
    ],
  },
  communication: {
    name: "Parent-Child Communication",
    recommendations: [
      "Schedule regular check-ins about online experiences",
      "Create a supportive environment where children feel safe reporting problems",
      "Develop a family media agreement together",
      "Practice scenarios about handling uncomfortable online situations",
      "Use news stories about online incidents as teachable moments",
    ],
  },
  awareness: {
    name: "Threat Awareness",
    recommendations: [
      "Learn about common online risks like cyberbullying and predatory behavior",
      "Research the apps and platforms your child uses",
      "Stay informed about new online trends and potential risks",
      "Discuss age-appropriate dangers with your child without causing fear",
      "Connect with other parents to share information about emerging online threats",
    ],
  },
  boundaries: {
    name: "Setting Healthy Boundaries",
    recommendations: [
      "Establish clear, consistent rules about screen time",
      "Create tech-free zones and times in your home",
      "Develop guidelines about appropriate content and sharing",
      "Adjust boundaries as children grow while maintaining safety",
      "Use parental controls to support your boundaries, not replace discussions",
    ],
  },
  monitoring: {
    name: "Appropriate Monitoring",
    recommendations: [
      "Find age-appropriate monitoring solutions that respect privacy",
      "Explain to your child why and how you monitor their activities",
      "Regularly review your child's contacts and connections",
      "Gradually adjust monitoring as children demonstrate responsibility",
      "Be transparent about monitoring instead of doing it secretly",
    ],
  },
  modeling: {
    name: "Positive Role Modeling",
    recommendations: [
      "Be mindful of your own screen time habits",
      "Demonstrate respectful online behavior",
      "Show how to balance technology with other activities",
      "Ask for permission before posting about your children online",
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
function getRandomQuestions(questionCount = 20, questionsPerCategory = 3) {
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
