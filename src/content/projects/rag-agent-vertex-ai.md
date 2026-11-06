---
title: RAG-based agentic solution on GCP
summary: Python APIs integrating Gemini via Vertex AI, with LangChain and LangGraph agent orchestration, RAG over pgvector, and a scheduled embedding pipeline feeding a BigQuery SQL agent.
stack: [Python, Vertex AI, Gemini, LangChain, LangGraph, MCP, PostgreSQL, pgvector, BigQuery, Cloud Run, Cloud Scheduler, GCP]
order: 1
---

Built at Globant as part of a client engagement.

- Developed Python APIs integrating Gemini via Vertex AI, using LangChain and LangGraph for agent orchestration.
- Implemented RAG workflows using vectorized data in PostgreSQL (pgvector) and MCP servers for AI agent integrations.
- Configured Cloud Run jobs with Cloud Scheduler to process vector embeddings, connected to an automated SQL agent that queried BigQuery for data analytics.
- Worked alongside .NET APIs (EF Core, OData) deployed as containers on Cloud Run, with secrets in Secret Manager.
