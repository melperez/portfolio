// Questions and answers for the "Ask about my experience" section.
// Answers are written from the CV (src/content/ mirrors it). Keep them factual,
// first person (questions in second person), and roughly 40-80 words. Update them whenever the CV changes.

export interface QA {
  id: string;
  question: string;
  answer: string;
}

export const qa: QA[] = [
  {
    id: 'gcp-genai',
    question: 'Do you have experience with GCP and GenAI?',
    answer:
      'Yes. As a Senior .NET Developer at Globant, I developed Python APIs integrating Gemini via Vertex AI, using LangChain and LangGraph for agent orchestration. I implemented RAG workflows using vectorized data and MCP servers for AI agent integrations, and built .NET APIs and cloud solutions on Google Cloud Platform, working with BigQuery and Google Cloud Logging.',
  },
  {
    id: 'banking',
    question: 'Have you worked on financial or banking systems?',
    answer:
      'Yes. From 2013 to 2022, I was Tech Leader and Full-Stack Developer for financial and banking solutions at Inaltec SAS. I directed the design and development of banking applications, built .NET, Blazor WebAssembly, and SQL Server solutions for core financial operations, and designed SOAP and REST APIs to integrate banking platforms with third-party and legacy systems. I have also completed PCI Secure Software Lifecycle training.',
  },
  {
    id: 'leadership',
    question: 'Have you led a team or mentored developers?',
    answer:
      'Yes. As Tech Leader at Inaltec SAS, I coordinated a team of 3 developers and 3 testers in an Agile/Scrum environment, leading daily stand-ups and sprint planning, and serving as the technical point of contact for clients’ IT departments. I conducted code reviews and mentoring that raised code quality and reduced production defects. At Globant, I also provided technical co-leadership throughout the lifecycle of an AI-powered recommendation proof of concept.',
  },
  {
    id: 'event-driven',
    question: 'What is your experience with event-driven architecture and messaging?',
    answer:
      'As a Senior .NET Developer at Globant, I designed, implemented, and maintained distributed message queue architectures with Azure Service Bus, including dead-letter queues, retry policies, circuit breaker patterns, and resilient asynchronous communication. Earlier, at Inaltec SAS, I built middleware and microservices using RabbitMQ and Azure services. Microservices and event-driven architecture are among my key skills.',
  },
  {
    id: 'ai-tools',
    question: 'How do you use AI tools in software development?',
    answer:
      'I use Claude Code as a development and problem-solving collaborator while retaining ownership of architecture, database changes, design patterns, and final code approval. I review generated code against project standards for quality, security, and maintainability. I also build specialized subagents and reusable skills for repetitive sprint activities, including pre-PR security reviews and database migration workflows.',
  },
  {
    id: 'recent-role',
    question: 'What is your most recent role?',
    answer:
      "I'm a Senior Full-Stack Developer at Hireworks, working with Togetherhood Inc. I lead architecture, database, and design-pattern decisions while developing .NET 10 and React applications and third-party integrations. I use Claude Code under human review and create specialized agents and skills that automate security checks, database migrations, and other repetitive activities across the sprint delivery lifecycle.",
  },
];
