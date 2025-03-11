
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  Search, 
  Filter, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  XCircle
} from "lucide-react";
import { 
  questions, 
  Question,
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

const QuestionsPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [difficulty, setDifficulty] = useState<string>("all");
  const [answeredQuestions, setAnsweredQuestions] = useState<Record<number, boolean>>({});
  
  const currentCategory = categories.find(cat => cat.id === categoryId) || categories[0];
  
  // Filter questions based on category, search term, and difficulty
  const filteredQuestions = questions.filter(question => {
    const matchesCategory = categoryId === "all" || question.category === categoryId;
    const matchesSearch = question.question.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = difficulty === "all" || question.difficulty === difficulty;
    return matchesCategory && matchesSearch && matchesDifficulty;
  });

  const markAsAnswered = (questionId: number, isAnswered: boolean) => {
    setAnsweredQuestions(prev => ({
      ...prev,
      [questionId]: isAnswered
    }));
  };

  const answeredCount = Object.values(answeredQuestions).filter(Boolean).length;
  const totalQuestions = filteredQuestions.length;
  const progress = totalQuestions > 0 ? (answeredCount / totalQuestions) * 100 : 0;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
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
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setAnsweredQuestions({})}
            className="w-full sm:w-auto"
          >
            Reset Progress
          </Button>
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
                  <div className="flex flex-col md:flex-row md:items-center text-left">
                    <div className="flex-grow">
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
