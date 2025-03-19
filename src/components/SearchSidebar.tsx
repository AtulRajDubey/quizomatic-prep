
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, CheckCircle } from "lucide-react";
import { 
  categories,
  topics,
  questions,
  Question as QuestionType
} from "@/data/questions";
import { Badge } from "@/components/ui/badge";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface SearchSidebarProps {
  onClose?: () => void;
}

const SearchSidebar = ({ onClose }: SearchSidebarProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [difficulty, setDifficulty] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Filter questions based on search term, difficulty, and category
  const filteredQuestions = questions.filter(question => {
    const matchesSearch = searchTerm.trim() === "" || 
      question.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      question.answer.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDifficulty = difficulty === "all" || question.difficulty === difficulty;
    const matchesCategory = selectedCategory === "all" || question.category === selectedCategory;
    
    return matchesSearch && matchesDifficulty && matchesCategory;
  }).slice(0, 5); // Only show first 5 matches

  const handleQuestionClick = (categoryId: string) => {
    if (onClose) onClose();
    navigate(`/questions/${categoryId}`);
    toast({
      title: "Category Selected",
      description: `Viewing questions in the ${
        categories.find(cat => cat.id === categoryId)?.name || "selected"
      } category.`,
    });
  };

  const handleViewAll = () => {
    if (onClose) onClose();
    navigate(`/questions/all`);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Search Questions</h3>
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="text"
          placeholder="Search questions..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="space-y-3">
        <div>
          <label className="text-sm font-medium">Filter by:</label>
          <Select value={difficulty} onValueChange={setDifficulty}>
            <SelectTrigger>
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
        
        <div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map(category => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h4 className="text-sm font-medium">Results</h4>
          {filteredQuestions.length > 0 && (
            <Button variant="ghost" size="sm" onClick={handleViewAll}>
              View All
            </Button>
          )}
        </div>
        
        {filteredQuestions.length > 0 ? (
          <div className="space-y-2">
            {filteredQuestions.map(question => (
              <div 
                key={question.id} 
                className="p-3 border rounded-md hover:bg-gray-50 cursor-pointer"
                onClick={() => handleQuestionClick(question.category)}
              >
                <div className="flex items-center mb-1">
                  <Badge variant={
                    question.difficulty === "Easy" ? "outline" : 
                    question.difficulty === "Medium" ? "secondary" : 
                    "destructive"
                  } className="mr-2">
                    {question.difficulty}
                  </Badge>
                  <span className="text-xs text-gray-500">
                    {categories.find(cat => cat.id === question.category)?.name || "General"}
                  </span>
                </div>
                <p className="text-sm line-clamp-2">{question.question}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-6 text-sm text-gray-500">
            {searchTerm.trim() !== "" ? "No matching questions found" : "Enter a search term to find questions"}
          </div>
        )}
      </div>
      
      <div className="pt-4 border-t">
        <h4 className="text-sm font-medium mb-2">Popular Topics</h4>
        <div className="flex flex-wrap gap-2">
          {topics.slice(0, 4).map(topic => (
            <Badge 
              key={topic.id} 
              variant="outline" 
              className="cursor-pointer"
              onClick={() => {
                if (onClose) onClose();
                navigate(`/topics/${topic.id}`);
              }}
            >
              {topic.name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSidebar;
