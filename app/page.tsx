"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { 
  Heart, HeartHandshake, Music2, Music4, Play, Pause, 
  Quote, Book, Star, ArrowRight, Youtube 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useRouter } from 'next/navigation';

// Enhanced Love Songs with YouTube Links
const LOVE_SONGS = [
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    youtubeId: "2Vv-BfVoq4g",
    description: "Our perfect love story..."
  },
  {
    title: "All of Me",
    artist: "John Legend",
    youtubeId: "450p7goxZqg",
    description: "Every part of me loves every part of you..."
  },
  {
    title: "Can't Help Falling in Love",
    artist: "Elvis Presley",
    youtubeId: "vGJTaP6anOU",
    description: "Wise men say, only fools rush in..."
  }
];

// Love Challenges and Interactive Elements
const LOVE_CHALLENGES = [
  {
    title: "Memory Lane Challenge",
    description: "Recall our most special moment together",
    points: 50
  },
  {
    title: "Secret Message Decoder",
    description: "Decode a hidden message of love",
    points: 75
  },
  {
    title: "Love Language Quiz",
    description: "Discover how we express love",
    points: 100
  }
];

export default function ValentineProposal() {
  const [answer, setAnswer] = useState<boolean | null>(null);
  const [noCount, setNoCount] = useState(0);
  const router = useRouter();

  // Playful "No" button messages
  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure, Mearey?",
      "But we're perfect together! 🥺",
      "One more chance? 💕",
      "Think about it again! 💖",
      "I'll make you smile! 😊",
      "Our love story is waiting! ✨",
      "You're breaking my heart! 💔",
      "Pretty please? 🙏",
      "I promise to be the best Valentine! 💝",
      "Let's make memories together! 🌈",
      "You're my dream come true! 💫",
      "Just give love a chance! 💘",
      "We're meant to be! 💞",
      "My heart beats only for you! 💓"
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  // Make "No" button move around
  const moveNoButton = () => {
    setNoCount(prev => prev + 1);
  };

  const handleAnswer = (response: boolean) => {
    if (response) {
      setAnswer(true);
      setTimeout(() => {
        router.push('/love');
      }, 2000);
    } else {
      moveNoButton();
    }
  };

  // Calculate dynamic button sizes and positions
  const getYesButtonSize = () => {
    const baseSize = 1;
    const increment = 0.15;
    const maxSize = 2.5;
    return Math.min(baseSize + (noCount * increment), maxSize);
  };

  const getNoButtonStyle = () => {
    // Randomly move the "No" button
    const maxMove = 50; // pixels
    return {
      position: 'relative' as const,
      left: noCount > 0 ? `${Math.random() * maxMove - maxMove/2}px` : 0,
      top: noCount > 0 ? `${Math.random() * maxMove - maxMove/2}px` : 0,
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-red-50 flex items-center justify-center">
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="text-center p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl max-w-md w-full"
      >
        {answer === null ? (
          <>
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 0.5, 
                repeat: Infinity 
              }}
            >
              <Heart className="mx-auto text-pink-500 w-24 h-24 mb-6" />
            </motion.div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Hiwiye, Mearey, will you be my Valentine?
            </h1>
            
            <p className="text-gray-600 mb-6">
              Every moment with you is a treasure I cherish...
            </p>
            
            <div className="flex justify-center gap-4">
              <motion.div
                animate={{ scale: getYesButtonSize() }}
                className="transform origin-center"
              >
                <Button 
                  onClick={() => handleAnswer(true)}
                  className="bg-pink-500 hover:bg-pink-600 text-white"
                  size="lg"
                >
                  Yes, I will! 💕
                </Button>
              </motion.div>
              
              <motion.div 
                style={getNoButtonStyle()}
                animate={{ 
                  scale: noCount > 0 ? 1.1 : 1,
                  opacity: noCount > 0 ? 0.8 : 1
                }}
              >
                <Button 
                  onClick={() => handleAnswer(false)}
                  variant="outline"
                  className="border-pink-300 text-pink-600 hover:bg-pink-50"
                  size="lg"
                >
                  {getNoButtonText()}
                </Button>
              </motion.div>
            </div>

            {noCount > 5 && (
              <p className="mt-4 text-sm text-pink-600 italic">
                Come on, Hiwiye! My heart is waiting... 💖
              </p>
            )}
          </>
        ) : answer === true ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <HeartHandshake className="mx-auto text-pink-500 w-24 h-24 mb-6" />
            
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Yay! Let's create magic together! 💖
            </h2>
            
            <p className="text-gray-600">
              Redirecting to our special Valentine's page...
            </p>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <Heart className="mx-auto text-red-500 w-24 h-24 mb-6 opacity-50" />
            
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Maybe next time... 💔
            </h2>
            
            <p className="text-gray-600">
              Love can't be forced, but hope remains...
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
