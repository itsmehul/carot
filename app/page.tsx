'use client'

import { Instructions } from "@/components/instructions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Vortex } from "@/components/ui/vortex";
import getCardMeaning, { CardValue, Suit } from "@/lib/get-card-meaning";
import { useState } from "react";

type CardInfo = {
  upright: string;
  reversed: string;
  description: string;
  person: string;
  love: string;
  career: string;
  yes_or_no: string;
};

type ReadingOption = 'person' | 'love' | 'career' | 'yes_or_no';

export default function Home() {
  const [selectedSuit, setSelectedSuit] = useState<Suit | null>(null);
  const [selectedValue, setSelectedValue] = useState<CardValue | null>(null);
  const [cardInfo, setCardInfo] = useState<CardInfo | null>(null);
  const [isReversed, setIsReversed] = useState<boolean>(false);
  const [selectedReadingOption, setSelectedReadingOption] = useState<ReadingOption>('yes_or_no');
  const [dateInput, setDateInput] = useState<string>("");
  const [randomCard, setRandomCard] = useState<{ suit: Suit, value: CardValue } | null>(null);

  const suits: Suit[] = ['♠️', '♥️', '♣️', '♦️'];
  const values: CardValue[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const readingOptions: ReadingOption[] = ['person', 'love', 'career', 'yes_or_no'];

  const handleSuitClick = (suit: Suit) => {
    setSelectedSuit(suit);
    if (selectedValue) {
      setCardInfo(getCardMeaning(selectedValue, suit));
    } else {
      setCardInfo(null);
    }
  };

  const handleValueClick = (value: CardValue) => {
    setSelectedValue(value);
    if (selectedSuit) {
      setCardInfo(getCardMeaning(value, selectedSuit));
    } else {
      setCardInfo(null);
    }
  };

  const toggleReversed = () => {
    setIsReversed(!isReversed);
  };

  const handleReadingOptionChange = (option: ReadingOption) => {
    setSelectedReadingOption(option);
  };

  const calculateDateSum = (dateString: string): number => {
    return dateString.split('').reduce((sum, digit) => {
      const num = parseInt(digit);
      return isNaN(num) ? sum : sum + num;
    }, 0);
  };

  const getRandomCard = (seed: number): { suit: Suit, value: CardValue } => {
    const rng = (max: number) => {
      seed = (seed * 1103515245 + 12345) & 0x7fffffff;
      return seed % max;
    };

    const randomSuit = suits[rng(suits.length)];
    const randomValue = values[rng(values.length)];

    return { suit: randomSuit, value: randomValue };
  };

  const handleDateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers and forward slashes
    if (/^[\d/]*$/.test(value)) {
      setDateInput(value);
    }
  };

  const handleDateInputBlur = () => {
    // Validate date format (DD/MM/YYYY)
    const dateRegex = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (dateRegex.test(dateInput)) {
      const dateSum = calculateDateSum(dateInput);
      const newRandomCard = getRandomCard(dateSum);
      setRandomCard(newRandomCard);
      setSelectedSuit(newRandomCard.suit);
      setSelectedValue(newRandomCard.value);
      setCardInfo(getCardMeaning(newRandomCard.value, newRandomCard.suit));
    } else {
      // Clear the input if the date is invalid
      setDateInput("");
      setRandomCard(null);
    }
  };


  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center w-full h-full p-2"
      >
        <Card className="w-full max-w-2xl bg-[#1610349c] backdrop-blur-md my-5">
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle className="text-2xl sm:text-3xl">Randomize</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-5">
              <div>
                <label htmlFor="dateInput" className="block text-sm font-medium text-gray-700 mb-1">
                  Enter your date (DD/MM/YYYY)
                </label>
                <Input
                  id="dateInput"
                  type="text"
                  placeholder="DD/MM/YYYY"
                  value={dateInput}
                  onChange={handleDateInputChange}
                  onBlur={handleDateInputBlur}
                  className="w-full"
                />
              </div>
              <div>
                <h1 className="text-xl font-semibold mb-3">Your Card</h1>
                {randomCard ? (
                  <p className="text-lg">
                    {randomCard.value} of {randomCard.suit}
                  </p>
                ) : (
                  <p className="text-lg text-gray-500">Enter a valid date to generate a card based on numerology calculations</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full max-w-2xl bg-[#1610349c] backdrop-blur-md">
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle className="text-2xl sm:text-3xl">Handbook</CardTitle>
              <div className="flex gap-2 items-center">
                <Instructions />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Suit</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {suits.map((suit) => (
                  <Button
                    key={suit}
                    onClick={() => handleSuitClick(suit)}
                    variant={selectedSuit === suit ? "default" : "outline"}
                    className="text-2xl sm:text-3xl py-6"
                  >
                    {suit}
                  </Button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Value</h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3">
                {values.map((value) => (
                  <Button
                    key={value}
                    onClick={() => handleValueClick(value)}
                    variant={selectedValue === value ? "default" : "outline"}
                    className="text-xl sm:text-2xl py-4"
                  >
                    {value}
                  </Button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Reading Focus</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {readingOptions.map((option) => (
                  <Button
                    key={option}
                    onClick={() => handleReadingOptionChange(option)}
                    variant={selectedReadingOption === option ? "default" : "outline"}
                    className="capitalize"
                  >
                    {option.replaceAll('_', ' ')}
                  </Button>
                ))}
              </div>
            </div>
            {cardInfo && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-3">Card Meaning</h2>
                <Button
                  onClick={toggleReversed}
                  variant="outline"
                  className="mb-3"
                >
                  {isReversed ? "Reversed Meaning" : "Standard Meaning"}
                </Button>
                <small className="ml-2">click to show {isReversed ? "upright" : "reversed"} meaning</small>
                <div className="bg-secondary p-4 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {isReversed ? "Reversed Meaning" : "Standard Meaning"}:
                  </h3>
                  <p className="text-base sm:text-lg mb-4">
                    {isReversed ? cardInfo.reversed : cardInfo.upright}
                  </p>
                  <h3 className="text-lg font-semibold mb-2">Description:</h3>
                  <p className="text-base sm:text-lg mb-4">{cardInfo.description}</p>
                  <h3 className="text-lg font-semibold mb-2 capitalize">{selectedReadingOption.replace('_', ' ')} Interpretation:</h3>
                  {selectedReadingOption === 'person' && (
                    <p className="text-base sm:text-lg">{cardInfo.person}</p>
                  )}
                  {selectedReadingOption === 'love' && (
                    <p className="text-base sm:text-lg">{cardInfo.love}</p>
                  )}
                  {selectedReadingOption === 'career' && (
                    <p className="text-base sm:text-lg">{cardInfo.career}</p>
                  )}
                  {selectedReadingOption === 'yes_or_no' && (
                    <p className="text-base sm:text-lg">{cardInfo.yes_or_no}</p>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

      </Vortex>
    </main>
  );
}