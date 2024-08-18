import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function Instructions() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Instructions</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-xl">
          <DrawerHeader>
            <DrawerTitle>Tarot Card Guide</DrawerTitle>
            <DrawerDescription>How to use the cards and understand the suits</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0 space-y-6 overflow-y-auto max-h-[60vh]">
            <section>
              <h3 className="font-semibold text-lg mb-2">How to use the cards in spreads</h3>
              <p className="text-sm mb-3">
                Feel free to experiment with your own spreads and to use tarot spreads with these cards.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">For "yes" or "no" questions:</h4>
                  <p className="text-sm">
                    You can use the color of the suits to find the answer. First, pull 5 cards. Look at the line of 5. If the majority of the cards are red suits then it's a "yes." If the majority of the cards are black suits, then it's a "no."
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">For the full tea:</h4>
                  <p className="text-sm">
                    Start pulling 12 cards counterclockwise to see how the story will progress. The card at 12 and 6 o'clock will show the possible outcomes, so pay attention to those. The 9 and 3 o'clock positions are the past and present situations pertaining to your question.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">For a quick answer:</h4>
                  <p className="text-sm">
                    You can always pull one card for a minor understanding of a matter. Just be sure to interpret the card to its full capacity.
                  </p>
                </div>
              </div>
            </section>
            <section>
              <h3 className="font-semibold text-lg mb-2">What the suits mean</h3>
              <p className="text-sm mb-3">
                If you're familiar with traditional tarot, you can use this guide to relate playing cards to the tarot deck. To understand more about tarot cards and what they mean, head here.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">♠️ Spades</h4>
                  <p className="text-sm">
                    Similar to the sword suit in a tarot deck. The spade suit represents communication and challenges.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">♥️ Hearts</h4>
                  <p className="text-sm">
                    Similar to the cups suit in a tarot deck. The heart suit depicts emotions, family, home, and relationships.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">♣️ Clubs</h4>
                  <p className="text-sm">
                    Similar to the wands suit in a tarot deck. The club suit defines change and action that's swiftly coming.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">♦️ Diamonds</h4>
                  <p className="text-sm">
                    Similar to the disks or pentacles suit in a tarot deck. The diamond suit is all about money, confidence, and finances.
                  </p>
                </div>
              </div>
            </section>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}