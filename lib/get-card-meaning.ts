export type Suit = '♠️' | '♥️' | '♣️' | '♦️';
export type CardValue = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'Joker';

export default (value: CardValue, suit: Suit): { meaning: string, context: string } => {
  const meanings: Record<Suit, Record<CardValue, { meaning: string, context: string }>> = {
    '♠️': {
      'A': { meaning: 'Misfortune', context: 'Signifies a challenging new beginning or a difficult truth coming to light' },
      '2': { meaning: 'Indecision', context: 'Represents a crossroads or difficult choice, often with neither option being ideal' },
      '3': { meaning: 'Heartbreak', context: 'Indicates emotional pain, often related to the end of a relationship or disappointment' },
      '4': { meaning: 'Momentary pause', context: 'Suggests a time for reflection and reevaluation before moving forward' },
      '5': { meaning: 'Sneakiness', context: 'Warns of underhanded behavior or the need to be cautious of others\' motives' },
      '6': { meaning: 'Upswing', context: 'Indicates a positive change after a period of difficulty' },
      '7': { meaning: 'Deceit', context: 'Warns of lies or manipulation in one\'s environment' },
      '8': { meaning: 'Restriction', context: 'Represents feelings of being trapped or limited in options' },
      '9': { meaning: 'Anxiety', context: 'Signifies worry and stress, often about imagined future problems' },
      '10': { meaning: 'Unfortunate news', context: 'Indicates the arrival of bad news or a difficult ending' },
      'J': { meaning: 'A roguish person', context: 'Represents a young, potentially unreliable or mischievous person' },
      'Q': { meaning: 'An angry person', context: 'Signifies a woman who may be bitter or resentful, or a situation involving conflict' },
      'K': { meaning: 'An ambitious person', context: 'Represents a powerful man who may be authoritative or intimidating' },
      'Joker': { meaning: 'Folly and new beginnings', context: 'Represents unexpected changes or a need to take risks' }
    },
    '♥️': {
      'A': { meaning: 'Beginning of a relationship', context: 'Signifies new love or the start of a deep emotional connection' },
      '2': { meaning: 'Luck in love', context: 'Indicates harmony in relationships and positive emotional energy' },
      '3': { meaning: 'Infidelity', context: 'Warns of potential betrayal or the need to reassess one\'s emotional commitments' },
      '4': { meaning: 'Change is happening in love', context: 'Suggests emotional instability or a transformation in relationships' },
      '5': { meaning: 'Jealousy', context: 'Indicates insecurity in relationships or the need to address possessive feelings' },
      '6': { meaning: 'Nostalgia', context: 'Represents fond memories or a longing for past emotional connections' },
      '7': { meaning: 'Illusiveness', context: 'Suggests daydreaming or unrealistic expectations in love' },
      '8': { meaning: 'Moving on', context: 'Indicates the end of a phase in one\'s emotional life and the beginning of another' },
      '9': { meaning: 'Wishes', context: 'Represents emotional fulfillment and the manifestation of deep desires' },
      '10': { meaning: 'Good fortune', context: 'Signifies emotional contentment and overall happiness' },
      'J': { meaning: 'A romantic person', context: 'Represents a young person full of passion and idealism' },
      'Q': { meaning: 'A caring person', context: 'Signifies a nurturing woman or a situation involving compassion and empathy' },
      'K': { meaning: 'A considerate person', context: 'Represents a kind and affectionate man, often a father figure' },
      'Joker': { meaning: 'Folly and new beginnings', context: 'Suggests taking emotional risks or embracing spontaneity in relationships' }
    },
    '♣️': {
      'A': { meaning: 'Fortune', context: 'Signifies a new opportunity for success, particularly in business or creative ventures' },
      '2': { meaning: 'Obstacles', context: 'Represents challenges that need to be overcome, often in career or personal growth' },
      '3': { meaning: 'Successful partnership', context: 'Indicates fruitful collaboration or a beneficial alliance' },
      '4': { meaning: 'Betrayal', context: 'Warns of disloyalty in business or friendships, or a failure to meet obligations' },
      '5': { meaning: 'Shame', context: 'Suggests a situation that may bring embarrassment or a need to address past mistakes' },
      '6': { meaning: 'Support', context: 'Represents assistance from others or a strong foundation for success' },
      '7': { meaning: 'Trouble in love', context: 'Indicates challenges in balancing work and personal life, or conflicts in relationships' },
      '8': { meaning: 'Hardship', context: 'Signifies a period of difficulty, particularly in financial or career matters' },
      '9': { meaning: 'New opportunities', context: 'Suggests the emergence of favorable circumstances for growth and advancement' },
      '10': { meaning: 'Travel', context: 'Indicates journeys, either physical or metaphorical, that lead to personal development' },
      'J': { meaning: 'A reliable person', context: 'Represents a trustworthy young person or a situation requiring diligence' },
      'Q': { meaning: 'A confident person', context: 'Signifies a self-assured woman or a situation calling for assertiveness' },
      'K': { meaning: 'A stubborn person', context: 'Represents a determined man or a need for persistence in the face of challenges' },
      'Joker': { meaning: 'Folly and new beginnings', context: 'Suggests unconventional approaches or the need to take calculated risks in business' }
    },
    '♦️': {
      'A': { meaning: 'Manifestation', context: 'Signifies the realization of ideas into tangible form, often related to finances or communication' },
      '2': { meaning: 'Departure', context: 'Indicates a significant change or the need to leave a situation behind' },
      '3': { meaning: 'Disputes', context: 'Warns of conflicts, often related to money or differing opinions' },
      '4': { meaning: 'Inheritance', context: 'Suggests receiving something of value, whether material or knowledge' },
      '5': { meaning: 'Reconciliation', context: 'Represents the resolution of conflicts or the balancing of accounts' },
      '6': { meaning: 'Breakup', context: 'Indicates the end of a partnership or a significant change in financial circumstances' },
      '7': { meaning: 'Work issues', context: 'Suggests challenges in the workplace or the need to reassess one\'s career path' },
      '8': { meaning: 'Unexpected alliance', context: 'Signifies a surprising partnership or a beneficial connection' },
      '9': { meaning: 'Extra money', context: 'Indicates financial gain or unexpected resources becoming available' },
      '10': { meaning: 'Wealth', context: 'Represents abundance and financial success, but warns against materialism' },
      'J': { meaning: 'A dishonest person', context: 'Warns of someone who may be deceptive, particularly in financial or communicative matters' },
      'Q': { meaning: 'A person who\'s a player', context: 'Signifies someone who may be manipulative or overly focused on material gain' },
      'K': { meaning: 'A resourceful person', context: 'Represents a clever and financially savvy individual, or the need for such qualities' },
      'Joker': { meaning: 'Folly and new beginnings', context: 'Suggests taking financial risks or embracing new forms of communication' }
    }
  };

  return meanings[suit][value] || { meaning: "Unknown meaning", context: "No context available" };
}