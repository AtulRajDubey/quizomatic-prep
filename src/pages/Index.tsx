
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { topics } from "@/data/questions";
import { ClipboardCheck, ArrowRight, Search, Book, Code } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const featuredTopics = topics.slice(0, 3);

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
