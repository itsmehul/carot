'use client'

import { Instructions } from "@/components/instructions";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import getCardMeaning, { Suit, CardValue } from "@/lib/get-card-meaning";
import { useState } from "react";

export default function Home() {
  const [selectedSuit, setSelectedSuit] = useState<Suit | null>(null);
  const [selectedValue, setSelectedValue] = useState<CardValue | null>(null);
  const [meaning, setMeaning] = useState<string | null>(null);

  const suits: Suit[] = ['♠️', '♥️', '♣️', '♦️'];
  const values: CardValue[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'Joker'];

  const handleSuitClick = (suit: Suit) => {
    setSelectedSuit(suit);
    if (selectedValue && suit !== '♠️') {
      setMeaning(getCardMeaning(selectedValue, suit));
    } else {
      setMeaning(null);
    }
  };

  const handleValueClick = (value: CardValue) => {
    setSelectedValue(value);
    if (selectedSuit || value === 'Joker') {
      setMeaning(getCardMeaning(value, selectedSuit || '♠️'));
    } else {
      setMeaning(null);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 sm:p-8 md:p-16 lg:p-24">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 sm:mb-8">Carot</h1>
      <Card className="w-full max-w-4xl">
        <CardHeader >
          <div className="flex justify-between">
            <CardTitle className="text-2xl sm:text-3xl">Select a Card</CardTitle>
            <Instructions />
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

          {meaning && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-3">Card Meaning</h2>
              <p className="text-lg sm:text-xl bg-secondary p-4 rounded-lg">{meaning}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  );
}