
export interface Question {
  id: number;
  question: string;
  answer: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  topics: string[];
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  questionCount: number;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  questionCount: number;
}

export const topics: Topic[] = [
  {
    id: "selenium",
    name: "Selenium",
    description: "Questions related to Selenium WebDriver, frameworks, and best practices for web UI automation.",
    questionCount: 25,
    image: "https://www.selenium.dev/images/selenium_logo_square_green.png"
  },
  {
    id: "api-testing",
    name: "API Testing",
    description: "Questions covering REST API testing concepts, tools like Postman, RestAssured, and API automation frameworks.",
    questionCount: 20,
    image: "https://cdn-icons-png.flaticon.com/512/1493/1493169.png"
  },
  {
    id: "performance-testing",
    name: "Performance Testing",
    description: "Questions on performance testing concepts, tools like JMeter, LoadRunner, and performance metrics.",
    questionCount: 15,
    image: "https://cdn-icons-png.flaticon.com/512/6295/6295417.png"
  },
  {
    id: "ci-cd",
    name: "CI/CD & DevOps",
    description: "Questions about integrating test automation into CI/CD pipelines, tools, and DevOps practices.",
    questionCount: 15,
    image: "https://cdn-icons-png.flaticon.com/512/5261/5261777.png"
  },
  {
    id: "mobile-testing",
    name: "Mobile Automation",
    description: "Questions covering Appium, mobile testing strategies, and mobile-specific automation challenges.",
    questionCount: 15,
    image: "https://cdn-icons-png.flaticon.com/512/545/545245.png"
  },
  {
    id: "frameworks",
    name: "Testing Frameworks",
    description: "Questions on popular testing frameworks like TestNG, JUnit, NUnit, and framework design patterns.",
    questionCount: 15,
    image: "https://cdn-icons-png.flaticon.com/512/2166/2166895.png"
  },
];

export const categories: Category[] = [
  {
    id: "all",
    name: "All Questions",
    description: "Complete collection of software automation testing interview questions",
    questionCount: 105
  },
  {
    id: "selenium",
    name: "Selenium WebDriver",
    description: "Questions about Selenium WebDriver, locator strategies, and browser automation",
    questionCount: 25
  },
  {
    id: "api",
    name: "API Testing",
    description: "API testing concepts, tools, and techniques",
    questionCount: 20
  },
  {
    id: "frameworks",
    name: "Testing Frameworks",
    description: "Questions about TestNG, JUnit, and other testing frameworks",
    questionCount: 15
  },
  {
    id: "ci-cd",
    name: "CI/CD Integration",
    description: "Questions about integrating automation in CI/CD pipelines",
    questionCount: 15
  },
  {
    id: "mobile",
    name: "Mobile Testing",
    description: "Mobile automation testing with Appium and other tools",
    questionCount: 15
  },
  {
    id: "performance",
    name: "Performance Testing",
    description: "Performance and load testing concepts and tools",
    questionCount: 15
  },
];

// First 20 questions (add more to reach 100+ total)
export const questions: Question[] = [
  {
    id: 1,
    question: "What is Selenium and why is it used in test automation?",
    answer: "Selenium is an open-source suite of tools for automating web browsers. It's primarily used for automation testing to validate web applications across different browsers and platforms. Selenium allows testers to write scripts in various programming languages like Java, Python, C#, etc., to interact with web elements, simulate user actions, and verify application behavior without manual intervention.",
    difficulty: "Easy",
    category: "selenium",
    topics: ["selenium", "basics"]
  },
  {
    id: 2,
    question: "What are the different components of Selenium?",
    answer: "The Selenium suite consists of four main components: 1) Selenium WebDriver: A browser automation framework that accepts commands and sends them to a browser. 2) Selenium IDE: A record and playback tool for creating quick test scripts. 3) Selenium Grid: A tool that allows running tests on different machines, browsers, and operating systems in parallel. 4) Selenium RC (Remote Control): An older component that has been officially deprecated in favor of WebDriver.",
    difficulty: "Easy",
    category: "selenium",
    topics: ["selenium", "components"]
  },
  {
    id: 3,
    question: "Explain the difference between implicit wait and explicit wait in Selenium.",
    answer: "Implicit Wait: Sets a global timeout for all WebDriver commands. When set, WebDriver will wait for elements to be found for the specified duration before throwing a NoSuchElementException. It's applied to the entire life of the WebDriver instance. Explicit Wait: Allows the code to wait for certain conditions to occur before proceeding. Unlike implicit wait, it can be applied to specific elements and conditions using ExpectedConditions. It's more flexible and precise than implicit wait as it waits for a specific condition rather than just the presence of an element.",
    difficulty: "Medium",
    category: "selenium",
    topics: ["selenium", "waits"]
  },
  {
    id: 4,
    question: "What is a Page Object Model (POM) in Selenium and why is it useful?",
    answer: "Page Object Model is a design pattern in Selenium that creates an object repository for web UI elements. Each web page is represented as a class, and the elements on that page are defined as variables in the class. User interactions are implemented as methods in the class. POM is useful because it: 1) Reduces code duplication 2) Improves test maintenance by centralizing element locators 3) Enhances readability and reusability 4) Separates test code from page-specific code 5) Makes tests more robust to UI changes since element locators are maintained in one place",
    difficulty: "Medium",
    category: "selenium",
    topics: ["selenium", "frameworks", "design-patterns"]
  },
  {
    id: 5,
    question: "How would you handle dynamic elements in Selenium?",
    answer: "To handle dynamic elements in Selenium: 1) Use relative XPath or CSS that doesn't rely on changing attributes 2) Use contains(), starts-with(), or ends-with() functions in XPath 3) Locate parent elements and then find dynamic children 4) Use explicit waits with ExpectedConditions 5) Implement JavaScript Executor to find elements when regular locators fail 6) Use dynamic attribute values with wildcards 7) Implement custom expected conditions for complex scenarios 8) Use indexes carefully when dealing with lists of similar elements",
    difficulty: "Hard",
    category: "selenium",
    topics: ["selenium", "advanced"]
  },
  {
    id: 6,
    question: "What is REST API testing and what are its key principles?",
    answer: "REST API testing involves validating RESTful APIs by sending requests to API endpoints and verifying the responses. Key principles include: 1) Testing for correct HTTP status codes 2) Validating response payload structure and content 3) Verifying request parameter handling 4) Testing error handling and edge cases 5) Checking authentication and authorization 6) Performance testing for response times 7) Testing API sequence flows and state transitions 8) Ensuring statelessness of requests 9) Validating headers and content types",
    difficulty: "Medium",
    category: "api",
    topics: ["api-testing", "rest"]
  },
  {
    id: 7,
    question: "What tools can be used for API automation testing?",
    answer: "Popular tools for API automation testing include: 1) Postman/Newman: UI-based tool with scripting capabilities 2) REST Assured: Java library for API testing 3) SoapUI: Specialized for SOAP and REST APIs 4) JMeter: For load and performance API testing 5) Karate DSL: Combines API test automation, mocks, and performance testing 6) Axios/Supertest: JavaScript libraries for API testing 7) Insomnia: Alternative to Postman 8) Pact: For contract testing 9) ReadyAPI: Commercial offering from SmartBear 10) Cypress API testing capabilities",
    difficulty: "Easy",
    category: "api",
    topics: ["api-testing", "tools"]
  },
  {
    id: 8,
    question: "How would you test a REST API without a user interface?",
    answer: "To test a REST API without a UI: 1) Use API testing tools like Postman, curl, or specialized frameworks 2) Write automated tests using libraries like REST Assured (Java), requests (Python), or Supertest (Node.js) 3) Validate status codes, response body, headers, and response times 4) Create data-driven tests with different input parameters 5) Test positive scenarios, error cases, and edge cases 6) Implement authentication and authorization testing 7) Chain requests for end-to-end API flows 8) Utilize contract testing with tools like Pact 9) Set up CI/CD pipeline for API tests 10) Monitor API performance and reliability",
    difficulty: "Medium",
    category: "api",
    topics: ["api-testing", "methodology"]
  },
  {
    id: 9,
    question: "What is the difference between SOAP and REST API testing?",
    answer: "Key differences between SOAP and REST API testing: 1) Protocol: SOAP uses XML format only; REST supports multiple formats (JSON, XML, HTML, etc.) 2) Structure: SOAP has a strict, standardized structure; REST is more flexible 3) Testing approach: SOAP requires understanding complex XML schema; REST typically uses simpler JSON validation 4) Security: SOAP has built-in WS-Security standards to test; REST relies on HTTPS and authentication tokens 5) Error handling: SOAP has standardized fault elements; REST uses HTTP status codes 6) Testing tools: SOAP often requires specialized tools; REST can be tested with more generic tools 7) Performance testing: SOAP messages are typically larger, affecting performance tests",
    difficulty: "Medium",
    category: "api",
    topics: ["api-testing", "soap", "rest"]
  },
  {
    id: 10,
    question: "How would you validate the schema of a JSON response in API testing?",
    answer: "To validate JSON schema in API testing: 1) Use JSON Schema validation libraries like jsonschema (Python), json-schema-validator (Java), or Ajv (JavaScript) 2) Define a schema document that specifies the expected structure, data types, and constraints 3) In test frameworks like REST Assured, use built-in methods like matchesJsonSchemaInClasspath() 4) In Postman, use the tv4 or ajv libraries and the pm.test() function 5) For complex validation, consider tools like Karate DSL that have built-in schema validation 6) For dynamic or partial schema validation, use JSONPath expressions to target specific parts of the response 7) Include schema validation in CI/CD pipeline to catch contract changes early",
    difficulty: "Hard",
    category: "api",
    topics: ["api-testing", "validation", "json"]
  },
  {
    id: 11,
    question: "What is TestNG and what advantages does it offer over JUnit?",
    answer: "TestNG is a testing framework for Java inspired by JUnit and NUnit. Advantages over JUnit include: 1) Annotations are more powerful and easier to use 2) Support for parameterized testing without additional runners 3) Built-in support for data-driven testing using @DataProvider 4) Better support for grouping, prioritizing, and sequencing tests 5) Enhanced support for parallel execution 6) Dependent test methods allowing testing sequence definition 7) Built-in support for test configuration and setup at suite, test, class, and method levels 8) Multiple before/after annotations (beforeSuite, beforeTest, beforeClass, beforeMethod) 9) Better reporting capabilities 10) Native support for multi-threaded testing",
    difficulty: "Medium",
    category: "frameworks",
    topics: ["frameworks", "testng", "junit"]
  },
  {
    id: 12,
    question: "What is BDD and how is it implemented in automation testing?",
    answer: "Behavior-Driven Development (BDD) is an approach that encourages collaboration between developers, QA, and non-technical stakeholders. It focuses on defining application behavior in a common language. Implementation in automation: 1) Uses frameworks like Cucumber, SpecFlow, or JBehave 2) Test scenarios are written in Gherkin syntax with Given-When-Then steps 3) These human-readable scenarios are connected to step definitions (code) 4) Encourages writing tests before development begins 5) Creates living documentation that is both human-readable and executable 6) Step definitions typically leverage existing test automation frameworks like Selenium 7) Reports are generated in a business-readable format 8) Scenarios focus on user behavior rather than implementation details",
    difficulty: "Medium",
    category: "frameworks",
    topics: ["frameworks", "bdd", "methodology"]
  },
  {
    id: 13,
    question: "What is Continuous Integration and how does test automation fit into it?",
    answer: "Continuous Integration (CI) is a development practice where developers integrate code changes frequently, verified by automated builds and tests. Test automation fits into CI by: 1) Automated tests run on each code commit or pull request 2) Test results determine if the build passes or fails 3) Different test levels run at appropriate stages (unit tests earliest, UI tests later) 4) Fast feedback loop allows developers to fix issues quickly 5) Test reports are integrated into CI dashboards and notifications 6) Test environments are provisioned and cleaned up automatically 7) Parallelization of tests reduces feedback time 8) Test data is managed through the pipeline 9) Code coverage and quality metrics are tracked over time 10) Failed tests may block merges or deployments depending on policies",
    difficulty: "Medium",
    category: "ci-cd",
    topics: ["ci-cd", "devops", "methodology"]
  },
  {
    id: 14,
    question: "How would you integrate Selenium tests into a Jenkins pipeline?",
    answer: "To integrate Selenium tests into Jenkins: 1) Set up a Jenkins job or pipeline using Jenkinsfile (preferably) 2) Configure the job to pull the source code from your repository 3) Include build steps to compile the code and resolve dependencies 4) Add a build step to execute tests (e.g., Maven goal 'test' or Gradle task 'test') 5) Configure browser dependencies (using WebDriverManager or browser binaries) 6) Set up a headless browser configuration for CI environment 7) Generate test reports (e.g., using JUnit, TestNG, or Extent Reports) 8) Configure Jenkins to publish and display test results using plugins 9) Set up email notifications for build failures 10) Optionally, integrate with tools like Selenium Grid for parallel execution 11) Consider containerization (Docker) for consistent test environments",
    difficulty: "Hard",
    category: "ci-cd",
    topics: ["ci-cd", "selenium", "jenkins"]
  },
  {
    id: 15,
    question: "What is Appium and how does it work?",
    answer: "Appium is an open-source mobile application UI testing framework that allows testing of native, hybrid, and mobile web apps on iOS and Android. How it works: 1) Uses WebDriver protocol as its foundation 2) Acts as a server that receives commands from test scripts 3) Translates commands to native automation frameworks (XCUITest for iOS, UiAutomator2/Espresso for Android) 4) Interacts with mobile devices/emulators through these native frameworks 5) Doesn't require app code modification or recompilation 6) Supports multiple programming languages through client libraries 7) Can automate multiple platforms with the same API 8) Uses JSON Wire Protocol over HTTP for client-server communication 9) Allows access to native app functions, hybrid app webviews, and mobile browsers",
    difficulty: "Medium",
    category: "mobile",
    topics: ["mobile-testing", "appium", "tools"]
  },
  {
    id: 16,
    question: "What are the challenges specific to mobile automation testing?",
    answer: "Challenges in mobile automation testing include: 1) Device fragmentation (many different screen sizes, OS versions, manufacturers) 2) Limited resources on mobile devices affecting test reliability 3) Managing test data across apps with different storage mechanisms 4) Testing app behavior with different network conditions 5) Handling gestures and complex touch interactions 6) Native, hybrid, and web app differences requiring different approaches 7) Managing app state and deep linking testing 8) Accessing and testing background services 9) Testing permissions and OS-specific features 10) Simulating sensors (GPS, accelerometer, etc.) 11) Testing app behavior during interruptions (calls, notifications) 12) Limited visibility into app internals compared to web apps 13) Setting up and maintaining real device farms or emulators",
    difficulty: "Hard",
    category: "mobile",
    topics: ["mobile-testing", "challenges"]
  },
  {
    id: 17,
    question: "What is JMeter and how is it used in performance testing?",
    answer: "Apache JMeter is an open-source tool designed to load test and measure performance, primarily for web applications. In performance testing, JMeter is used to: 1) Create test plans that simulate user loads and behaviors 2) Generate concurrent requests to web servers, databases, or other services 3) Measure response times, throughput, and resource utilization under various loads 4) Create realistic load scenarios with think times and randomization 5) Parameterize tests with different data inputs 6) Extract and validate data from responses 7) Create assertions to verify correct responses 8) Generate detailed performance reports and graphs 9) Use distributed testing to create higher loads from multiple machines 10) Monitor server resources during tests 11) Test both web interfaces and API endpoints 12) Simulate different network conditions",
    difficulty: "Medium",
    category: "performance",
    topics: ["performance-testing", "jmeter", "tools"]
  },
  {
    id: 18,
    question: "What are the different types of performance tests?",
    answer: "Different types of performance tests include: 1) Load Testing: Evaluates system behavior under expected load conditions 2) Stress Testing: Tests beyond normal operational capacity to find breaking points 3) Spike Testing: Suddenly increases load to see how system handles sudden traffic surges 4) Endurance/Soak Testing: Runs system under expected load for extended periods to find memory leaks or degradation 5) Volume Testing: Tests with large amounts of data to evaluate database and storage performance 6) Scalability Testing: Determines how effectively the system scales with increasing load 7) Capacity Testing: Determines maximum capacity of system components 8) Configuration Testing: Tests different hardware/software configurations for optimal performance 9) Isolation Testing: Identifies performance bottlenecks in specific components 10) Baseline Testing: Establishes benchmarks for future comparisons",
    difficulty: "Medium",
    category: "performance",
    topics: ["performance-testing", "methodology"]
  },
  {
    id: 19,
    question: "What is Docker and how can it be used in test automation?",
    answer: "Docker is a platform that packages applications and their dependencies in containers, ensuring consistent environments. In test automation, Docker is used to: 1) Create consistent, isolated test environments that match production 2) Package test dependencies, browsers, and tools in container images 3) Run tests in parallelized, isolated containers 4) Simplify setup of complex test environments with Docker Compose 5) Enable self-contained, reproducible test runs 6) Integrate with CI/CD pipelines for containerized testing 7) Support Selenium Grid deployments for browser testing 8) Simulate microservices architectures for integration testing 9) Test application containers directly 10) Create disposable databases for test data 11) Reduce conflicts between different test framework versions",
    difficulty: "Hard",
    category: "ci-cd",
    topics: ["ci-cd", "docker", "tools"]
  },
  {
    id: 20,
    question: "How would you implement data-driven testing in your automation framework?",
    answer: "To implement data-driven testing: 1) Separate test data from test scripts by storing data in external sources (CSV, Excel, JSON, XML, databases) 2) Create a data provider mechanism to read and supply test data 3) Use framework-specific features like TestNG's @DataProvider or JUnit's Parameterized tests 4) Design test methods to accept parameters for different test scenarios 5) Create reusable utilities to handle different data formats 6) Implement data generation strategies for high-volume testing 7) Consider data preparation and cleanup for each test iteration 8) Handle test reporting to clearly show which data sets passed or failed 9) Manage test data versioning alongside code 10) Consider data privacy and security for sensitive test data 11) Implement conditional test execution based on data attributes",
    difficulty: "Medium",
    category: "frameworks",
    topics: ["frameworks", "methodology", "data-driven"]
  },
  // Add more questions to reach 100+ in total
];
