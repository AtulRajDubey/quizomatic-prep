
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { topics, questions, categories } from "@/data/questions";
import { ClipboardCheck, ArrowRight, Search, Book, Code, PieChart, Bookmark, CheckCircle2 } from "lucide-react";
import { useProgress } from "@/contexts/ProgressContext";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Index = () => {
  const navigate = useNavigate();
  const featuredTopics = topics.slice(0, 3);
  const { answeredQuestions, bookmarkedQuestions } = useProgress();
  
  const totalQuestions = questions.length;
  const answeredCount = Object.values(answeredQuestions).filter(Boolean).length;
  const progress = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;
  
  // Get recently viewed categories (for now just showing some categories)
  const recentCategories = categories.slice(1, 5);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 px-4 animate-fade-in">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Ace Your Automation Testing Interviews
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Practice with over 100 real-world software automation testing interview questions
            and boost your confidence for your next job interview.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-6 text-lg"
              onClick={() => navigate("/questions/all")}
            >
              Start Practicing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="px-6 py-6 text-lg"
              onClick={() => navigate("/topics/all")}
            >
              Browse Topics
            </Button>
          </div>
        </div>
      </section>
      
      {/* Progress Summary */}
      <section className="py-10 bg-white shadow-sm rounded-lg border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Progress</h2>
            <p className="text-lg text-gray-600">
              Track your interview preparation journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gray-50">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-green-600" />
                  Questions Answered
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-2 text-center">
                <div className="text-4xl font-bold text-gray-900">{answeredCount}</div>
                <p className="text-sm text-gray-500">out of {totalQuestions} questions</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
                  <div 
                    className="bg-green-600 h-2.5 rounded-full" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{progress}% complete</p>
              </CardContent>
              <CardFooter className="pt-0 justify-center">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate("/questions/all")}
                >
                  Continue Practicing
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-gray-50">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center justify-center">
                  <Bookmark className="h-5 w-5 mr-2 text-yellow-500" />
                  Bookmarked Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-2 text-center">
                <div className="text-4xl font-bold text-gray-900">{bookmarkedQuestions.length}</div>
                <p className="text-sm text-gray-500">questions saved for review</p>
              </CardContent>
              <CardFooter className="pt-0 justify-center">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate("/bookmarks")}
                >
                  View Bookmarks
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-gray-50">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center justify-center">
                  <PieChart className="h-5 w-5 mr-2 text-blue-600" />
                  Topic Coverage
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex flex-wrap gap-2 justify-center">
                  {topics.slice(0, 5).map(topic => (
                    <TooltipProvider key={topic.id}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div 
                            className="w-3 h-12 rounded-sm cursor-pointer"
                            style={{ 
                              backgroundColor: `hsl(${210 + topics.findIndex(t => t.id === topic.id) * 40}, 80%, 60%)`,
                              opacity: 0.7 + (Math.random() * 0.3) // Random variation for visual effect
                            }}
                          ></div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{topic.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-3 text-center">Coverage across {topics.length} topics</p>
              </CardContent>
              <CardFooter className="pt-0 justify-center">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate("/topics/all")}
                >
                  View All Topics
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Quick Links */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Recent Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {recentCategories.map(category => (
                <Button 
                  key={category.id}
                  variant="outline"
                  className="justify-start h-auto py-3"
                  onClick={() => navigate(`/questions/${category.id}`)}
                >
                  <div className="text-left">
                    <div className="font-medium">{category.name}</div>
                    <div className="text-xs text-gray-500">{category.questionCount} questions</div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Testing Topics</h2>
            <p className="text-xl text-gray-600">
              Explore these in-demand automation testing skills that employers are looking for
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTopics.map((topic) => (
              <Card key={topic.id} className="hover:shadow-md transition-shadow animate-slide-in">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <img src={topic.image} alt={topic.name} className="h-16 w-16" />
                  </div>
                  <CardTitle className="text-xl text-center">{topic.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{topic.description}</p>
                </CardContent>
                <CardFooter className="flex justify-center pt-0">
                  <Button 
                    variant="ghost" 
                    className="text-brand-600 hover:text-brand-700"
                    onClick={() => navigate(`/topics/${topic.id}`)}
                  >
                    {topic.questionCount} Questions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Button 
              variant="outline" 
              onClick={() => navigate("/topics/all")}
              className="text-brand-600 border-brand-600 hover:bg-brand-50"
            >
              View All Topics
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How TestPrep Works</h2>
            <p className="text-xl text-gray-600">
              Simple steps to prepare for your automation testing interview
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-brand-100 p-4 rounded-full">
                  <Search className="h-8 w-8 text-brand-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Find Questions</h3>
              <p className="text-gray-600">
                Browse our comprehensive collection of software automation testing interview questions by topic or difficulty.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-brand-100 p-4 rounded-full">
                  <Book className="h-8 w-8 text-brand-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Practice Regularly</h3>
              <p className="text-gray-600">
                Review questions and answers, test your knowledge, and track your progress as you prepare.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-brand-100 p-4 rounded-full">
                  <ClipboardCheck className="h-8 w-8 text-brand-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ace Your Interview</h3>
              <p className="text-gray-600">
                Build confidence and demonstrate your testing expertise with comprehensive answers to technical questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-600 text-white rounded-lg py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to ace your next interview?</h2>
          <p className="text-xl mb-8">
            Start practicing with our comprehensive collection of automation testing questions now.
          </p>
          <Button 
            variant="outline" 
            className="bg-white text-brand-600 hover:bg-gray-100 hover:text-brand-700 px-6 py-6 text-lg"
            onClick={() => navigate("/questions/all")}
          >
            Start Practicing Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
