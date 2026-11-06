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
      'Yes. As a Senior .NET & Full-Stack Developer at Globant, I developed Python APIs integrating Gemini via Vertex AI, using LangChain and LangGraph for agent orchestration. I implemented RAG workflows over PostgreSQL (pgvector) and MCP servers, and configured Cloud Run jobs with Cloud Scheduler to process embeddings for a SQL agent that queried BigQuery. I also built containerized .NET APIs on Cloud Run with Secret Manager.',
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
      'As a Senior .NET & Full-Stack Developer at Globant, I designed, implemented, and maintained distributed message queue architectures with Azure Service Bus, including dead-letter queues, retry policies, circuit breaker patterns, and resilient asynchronous communication. Earlier, at Inaltec SAS, I built middleware and microservices using RabbitMQ and Azure services. Microservices and event-driven architecture are among my key skills.',
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
      "I'm a Senior Full-Stack Developer at Hireworks, working with Togetherhood Inc. I build .NET 10 backend services integrating Checkr, DocuSign, Sakari SMS, and Notion through webhooks and REST APIs, plus React and Vite apps on Docker and AWS, and I lead architecture, database, and design-pattern decisions. I use Claude Code under human review and create specialized agents and skills that automate security checks, database migrations, and other repetitive activities across the sprint delivery lifecycle.",
  },
  {
    id: 'integrations',
    question: 'Have you built third-party integrations and webhooks?',
    answer:
      'Yes. At Hireworks I engineer .NET 10 backend services that integrate Checkr, DocuSign, Sakari SMS, and Notion through webhooks and REST APIs, with Hangfire handling scheduled background jobs and Datadog monitoring performance. Earlier, at Inaltec SAS, I designed SOAP and REST APIs that connected banking platforms with third-party and legacy systems.',
  },
  {
    id: 'vector-search',
    question: 'What is your experience with vector search and embeddings?',
    answer:
      'At Globant I implemented RAG workflows over vectorized data stored in PostgreSQL with pgvector, used by Python agents built with LangChain and LangGraph on Vertex AI. I also configured Cloud Run jobs triggered by Cloud Scheduler to process vector embeddings, feeding an automated SQL agent that queried BigQuery for data analytics.',
  },
  {
    id: 'azure',
    question: 'What is your experience with Microsoft Azure?',
    answer:
      'Azure has been a core part of my work. At Globant I designed Azure Service Bus architectures with dead-letter queues, retry policies, and circuit breakers, built an AI recommendation POC on Azure Functions with Azure Personalizer, managed secrets in Key Vault, used Azure Table Storage, maintained Azure DevOps YAML pipelines, and diagnosed production issues with Azure Monitor. At Inaltec SAS I worked with Entra ID and Key Vault, and I completed AZ-204 training in 2024.',
  },
];
