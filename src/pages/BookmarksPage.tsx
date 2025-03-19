
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, BookmarkIcon, XCircle } from "lucide-react";
import { useProgress } from "@/contexts/ProgressContext";
import { questions } from "@/data/questions";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const BookmarksPage = () => {
  const navigate = useNavigate();
  const { bookmarkedQuestions, toggleBookmark, isBookmarked } = useProgress();
  
  const bookmarkedItems = questions.filter(q => bookmarkedQuestions.includes(q.id));
  
  const handleRemoveBookmark = (questionId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    toggleBookmark(questionId);
    toast("Bookmark removed", {
      description: "Question removed from your bookmarks",
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        className="mb-6" 
        onClick={() => navigate(-1)}
      >
        <ChevronLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Bookmarked Questions</h1>
        <p className="text-lg text-gray-600 mb-4">
          Questions you've saved for later review
        </p>
      </div>

      {bookmarkedItems.length > 0 ? (
        <Accordion type="single" collapsible className="space-y-4">
          {bookmarkedItems.map((question) => (
            <AccordionItem
              key={question.id}
              value={`question-${question.id}`}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                <div className="flex justify-between w-full pr-4">
                  <div className="text-left">
                    <div className="flex items-center">
                      <Badge variant={
                        question.difficulty === "Easy" ? "outline" : 
                        question.difficulty === "Medium" ? "secondary" : 
                        "destructive"
                      } className="mr-2">
                        {question.difficulty}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-medium mt-2">{question.question}</h3>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-yellow-500"
                    onClick={(e) => handleRemoveBookmark(question.id, e)}
                  >
                    <BookmarkIcon className="h-5 w-5 fill-current" />
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
              You haven't bookmarked any questions yet.
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => navigate("/questions/all")}
            >
              Browse Questions
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BookmarksPage;
