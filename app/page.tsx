'use client'

import { Instructions } from "@/components/instructions";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Vortex } from "@/components/ui/vortex";
import getCardMeaning, { Suit, CardValue } from "@/lib/get-card-meaning";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [selectedSuit, setSelectedSuit] = useState<Suit | null>(null);
  const [selectedValue, setSelectedValue] = useState<CardValue | null>(null);
  const [cardInfo, setCardInfo] = useState<{ meaning: string, context: string } | null>(null);

  const suits: Suit[] = ['♠️', '♥️', '♣️', '♦️'];
  const values: CardValue[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'Joker'];

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
      setCardInfo(getCardMeaning(value, selectedSuit || '♠️'));
    } else {
      setCardInfo(null);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center w-full h-full p-2"
      >
        <Card className="w-full max-w-2xl bg-[#1610349c] backdrop-blur-md">
          <CardHeader >
            <div className="flex justify-between">
              <CardTitle className="text-2xl sm:text-3xl">Carot</CardTitle>
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

            {cardInfo && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-3">Card Meaning</h2>
                <div className="bg-secondary p-4 rounded-lg">
                  <p className="text-lg sm:text-xl font-semibold mb-2">{cardInfo.meaning}</p>
                  <p className="text-base sm:text-lg">{cardInfo.context}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </Vortex>
    </main>
  );
}