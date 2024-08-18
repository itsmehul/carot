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
        {/* <Button variant="outline">Instructions</Button> */}
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Instructions
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-xl">
          <DrawerHeader>
            <DrawerTitle>Tarot Card Guide</DrawerTitle>
            <DrawerDescription>How to use playing cards for tarot readings</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0 space-y-6 overflow-y-auto max-h-[60vh]">
            <section>
              <h3 className="font-semibold text-lg mb-2">Reading Techniques</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">Yes/No Questions</h4>
                  <p className="text-sm">
                    Pull 5 cards. Majority red suits = Yes, majority black suits = No.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Full Reading</h4>
                  <p className="text-sm">
                    Pull 12 cards counterclockwise. 12 and 6 o'clock show possible outcomes. 9 and 3 o'clock represent past and present.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Quick Answer</h4>
                  <p className="text-sm">
                    Pull one card for a minor understanding of a matter.
                  </p>
                </div>
              </div>
            </section>
            <section>
              <h3 className="font-semibold text-lg mb-2">Understanding the Suits</h3>
              <p className="text-sm mb-3">
                Playing cards can be used as a substitute for traditional tarot cards. Here's how the suits correspond:
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">♥️ Hearts (Cups)</h4>
                  <p className="text-sm">
                    Represents water element. Depicts emotions, relationships, intuition, and family.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">♠️ Spades (Swords)</h4>
                  <p className="text-sm">
                    Represents air element. Symbolizes thoughts, communication, fears, and anxieties.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">♦️ Diamonds (Pentacles)</h4>
                  <p className="text-sm">
                    Represents earth element. Relates to finances, work, health, and material aspects.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">♣️ Clubs (Wands)</h4>
                  <p className="text-sm">
                    Represents fire element. Signifies projects, passions, motivation, and inspiration.
                  </p>
                </div>
              </div>
            </section>
            <section>
              <h3 className="font-semibold text-lg mb-2">Court Cards and Special Cards</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">King</h4>
                  <p className="text-sm">
                    Represents authority figures, protectors, and paternal energy.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Queen</h4>
                  <p className="text-sm">
                    Symbolizes motherly figures, matriarchal energy, caregivers, and nurturers.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Jack</h4>
                  <p className="text-sm">
                    Combines the energy of both Knight and Page from traditional tarot.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Joker</h4>
                  <p className="text-sm">
                    Equivalent to the Fool card, representing new beginnings and the start of a journey.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">Tips for Reading</h3>
              <ul className="list-disc list-inside text-sm space-y-2">
                <li>Rely on your knowledge of suit and number meanings</li>
                <li>Use intuition to interpret Jack as either Knight or Page energy</li>
                <li>Remember that Major Arcana are not directly represented</li>
                <li>Consider adding numbers of multiple cards to reference Major Arcana meanings</li>
              </ul>
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