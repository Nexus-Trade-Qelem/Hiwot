import React from 'react';
import { Heart, Sparkles, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const LoveLetterContent = () => (
  <div className="relative">
    {/* Decorative Bow */}
    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
      <div className="relative">
        <div className="absolute w-16 h-16 bg-red-400 rounded-full transform -rotate-45 -left-8"></div>
        <div className="absolute w-16 h-16 bg-red-400 rounded-full transform rotate-45 left-8"></div>
        <div className="absolute w-8 h-8 bg-red-500 rounded-full top-6 left-4"></div>
        <div className="absolute w-4 h-24 bg-red-400 transform rotate-45 top-8 left-4"></div>
        <div className="absolute w-4 h-24 bg-red-400 transform -rotate-45 top-8 left-4"></div>
      </div>
    </div>

    <Card className="bg-white/95 backdrop-blur-sm p-8 md:p-12 border-2 border-pink-200 rounded-3xl shadow-xl relative overflow-hidden">
      {/* Decorative Corner Hearts */}
      <div className="absolute top-4 left-4">
        <Heart className="w-6 h-6 text-pink-300" />
      </div>
      <div className="absolute top-4 right-4">
        <Heart className="w-6 h-6 text-pink-300" />
      </div>
      <div className="absolute bottom-4 left-4">
        <Heart className="w-6 h-6 text-pink-300" />
      </div>
      <div className="absolute bottom-4 right-4">
        <Heart className="w-6 h-6 text-pink-300" />
      </div>

      {/* Letter Content */}
      <div className="text-center mb-8">
        <Sparkles className="inline-block w-8 h-8 text-pink-500 mb-4" />
        <h1 className="text-4xl font-serif text-pink-600 mb-6">My Dearest Hiwi</h1>
      </div>

      <div className="space-y-6 text-gray-700 font-serif leading-relaxed max-w-2xl mx-auto">
        <p className="indent-6">
          From the moment our paths crossed, you've painted my world with colors I never knew existed. Your smile has become my daily sunshine, your laughter my favorite melody, and your love the greatest gift I could ever receive.
        </p>
        
        <p className="indent-6">
          Every moment with you feels like a beautiful dream come true. Your kindness, your strength, and your gentle spirit inspire me to be better each day. You're not just my partner – you're my best friend, my confidante, and my greatest adventure.
        </p>
        
        <p className="indent-6">
          I cherish the way you understand me without words, support me without conditions, and love me without hesitation. Our love story is my favorite of all time, and I'm grateful for every chapter we write together.
        </p>
        
        <p className="indent-6">
          As we celebrate this Valentine's Day, I want you to know that You are my present and my future, my happiness and my home.
        </p>

        <div className="text-right mt-8 mr-8">
          <p className="text-pink-600">Yours Truly,</p>
          <p className="font-bold text-pink-700 mt-2">Kidus</p>
        </div>
      </div>

      {/* Decorative Sparkles */}
      <div className="absolute top-1/4 left-4">
        <Sparkles className="w-4 h-4 text-pink-300" />
      </div>
      <div className="absolute bottom-1/4 right-4">
        <Sparkles className="w-4 h-4 text-pink-300" />
      </div>
    </Card>
  </div>
);

const LoveLetter = () => {
  return (
    <section className="mb-16 text-center">
      <Dialog>
        <DialogTrigger asChild>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button 
              variant="outline" 
              className="bg-pink-50 hover:bg-pink-100 text-pink-600 border-pink-200 shadow-md"
            >
              <Mail className="mr-2 h-5 w-5" />
              Open My Letter
            </Button>
          </motion.div>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <LoveLetterContent />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default LoveLetter;