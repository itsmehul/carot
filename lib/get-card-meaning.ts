export type Suit = '♠️' | '♥️' | '♣️' | '♦️';
export type CardValue = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';

export default (value: CardValue, suit: Suit): {
  upright: string
  reversed: string
  description: string
  person: string
  love: string
  career: string
  yes_or_no: string
} => {
  const meanings: Record<Suit, Record<CardValue, {
    upright: string
    reversed: string
    description: string
    person: string
    love: string
    career: string
    yes_or_no: string
  }>> = {
    '♠️': {
      'A': {
        "upright": "New beginnings, breakthrough, clarity, sharp mind",
        "reversed": "Confusion, delays, setbacks, mental blocks",
        "description": "The Ace of Spades represents new ideas, mental clarity, and breakthroughs. It's often depicted as a single large spade, symbolizing the power of the mind and new intellectual beginnings.",
        "person": "A quick-witted, intelligent individual who excels at problem-solving and strategic thinking. They may be an innovator or thought leader in their field.",
        "love": "In love, the Ace of Spades suggests clear communication and intellectual connection. It may indicate the start of a relationship based on mental rapport.",
        "career": "A new job opportunity or a breakthrough in your current position may be on the horizon. It's a good time for strategic planning and implementing new ideas.",
        "yes_or_no": "Yes, especially for matters requiring mental clarity and decisiveness."
      },
      'K': {
        "upright": "Authority, leadership, power, logic, law and order",
        "reversed": "Abuse of power, tyranny, manipulation, coldness",
        "description": "The King of Spades is often portrayed as a stern-looking king holding a sword, symbolizing authority, mental acuity, and decisive action.",
        "person": "A powerful, authoritative figure who relies on logic and reason. They may be a leader in their field, known for their sharp intellect and decision-making skills.",
        "love": "In love matters, the King of Spades suggests a need for clear communication and logical thinking. It may indicate a partner who is more rational than emotional.",
        "career": "This card is excellent for career readings, suggesting leadership roles, advancement, and success through intellectual pursuits and strategic thinking.",
        "yes_or_no": "Maybe, but proceed with caution and logic."
      },
      'Q': {
        "upright": "Intelligence, independence, objectivity, truth-seeker",
        "reversed": "Overly critical, cold-hearted, manipulative",
        "description": "The Queen of Spades is often depicted as a wise and perceptive woman, holding a scepter symbolizing her authority and a spade representing her intellectual prowess.",
        "person": "A highly intelligent and independent woman who values truth and objectivity. She may be a scholar, judge, or someone in a position requiring keen analytical skills.",
        "love": "In relationships, the Queen of Spades values intellectual connection and honesty above all. She may struggle with expressing emotions but is deeply loyal when committed.",
        "career": "This card suggests success through intellectual pursuits. You may excel in fields requiring analysis, research, or judgment. Trust your intelligence and intuition in work matters.",
        "yes_or_no": "Yes, if you approach the situation with wisdom and objectivity."
      },
      'J': {
        "upright": "Ambitious youth, student, messenger, new ideas",
        "reversed": "Deception, manipulation, unreliable information",
        "description": "The Jack of Spades is often portrayed as a young, alert figure, ready for action. He represents quick thinking, ambition, and the pursuit of knowledge.",
        "person": "A young, ambitious individual who is eager to learn and quick to act. They may be a student or someone starting their career, full of new ideas and energy.",
        "love": "In love, the Jack of Spades suggests a relationship with someone younger or less experienced. It can also indicate a need for open and honest communication.",
        "career": "This card is positive for education and career development. It suggests new opportunities for learning and growth in your professional life.",
        "yes_or_no": "Yes, but verify the information before acting."
      },
      '10': {
        "upright": "Endings, transformation, letting go, moving on",
        "reversed": "Resistance to change, stagnation, fear of the unknown",
        "description": "The Ten of Spades often represents the end of a cycle or a situation that has run its course. It symbolizes the need for change and transformation.",
        "person": "Someone going through a significant life change or transition. They may be facing challenges but are ultimately moving towards personal growth.",
        "love": "In relationships, this card may indicate the end of a cycle. It could mean a breakup or a transformative phase that will lead to a stronger bond.",
        "career": "This card suggests a major change in your work life. It could be the end of a job or project, paving the way for new opportunities.",
        "yes_or_no": "No, but this ending opens the door for new beginnings."
      },
      '9': {
        "upright": "Anxiety, worry, sleeplessness, mental anguish",
        "reversed": "Hope, releasing worry, overcoming anxiety",
        "description": "The Nine of Spades is often associated with worry and anxiety. It represents mental burdens and the need to address overwhelming thoughts.",
        "person": "Someone dealing with significant stress or anxiety. They may be prone to overthinking or struggling with insomnia due to their worries.",
        "love": "In relationships, this card suggests worries and anxieties that may be affecting your love life. It's important to communicate openly about your concerns.",
        "career": "Work-related stress may be at a peak. It's crucial to find healthy ways to manage anxiety and not let it affect your performance.",
        "yes_or_no": "No, anxiety may be clouding your judgment."
      },
      '8': {
        "upright": "Restriction, limitation, imprisonment, self-imposed isolation",
        "reversed": "Freedom, release, self-acceptance",
        "description": "The Eight of Spades often represents feelings of being trapped or restricted. It symbolizes limitations, whether self-imposed or external.",
        "person": "Someone who feels trapped in their current situation. They may be struggling against limitations or feeling restricted in their choices.",
        "love": "In relationships, this card may indicate feeling trapped or restricted. It could suggest the need for more personal space or freedom within the partnership.",
        "career": "You may feel stuck in your current job or career path. It's time to consider ways to break free from limitations and explore new opportunities.",
        "yes_or_no": "No, you may feel too restricted to move forward."
      },
      '7': {
        "upright": "Strategy, planning, assessment, reevaluation",
        "reversed": "Lack of planning, crisis management, impulsiveness",
        "description": "The Seven of Spades represents the need for careful planning and strategy. It suggests taking time to assess a situation before acting.",
        "person": "A strategic thinker who excels at planning and problem-solving. They may be cautious and prefer to analyze all angles before making decisions.",
        "love": "In relationships, this card suggests the need for careful consideration. It may be time to reevaluate your current situation or plan for the future together.",
        "career": "This is a good time for career planning and strategy. Take a step back to assess your current position and set goals for the future.",
        "yes_or_no": "Maybe, but more planning is needed."
      },
      '6': {
        "upright": "Minor challenges, overcoming obstacles, problem-solving",
        "reversed": "Giving up too easily, feeling overwhelmed",
        "description": "The Six of Spades represents overcoming minor challenges through effort and problem-solving. It suggests progress despite obstacles.",
        "person": "Someone who is resilient and capable of overcoming challenges. They may be going through a period of growth through problem-solving.",
        "love": "In relationships, this card suggests working through minor issues together. It's a time for problem-solving and strengthening your bond through shared challenges.",
        "career": "You may face some obstacles at work, but you have the skills to overcome them. Focus on problem-solving and don't let minor setbacks discourage you.",
        "yes_or_no": "Yes, but be prepared to overcome some challenges."
      },
      '5': {
        "upright": "Conflict, disagreements, competition, tension",
        "reversed": "Resolution, compromise, truce",
        "description": "The Five of Spades often represents conflict or disagreements. It suggests a period of tension or competition that needs to be addressed.",
        "person": "Someone involved in conflicts or disagreements. They may be competitive or struggling with tensions in their relationships or environment.",
        "love": "This card may indicate relationship conflicts or disagreements. It's important to address issues openly and seek compromise.",
        "career": "Workplace conflicts or competition may be prominent. Focus on finding common ground and resolving disagreements professionally.",
        "yes_or_no": "No, conflicts may hinder progress."
      },
      '4': {
        "upright": "Rest, recuperation, contemplation, retreat",
        "reversed": "Restlessness, burnout, inability to relax",
        "description": "The Four of Spades represents a period of rest and recuperation. It suggests taking time for self-care and reflection.",
        "person": "Someone who needs or is taking time for rest and self-care. They may be recovering from a period of stress or intense activity.",
        "love": "In relationships, this card suggests a need for peace and stability. It may be time to retreat together or give each other space for individual reflection.",
        "career": "It's time to take a step back from work stress. Consider taking a break or finding ways to create a more restful work environment.",
        "yes_or_no": "No, it's time to rest and reconsider."
      },
      '3': {
        "upright": "Heartbreak, sorrow, grief, separation",
        "reversed": "Healing, forgiveness, recovery",
        "description": "The Three of Spades often represents heartbreak or emotional pain. It suggests a period of sorrow or separation that leads to growth.",
        "person": "Someone experiencing emotional pain or recovering from a loss. They may be going through a difficult period of growth and healing.",
        "love": "This card may indicate heartbreak or the end of a relationship. However, it also suggests the potential for healing and future growth.",
        "career": "You may face disappointment or loss in your work life. Use this as an opportunity for growth and reassessment of your career goals.",
        "yes_or_no": "No, emotional pain may be clouding the situation."
      },
      '2': {
        "upright": "Balance, partnership, diplomacy, harmonious choices",
        "reversed": "Imbalance, disconnect, poor decisions",
        "description": "The Two of Spades represents balance and harmony. It suggests the need for diplomacy and making choices that maintain equilibrium.",
        "person": "Someone who values balance and harmony in their life. They may be skilled at diplomacy and finding middle ground in conflicts.",
        "love": "In relationships, this card suggests a need for balance and compromise. It's a good time for partnerships and working together harmoniously.",
        "career": "This card indicates successful partnerships or collaborations at work. Focus on diplomacy and finding win-win solutions in your professional life.",
        "yes_or_no": "Yes, if you maintain balance and consider all perspectives."
      },
    },
    '♥️': {
      'A': {
        "upright": "New beginnings in love, emotional fulfillment, joy, creativity",
        "reversed": "Emotional blockages, fear of intimacy, unrequited love",
        "description": "The Ace of Hearts represents the essence of emotion, love, and new beginnings. It's often depicted as a single large heart, symbolizing purity and potential in matters of the heart.",
        "person": "Someone who is open-hearted, loving, and ready for new emotional experiences. They may be very in touch with their feelings and creative pursuits.",
        "love": "A new romance may be on the horizon, or an existing relationship may enter a new, more profound phase. It's a positive sign for matters of the heart.",
        "career": "You may find new passion in your work or embark on a career that truly speaks to your heart. Creativity and emotional fulfillment in your job are highlighted.",
        "yes_or_no": "Yes, especially in matters of the heart."
      },
      'K': {
        "upright": "Kindness, compassion, emotional balance, wisdom",
        "reversed": "Emotional manipulation, moodiness, lack of empathy",
        "description": "The King of Hearts is often called the 'Suicide King' due to the sword behind his head in traditional designs. He represents emotional wisdom and balance.",
        "person": "A kind and compassionate individual who is emotionally mature and wise. They may be a counselor, mentor, or someone people turn to for emotional support.",
        "love": "This card suggests a mature and emotionally balanced relationship. It may indicate a partner who is kind, supportive, and emotionally available.",
        "career": "In your work life, focus on bringing compassion and emotional intelligence to your role. You may excel in fields that require empathy and people skills.",
        "yes_or_no": "Yes, follow your heart with wisdom."
      },
      'Q': {
        "upright": "love, compassion, caring, emotional security, intuition",
        "reversed": "Emotional instability, neediness, jealousy",
        "description": "The Queen of Hearts represents the nurturing and compassionate aspects of femininity. She symbolizes emotional intelligence and intuition.",
        "person": "A loving and compassionate individual, often a mother figure or someone with strong nurturing instincts. They are intuitive and emotionally supportive.",
        "love": "This card suggests a loving and emotionally fulfilling relationship. It may indicate a partner who is caring, nurturing, and emotionally attuned.",
        "career": "You may excel in careers that involve caring for others or using your emotional intelligence. Trust your intuition in work matters.",
        "yes_or_no": "Yes, trust your heart and intuition."
      },
      'J': {
        "upright": "Youthful enthusiasm, new admirer, romantic messages",
        "reversed": "Unreliability in love, immaturity, fickleness",
        "description": "The Jack of Hearts represents youthful energy in matters of the heart. He symbolizes romantic messages and new emotional beginnings.",
        "person": "A young, romantic individual full of enthusiasm and charm. They may be idealistic about love and prone to grand romantic gestures.",
        "love": "This card may indicate a new admirer or the start of a romantic relationship. It suggests passionate but potentially immature love.",
        "career": "In your work life, embrace your enthusiasm and creativity. You may receive good news or new opportunities that align with your passions.",
        "yes_or_no": "Yes, but be aware of youthful impulsiveness."
      },
      '10': {
        "upright": "Emotional fulfillment, happiness, harmonious relationships",
        "reversed": "Broken relationships, unfulfilling emotions, disharmony",
        "description": "The Ten of Hearts, also known as the 'Cup of Happiness,' represents emotional fulfillment and contentment in relationships.",
        "person": "Someone who has achieved emotional fulfillment and harmony in their relationships. They may be surrounded by a loving family or community.",
        "love": "This card suggests a period of emotional contentment and harmony in relationships. It may indicate a happy family life or a deeply fulfilling partnership.",
        "career": "You may find great satisfaction and emotional fulfillment in your work. This card suggests harmony in your work relationships and environment.",
        "yes_or_no": "Yes, emotional fulfillment is indicated."
      },
      '9': {
        "upright": "Wishes fulfilled, contentment, emotional satisfaction",
        "reversed": "Dissatisfaction, unfulfilled wishes, hidden emotional issues",
        "description": "The Nine of Hearts is often called the 'Wish Card.' It represents the fulfillment of emotional desires and contentment.",
        "person": "Someone whose emotional wishes have been or are about to be fulfilled. They may be experiencing a period of contentment and satisfaction.",
        "love": "This card suggests that your romantic wishes may come true. It indicates emotional satisfaction and fulfillment in relationships.",
        "career": "You may find that your work brings you emotional satisfaction. Your efforts are likely to be rewarded in ways that fulfill you emotionally.",
        "yes_or_no": "Yes, your wish is likely to be granted."
      },
      '8': {
        "upright": "Departure, abandonment, withdrawal, moving on",
        "reversed": "Stagnation, inability to move on, fear of change",
        "description": "The Eight of Hearts often represents a departure or withdrawal from an emotional situation. It suggests moving on from the familiar towards something new.",
        "person": "Someone who is leaving behind familiar emotional territory. They may be moving on from a relationship or emotional situation that no longer serves them.",
        "love": "This card may indicate the end of a relationship or a period of emotional withdrawal. It suggests the need to move on for personal growth.",
        "career": "You may be considering leaving your current job or moving away from a familiar work environment. Trust that this change is necessary for your growth.",
        "yes_or_no": "Yes, but it may involve leaving something behind."
      },
      '7': {
        "upright": "Choices in love, fantasy, wishful thinking",
        "reversed": "Illusion, unrealistic expectations, confusion",
        "description": "The Seven of Hearts represents choices in matters of the heart. It often indicates a period of daydreaming or wishful thinking about love and relationships.",
        "person": "Someone faced with romantic choices or caught up in fantasies about love. They may be prone to idealization or have difficulty seeing relationships realistically.",
        "love": "You may be faced with choices in your love life. Be careful not to get lost in fantasies; try to see your relationships and potential partners realistically.",
        "career": "In your work life, you might be dreaming of ideal scenarios. While it's good to have aspirations, make sure your career choices are grounded in reality.",
        "yes_or_no": "Maybe, but be careful of wishful thinking."
      },
      '6': {
        "upright": "Nostalgia, memories, reunion, childhood",
        "reversed": "Living in the past, homesickness, naivety",
        "description": "The Six of Hearts often represents nostalgia and fond memories. It can indicate reunions or a return to something familiar and comforting.",
        "person": "Someone who values their past experiences and relationships. They may be sentimental or currently revisiting old memories or connections.",
        "love": "This card may indicate rekindling an old flame or finding comfort in familiar relationships. It suggests emotional security and fond memories in love.",
        "career": "You might find yourself reminiscing about past work experiences. Consider how you can apply lessons from the past to your current career situation.",
        "yes_or_no": "Yes, especially if it relates to past connections or experiences."
      },
      '5': {
        "upright": "Disappointment in love, loss, regret",
        "reversed": "Acceptance, moving on, finding peace",
        "description": "The Five of Hearts often represents disappointment or loss in matters of the heart. It suggests a period of emotional challenge that leads to growth.",
        "person": "Someone experiencing disappointment or regret, particularly in relationships. They may be going through a period of emotional healing.",
        "love": "This card may indicate a setback or disappointment in your love life. It's a time for processing emotions and learning from experiences.",
        "career": "You might face disappointment or loss in your work life. Use this as an opportunity for growth and reassessment of your career goals.",
        "yes_or_no": "No, disappointment may be likely."
      },
      '4': {
        "upright": "Boredom, apathy, reevaluation of relationships",
        "reversed": "New possibilities, restlessness, desire for change",
        "description": "The Four of Hearts often represents a period of emotional stagnation or boredom. It suggests the need to reevaluate current emotional situations.",
        "person": "Someone experiencing a period of emotional apathy or discontent. They may be feeling unfulfilled in their current relationships or situation.",
        "love": "You might be feeling bored or unsatisfied in your current relationship. It's time to reevaluate what you truly want and need emotionally.",
        "career": "In your work life, you may be feeling unchallenged or unfulfilled. Consider ways to reignite your passion or explore new possibilities.",
        "yes_or_no": "No, it's time for reevaluation rather than action."
      },
      '3': {
        "upright": "Celebration, friendship, collaboration, community",
        "reversed": "Overindulgence, gossip, isolation",
        "description": "The Three of Hearts represents joyful social interactions and celebrations. It often indicates a period of happiness shared with others.",
        "person": "Someone who values friendship and community. They may be social, enjoying celebrations and collaborative efforts with others.",
        "love": "This card suggests a period of joy in relationships. It may indicate a celebration of love or the importance of friendship in your romantic life.",
        "career": "Collaboration and positive social interactions at work are highlighted. You may find success through teamwork and maintaining good relationships with colleagues.",
        "yes_or_no": "Yes, especially in matters involving social connections."
      },
      '2': {
        "upright": "Partnership, mutual attraction, love connection",
        "reversed": "Imbalanced relationships, miscommunication in love",
        "description": "The Two of Hearts represents partnerships and mutual affection. It often indicates a strong connection or the potential for a significant relationship.",
        "person": "Someone who values partnership and is open to deep emotional connections. They may be seeking or involved in a significant relationship.",
        "love": "This card is very positive for love and relationships. It suggests mutual attraction and the potential for a harmonious partnership.",
        "career": "In your work life, focus on building strong partnerships and collaborations. You may find success through cooperative efforts and mutual support.",
        "yes_or_no": "Yes, especially in matters of partnership and connection."
      }
    },
    '♣️': {
      'A': {
        "upright": "New beginnings, opportunity, potential for success",
        "reversed": "Missed opportunities, lack of planning, false starts",
        "description": "The Ace of Clubs represents new beginnings and opportunities, especially in business, creativity, or personal growth. It symbolizes the seed of potential ready to sprout.",
        "person": "An individual full of potential and new ideas. They may be at the start of a new venture or personal journey.",
        "love": "A new phase in your love life may be beginning. This could mean a new relationship or a fresh start in an existing one.",
        "career": "New job opportunities or the chance to start a new project may arise. It's a good time for launching new initiatives.",
        "yes_or_no": "Yes, especially for new ventures and opportunities."
      },
      'K': {
        "upright": "Leadership, vision, entrepreneur, experienced",
        "reversed": "Impulsiveness, unachievable goals, poor leadership",
        "description": "The King of Clubs represents a visionary leader or entrepreneur. He symbolizes experience, authority, and the ability to turn ideas into reality.",
        "person": "A mature, accomplished individual with strong leadership skills. They may be an entrepreneur or someone in a position of authority.",
        "love": "In relationships, this card suggests a partner who is stable, supportive, and helps you achieve your goals.",
        "career": "You may take on a leadership role or receive guidance from a mentor figure. It's a good time for ambitious career moves.",
        "yes_or_no": "Yes, especially if it involves taking charge or showing leadership."
      },
      'Q': {
        "upright": "Practical, nurturing, down-to-earth, resourceful",
        "reversed": "Smothering, pessimistic, unreliable",
        "description": "The Queen of Clubs represents a practical and nurturing figure. She symbolizes resourcefulness, reliability, and the ability to make things happen.",
        "person": "A practical, nurturing individual who is good at managing resources and solving problems. They may be a supportive friend or mentor.",
        "love": "In relationships, this card suggests a partner who is supportive, practical, and helps create a stable home environment.",
        "career": "You may excel in roles that require practicality and nurturing. Trust your ability to manage resources and solve problems efficiently.",
        "yes_or_no": "Yes, especially if you take a practical, nurturing approach."
      },
      'J': {
        "upright": "Energy, enthusiasm, new ideas, messenger",
        "reversed": "Lack of direction, scattered energy, unreliability",
        "description": "The Jack of Clubs represents youthful energy and enthusiasm, especially in pursuit of new ideas or adventures. He symbolizes a messenger or the bringer of news.",
        "person": "An energetic, enthusiastic individual full of new ideas. They may be young or young at heart, always ready for the next adventure.",
        "love": "This card may indicate the arrival of exciting news in your love life. Be open to new experiences and connections.",
        "career": "New opportunities or ideas may come your way. It's a good time to pursue learning and explore new directions in your career.",
        "yes_or_no": "Yes, but be prepared for rapid changes or new information."
      },
      '10': {
        "upright": "Success, prosperity, financial gain, good fortune",
        "reversed": "Setbacks, financial loss, lack of stability",
        "description": "The Ten of Clubs represents success and prosperity, especially in business or financial matters. It symbolizes the culmination of efforts leading to rewards.",
        "person": "Someone who has achieved success through hard work and perseverance. They may be enjoying the fruits of their labor.",
        "love": "This card suggests a period of stability and prosperity in your relationship. Shared success may strengthen your bond.",
        "career": "Success and recognition in your career are indicated. Your hard work is likely to pay off with financial rewards or career advancement.",
        "yes_or_no": "Yes, success and prosperity are likely."
      },
      '9': {
        "upright": "Wishes fulfilled, contentment, luxury",
        "reversed": "Inner unhappiness, materialism, false success",
        "description": "The Nine of Clubs often represents wishes coming true, especially in material or financial matters. It symbolizes contentment and the enjoyment of luxury.",
        "person": "Someone who has achieved their material goals and is enjoying the fruits of their labor. They may be focused on comfort and luxury.",
        "love": "This card suggests a period of contentment and wish fulfillment in your love life. Enjoy the harmony but don't take it for granted.",
        "career": "Your career goals may be realized, bringing a sense of achievement and material comfort. Enjoy your success but stay grounded.",
        "yes_or_no": "Yes, your wish is likely to be granted, especially in material matters."
      },
      '8': {
        "upright": "Work, learning, skill development, apprenticeship",
        "reversed": "Lack of focus, shortcuts, misaligned efforts",
        "description": "The Eight of Clubs represents hard work, especially in learning new skills or developing existing ones. It symbolizes dedication to personal growth and mastery.",
        "person": "A hardworking individual committed to learning and self-improvement. They may be an apprentice or someone dedicated to mastering their craft.",
        "love": "This card suggests that relationships may require work and dedication. Focus on growing together and learning from each other.",
        "career": "It's a good time for skill development and hard work in your career. Your efforts to learn and improve will pay off in the long run.",
        "yes_or_no": "Yes, if you're willing to put in the necessary work and effort."
      },
      '7': {
        "upright": "Victory, overcoming obstacles, success through effort",
        "reversed": "Defeat, giving up too easily, overwhelmed by challenges",
        "description": "The Seven of Clubs represents victory achieved through effort and perseverance. It symbolizes overcoming obstacles and succeeding despite challenges.",
        "person": "Someone who has faced and overcome significant challenges. They may be resilient and determined, refusing to give up in the face of adversity.",
        "love": "This card suggests that any challenges in your relationship can be overcome with effort and determination. Victory in love is possible.",
        "career": "You may face obstacles in your career, but with persistence, you can overcome them. Success is achievable through hard work.",
        "yes_or_no": "Yes, but be prepared to face and overcome challenges."
      },
      '6': {
        "upright": "Progress, advancement, moving forward",
        "reversed": "Setbacks, delays, lack of progress",
        "description": "The Six of Clubs represents progress and advancement, especially in career or personal projects. It symbolizes moving forward and making headway.",
        "person": "Someone who is making steady progress towards their goals. They may be experiencing a period of growth and advancement in their life.",
        "love": "This card suggests positive progress in your relationships. You may be moving forward to a new level of commitment or understanding.",
        "career": "Advancement in your career is indicated. You may receive a promotion or make significant progress on an important project.",
        "yes_or_no": "Yes, progress and advancement are likely."
      },
      '5': {
        "upright": "Competition, challenges, sports, debates",
        "reversed": "Avoiding conflict, unfair competition, defeat",
        "description": "The Five of Clubs represents competition and challenges, often in a constructive sense. It symbolizes the energy of sports, debates, or any situation where skills are tested against others.",
        "person": "A competitive individual who thrives on challenges. They may be athletic, enjoy debates, or excel in competitive environments.",
        "love": "This card may indicate some rivalry or challenges in your love life. Remember that healthy relationships are about cooperation, not competition.",
        "career": "You may face increased competition at work. Rise to the challenge and use it as an opportunity to showcase your skills and improve.",
        "yes_or_no": "Yes, but be prepared for competition or challenges."
      },
      '4': {
        "upright": "Stability, security, establishment, laying foundations",
        "reversed": "Instability, lack of security, stagnation",
        "description": "The Four of Clubs represents stability and security, especially in material or financial matters. It symbolizes laying foundations for future growth.",
        "person": "Someone who values stability and security. They may be focused on building a solid foundation for their future, whether in career, finances, or personal life.",
        "love": "This card suggests a period of stability in your relationships. It's a good time to build a solid foundation for future growth together.",
        "career": "Focus on establishing stability in your career. It's a good time to lay foundations for future success or solidify your current position.",
        "yes_or_no": "Yes, especially for matters requiring stability and security."
      },
      '3': {
        "upright": "Teamwork, collaboration, group projects",
        "reversed": "Lack of cooperation, disharmony in groups",
        "description": "The Three of Clubs represents teamwork and collaboration. It symbolizes the power of working together towards a common goal.",
        "person": "Someone who excels in team environments and values collaboration. They may be a good team player or leader in group projects.",
        "love": "This card emphasizes the importance of teamwork in relationships. Focus on how you and your partner can work together towards common goals.",
        "career": "Collaboration is key to your success at work. Engage in team projects and focus on how you can contribute to group efforts.",
        "yes_or_no": "Yes, especially if it involves teamwork and collaboration."
      },
      '2': {
        "upright": "Partnership, cooperation, mutual benefit",
        "reversed": "Disagreements, lack of cooperation, imbalance in partnerships",
        "description": "The Two of Clubs represents partnerships and cooperation, especially in business or creative endeavors. It symbolizes the power of working together for mutual benefit.",
        "person": "Someone who values partnerships and works well with others. They may be seeking or involved in a significant business or creative partnership.",
        "love": "This card suggests harmonious partnerships in love. Focus on cooperation and mutual support in your relationships.",
        "career": "Partnerships or collaborations at work are favored. Look for opportunities to work closely with others for mutual benefit.",
        "yes_or_no": "Yes, especially for matters involving partnership and cooperation."
      }
    },
    '♦️': {
      'A': {
        "upright": "New financial opportunity, prosperity, potential for wealth",
        "reversed": "Missed financial opportunities, material instability",
        "description": "The Ace of Diamonds represents new financial beginnings and opportunities. It symbolizes the potential for prosperity and material gain.",
        "person": "Someone at the brink of a new financial venture or opportunity. They may have a talent for recognizing and seizing lucrative chances.",
        "love": "This card may indicate a new phase in a relationship that brings material comfort or shared financial goals.",
        "career": "A new job opportunity or business venture with strong financial potential may be on the horizon.",
        "yes_or_no": "Yes, especially for matters related to finance and new opportunities."
      },
      'K': {
        "upright": "Financial success, business acumen, leadership in material affairs",
        "reversed": "Financially controlling, materialistic, poor money management",
        "description": "The King of Diamonds represents mastery in financial and material matters. He symbolizes business acumen, wealth, and leadership in worldly affairs.",
        "person": "A successful businessperson or someone who has achieved financial stability. They may be a mentor in financial or business matters.",
        "love": "In relationships, this card may represent a financially stable partner or the need to balance material and emotional aspects of a partnership.",
        "career": "Success and leadership in business or financial sectors are indicated. You may take on a role that requires financial decision-making.",
        "yes_or_no": "Yes, especially in matters requiring financial wisdom or business acumen."
      },
      'Q': {
        "upright": "Wealth, financial security, luxury, business woman, nurturing mother, taking care of someone, financial independence",
        "reversed": "Financial insecurity, poor work-home balance, selfish, insecure, gold digger, materialistic",
        "description": "Elegant and regal, the Queen of Diamonds is aesthetically beautiful, well-dressed, and clever. In the playing card, she is often depicted with a slightly judgmental look on her face. She holds a flower in her hand which symbolizes her love for nature and her ability to grow things from the seeds she has planted. Hardworking, ambitious, and at times jealous, the Queen of Diamonds is a woman who turns her dreams into a reality and actively expands her resources.",
        "person": "The earthy Queen of Diamonds is no passive character. She is proactive, hard-working, and level-headed. More than likely, she owns or runs a business. She may even work freelance for herself. This character is a ballsy, career-oriented woman with a nurturing side. To anyone looking in, she appears to have it all, but you can guarantee that she manifested it through hard work and ambition. At times, the Queen of Diamonds may be considered a materialistic person. She may spend money on luxuries and take pride in her appearance. This queen may have children, may work with children, or may surround herself with animals. She has a soft, genuine side to her that loves to be in nature.",
        "love": "Since the Queen of Diamonds is very focused on building herself and her career, she may not be looking for love. Pulling this playing card in a cartomancy reading can be a warning that you should not put off looking for a partner. This card is all about commitment but the trouble with this queen is that she more than likely has been single for a long time, busy building her empire, that she has become extremely independent. In a singles love reading, this could be indicating that you need to welcome new love by creating some space for it to grow in your life. In a love reading with a romantic partner, the Queen of Diamonds can suggest taking the next step in the relationship – you may be moving in together, buying a home, or starting a family. The card suggests that you have all the resources you need to make that a reality.",
        "career": "With hard work and a solid plan, anything is possible. The Queen of Diamonds in a career reading suggests expansion and growth in your work life. You may receive a promotion or find a job that pays more. An opportunity to learn new skills and better your finances may be on the horizon. If you are thinking of starting a business, the Queen of Diamonds is a great sign of encouragement. You have the right attitude and enough financial backing to make this a reality. Another interpretation is that you may have a boss or mentor that can help you with your career. Someone may reach out to you because they have seen your hard work and they may wish to offer you a job or even to go into business with them.",
        "yes_or_no": "If you are asking a specific question and you pull the Queen of Diamonds, you can discern that the answer is yes. This playing card is a sign of confidence that things are going to work out for you if you are willing to put in the work. You may have to spend a little to achieve your goal, but you are financially supported by the universe."
      },
      'J': {
        "upright": "Ambitious youth, new money, financial news",
        "reversed": "Get-rich-quick schemes, financial immaturity, irresponsibility with money",
        "description": "The Jack of Diamonds represents youthful ambition, especially in financial or material matters. He symbolizes new money, financial news, or a young person starting their journey to wealth.",
        "person": "A young, ambitious individual focused on financial success. They may be starting a new business or career with high financial aspirations.",
        "love": "This card may indicate a partner or potential partner who is financially ambitious but possibly immature. Balance material and emotional aspects in relationships.",
        "career": "New financial opportunities may arise in your career. Be open to innovative ideas but avoid get-rich-quick schemes.",
        "yes_or_no": "Yes, but be cautious of youthful impulsiveness, especially in financial matters."
      },
      '10': {
        "upright": "Financial success, wealth, prosperity, family inheritance",
        "reversed": "Loss of wealth, financial setbacks, family financial disputes",
        "description": "The Ten of Diamonds represents significant financial success or wealth. It often symbolizes family money, inheritance, or long-term financial stability.",
        "person": "Someone who has achieved significant financial success or inherited wealth. They may be focused on maintaining and growing their prosperity.",
        "love": "This card may indicate a relationship with strong financial foundations. Be careful not to let money overshadow emotional connections.",
        "career": "Significant financial success in your career is indicated. You may receive a large bonus, inheritance, or achieve a long-term financial goal.",
        "yes_or_no": "Yes, especially for matters related to financial success and prosperity."
      },
      '9': {
        "upright": "Financial independence, self-sufficiency, luxury",
        "reversed": "Overspending, debt, financial dependence",
        "description": "The Nine of Diamonds represents financial independence and self-sufficiency. It often symbolizes the enjoyment of luxury and the fruits of one's labor.",
        "person": "Someone who has achieved financial independence through their own efforts. They may enjoy luxury and the finer things in life.",
        "love": "This card suggests a need for financial independence within relationships. Ensure that material comfort doesn't overshadow emotional connections.",
        "career": "You may achieve a level of financial independence through your career. It's a good time to focus on building long-term financial stability.",
        "yes_or_no": "Yes, especially if it involves achieving financial independence or enjoying the results of your hard work."
      },
      '8': {
        "upright": "Skilled work, craftsmanship, attention to detail",
        "reversed": "Perfectionism, undervalued work, lack of passion",
        "description": "The Eight of Diamonds represents skilled work and craftsmanship. It symbolizes attention to detail and the value of quality in one's work or products.",
        "person": "A skilled craftsperson or professional who takes pride in the quality of their work. They may have a keen eye for detail and value excellence.",
        "love": "This card suggests paying attention to the details in your relationships. Small, thoughtful gestures can have a big impact.",
        "career": "Focus on honing your skills and producing high-quality work. Your attention to detail and craftsmanship will be recognized and valued.",
        "yes_or_no": "Yes, especially if it involves skilled work or paying attention to details."
      },
      '7': {
        "upright": "Value assessment, reevaluation of finances, hard work pays off",
        "reversed": "Lack of reward for efforts, undervaluing oneself",
        "description": "The Seven of Diamonds represents a time of assessing value, especially in financial or material matters. It symbolizes the recognition that hard work pays off.",
        "person": "Someone who is reassessing their financial situation or the value of their work. They may be realizing the rewards of their past efforts.",
        "love": "This card suggests a time of reevaluating the give and take in your relationships. Ensure that efforts are recognized and appreciated on both sides.",
        "career": "It's time to assess the value of your work and ensure you're being properly compensated. Your hard work is likely to pay off soon.",
        "yes_or_no": "Yes, but take time to assess the true value before proceeding."
      },
      '6': {
        "upright": "Generosity, charity, giving and receiving",
        "reversed": "Selfishness, debt, strings attached to gifts",
        "description": "The Six of Diamonds represents generosity and the flow of material resources. It symbolizes giving and receiving, often in a financial or material context.",
        "person": "A generous individual who understands the value of giving as well as receiving. They may be involved in charitable work or be known for their philanthropy.",
        "love": "This card suggests a period of generosity in relationships. Be open to both giving and receiving love and support.",
        "career": "You may have opportunities to be generous or receive support at work. Collaborative efforts and resource sharing are favored.",
        "yes_or_no": "Yes, especially if it involves generosity or the fair exchange of resources."
      },
      '5': {
        "upright": "Material changes, financial ups and downs, adaptation",
        "reversed": "Financial instability, resistance to change, material loss",
        "description": "The Five of Diamonds represents change and fluctuation in material or financial matters. It symbolizes the need to adapt to changing circumstances.",
        "person": "Someone experiencing financial ups and downs or material changes in their life. They may need to adapt to new financial circumstances.",
        "love": "This card suggests that material changes may affect your relationships. Be prepared to adapt together to new circumstances.",
        "career": "You may experience financial fluctuations in your career. Stay flexible and be prepared to adapt to changing circumstances.",
        "yes_or_no": "Maybe – be prepared for changes and the need to adapt."
      },
      '4': {
        "upright": "Financial stability, conservation of resources, frugality",
        "reversed": "Financial insecurity, stinginess, missed opportunities",
        "description": "The Four of Diamonds represents financial stability and the wise use of resources. It symbolizes frugality and the importance of building a solid financial foundation.",
        "person": "A financially stable individual who is careful with their resources. They may be frugal and focused on long-term financial security.",
        "love": "This card suggests building a stable financial foundation in your relationships. Work together on shared financial goals and responsible resource management.",
        "career": "Focus on building financial stability in your career. Conservative financial decisions and resource management are favored.",
        "yes_or_no": "Yes, especially if it involves building financial stability or conserving resources."
      },
      '3': {
        "upright": "Collaboration for profit, teamwork in business, shared resources",
        "reversed": "Financial conflicts, unfair division of resources",
        "description": "The Three of Diamonds represents collaboration for mutual financial benefit. It symbolizes teamwork in business and the sharing of resources.",
        "person": "Someone who excels at collaborative business ventures. They may be skilled at pooling resources and working with others for mutual profit.",
        "love": "This card emphasizes the importance of teamwork in managing shared resources in relationships. Work together on financial goals.",
        "career": "Collaborations and teamwork may lead to financial benefits in your career. Look for opportunities to pool resources or skills with others.",
        "yes_or_no": "Yes, especially if it involves collaboration or sharing resources for mutual benefit."
      },
      '2': {
        "upright": "Financial decisions, weighing options, balance in material matters",
        "reversed": "Indecision about finances, imbalance in give and take",
        "description": "The Two of Diamonds represents financial decisions and the need to weigh options carefully. It symbolizes finding balance in material matters.",
        "person": "Someone facing important financial decisions. They may be carefully weighing their options and seeking balance in material aspects of life.",
        "love": "This card suggests the need for balance in the material aspects of your relationships. Ensure there's a fair give and take in shared resources.",
        "career": "You may face important financial decisions in your career. Take time to carefully weigh your options and seek balance.",
        "yes_or_no": "Maybe – carefully weigh your options before deciding."
      }
    }
  }


  return meanings[suit][value] || { meaning: "Unknown meaning", context: "No context available" };
}