
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ProgressContextType {
  answeredQuestions: Record<number, boolean>;
  bookmarkedQuestions: number[];
  markAsAnswered: (questionId: number, isAnswered: boolean) => void;
  toggleBookmark: (questionId: number) => void;
  isBookmarked: (questionId: number) => boolean;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

interface ProgressProviderProps {
  children: ReactNode;
}

export const ProgressProvider = ({ children }: ProgressProviderProps) => {
  const [answeredQuestions, setAnsweredQuestions] = useState<Record<number, boolean>>({});
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<number[]>([]);

  // Load state from localStorage on initial render
  useEffect(() => {
    const storedAnswered = localStorage.getItem('answeredQuestions');
    const storedBookmarks = localStorage.getItem('bookmarkedQuestions');
    
    if (storedAnswered) {
      setAnsweredQuestions(JSON.parse(storedAnswered));
    }
    
    if (storedBookmarks) {
      setBookmarkedQuestions(JSON.parse(storedBookmarks));
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('answeredQuestions', JSON.stringify(answeredQuestions));
  }, [answeredQuestions]);
  
  useEffect(() => {
    localStorage.setItem('bookmarkedQuestions', JSON.stringify(bookmarkedQuestions));
  }, [bookmarkedQuestions]);

  const markAsAnswered = (questionId: number, isAnswered: boolean) => {
    setAnsweredQuestions(prev => ({
      ...prev,
      [questionId]: isAnswered
    }));
  };

  const toggleBookmark = (questionId: number) => {
    setBookmarkedQuestions(prev => {
      if (prev.includes(questionId)) {
        return prev.filter(id => id !== questionId);
      } else {
        return [...prev, questionId];
      }
    });
  };

  const isBookmarked = (questionId: number) => {
    return bookmarkedQuestions.includes(questionId);
  };

  const resetProgress = () => {
    setAnsweredQuestions({});
    setBookmarkedQuestions([]);
  };

  return (
    <ProgressContext.Provider value={{
      answeredQuestions,
      bookmarkedQuestions,
      markAsAnswered,
      toggleBookmark,
      isBookmarked,
      resetProgress
    }}>
      {children}
    </ProgressContext.Provider>
  );
};
