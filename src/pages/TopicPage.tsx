
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { topics } from "@/data/questions";

const TopicPage = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTopics = topicId === "all" 
    ? topics.filter(topic => 
        topic.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        topic.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : topics.filter(topic => topic.id === topicId);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        className="mb-6" 
        onClick={() => navigate("/")}
      >
        <ChevronLeft className="mr-2 h-4 w-4" /> Back to Home
      </Button>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {topicId === "all" ? "All Testing Topics" : filteredTopics[0]?.name || "Topic"}
          </h1>
          <p className="text-lg text-gray-600">
            {topicId === "all" 
              ? "Explore all automation testing topics to prepare for your interview" 
              : filteredTopics[0]?.description || "Loading..."}
          </p>
        </div>

        {topicId === "all" && (
          <div className="mt-4 md:mt-0 w-full md:w-64">
            <input
              type="text"
              placeholder="Search topics..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )}
      </div>

      {topicId === "all" ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredTopics.map((topic) => (
            <Card key={topic.id} className="hover:shadow-md transition-shadow">
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
                  onClick={() => navigate(`/questions/${topic.id}`)}
                  className="bg-brand-600 hover:bg-brand-700 text-white"
                >
                  Practice {topic.questionCount} Questions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="p-6">
          <div className="mb-8 flex justify-center">
            {filteredTopics[0] && (
              <img src={filteredTopics[0].image} alt={filteredTopics[0].name} className="h-24 w-24" />
            )}
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">What You'll Learn</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Core concepts and principles of {filteredTopics[0]?.name}</li>
                <li>Advanced techniques and best practices</li>
                <li>Common interview questions and how to answer them effectively</li>
                <li>Real-world scenarios and problem-solving approaches</li>
                <li>Tips for demonstrating your expertise during interviews</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Practice Questions</h2>
              <p className="mb-4">
                This topic contains {filteredTopics[0]?.questionCount} interview questions of varying difficulty levels.
                Start practicing to improve your knowledge and confidence.
              </p>
              <Button 
                onClick={() => navigate(`/questions/${topicId}`)}
                className="bg-brand-600 hover:bg-brand-700 text-white"
              >
                Start Practicing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Related Topics</h2>
              <div className="flex flex-wrap gap-2">
                {topics
                  .filter(t => t.id !== topicId)
                  .slice(0, 3)
                  .map(topic => (
                    <Button 
                      key={topic.id} 
                      variant="outline" 
                      onClick={() => navigate(`/topics/${topic.id}`)}
                    >
                      {topic.name}
                    </Button>
                  ))
                }
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default TopicPage;
