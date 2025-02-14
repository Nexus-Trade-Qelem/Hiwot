"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Heart, HeartHandshake, Music2, Play, Pause,
  Quote, Book, Star, Sparkles, Camera, Gift, Check
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LoveLetter from "@/components/LoveLetter";

// Enhanced Love Songs with More Details
const LOVE_SONGS = [
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    youtubeId: "2Vv-BfVoq4g",
    description: "Our perfect love story...",
    mood: "Romantic",
    year: 2017,
    specialMeaning: "Reminds me of the moment I knew you were the one"
  },
  {
    title: "All of Me",
    artist: "John Legend",
    youtubeId: "450p7goxZqg",
    description: "Every part of me loves every part of you...",
    mood: "Passionate",
    year: 2013,
    specialMeaning: "How deeply I love every part of you"
  },
  {
    title: "Can't Help Falling in Love",
    artist: "Elvis Presley",
    youtubeId: "vGJTaP6anOU",
    description: "Wise men say, only fools rush in...",
    mood: "Classic Romance",
    year: 1961,
    specialMeaning: "How I fell for you without hesitation"
  },
  {
    title: "Thinking Out Loud",
    artist: "Ed Sheeran",
    youtubeId: "lp-EO5I3b44",
    description: "I'm thinking 'bout how people fall in love...",
    mood: "Tender",
    year: 2014,
    specialMeaning: "Our love that grows stronger with time"
  },
  {
    title: "Just the Way You Are",
    artist: "Bruno Mars",
    youtubeId: "LjhCEhWiKXk",
    description: "When I see your face, there's not a thing that I would change...",
    mood: "Adoring",
    year: 2010,
    specialMeaning: "How beautiful you are, just as you are"
  },
  {
    title: "Endless Love",
    artist: "Lionel Richie & Diana Ross",
    youtubeId: "Uu2GqhDqruk",
    description: "Two hearts, two hearts that beat as one...",
    mood: "Eternal Love",
    year: 1981,
    specialMeaning: "Our love that knows no boundaries"
  },
  {
    title: "A Thousand Years",
    artist: "Christina Perri",
    youtubeId: "rtOvBOqyZzw",
    description: "I have died every day waiting for you...",
    mood: "Devotional",
    year: 2011,
    specialMeaning: "How I've waited for you my entire life"
  },
  {
    title: "Love on the Brain",
    artist: "Rihanna",
    youtubeId: "HBxt_-EEgWY",
    description: "And you got me like, oh, what you want from me...",
    mood: "Intense",
    year: 2016,
    specialMeaning: "The passionate connection we share"
  },
  {
    title: "Make You Feel My Love",
    artist: "Adele",
    youtubeId: "0put0_a--Ng",
    description: "I'd go hungry, I'd go black and blue...",
    mood: "Unconditional",
    year: 2008,
    specialMeaning: "My commitment to you, no matter what"
  },
  {
    title: "I Don't Want to Miss a Thing",
    artist: "Aerosmith",
    youtubeId: "JkK8g6FMEXE",
    description: "I could stay awake just to hear you breathing...",
    mood: "Intense Love",
    year: 1998,
    specialMeaning: "How every moment with you is precious"
  }
];

// Enhanced Love Memories
const LOVE_MEMORIES = [
  {
    title: "First Meeting",
    description: "The day our eyes first met..., The day I lay eyes on you",
    icon: "💫",
    date: "Special Day"
  },
  {
    title: "Every Day",
    description: "Every moment spent together..., Every moment with you",
    icon: "💖",
    date: "Unforgettable Memories"
  }
];



export default function ValentinePage() {
  const [state, setState] = useState({
    currentSong: null as number | null,
    isPlaying: false,
    lovePoints: 0,
    activeChallenge: null as number | null,
    showSpecialSurprise: false,
    completedChallenges: [] as string[],
    currentChallenge: null as {
      title: string,
      currentQuestionIndex: number,
      answers: string[]
    } | null,
    surpriseGenerated: false,
    windowWidth: 0
  });

  // Romantic Surprise Generator with more personalized content
  const generateRomanticSurprise = () => {
    const surprises = [
      {
        title: "Tuesday Night Surprise",
        description: "A magical evening awaits you, my love! 💕",
        details: "Dress up for a special date night. I have something extraordinary planned just for you."
      },
      {
        title: "Surprise Gift",
        description: "A token of my endless love is coming your way! 🎁",
        details: "Get ready to unwrap a gift that symbolizes our unique connection."
      },
      {
        title: "Love Adventure",
        description: "Prepare for a romantic journey! ✨",
        details: "I've planned a surprise that will create memories we'll cherish forever."
      }
    ];
    return surprises[Math.floor(Math.random() * surprises.length)];
  };

  // Handle window-related logic safely
  useEffect(() => {
    const handleResize = () => {
      setState(prev => ({
        ...prev,
        windowWidth: typeof window !== 'undefined' ? window.innerWidth : 0
      }));
    };

    // Initial set
    handleResize();

    // Add event listener
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Song Playback Handler
  const handleSongPlay = useCallback((index: number) => {
    setState(prev => ({
      ...prev,
      currentSong: index,
      isPlaying: prev.currentSong === index ? !prev.isPlaying : true
    }));
  }, []);


  // Floating Hearts Animation
  const FloatingHearts = () => {
    const [hearts, setHearts] = useState<{ id: number, x: number, y: number }[]>([]);

    useEffect(() => {
      const generateHearts = () => {
        const width = typeof window !== 'undefined' ? window.innerWidth : 500;
        return Array.from({ length: 40 }).map((_, i) => ({
          id: i,
          x: Math.random() * width,
          y: Math.random() * 100
        }));
      };

      setHearts(generateHearts());
    }, [state.windowWidth]);

    return (
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{
              y: "100vh",
              x: heart.x,
              opacity: 0.5,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: "-100vh",
              x: heart.x,
              rotate: 360,
              opacity: [0.5, 0.2, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="absolute text-3xl"
          >
            {["💖", "💝", "💗", "💓", "✨"][Math.floor(Math.random() * 5)]}
          </motion.div>
        ))}
      </div>
    );
  };

  // Add state for current surprise
  const [currentSurprise, setCurrentSurprise] = useState(
    generateRomanticSurprise()
  );

  // Modify surprise generation logic
  const handleGenerateSurprise = () => {
    const newSurprise = generateRomanticSurprise();
    setCurrentSurprise(newSurprise);
    setState(prev => ({ ...prev, surpriseGenerated: true }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-red-50 overflow-hidden relative">
      <FloatingHearts />

      <div className="container mx-auto px-4 py-8 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-pink-100"
        >
          <LoveLetter />
          {/* Love Playlist Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-pink-600 mb-6 flex items-center">
              <Music2 className="mr-4 text-red-500" /> Our Playlist
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {LOVE_SONGS.map((song, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-pink-50/50 rounded-xl p-6 shadow-md transition-all"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="font-semibold text-xl">{song.title}</h3>
                      <p className="text-sm text-gray-600">{song.artist}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleSongPlay(index)}
                      className="text-pink-500 hover:bg-pink-100"
                    >
                      {state.currentSong === index && state.isPlaying
                        ? <Pause />
                        : <Play />}
                    </Button>
                  </div>
                  <div className="text-xs text-pink-500 flex justify-between">
                    <span>Mood: {song.mood}</span>
                    <span>Year: {song.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Love Memories Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-pink-600 mb-6 flex items-center">
              <Book className="mr-4 text-purple-500" /> Our Memoriess
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {LOVE_MEMORIES.map((memory, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-6 shadow-md border border-pink-100"
                >
                  <div className="text-4xl mb-4">{memory.icon}</div>
                  <h3 className="font-semibold text-xl mb-2">{memory.title}</h3>
                  <p className="text-gray-600 mb-4">{memory.description}</p>
                  <div className="text-sm text-pink-500">{memory.date}</div>
                </motion.div>
              ))}
            </div>
          </section>
          {/* Romantic Surprise Generator */}
          <section className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <Button
                variant="outline"
                className="bg-pink-50 text-pink-600 hover:bg-pink-100 flex items-center"
                onClick={handleGenerateSurprise}
              >
                <Gift className="mr-2" /> Generate Romantic Surprise
              </Button>
            </motion.div>
            {state.surpriseGenerated && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 text-center bg-pink-50 rounded-xl p-6"
              >
                <Gift className="mx-auto text-pink-600 w-16 h-16 mb-4" />
                <h3 className="text-2xl font-bold text-pink-600 mb-4">
                  {currentSurprise.title} ��
                </h3>
                <p className="text-gray-700 mb-4">
                  {currentSurprise.description}
                </p>
                <p className="text-sm text-pink-500 italic">
                  {currentSurprise.details}
                </p>
                <Button
                  className="mt-4 bg-pink-500 hover:bg-pink-600"
                  onClick={() => {
                    // Optional: Add more interaction or copy to clipboard
                    navigator.clipboard.writeText(currentSurprise.details);
                  }}
                >
                  Reveal Full Surprise
                </Button>
              </motion.div>
            )}
          </section>
        </motion.div>
      </div>
    </div>
  );
}