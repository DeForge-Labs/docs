'use client';

import { Volume2, Pause } from 'lucide-react';
import { cn } from '@/lib/cn';
import { Badge } from './badge';
import { useState, useRef, useEffect } from 'react';

// Global audio instance to ensure only one audio plays at a time
let globalAudio: HTMLAudioElement | null = null;
let globalSetPlaying: ((playing: boolean) => void) | null = null;

export type VoiceBadgeProps = {
  children: React.ReactNode;
  audioUrl?: string;
  className?: string;
};

export function VoiceBadge({ children, audioUrl, className }: VoiceBadgeProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioUrl) return;

    // Create audio instance
    audioRef.current = new Audio(audioUrl);
    const audio = audioRef.current;

    // Add event listeners
    const handleEnded = () => setIsPlaying(false);
    const handlePause = () => setIsPlaying(false);
    
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('pause', handlePause);
      audio.pause();
      audioRef.current = null;
    };
  }, [audioUrl]);

  const toggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    if (isPlaying) {
      // Pause current audio
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Stop any other playing audio
      if (globalAudio && globalAudio !== audioRef.current) {
        globalAudio.pause();
        if (globalSetPlaying) {
          globalSetPlaying(false);
        }
      }

      // Play this audio
      audioRef.current.currentTime = 0; // Reset to start
      audioRef.current.play();
      setIsPlaying(true);
      
      // Set as global audio
      globalAudio = audioRef.current;
      globalSetPlaying = setIsPlaying;
    }
  };
  
  return (
    <Badge className={cn('inline-flex items-center gap-2', className)}>
      {children}
      {audioUrl && (
        <>
          {isPlaying ? (
            <Pause 
              className="inline-block h-4 w-4 cursor-pointer hover:text-fd-primary transition-colors" 
              onClick={toggleAudio}
            />
          ) : (
            <Volume2 
              className="inline-block h-4 w-4 cursor-pointer hover:text-fd-primary transition-colors" 
              onClick={toggleAudio}
            />
          )}
        </>
      )}
    </Badge>
  );
}
