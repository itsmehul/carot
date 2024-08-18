export type Suit = '♠️' | '♥️' | '♣️' | '♦️';
export type CardValue = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'Joker';

export default (value: CardValue, suit: Suit): string => {
  const meanings: Record<Suit, Record<CardValue, string>> = {
    '♠️': {
      'A': 'Misfortune',
      '2': 'Indecision',
      '3': 'Heartbreak',
      '4': 'Momentary pause',
      '5': 'Sneakiness',
      '6': 'Upswing',
      '7': 'Deceit',
      '8': 'Restriction',
      '9': 'Anxiety',
      '10': 'Unfortunate news',
      'J': 'A roguish person',
      'Q': 'An angry person',
      'K': 'An ambitious person',
      'Joker': 'Folly and new beginnings'
    },
    '♥️': {
      'A': 'Beginning of a relationship',
      '2': 'Luck in love',
      '3': 'Infidelity',
      '4': 'Change is happening in love',
      '5': 'Jealousy',
      '6': 'Nostalgia',
      '7': 'Illusiveness',
      '8': 'Moving on',
      '9': 'Wishes',
      '10': 'Good fortune',
      'J': 'A romantic person',
      'Q': 'A caring person',
      'K': 'A considerate person',
      'Joker': 'Folly and new beginnings'
    },
    '♣️': {
      'A': 'Fortune',
      '2': 'Obstacles',
      '3': 'Successful partnership',
      '4': 'Betrayal',
      '5': 'Shame',
      '6': 'Support',
      '7': 'Trouble in love',
      '8': 'Hardship',
      '9': 'New opportunities',
      '10': 'Travel',
      'J': 'A reliable person',
      'Q': 'A confident person',
      'K': 'A stubborn person',
      'Joker': 'Folly and new beginnings'
    },
    '♦️': {
      'A': 'Manifestation',
      '2': 'Departure',
      '3': 'Disputes',
      '4': 'Inheritance',
      '5': 'Reconciliation',
      '6': 'Breakup',
      '7': 'Work issues',
      '8': 'Unexpected alliance',
      '9': 'Extra money',
      '10': 'Wealth',
      'J': 'A dishonest person',
      'Q': 'A person who\'s a player',
      'K': 'A resourceful person',
      'Joker': 'Folly and new beginnings'
    }
  };

  return meanings[suit][value] || "Unknown meaning";
}
