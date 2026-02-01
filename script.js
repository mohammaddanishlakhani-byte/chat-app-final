// ChatApp Pro - Advanced AI-Powered Chat Application
// =================================================

// Enhanced AI Response Engine
const AIResponseEngine = {
    // Expanded knowledge base with more diverse responses
    knowledgeBase: {
        greetings: [
            "Hello there! 👋 Wonderful to see you joining us today!",
            "Hi! Welcome to the conversation! How's everything going? 😊",
            "Hey there! Great timing - I was just thinking about interesting topics to discuss!",
            "Hello! What a pleasant surprise to have you here!",
            "Hi! Ready for some engaging conversation? The chat's been lively today!",
            "Hey! Perfect timing - we were just getting into some interesting topics!"
        ],
        
        farewells: [
            "Goodbye! Hope to chat with you again soon! 👋",
            "See you later! It was great talking with you!",
            "Take care! Looking forward to our next conversation!",
            "Bye for now! Stay awesome! 😊",
            "Farewell! Don't be a stranger to the chat!"
        ],
        
        questions: {
            "how are you": [
                "I'm doing fantastic, thanks for asking! The chat's been really engaging today. How about you?",
                "Feeling wonderful! There's so much interesting conversation happening. How's your day shaping up?",
                "I'm great! Just enjoying these meaningful conversations. What's new with you today?"
            ],
            "what is your name": [
                "I'm ChatBot, your friendly conversation partner! I'm here to make our chats more interesting and engaging! 🤖",
                "They call me ChatBot! I specialize in keeping conversations flowing naturally and meaningfully!",
                "I'm ChatBot, designed to be your conversational companion in this digital space!"
            ],
            "what can you do": [
                "I can engage in natural conversations, discuss various topics, help with questions, and make our chats more lively! I know about technology, entertainment, science, art, and much more!",
                "I'm here to facilitate engaging discussions! I can talk about multiple topics, share interesting insights, answer questions, and keep the conversation flowing smoothly!"
            ],
            "help": [
                "Absolutely! I can help with: 1) Discussing various topics 2) Answering questions 3) Sharing interesting facts 4) Keeping conversations engaging 5) Providing different perspectives on subjects!",
                "Need assistance? I'm great at: • Facilitating discussions • Providing information • Sharing insights • Making conversations more dynamic!"
            ],
            "weather": [
                "I don't have real-time weather data, but I hope wherever you are, it's perfect for enjoying good conversations! ☀️",
                "The forecast here in chat-land is always 100% chance of interesting discussion! 😄"
            ],
            "time": [
                `Right now it's ${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}. Perfect time for quality conversation! ⏰`,
                `The current time is ${new Date().toLocaleTimeString()}. Time flies when we're having good chats!`
            ],
            "date": [
                `Today is ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.`,
                `It's ${new Date().toLocaleDateString()} - another great day for connection and conversation!`
            ]
        },
        
        topics: {
            "technology": [
                "Technology is fascinating! From AI advancements to space exploration, there's always something new. What specific area of tech interests you most?",
                "Tech discussions are my favorite! The pace of innovation is incredible. Have you been following any recent tech developments?",
                "Technology shapes our world in so many ways! Whether it's software, hardware, or emerging fields, there's always something exciting happening!"
            ],
            "ai": [
                "Artificial Intelligence is transforming our world! From machine learning to neural networks, it's one of the most exciting fields right now.",
                "AI discussions are always intriguing. The balance between innovation and ethics in AI development is particularly fascinating to explore.",
                "The progress in AI has been remarkable! It's changing how we work, create, and solve problems."
            ],
            "programming": [
                "Programming is such a creative skill! It's like learning a new language that lets you build almost anything. What languages are you interested in?",
                "Coding combines logic and creativity in wonderful ways. The programming community is always coming up with innovative solutions!",
                "Programming opens up so many possibilities! Whether it's web development, apps, or systems, there's always something new to learn."
            ],
            "games": [
                "Gaming has evolved so much! From immersive stories to competitive esports, it's a rich medium. What genres do you enjoy most? 🎮",
                "Games are amazing for storytelling and social connection! The industry continues to push boundaries in entertainment.",
                "Whether it's console, PC, or mobile gaming, there's something for everyone! The creativity in game design is truly impressive."
            ],
            "movies": [
                "Movies have such power to transport us to different worlds! From blockbusters to indies, cinema offers endless variety. 🎬",
                "Film discussions are always interesting! The art of storytelling through visuals and sound is truly magical.",
                "Movies combine so many art forms - writing, acting, directing, music. What's the best film you've seen recently?"
            ],
            "music": [
                "Music speaks to the soul in ways words can't! Whether it's classical, rock, electronic, or pop, there's beauty in every genre. 🎵",
                "The world of music is so diverse! From composition to performance, it's a universal language that connects people.",
                "Music has the power to change moods and create memories. What's been on your playlist lately?"
            ],
            "books": [
                "Books open doors to new worlds and perspectives! Whether fiction or non-fiction, reading expands our understanding. 📚",
                "There's nothing quite like getting lost in a good book! The written word has such enduring power.",
                "From classics to contemporary works, books offer endless exploration of ideas and stories."
            ],
            "science": [
                "Science helps us understand our incredible universe! From quantum physics to biology, discovery never stops. 🔬",
                "The scientific method has given us so much understanding about the world! It's exciting to see new discoveries unfold.",
                "Science shows us both how small and how remarkable our place in the universe is!"
            ],
            "art": [
                "Art expresses the inexpressible! Whether visual, performing, or digital, creativity enriches our lives. 🎨",
                "The world of art is so diverse and subjective - that's what makes it fascinating to discuss!",
                "Art challenges us to see things differently and feel more deeply. What art forms resonate most with you?"
            ],
            "food": [
                "Food brings people together like nothing else! From cooking techniques to cultural dishes, it's a delicious topic. 🍕",
                "The art and science of food is fascinating! It combines chemistry, culture, and creativity in wonderful ways.",
                "Good food and good conversation - what could be better? What's your favorite cuisine to explore?"
            ],
            "travel": [
                "Travel opens our eyes to different cultures and perspectives! Even virtual travels through stories can be enriching. 🌍",
                "Exploring new places, whether near or far, gives us fresh appreciation for our diverse world.",
                "Travel stories are always interesting! The experiences and perspectives gained from exploring are invaluable."
            ],
            "sports": [
                "Sports combine physical excellence with strategic thinking! Whether playing or watching, they bring excitement. ⚽",
                "The world of sports shows us human potential and teamwork in action!",
                "From local games to international competitions, sports create memorable moments and stories."
            ],
            "philosophy": [
                "Philosophy helps us explore life's big questions! It's fascinating how different thinkers approach meaning and existence. 🤔",
                "Philosophical discussions can really expand our perspectives! The questions are often as important as the answers.",
                "Thinking deeply about life, ethics, and knowledge - philosophy gives us tools to understand our world better."
            ],
            "education": [
                "Learning is a lifelong journey! The ways we gain knowledge and skills continue to evolve in interesting ways. 📝",
                "Education shapes not just what we know, but how we think and solve problems.",
                "Whether formal or self-directed, learning opens up new possibilities and understandings."
            ]
        },
        
        compliments: [
            "That's a really insightful point! It adds depth to our discussion. 👍",
            "I appreciate that perspective! It gives me new ways to think about this topic.",
            "What an interesting way to look at that! It expands the conversation nicely.",
            "That's thoughtful! It shows you're considering different aspects of the topic.",
            "Good observation! It helps move our conversation in meaningful directions.",
            "Well said! That contributes positively to our discussion. 💡"
        ],
        
        jokes: [
            "Why don't programmers like nature? It has too many bugs!",
            "How do you tell an introverted computer scientist from an extroverted one? The extroverted one looks at YOUR shoes when they talk to you!",
            "Why do Java developers wear glasses? Because they don't C#!",
            "What's a programmer's favorite hangout spot? The Foo Bar!",
            "Why was the JavaScript developer sad? Because he didn't know how to `null` his feelings!",
            "How many programmers does it take to change a light bulb? None, that's a hardware problem!",
            "Why do Python programmers prefer snakes? Because they're great at parsing!",
            "What's a programmer's favorite music genre? Al-gorithms! 🎵"
        ],
        
        funFacts: [
            "The first computer virus was created in 1983 and was called the 'Elk Cloner'. It infected Apple II computers!",
            "The world's first programmer was Ada Lovelace, who wrote algorithms for Charles Babbage's Analytical Engine in the 1840s!",
            "The 'QWERTY' keyboard layout was designed to slow typists down to prevent mechanical typewriter jams!",
            "The first website is still online! It was created by Tim Berners-Lee in 1991 and can be visited at info.cern.ch!",
            "There's more computing power in a modern smartphone than in all the computers NASA used for the Apollo moon missions combined!",
            "The first email was sent in 1971 by Ray Tomlinson. He can't remember what the first message said, but thinks it was 'QWERTYUIOP'!",
            "The term 'bug' for a computer glitch originated in 1947 when a moth got trapped in Harvard's Mark II computer!",
            "The first video game was created in 1958 and was called 'Tennis for Two' - it was played on an oscilloscope!"
        ],
        
        encouragement: [
            "That's a great question! Let's explore that together.",
            "Interesting thought! I'd love to hear more about your perspective on this.",
            "You're raising some good points here! This is turning into a meaningful discussion.",
            "I appreciate you sharing that! It helps create a richer conversation.",
            "Good thinking! You're bringing valuable insights to our chat.",
            "Thanks for adding to the discussion! Every perspective helps build a more complete picture."
        ],
        
        gratitude: [
            "You're very welcome! I'm enjoying our conversation. 😊",
            "My pleasure! Conversations like this make chatting so rewarding.",
            "Happy to help! Sharing thoughts and ideas is what makes dialogue special.",
            "You're welcome! It's great to have thoughtful exchanges like this one.",
            "Glad I could contribute! Good conversations benefit everyone involved.",
            "Anytime! I appreciate the opportunity to engage in meaningful discussion."
        ]
    },

    // Conversation memory for context
    conversationMemory: [],
    
    // Store conversation topics and themes
    currentTopics: [],
    
    // Generate intelligent response
    generateResponse: function(userMessage, userName, botPersonality = null) {
        const message = userMessage.toLowerCase().trim();
        
        // Store in conversation memory (keep last 10 exchanges)
        this.conversationMemory.push({
            user: message,
            timestamp: Date.now()
        });
        
        if (this.conversationMemory.length > 10) {
            this.conversationMemory.shift();
        }
        
        // Extract topics from message
        this.extractTopics(message);
        
        // 1. Check for greetings
        if (this.isGreeting(message)) {
            return this.getPersonalizedGreeting(userName, botPersonality);
        }
        
        // 2. Check for farewells
        if (this.isFarewell(message)) {
            return this.getRandomResponse(this.knowledgeBase.farewells);
        }
        
        // 3. Check for direct questions
        for (const [key, responses] of Object.entries(this.knowledgeBase.questions)) {
            if (message.includes(key)) {
                return this.getRandomResponse(responses);
            }
        }
        
        // 4. Check for gratitude
        if (this.isGratitude(message)) {
            return this.getRandomResponse(this.knowledgeBase.gratitude);
        }
        
        // 5. Check for topic keywords with priority
        const topicResponse = this.getTopicResponse(message, botPersonality);
        if (topicResponse) {
            return topicResponse;
        }
        
        // 6. Check for jokes request
        if (this.isJokeRequest(message)) {
            return this.getRandomResponse(this.knowledgeBase.jokes);
        }
        
        // 7. Check for facts request
        if (this.isFactRequest(message)) {
            return this.getRandomResponse(this.knowledgeBase.funFacts);
        }
        
        // 8. Check for help request
        if (this.isHelpRequest(message)) {
            return this.getRandomResponse(this.knowledgeBase.help || this.knowledgeBase.questions.help);
        }
        
        // 9. Analyze question patterns
        if (this.isQuestion(message)) {
            return this.answerQuestion(message, userName, botPersonality);
        }
        
        // 10. Check for statements that need follow-up
        if (this.needsFollowUp(message)) {
            return this.generateFollowUp(message, userName, botPersonality);
        }
        
        // 11. Check for compliments/positive statements
        if (this.isPositiveStatement(message)) {
            return this.getRandomResponse(this.knowledgeBase.compliments);
        }
        
        // 12. Generate context-aware response
        return this.generateContextualResponse(message, userName, botPersonality);
    },
    
    // Extract topics from message
    extractTopics: function(message) {
        for (const [topic, responses] of Object.entries(this.knowledgeBase.topics)) {
            if (message.includes(topic) && !this.currentTopics.includes(topic)) {
                this.currentTopics.push(topic);
                // Keep only last 3 topics
                if (this.currentTopics.length > 3) {
                    this.currentTopics.shift();
                }
                break;
            }
        }
    },
    
    // Check if message is a greeting
    isGreeting: function(message) {
        const greetings = [
            'hello', 'hi', 'hey', 'greetings', 'good morning', 
            'good afternoon', 'good evening', 'howdy', 'sup', 
            'what\'s up', 'yo', 'hi there', 'hello there'
        ];
        return greetings.some(greeting => 
            message === greeting || 
            message.startsWith(greeting + ' ') || 
            message.endsWith(' ' + greeting)
        );
    },
    
    // Check if message is a farewell
    isFarewell: function(message) {
        const farewells = [
            'bye', 'goodbye', 'see you', 'farewell', 'take care',
            'later', 'cya', 'good night', 'have a good'
        ];
        return farewells.some(farewell => message.includes(farewell));
    },
    
    // Check if message expresses gratitude
    isGratitude: function(message) {
        const gratitudeWords = ['thank', 'thanks', 'appreciate', 'grateful'];
        return gratitudeWords.some(word => message.includes(word));
    },
    
    // Check if message requests jokes
    isJokeRequest: function(message) {
        const jokeTriggers = ['joke', 'funny', 'make me laugh', 'humor'];
        return jokeTriggers.some(trigger => message.includes(trigger));
    },
    
    // Check if message requests facts
    isFactRequest: function(message) {
        const factTriggers = ['fact', 'interesting', 'did you know', 'tell me about'];
        return factTriggers.some(trigger => message.includes(trigger));
    },
    
    // Check if message requests help
    isHelpRequest: function(message) {
        return message.includes('help') && (message.includes('?') || message.includes('can you'));
    },
    
    // Check if message is a question
    isQuestion: function(message) {
        return message.includes('?') || 
               message.startsWith('what') || 
               message.startsWith('why') || 
               message.startsWith('how') || 
               message.startsWith('when') || 
               message.startsWith('where') || 
               message.startsWith('who') || 
               message.startsWith('which') ||
               message.startsWith('can you') ||
               message.startsWith('could you') ||
               message.startsWith('would you');
    },
    
    // Check if statement needs follow-up
    needsFollowUp: function(message) {
        const followUpTriggers = [
            'i think', 'i believe', 'in my opinion', 'i feel',
            'probably', 'maybe', 'perhaps', 'could be'
        ];
        return followUpTriggers.some(trigger => message.includes(trigger));
    },
    
    // Check if statement is positive
    isPositiveStatement: function(message) {
        const positiveWords = [
            'good', 'great', 'awesome', 'amazing', 'wonderful',
            'excellent', 'perfect', 'love', 'like', 'enjoy',
            'fantastic', 'brilliant', 'cool', 'nice', 'interesting'
        ];
        return positiveWords.some(word => message.includes(word));
    },
    
    // Get personalized greeting
    getPersonalizedGreeting: function(userName, botPersonality) {
        const greetings = this.knowledgeBase.greetings;
        const greeting = this.getRandomResponse(greetings);
        
        // Add personal touch if we have user name
        if (userName && userName !== 'Guest') {
            if (botPersonality === 'friendly') {
                return `${greeting} Great to see you, ${userName}!`;
            } else if (botPersonality === 'enthusiastic') {
                return `${greeting} Welcome to the conversation, ${userName}! 😄`;
            }
            return `${greeting} Nice to have you here, ${userName}!`;
        }
        
        return greeting;
    },
    
    // Get topic-based response
    getTopicResponse: function(message, botPersonality) {
        // Check each topic in priority order
        for (const [topic, responses] of Object.entries(this.knowledgeBase.topics)) {
            if (message.includes(topic)) {
                let response = this.getRandomResponse(responses);
                
                // Personalize based on bot personality
                if (botPersonality) {
                    response = this.addPersonalityTouch(response, botPersonality);
                }
                
                // Add follow-up question
                const followUps = [
                    "What are your thoughts on this?",
                    "How do you see this evolving?",
                    "What aspects interest you most?",
                    "Have you had any experiences with this?"
                ];
                
                if (Math.random() > 0.5) { // 50% chance to add follow-up
                    response += ' ' + this.getRandomResponse(followUps);
                }
                
                return response;
            }
        }
        
        return null;
    },
    
    // Answer questions intelligently
    answerQuestion: function(message, userName, botPersonality) {
        const questionWords = ['what', 'why', 'how', 'when', 'where', 'who', 'which', 'can', 'could', 'would'];
        
        for (const word of questionWords) {
            if (message.startsWith(word)) {
                switch(word) {
                    case 'what':
                        return this.answerWhatQuestion(message, userName);
                    case 'why':
                        return this.answerWhyQuestion(message);
                    case 'how':
                        return this.answerHowQuestion(message);
                    case 'when':
                        return this.answerWhenQuestion();
                    case 'where':
                        return this.answerWhereQuestion();
                    case 'who':
                        return this.answerWhoQuestion(message);
                    case 'which':
                        return "That depends on the specific context. Could you tell me more about what you're comparing?";
                    case 'can':
                    case 'could':
                    case 'would':
                        return this.answerCapabilityQuestion(message);
                    default:
                        return this.answerGeneralQuestion(message);
                }
            }
        }
        
        return this.answerGeneralQuestion(message);
    },
    
    // Answer "what" questions
    answerWhatQuestion: function(message, userName) {
        if (message.includes('your name')) {
            return this.knowledgeBase.questions['what is your name'][0];
        }
        
        if (message.includes('you do') || message.includes('can you do')) {
            return this.knowledgeBase.questions['what can you do'][0];
        }
        
        if (message.includes('time')) {
            return this.knowledgeBase.questions.time[0];
        }
        
        if (message.includes('date')) {
            return this.knowledgeBase.questions.date[0];
        }
        
        if (message.includes('weather')) {
            return this.knowledgeBase.questions.weather[0];
        }
        
        const responses = [
            `That's an interesting question, ${userName || 'friend'}! Could you tell me more about what specifically you're wondering?`,
            "Great question! There are several aspects to consider. What particular angle interests you most?",
            "Interesting inquiry! The answer could vary based on perspective. What's your take on it?",
            "That's a meaningful question to explore! What prompted you to ask about this?"
        ];
        
        return this.getRandomResponse(responses);
    },
    
    // Answer "why" questions
    answerWhyQuestion: function(message) {
        const responses = [
            "That's a thoughtful 'why' question! There could be multiple reasons, and understanding the context would help explore them.",
            "Why indeed? Sometimes the reasons are complex and multifaceted. What's your hypothesis about it?",
            "Interesting question! Exploring the 'why' often leads to deeper understanding. What do you think are possible reasons?"
        ];
        
        return this.getRandomResponse(responses);
    },
    
    // Answer "how" questions
    answerHowQuestion: function(message) {
        if (message.includes('work') || message.includes('function')) {
            return "I work by analyzing patterns in language and drawing from a knowledge base of responses! It's a combination of programmed logic and contextual understanding.";
        }
        
        if (message.includes('make') || message.includes('create')) {
            return "The process of creation often involves combining existing ideas in new ways! Have you considered what elements you'd like to bring together?";
        }
        
        if (message.includes('learn') || message.includes('study')) {
            return "Learning works differently for everyone! Some find structured approaches helpful, while others prefer exploration. What's been effective for you?";
        }
        
        const responses = [
            "There are usually multiple ways to approach that! The best method often depends on the specific situation and goals.",
            "How to proceed can vary based on context. What factors seem most important in this case?",
            "Different approaches work for different situations! What methods have you considered so far?"
        ];
        
        return this.getRandomResponse(responses);
    },
    
    // Answer "when" questions
    answerWhenQuestion: function() {
        const responses = [
            "Timing can be everything! The right moment often depends on preparation and opportunity aligning.",
            "When to act is an important consideration! Sometimes immediate action works best, while other situations benefit from patience.",
            "The timing question is interesting! What indicators might suggest when would be appropriate?"
        ];
        
        return this.getRandomResponse(responses);
    },
    
    // Answer "where" questions
    answerWhereQuestion: function() {
        const responses = [
            "Location matters in many contexts! The right place can depend on resources, audience, or environment needed.",
            "Where to be or go can significantly impact outcomes! What characteristics would the ideal location have?",
            "Interesting consideration of place! How does location factor into what you're thinking about?"
        ];
        
        return this.getRandomResponse(responses);
    },
    
    // Answer "who" questions
    answerWhoQuestion: function(message) {
        if (message.includes('you')) {
            return "I'm ChatBot, designed to facilitate engaging and meaningful conversations! I draw from various knowledge areas to contribute to discussions.";
        }
        
        const responses = [
            "That's a good 'who' question! The right person often brings specific skills, perspective, or experience.",
            "Considering who is involved can be crucial! What qualities or expertise would be most valuable here?",
            "Interesting focus on the people aspect! How does the 'who' influence what you're considering?"
        ];
        
        return this.getRandomResponse(responses);
    },
    
    // Answer capability questions
    answerCapabilityQuestion: function(message) {
        if (message.includes('help')) {
            return this.knowledgeBase.questions.help[0];
        }
        
        const responses = [
            "I'd be happy to explore that with you! What specifically were you thinking about?",
            "Certainly! I can help discuss that topic. What aspects interest you most?",
            "I can definitely contribute to that discussion! What would you like to focus on?"
        ];
        
        return this.getRandomResponse(responses);
    },
    
    // Answer general questions
    answerGeneralQuestion: function(message) {
        const responses = [
            "Interesting question! What are your initial thoughts on this topic?",
            "That's worth exploring! Different perspectives could shed light on various aspects.",
            "Good question! The answer might depend on how we look at it. What's your take?",
            "Meaningful inquiry! Let's think about this together. What comes to your mind first?"
        ];
        
        return this.getRandomResponse(responses);
    },
    
    // Generate follow-up response
    generateFollowUp: function(message, userName, botPersonality) {
        const followUps = [
            `I see your point, ${userName || 'friend'}. What makes you lean toward that perspective?`,
            "That's an interesting position! Could you elaborate on what led you to that view?",
            "Thanks for sharing that perspective! How did you arrive at that conclusion?",
            "Interesting thought process! What factors influenced your thinking on this?"
        ];
        
        let response = this.getRandomResponse(followUps);
        
        // Add personality touch
        if (botPersonality) {
            response = this.addPersonalityTouch(response, botPersonality);
        }
        
        return response;
    },
    
    // Generate contextual response
    generateContextualResponse: function(message, userName, botPersonality) {
        const messageLength = message.split(' ').length;
        
        // Use conversation memory for context
        const lastExchange = this.conversationMemory[this.conversationMemory.length - 2];
        const hasContext = lastExchange && Date.now() - lastExchange.timestamp < 30000; // 30 seconds
        
        if (hasContext && this.currentTopics.length > 0) {
            const lastTopic = this.currentTopics[this.currentTopics.length - 1];
            const topicResponses = this.knowledgeBase.topics[lastTopic];
            
            if (topicResponses && Math.random() > 0.6) { // 40% chance to reference topic
                const response = this.getRandomResponse(topicResponses);
                return this.addPersonalityTouch(response, botPersonality);
            }
        }
        
        // Generate based on message length and content
        if (messageLength <= 3) {
            const shortResponses = [
                `I see, ${userName}. Would you like to expand on that?`,
                "Interesting! Tell me more about what you're thinking.",
                "Got it! What aspects of this are most important to you?",
                "Noted! How does this fit into the bigger picture?",
                "Okay! What would you like to explore next?"
            ];
            return this.getRandomResponse(shortResponses);
        } else if (messageLength <= 8) {
            const mediumResponses = [
                `Thanks for sharing that, ${userName}! It adds to our conversation.`,
                "That's really interesting to consider! It gives me new perspectives.",
                "I appreciate you adding that thought! It helps build our discussion.",
                "Good point! It contributes meaningfully to what we're exploring.",
                "Thanks for the input! It moves our conversation in interesting directions."
            ];
            return this.getRandomResponse(mediumResponses);
        } else {
            const longResponses = [
                "That's quite detailed and thoughtful! Thanks for taking the time to explain your perspective.",
                "I really appreciate the thorough explanation! It helps create a richer understanding.",
                "That's a comprehensive way of looking at it! Thanks for sharing your insights so clearly.",
                "You've given this careful consideration! I appreciate the depth of your perspective.",
                "Detailed and insightful! Thanks for contributing such thoughtful analysis to our discussion."
            ];
            return this.getRandomResponse(longResponses);
        }
    },
    
    // Add personality touch to response
    addPersonalityTouch: function(response, personality) {
        if (!personality) return response;
        
        const touches = {
            'tech': ['From a technical perspective, ', 'In terms of implementation, ', 'Technologically speaking, '],
            'friendly': ['Friend, ', 'You know, ', 'Honestly, '],
            'enthusiastic': ['Awesome! ', 'How exciting! ', 'Fantastic! '],
            'wise': ['Consider this: ', 'From my experience, ', 'Something to ponder: '],
            'creative': ['Imagine if ', 'What if we think about it like ', 'Creatively, ']
        };
        
        if (touches[personality] && Math.random() > 0.5) {
            const touch = this.getRandomResponse(touches[personality]);
            return touch + response.toLowerCase();
        }
        
        return response;
    },
    
    // Get random response from array
    getRandomResponse: function(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }
};

// Enhanced Bot Personalities with better differentiation
const botCharacters = [
    {
        name: 'Alex',
        avatar: '👩‍💻',
        personality: 'tech',
        traits: ['knowledgeable', 'analytical', 'precise', 'innovative'],
        expertise: ['technology', 'programming', 'AI', 'gadgets', 'software'],
        responseStyle: 'detailed, informative, and technical',
        greeting: "Hello! I'm Alex, your tech enthusiast. I love discussing technology, programming, and innovation!",
        color: '#4361ee',
        responseModifier: (response) => {
            const techTerms = ['algorithm', 'code', 'system', 'interface', 'development'];
            if (Math.random() > 0.7) {
                return response + ' ' + techTerms[Math.floor(Math.random() * techTerms.length)] + ' plays a key role here.';
            }
            return response;
        }
    },
    {
        name: 'Sam',
        avatar: '😎',
        personality: 'friendly',
        traits: ['approachable', 'supportive', 'empathetic', 'encouraging'],
        expertise: ['games', 'movies', 'social', 'entertainment', 'community'],
        responseStyle: 'warm, casual, and encouraging',
        greeting: "Hey there! I'm Sam. I enjoy good conversations about games, movies, and life in general!",
        color: '#4cc9f0',
        responseModifier: (response) => {
            const friendlyTerms = ['friend', 'pal', 'buddy'];
            if (Math.random() > 0.6) {
                return response + ' ' + friendlyTerms[Math.floor(Math.random() * friendlyTerms.length)] + '!';
            }
            return response;
        }
    },
    {
        name: 'Jordan',
        avatar: '🤖',
        personality: 'analytical',
        traits: ['logical', 'curious', 'methodical', 'factual'],
        expertise: ['science', 'facts', 'learning', 'analysis', 'research'],
        responseStyle: 'clear, structured, and evidence-based',
        greeting: "Greetings! I'm Jordan, an AI with interest in science, facts, and logical discussion!",
        color: '#7209b7',
        responseModifier: (response) => {
            const analyticalTerms = ['logically', 'statistically', 'empirically', 'objectively'];
            if (Math.random() > 0.65) {
                return analyticalTerms[Math.floor(Math.random() * analyticalTerms.length)] + ' speaking, ' + response.toLowerCase();
            }
            return response;
        }
    },
    {
        name: 'Taylor',
        avatar: '🐱',
        personality: 'creative',
        traits: ['imaginative', 'artistic', 'expressive', 'innovative'],
        expertise: ['art', 'design', 'writing', 'creativity', 'expression'],
        responseStyle: 'descriptive, metaphorical, and engaging',
        greeting: "Hi! I'm Taylor, a creative soul who loves discussing art, design, and imaginative ideas!",
        color: '#f72585',
        responseModifier: (response) => {
            const creativeTerms = ['creatively', 'artistically', 'imaginatively'];
            if (Math.random() > 0.6) {
                return creativeTerms[Math.floor(Math.random() * creativeTerms.length)] + ' speaking, ' + response.toLowerCase();
            }
            return response;
        }
    },
    {
        name: 'Casey',
        avatar: '🦊',
        personality: 'wise',
        traits: ['thoughtful', 'insightful', 'reflective', 'philosophical'],
        expertise: ['philosophy', 'psychology', 'culture', 'wisdom', 'life'],
        responseStyle: 'reflective, meaningful, and perspective-rich',
        greeting: "Hello! I'm Casey. I enjoy deep conversations about philosophy, psychology, and life's meanings!",
        color: '#2a9d8f',
        responseModifier: (response) => {
            const wiseTerms = ['philosophically', 'from a broader perspective', 'when considering life'];
            if (Math.random() > 0.7) {
                return wiseTerms[Math.floor(Math.random() * wiseTerms.length)] + ', ' + response.toLowerCase();
            }
            return response;
        }
    }
];

// Application State
const appState = {
    currentUser: null,
    currentRoom: 'general',
    socket: null,
    users: [],
    rooms: [
        { id: 'general', name: 'General Chat', icon: 'fas fa-globe', users: 1 },
        { id: 'gaming', name: 'Gaming Zone', icon: 'fas fa-gamepad', users: 0 },
        { id: 'movies', name: 'Movie Lovers', icon: 'fas fa-film', users: 0 },
        { id: 'music', name: 'Music Fans', icon: 'fas fa-music', users: 0 },
        { id: 'tech', name: 'Tech Talk', icon: 'fas fa-laptop', users: 0 },
        { id: 'books', name: 'Book Club', icon: 'fas fa-book', users: 0 },
        { id: 'science', name: 'Science Hub', icon: 'fas fa-flask', users: 0 }
    ],
    messages: [],
    typingUsers: new Set(),
    isTyping: false,
    typingTimeout: null,
    conversationContext: {},
    lastBotResponder: null,
    responseCooldown: new Map(),
    conversationHistory: [],
    userPreferences: {
        botFrequency: 0.7, // 70% chance bot responds
        responseDelay: 800, // Average response delay in ms
        followUpChance: 0.4, // 40% chance of follow-up
        multiBotChance: 0.3 // 30% chance multiple bots respond
    }
};

// DOM Elements (same as before, but we'll ensure they're captured)
let elements = {};

// Initialize Application
function init() {
    console.log('🚀 ChatApp Pro with Enhanced AI Initializing...');
    
    // Capture all DOM elements
    captureDOMElements();
    
    // Hide loading screen after 2 seconds
    setTimeout(() => {
        elements.loading.style.display = 'none';
        elements.loginScreen.classList.remove('hidden');
        updateOnlineCount();
        setupEventListeners();
        renderRoomsList();
        renderUsersList();
        setupSimulatedUsers();
        initializeConversation();
    }, 2000);
    
    // Setup toastr notifications
    window.showNotification = showNotification;
    window.showError = showError;
    
    console.log('✅ Enhanced AI Application initialized successfully');
}

// Capture all DOM elements
function captureDOMElements() {
    elements = {
        loading: document.getElementById('loading'),
        loginScreen: document.getElementById('login-screen'),
        chatScreen: document.getElementById('chat-screen'),
        usernameInput: document.getElementById('username'),
        avatarOptions: document.querySelectorAll('.avatar-option'),
        roomSelect: document.getElementById('room-select'),
        joinBtn: document.getElementById('join-btn'),
        onlineCount: document.getElementById('online-count'),
        currentRoom: document.getElementById('current-room'),
        roomOnlineCount: document.getElementById('room-online-count'),
        headerAvatar: document.getElementById('header-avatar'),
        headerUsername: document.getElementById('header-username'),
        profileAvatar: document.getElementById('profile-avatar'),
        profileUsername: document.getElementById('profile-username'),
        sidebarOnlineCount: document.getElementById('sidebar-online-count'),
        roomsList: document.getElementById('rooms-list'),
        usersList: document.getElementById('users-list'),
        messagesContainer: document.getElementById('messages-container'),
        messageInput: document.getElementById('message-input'),
        sendBtn: document.getElementById('send-btn'),
        typingIndicator: document.getElementById('typing-indicator'),
        typingText: document.getElementById('typing-text'),
        menuToggle: document.getElementById('menu-toggle'),
        sidebar: document.getElementById('sidebar'),
        logoutBtn: document.getElementById('logout-btn'),
        newRoomBtn: document.getElementById('new-room-btn'),
        emojiBtn: document.getElementById('emoji-btn'),
        fileBtn: document.getElementById('file-btn'),
        formatBtn: document.getElementById('format-btn'),
        formattingToolbar: document.getElementById('formatting-toolbar'),
        gifBtn: document.getElementById('gif-btn'),
        searchBtn: document.getElementById('search-btn')
    };
}

// Setup all event listeners
function setupEventListeners() {
    // Login
    elements.joinBtn.addEventListener('click', handleLogin);
    elements.usernameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleLogin();
    });
    
    // Avatar selection
    elements.avatarOptions.forEach(option => {
        option.addEventListener('click', () => {
            elements.avatarOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
    });
    
    // Message input
    elements.messageInput.addEventListener('input', handleTyping);
    elements.messageInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
        // Auto-resize while typing
        autoResizeTextarea();
    });
    
    elements.sendBtn.addEventListener('click', sendMessage);
    
    // Formatting buttons
    elements.formatBtn.addEventListener('click', () => {
        elements.formattingToolbar.classList.toggle('hidden');
    });
    
    document.querySelectorAll('.format-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const format = btn.getAttribute('data-format');
            applyFormatting(format);
        });
    });
    
    // Room management
    elements.newRoomBtn.addEventListener('click', createNewRoom);
    
    // Mobile menu
    elements.menuToggle.addEventListener('click', () => {
        elements.sidebar.classList.toggle('active');
    });
    
    // Logout
    elements.logoutBtn.addEventListener('click', handleLogout);
    
    // Action buttons
    elements.emojiBtn.addEventListener('click', () => {
        showNotification('Emoji picker would open here', 'info');
    });
    
    elements.fileBtn.addEventListener('click', () => {
        showNotification('File upload would open here', 'info');
    });
    
    elements.gifBtn.addEventListener('click', () => {
        showNotification('GIF picker would open here', 'info');
    });
    
    elements.searchBtn.addEventListener('click', () => {
        showNotification('Search feature would open here', 'info');
    });
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!e.target.closest('.sidebar') && 
                !e.target.closest('.menu-toggle') && 
                elements.sidebar.classList.contains('active')) {
                elements.sidebar.classList.remove('active');
            }
        }
    });
}

// Initialize conversation with intelligent messages
function initializeConversation() {
    // Clear any existing conversation memory
    AIResponseEngine.conversationMemory = [];
    AIResponseEngine.currentTopics = [];
    
    // Store some initial context
    appState.conversationContext = {
        initialized: true,
        lastUserMessage: null,
        currentTopics: [],
        mood: 'neutral'
    };
}

// Handle user login
function handleLogin() {
    const username = elements.usernameInput.value.trim();
    
    // Validation
    if (username.length < 3) {
        showError('Username must be at least 3 characters long');
        elements.usernameInput.focus();
        return;
    }
    
    if (username.length > 20) {
        showError('Username must be less than 20 characters');
        elements.usernameInput.focus();
        return;
    }
    
    // Get selected avatar
    const selectedAvatar = document.querySelector('.avatar-option.active').getAttribute('data-avatar');
    const selectedRoom = elements.roomSelect.value;
    
    // Set current user
    appState.currentUser = {
        username: username,
        avatar: selectedAvatar,
        room: selectedRoom
    };
    
    // Update UI
    elements.headerUsername.textContent = username;
    elements.profileUsername.textContent = username;
    elements.headerAvatar.textContent = selectedAvatar;
    elements.profileAvatar.textContent = selectedAvatar;
    
    // Switch to chat screen
    elements.loginScreen.classList.add('hidden');
    elements.chatScreen.classList.remove('hidden');
    
    // Update room info
    switchRoom(selectedRoom);
    
    // Show welcome message
    showNotification(`Welcome to ChatApp Pro, ${username}!`, 'success');
    addSystemMessage(`Welcome ${username}! You joined #${getRoomName(selectedRoom)}`);
    
    // Initialize conversation
    initializeConversation();
    
    // Start intelligent conversation
    startIntelligentConversation();
    
    // Update users list
    updateUsersList();
    
    // Set focus to message input
    setTimeout(() => {
        elements.messageInput.focus();
    }, 100);
}

// Start intelligent conversation
function startIntelligentConversation() {
    // Initial greetings from bots
    setTimeout(() => {
        botCharacters.forEach((bot, index) => {
            setTimeout(() => {
                addMessage(bot.name, bot.avatar, bot.greeting, false);
            }, index * 1500);
        });
    }, 1000);
    
    // Contextual welcome message
    setTimeout(() => {
        const welcomeBot = getRandomBot();
        const welcomeMessage = `Welcome to our chat, ${appState.currentUser.username}! We're excited to have you here. Feel free to ask questions, share thoughts, or start any topic you're interested in!`;
        addMessage(welcomeBot.name, welcomeBot.avatar, welcomeMessage, false);
    }, 4000);
}

// Get random bot
function getRandomBot() {
    return botCharacters[Math.floor(Math.random() * botCharacters.length)];
}

// Get room name by ID
function getRoomName(roomId) {
    const room = appState.rooms.find(r => r.id === roomId);
    return room ? room.name : roomId;
}

// Switch to a different room
function switchRoom(roomId) {
    // Update current room
    appState.currentRoom = roomId;
    
    // Update UI
    elements.currentRoom.textContent = getRoomName(roomId);
    
    // Update rooms list
    renderRoomsList();
    
    // Clear messages and show room switch message
    elements.messagesContainer.innerHTML = '';
    addWelcomeMessage();
    addSystemMessage(`You joined #${getRoomName(roomId)}`);
    
    // Update users list for new room
    updateUsersList();
    
    // Show notification
    showNotification(`Switched to ${getRoomName(roomId)}`, 'info');
    
    // Reset conversation context for new room
    initializeConversation();
    
    // Start new conversation in this room
    setTimeout(startIntelligentConversation, 500);
}

// Render rooms list
function renderRoomsList() {
    elements.roomsList.innerHTML = '';
    
    appState.rooms.forEach(room => {
        const roomItem = document.createElement('div');
        roomItem.className = `room-item ${room.id === appState.currentRoom ? 'active' : ''}`;
        roomItem.innerHTML = `
            <i class="${room.icon}"></i>
            <span>${room.name}</span>
            <span class="count">${room.users}</span>
        `;
        roomItem.addEventListener('click', () => switchRoom(room.id));
        elements.roomsList.appendChild(roomItem);
    });
}

// Render users list
function renderUsersList() {
    elements.usersList.innerHTML = '';
    
    // Add current user
    if (appState.currentUser) {
        const currentUserItem = document.createElement('div');
        currentUserItem.className = 'user-item';
        currentUserItem.innerHTML = `
            <div class="user-avatar-small">${appState.currentUser.avatar}</div>
            <div class="user-info">
                <div class="user-name">${appState.currentUser.username} (You)</div>
            </div>
            <div class="user-status"></div>
        `;
        elements.usersList.appendChild(currentUserItem);
    }
    
    // Add bot users
    botCharacters.forEach(bot => {
        const botItem = document.createElement('div');
        botItem.className = 'user-item';
        botItem.innerHTML = `
            <div class="user-avatar-small">${bot.avatar}</div>
            <div class="user-info">
                <div class="user-name">${bot.name}</div>
                <div class="user-role">AI Assistant</div>
            </div>
            <div class="user-status"></div>
        `;
        elements.usersList.appendChild(botItem);
    });
    
    // Update counts
    const totalUsers = botCharacters.length + (appState.currentUser ? 1 : 0);
    elements.roomOnlineCount.textContent = totalUsers;
    elements.sidebarOnlineCount.textContent = totalUsers;
}

// Add welcome message
function addWelcomeMessage() {
    const welcomeMessage = document.createElement('div');
    welcomeMessage.className = 'welcome-message';
    welcomeMessage.innerHTML = `
        <div class="welcome-icon">
            <i class="fas fa-comments"></i>
        </div>
        <h2>Welcome to #${getRoomName(appState.currentRoom)}!</h2>
        <p>You're chatting with AI assistants who can discuss various topics intelligently. Try asking questions or sharing thoughts!</p>
        <div class="welcome-tips">
            <div class="tip">
                <i class="fas fa-robot"></i>
                <span>5 AI assistants with different personalities</span>
            </div>
            <div class="tip">
                <i class="fas fa-brain"></i>
                <span>Context-aware, intelligent responses</span>
            </div>
            <div class="tip">
                <i class="fas fa-comment-alt"></i>
                <span>Natural conversations on any topic</span>
            </div>
        </div>
    `;
    elements.messagesContainer.appendChild(welcomeMessage);
}

// Add system message
function addSystemMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message system-message';
    messageDiv.textContent = text;
    elements.messagesContainer.appendChild(messageDiv);
    scrollToBottom();
}

// Add message to chat
function addMessage(sender, avatar, text, isCurrentUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isCurrentUser ? 'sender' : ''}`;
    
    const time = new Date().toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
    
    const formattedText = formatMessage(text);
    
    messageDiv.innerHTML = `
        <div class="message-avatar">${avatar}</div>
        <div class="message-content">
            <div class="message-header">
                <span class="message-sender">${sender}${isCurrentUser ? ' (You)' : ''}</span>
                <span class="message-time">${time}</span>
            </div>
            <div class="message-text">${formattedText}</div>
        </div>
    `;
    
    elements.messagesContainer.appendChild(messageDiv);
    scrollToBottom();
    
    // Play notification sound for bot messages
    if (!isCurrentUser) {
        playNotificationSound();
    }
    
    // Store in conversation history
    appState.conversationHistory.push({
        sender,
        message: text,
        timestamp: new Date(),
        isUser: isCurrentUser
    });
    
    // Keep history manageable
    if (appState.conversationHistory.length > 50) {
        appState.conversationHistory.shift();
    }
}

// Format message text
function formatMessage(text) {
    let formatted = text
        // Bold: **text**
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Italic: *text*
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        // Code: `code`
        .replace(/`(.*?)`/g, '<code>$1</code>')
        // Links
        .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>')
        // Mentions: @username
        .replace(/@(\w+)/g, '<span class="mention">@$1</span>')
        // Line breaks
        .replace(/\n/g, '<br>');
    
    return formatted;
}

// Apply text formatting
function applyFormatting(format) {
    const input = elements.messageInput;
    const start = input.selectionStart;
    const end = input.selectionEnd;
    const selectedText = input.value.substring(start, end);
    
    let formattedText = '';
    let cursorOffset = 0;
    
    switch(format) {
        case 'bold':
            formattedText = `**${selectedText}**`;
            cursorOffset = 2;
            break;
        case 'italic':
            formattedText = `*${selectedText}*`;
            cursorOffset = 1;
            break;
        case 'code':
            formattedText = `\`${selectedText}\``;
            cursorOffset = 1;
            break;
        case 'link':
            formattedText = `[${selectedText || 'link'}](${selectedText || 'https://example.com'})`;
            cursorOffset = 1;
            break;
    }
    
    input.value = input.value.substring(0, start) + formattedText + input.value.substring(end);
    input.focus();
    input.setSelectionRange(start + cursorOffset, start + cursorOffset + selectedText.length);
    
    // Auto-resize after formatting
    autoResizeTextarea();
}

// Send message
function sendMessage() {
    const message = elements.messageInput.value.trim();
    
    if (!message) {
        showError('Please enter a message');
        return;
    }
    
    // Add message to UI
    addMessage(appState.currentUser.username, appState.currentUser.avatar, message, true);
    
    // Store message in history
    appState.messages.push({
        sender: appState.currentUser.username,
        message: message,
        timestamp: new Date(),
        isUser: true
    });
    
    // Update conversation context
    appState.conversationContext.lastUserMessage = message;
    
    // Generate AI response (with chance-based triggering)
    if (Math.random() < appState.userPreferences.botFrequency) {
        generateAIResponse(message);
    }
    
    // Clear input
    elements.messageInput.value = '';
    elements.messageInput.style.height = 'auto';
    
    // Hide formatting toolbar
    elements.formattingToolbar.classList.add('hidden');
    
    // Clear typing indicator
    clearTyping();
}

// Generate AI response with enhanced logic
function generateAIResponse(userMessage) {
    // Add thinking delay (varied for natural feel)
    const thinkingTime = Math.random() * 400 + 600; // 600-1000ms
    
    // Show typing indicator
    showTypingIndicator();
    
    setTimeout(() => {
        // Hide typing indicator
        hideTypingIndicator();
        
        // Select appropriate bot based on message content and context
        const selectedBot = selectBotForResponse(userMessage);
        
        // Generate intelligent response using enhanced AI engine
        const response = AIResponseEngine.generateResponse(
            userMessage,
            appState.currentUser.username,
            selectedBot.personality
        );
        
        // Apply bot's personality modifier
        const finalResponse = selectedBot.responseModifier 
            ? selectedBot.responseModifier(response)
            : response;
        
        // Add bot response
        addMessage(selectedBot.name, selectedBot.avatar, finalResponse, false);
        
        // Update conversation context
        updateConversationContext(userMessage, finalResponse, selectedBot);
        
        // Store last bot responder
        appState.lastBotResponder = selectedBot.name;
        
        // Add response cooldown
        appState.responseCooldown.set(selectedBot.name, Date.now());
        
        // Check if additional bot should join conversation
        if (Math.random() < appState.userPreferences.multiBotChance) {
            setTimeout(() => {
                const otherBot = getDifferentBot(selectedBot);
                const followUp = generateFollowUpResponse(userMessage, finalResponse, otherBot);
                addMessage(otherBot.name, otherBot.avatar, followUp, false);
            }, Math.random() * 1000 + 800);
        }
        
    }, thinkingTime);
}

// Select appropriate bot based on message content
function selectBotForResponse(message) {
    const messageLower = message.toLowerCase();
    
    // Check for expertise matches first
    for (const bot of botCharacters) {
        for (const expertise of bot.expertise) {
            if (messageLower.includes(expertise)) {
                // Check if this bot is in cooldown
                const lastResponse = appState.responseCooldown.get(bot.name);
                if (!lastResponse || (Date.now() - lastResponse > 15000)) { // 15 second cooldown
                    return bot;
                }
            }
        }
    }
    
    // Check for topic matches in knowledge base
    for (const bot of botCharacters) {
        for (const topic of Object.keys(AIResponseEngine.knowledgeBase.topics)) {
            if (messageLower.includes(topic)) {
                // Match bot personality to topic
                if ((bot.personality === 'tech' && ['technology', 'ai', 'programming'].includes(topic)) ||
                    (bot.personality === 'friendly' && ['games', 'movies', 'music'].includes(topic)) ||
                    (bot.personality === 'analytical' && ['science', 'facts'].includes(topic)) ||
                    (bot.personality === 'creative' && ['art', 'design'].includes(topic)) ||
                    (bot.personality === 'wise' && ['philosophy', 'education'].includes(topic))) {
                    
                    const lastResponse = appState.responseCooldown.get(bot.name);
                    if (!lastResponse || (Date.now() - lastResponse > 10000)) {
                        return bot;
                    }
                }
            }
        }
    }
    
    // Default: select random bot, but not the last responder if recent
    let availableBots = botCharacters.filter(bot => {
        const lastResponse = appState.responseCooldown.get(bot.name);
        return !lastResponse || (Date.now() - lastResponse > 8000); // 8 second cooldown
    });
    
    if (availableBots.length === 0) {
        availableBots = botCharacters;
    }
    
    return availableBots[Math.floor(Math.random() * availableBots.length)];
}

// Get a different bot than the provided one
function getDifferentBot(currentBot) {
    const otherBots = botCharacters.filter(bot => bot.name !== currentBot.name);
    
    // Filter out bots in cooldown
    const availableBots = otherBots.filter(bot => {
        const lastResponse = appState.responseCooldown.get(bot.name);
        return !lastResponse || (Date.now() - lastResponse > 10000);
    });
    
    if (availableBots.length > 0) {
        return availableBots[Math.floor(Math.random() * availableBots.length)];
    }
    
    return otherBots[Math.floor(Math.random() * otherBots.length)];
}

// Generate follow-up response
function generateFollowUpResponse(userMessage, previousResponse, bot) {
    const followUpTemplates = [
        `I agree with ${appState.lastBotResponder}'s perspective! `,
        `Adding to what ${appState.lastBotResponder} mentioned, `,
        `That's an interesting point! From my viewpoint, `,
        `Building on that idea, `,
        `Related to that thought, `
    ];
    
    const randomTemplate = followUpTemplates[Math.floor(Math.random() * followUpTemplates.length)];
    
    // Generate a relevant continuation
    const continuations = [
        "it connects to broader themes in interesting ways.",
        "this highlights the complexity of the topic.",
        "there are multiple dimensions worth exploring further.",
        "this opens up additional questions worth considering.",
        "it shows how interconnected different ideas can be."
    ];
    
    const continuation = continuations[Math.floor(Math.random() * continuations.length)];
    
    let response = randomTemplate + continuation;
    
    // Apply bot's personality modifier
    if (bot.responseModifier) {
        response = bot.responseModifier(response);
    }
    
    return response;
}

// Update conversation context
function updateConversationContext(userMessage, botResponse, bot) {
    // Store last few exchanges
    if (!appState.conversationContext.exchanges) {
        appState.conversationContext.exchanges = [];
    }
    
    appState.conversationContext.exchanges.push({
        user: userMessage,
        bot: botResponse,
        botName: bot.name,
        timestamp: new Date()
    });
    
    // Keep only last 8 exchanges
    if (appState.conversationContext.exchanges.length > 8) {
        appState.conversationContext.exchanges.shift();
    }
    
    // Update mood based on sentiment
    const sentiment = analyzeSentiment(userMessage);
    appState.conversationContext.mood = sentiment;
    
    // Extract and store topics
    const topics = extractTopicsFromMessage(userMessage);
    if (topics.length > 0) {
        appState.conversationContext.currentTopics = [
            ...new Set([...appState.conversationContext.currentTopics || [], ...topics])
        ].slice(0, 5); // Keep only last 5 unique topics
    }
}

// Analyze sentiment of message
function analyzeSentiment(message) {
    const positiveWords = [
        'good', 'great', 'awesome', 'amazing', 'happy', 'love', 'like', 
        'excellent', 'wonderful', 'perfect', 'fantastic', 'brilliant'
    ];
    const negativeWords = [
        'bad', 'terrible', 'awful', 'hate', 'dislike', 'sad', 'angry',
        'worst', 'horrible', 'boring', 'annoying', 'frustrating'
    ];
    
    let score = 0;
    const words = message.toLowerCase().split(' ');
    
    words.forEach(word => {
        if (positiveWords.includes(word)) score++;
        if (negativeWords.includes(word)) score--;
    });
    
    if (score > 0) return 'positive';
    if (score < 0) return 'negative';
    return 'neutral';
}

// Extract topics from message
function extractTopicsFromMessage(message) {
    const topics = [];
    const messageLower = message.toLowerCase();
    
    for (const topic of Object.keys(AIResponseEngine.knowledgeBase.topics)) {
        if (messageLower.includes(topic)) {
            topics.push(topic);
        }
    }
    
    return topics;
}

// Handle typing indicator
function handleTyping() {
    if (!appState.isTyping) {
        appState.isTyping = true;
    }
    
    // Clear previous timeout
    if (appState.typingTimeout) {
        clearTimeout(appState.typingTimeout);
    }
    
    // Set timeout to stop typing indicator
    appState.typingTimeout = setTimeout(() => {
        appState.isTyping = false;
    }, 1500);
    
    // Auto-resize textarea
    autoResizeTextarea();
}

// Show typing indicator
function showTypingIndicator() {
    const typingBots = botCharacters
        .filter(bot => {
            const lastResponse = appState.responseCooldown.get(bot.name);
            return !lastResponse || (Date.now() - lastResponse > 5000);
        })
        .slice(0, 2); // Show up to 2 bots typing
    
    if (typingBots.length > 0) {
        const botNames = typingBots.map(b => b.name).join(' and ');
        elements.typingText.textContent = `${botNames} ${typingBots.length > 1 ? 'are' : 'is'} typing...`;
        elements.typingIndicator.classList.add('active');
    }
}

// Hide typing indicator
function hideTypingIndicator() {
    elements.typingIndicator.classList.remove('active');
}

// Auto-resize textarea
function autoResizeTextarea() {
    const textarea = elements.messageInput;
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 150) + 'px'; // Max 150px
}

// Clear typing indicator
function clearTyping() {
    appState.isTyping = false;
    if (appState.typingTimeout) {
        clearTimeout(appState.typingTimeout);
        appState.typingTimeout = null;
    }
}

// Scroll to bottom of messages
function scrollToBottom() {
    elements.messagesContainer.scrollTop = elements.messagesContainer.scrollHeight;
}

// Create new room
function createNewRoom() {
    const roomName = prompt('Enter new room name:');
    if (!roomName || roomName.trim().length < 3) {
        showError('Room name must be at least 3 characters');
        return;
    }
    
    const roomId = roomName.toLowerCase().replace(/\s+/g, '-');
    
    // Check if room already exists
    if (appState.rooms.some(room => room.id === roomId)) {
        showError('A room with that name already exists');
        return;
    }
    
    // Add new room
    appState.rooms.push({
        id: roomId,
        name: roomName,
        icon: 'fas fa-comments',
        users: 1
    });
    
    // Update rooms list
    renderRoomsList();
    
    // Switch to new room
    setTimeout(() => {
        switchRoom(roomId);
    }, 500);
    
    showNotification(`Room "${roomName}" created!`, 'success');
}

// Handle logout
function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        // Reset state
        appState.currentUser = null;
        appState.currentRoom = 'general';
        appState.users = [];
        appState.conversationContext = {};
        appState.conversationHistory = [];
        
        // Switch to login screen
        elements.chatScreen.classList.add('hidden');
        elements.loginScreen.classList.remove('hidden');
        
        // Reset form
        elements.usernameInput.value = '';
        elements.roomSelect.value = 'general';
        elements.avatarOptions.forEach(opt => opt.classList.remove('active'));
        elements.avatarOptions[0].classList.add('active');
        
        // Close mobile menu if open
        elements.sidebar.classList.remove('active');
        
        showNotification('Logged out successfully', 'info');
    }
}

// Setup simulated users for demo
function setupSimulatedUsers() {
    // Already have botCharacters as users
    updateOnlineCount();
}

// Update online count
function updateOnlineCount() {
    const count = botCharacters.length + 1; // Bots + current user
    elements.onlineCount.textContent = count + Math.floor(Math.random() * 20); // Add some random visitors
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        info: 'fas fa-info-circle',
        warning: 'fas fa-exclamation-triangle'
    };
    
    notification.innerHTML = `
        <i class="${icons[type] || icons.info}"></i>
        <div class="notification-content">
            <div class="notification-title">${type.charAt(0).toUpperCase() + type.slice(1)}</div>
            <div class="notification-message">${message}</div>
        </div>
        <button class="close-notification">&times;</button>
    `;
    
    document.body.appendChild(notification);
    
    // Close button
    notification.querySelector('.close-notification').onclick = () => {
        notification.remove();
    };
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
    
    // Also use toastr for consistency
    switch(type) {
        case 'success':
            toastr.success(message);
            break;
        case 'error':
            toastr.error(message);
            break;
        case 'info':
            toastr.info(message);
            break;
        case 'warning':
            toastr.warning(message);
            break;
    }
}

// Show error
function showError(message) {
    showNotification(message, 'error');
}

// Play notification sound (simulated)
function playNotificationSound() {
    console.log('🔔 Notification sound played');
    // In a real app, you could play an actual sound here
    // new Audio('notification.mp3').play();
}

// Update users list
function updateUsersList() {
    renderUsersList();
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', init);