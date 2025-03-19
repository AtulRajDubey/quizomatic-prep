
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  Search, 
  Filter, 
  CheckCircle2, 
  XCircle,
  BookmarkIcon
} from "lucide-react";
import { 
  questions, 
  categories
} from "@/data/questions";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useProgress } from "@/contexts/ProgressContext";
import { toast } from "sonner";

const QuestionsPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [difficulty, setDifficulty] = useState<string>("all");
  
  const { 
    answeredQuestions, 
    markAsAnswered, 
    toggleBookmark, 
    isBookmarked 
  } = useProgress();
  
  const currentCategory = categories.find(cat => cat.id === categoryId) || categories[0];
  
  // Filter questions based on category, search term, and difficulty
  const filteredQuestions = questions.filter(question => {
    const matchesCategory = categoryId === "all" || question.category === categoryId;
    const matchesSearch = question.question.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = difficulty === "all" || question.difficulty === difficulty;
    return matchesCategory && matchesSearch && matchesDifficulty;
  });

  const answeredCount = filteredQuestions.filter(q => answeredQuestions[q.id]).length;
  const totalQuestions = filteredQuestions.length;
  const progress = totalQuestions > 0 ? (answeredCount / totalQuestions) * 100 : 0;

  const handleBookmarkToggle = (questionId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    toggleBookmark(questionId);
    toast(isBookmarked(questionId) ? "Bookmark removed" : "Bookmark added", {
      description: isBookmarked(questionId) 
        ? "Question removed from your bookmarks" 
        : "Question added to your bookmarks",
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Button 
        variant="ghost" 
        className="mb-6" 
        onClick={() => navigate("/topics/all")}
      >
        <ChevronLeft className="mr-2 h-4 w-4" /> Back to Topics
      </Button>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{currentCategory.name}</h1>
        <p className="text-lg text-gray-600 mb-4">{currentCategory.description}</p>
        
        <div className="bg-gray-100 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <div className="mr-4">
              <span className="text-sm text-gray-500">Progress</span>
              <div className="flex items-center">
                <span className="font-medium">{answeredCount} / {totalQuestions}</span>
                <div className="h-2 w-24 bg-gray-200 rounded-full ml-2">
                  <div
                    className="h-2 bg-brand-600 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate("/bookmarks")}
            >
              <BookmarkIcon className="h-4 w-4 mr-2" />
              My Bookmarks
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-6 space-y-4 md:space-y-0 md:flex md:space-x-4 items-center">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search questions..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="w-full md:w-48">
          <Select value={difficulty} onValueChange={setDifficulty}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="Easy">Easy</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Hard">Hard</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        {filteredQuestions.length > 0 ? (
          <Accordion type="single" collapsible className="space-y-4">
            {filteredQuestions.map((question) => (
              <AccordionItem 
                key={question.id} 
                value={`question-${question.id}`}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex justify-between w-full pr-4">
                    <div className="flex-grow text-left">
                      <div className="flex items-center">
                        <Badge variant={
                          question.difficulty === "Easy" ? "outline" : 
                          question.difficulty === "Medium" ? "secondary" : 
                          "destructive"
                        } className="mr-2">
                          {question.difficulty}
                        </Badge>
                        {answeredQuestions[question.id] && (
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Answered
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-lg font-medium mt-2">{question.question}</h3>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className={isBookmarked(question.id) ? "text-yellow-500" : "text-gray-400"}
                      onClick={(e) => handleBookmarkToggle(question.id, e)}
                    >
                      <BookmarkIcon className={`h-5 w-5 ${isBookmarked(question.id) ? "fill-current" : ""}`} />
                    </Button>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50 border-t">
                  <div className="prose max-w-none">
                    <h4 className="text-lg font-medium mb-2">Answer:</h4>
                    <div className="bg-white p-4 rounded-md border border-gray-200">
                      <p className="text-gray-700 whitespace-pre-line">{question.answer}</p>
                    </div>
                    
                    <div className="mt-6 flex flex-wrap gap-2">
                      {question.topics.map(topic => (
                        <Badge key={topic} variant="secondary" className="bg-gray-100">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="mt-6 flex justify-between items-center">
                      <Button
                        variant={answeredQuestions[question.id] ? "outline" : "default"}
                        className={answeredQuestions[question.id] ? "text-green-700" : "bg-brand-600 hover:bg-brand-700"}
                        onClick={(e) => {
                          e.stopPropagation();
                          markAsAnswered(question.id, !answeredQuestions[question.id]);
                          if (!answeredQuestions[question.id]) {
                            toast("Question marked as answered", {
                              description: "Your progress has been updated.",
                            });
                          }
                        }}
                      >
                        {answeredQuestions[question.id] ? (
                          <>
                            <CheckCircle2 className="mr-2 h-4 w-4" />
                            Answered
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="mr-2 h-4 w-4" />
                            Mark as Answered
                          </>
                        )}
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBookmarkToggle(question.id, e);
                        }}
                      >
                        <BookmarkIcon className={`h-4 w-4 mr-2 ${isBookmarked(question.id) ? "fill-current text-yellow-500" : ""}`} />
                        {isBookmarked(question.id) ? "Bookmarked" : "Bookmark"}
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <Card>
            <CardContent className="pt-6 flex flex-col items-center">
              <XCircle className="h-12 w-12 text-gray-400 mb-4" />
              <p className="text-lg text-gray-600 text-center">
                No questions match your search criteria.
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setDifficulty("all");
                }}
              >
                Reset Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default QuestionsPage;
