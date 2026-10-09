export type Locale = 'en' | 'es';

export const ui = {
  en: {
    nav: { experience: 'Experience', projects: 'Work', skills: 'Skills', ask: 'Ask', contact: 'Contact' },
    skip: 'Skip to content', availability: 'Open to meaningful engineering challenges',
    sections: { experience: 'Experience', projects: 'Selected work', skills: 'Technical toolkit', education: 'Education & certifications', ask: 'Ask about my experience', contact: 'Let’s build something useful' },
    hero: { intro: 'Hello, I’m', primary: 'Explore my experience', secondary: 'Download CV', ask: 'Ask about my experience' },
    details: 'View case study', roleDetails: 'View role details', technologies: 'Technologies', more: 'more', present: 'Present',
    contact: 'Have a role, project, or technical challenge in mind? The fastest way to reach me is by email.',
    back: 'Back', language: 'Español', localeName: 'English', client: 'Client',
  },
  es: {
    nav: { experience: 'Experiencia', projects: 'Proyectos', skills: 'Habilidades', ask: 'Preguntas', contact: 'Contacto' },
    skip: 'Saltar al contenido', availability: 'Abierta a nuevos retos de ingeniería con propósito',
    sections: { experience: 'Experiencia', projects: 'Proyectos destacados', skills: 'Herramientas técnicas', education: 'Educación y certificaciones', ask: 'Pregunta sobre mi experiencia', contact: 'Construyamos algo útil' },
    hero: { intro: 'Hola, soy', primary: 'Explorar mi experiencia', secondary: 'Descargar CV', ask: 'Pregunta sobre mi experiencia' },
    details: 'Ver caso de estudio', roleDetails: 'Ver detalles del rol', technologies: 'Tecnologías', more: 'más', present: 'Actualidad',
    contact: '¿Tienes un rol, proyecto o reto técnico en mente? La forma más rápida de contactarme es por correo.',
    back: 'Volver', language: 'English', localeName: 'Español', client: 'Cliente',
  },
} as const;

export const profileEs = {
  headline: 'Desarrolladora de Software Senior',
  summary: 'Desarrolladora de Software Senior con más de 10 años de experiencia creando aplicaciones cloud native y arquitecturas de microservicios con .NET (C#), React y Angular en Azure, AWS y GCP. Cuenta con experiencia en los sectores financiero y bancario, liderazgo de equipos, mentoría y decisiones de arquitectura en entornos ágiles. Diseña APIs, sistemas orientados a eventos e integraciones empresariales con foco en calidad y seguridad. También tiene experiencia práctica en IA generativa, incluida una solución agéntica basada en RAG con Python y LangChain.',
};

export const experienceEs: Record<string, { role: string; summary: string; sections: { heading?: string; items: string[] }[] }> = {
  '2026-hireworks-togetherhood': {
    role: 'Desarrolladora Full-Stack Senior', summary: 'Desarrollo full-stack con .NET y React, liderazgo de arquitectura, integraciones con terceros y flujos de ingeniería asistidos por Claude Code bajo supervisión humana.',
    sections: [{ items: ['Desarrolla software con .NET 10 e integraciones mediante webhooks y APIs.', 'Desarrolla y mantiene aplicaciones con React y Vite.', 'Participa en pruebas de concepto para integrar servicios y plataformas de terceros.', 'Lidera decisiones de arquitectura, cambios de base de datos y selección de patrones de diseño.', 'Optimiza aplicaciones mediante monitoreo y analítica con Datadog.', 'Usa Claude Code como colaborador de desarrollo y revisa el código generado para preservar los estándares de arquitectura, calidad, seguridad y mantenibilidad del proyecto.', 'Crea subagentes y skills reutilizables para automatizar actividades del sprint, incluidas revisiones de seguridad antes de un PR y workflows de migración de base de datos.', 'Integra proyectos .NET con MySQL y Hangfire para procesos en segundo plano y tareas programadas.'] }],
  },
  '2022-globant': {
    role: 'Desarrolladora .NET Senior', summary: 'Proyectos para clientes con GenAI en GCP, .NET y mensajería distribuida en Azure, una prueba de concepto de recomendaciones con IA y aplicaciones web en AWS.',
    sections: [
      { heading: 'GenAI y Google Cloud', items: ['Desarrolló aplicaciones .NET, Angular y Python, incluidas APIs y soluciones cloud en GCP.', 'Creó APIs .NET con EF Core y OData para acceso a datos e integraciones escalables.', 'Desarrolló APIs en Python que integran Gemini mediante Vertex AI, con LangChain y LangGraph para orquestar agentes.', 'Implementó flujos RAG con datos vectorizados y servidores MCP.', 'Desarrolló pruebas unitarias con xUnit y contribuyó al diseño técnico y de arquitectura.', 'Optimizó rendimiento, monitoreo y seguridad con Google Cloud Logging, SonarQube y Checkmarx.'] },
      { heading: '.NET, Azure y mensajería distribuida', items: ['Desarrolló soluciones con .NET 8+, Entity Framework y SQL Server.', 'Diseñó arquitecturas de colas con Azure Service Bus, incluidas colas de mensajes fallidos, reintentos, circuit breakers y comunicación asíncrona resiliente.', 'Mantuvo microfrontends en React y pipelines de Azure DevOps en YAML.', 'Gestionó secretos con Azure Key Vault y resolvió incidentes con Azure Monitor y análisis de logs.'] },
      { heading: 'Plataforma de recomendaciones con IA (POC)', items: ['Desarrolló una prueba de concepto con .NET, C#, MongoDB, Azure Table Storage y Azure Functions.', 'Integró Azure Personalizer con aprendizaje por refuerzo y modelos contextual bandit.', 'Contribuyó al diseño de arquitectura y al liderazgo técnico durante el proyecto.'] },
      { heading: 'Aplicaciones web en AWS', items: ['Desarrolló aplicaciones con .NET Framework, jQuery, SQL Server y Entity Framework.', 'Trabajó en integraciones para streaming y servicios backend en AWS.'] },
    ],
  },
  '2013-inaltec': {
    role: 'Líder Técnica / Desarrolladora Full-Stack, Soluciones Financieras y Bancarias', summary: 'Lideró un equipo de 3 desarrolladores y 3 testers para crear aplicaciones bancarias seguras, APIs y microservicios.',
    sections: [{ items: ['Dirigió el diseño y desarrollo de aplicaciones bancarias seguras y escalables.', 'Coordinó un equipo de 3 desarrolladores y 3 testers en un entorno Agile/Scrum.', 'Desarrolló soluciones on-premise con .NET, Blazor WebAssembly y SQL Server.', 'Diseñó APIs SOAP y REST para integrar plataformas bancarias con terceros y sistemas heredados.', 'Migró una plataforma central desde Angular 6 y mejoró su mantenibilidad y experiencia de usuario.', 'Creó middleware y microservicios con RabbitMQ y servicios de Azure.', 'Realizó revisiones de código y mentoría, mejorando la calidad y reduciendo defectos en producción.'] }],
  },
};

export const projectsEs: Record<string, { title: string; summary: string; intro: string; items: string[] }> = {
  'rag-agent-vertex-ai': { title: 'Solución agéntica RAG en GCP', summary: 'APIs en Python que integran Gemini mediante Vertex AI, orquestación con LangChain y LangGraph, y RAG sobre datos vectorizados.', intro: 'Desarrollado en Globant para un proyecto de cliente.', items: ['Desarrolló APIs en Python que integran Gemini mediante Vertex AI.', 'Implementó flujos RAG con datos vectorizados y servidores MCP.', 'Trabajó con APIs .NET, EF Core, OData y BigQuery en Google Cloud Platform.'] },
  'ai-recommendation-poc': { title: 'Plataforma de recomendaciones con IA (POC)', summary: 'Recomendaciones adaptativas con aprendizaje por refuerzo y modelos contextual bandit de Azure Personalizer.', intro: 'Desarrollado en Globant para un proyecto de cliente.', items: ['Implementó la prueba de concepto con .NET, C#, MongoDB, Azure Table Storage y Azure Functions.', 'Integró Azure Personalizer para crear recomendaciones adaptativas.', 'Contribuyó al diseño de arquitectura y al liderazgo técnico.'] },
  'resilient-messaging-azure': { title: 'Mensajería resiliente con Azure Service Bus', summary: 'Arquitectura distribuida con colas de mensajes fallidos, políticas de reintento y circuit breakers.', intro: 'Desarrollado en Globant para un proyecto de cliente.', items: ['Diseñó y mantuvo arquitecturas de colas resilientes con Azure Service Bus.', 'Creó pipelines de Azure DevOps mediante YAML.', 'Diagnosticó incidentes de producción con Azure Monitor y análisis de logs.'] },
  'ai-assisted-engineering': {
    title: 'Ingeniería asistida por IA y automatización de workflows',
    summary: 'Flujos de ingeniería liderados por personas que usan Claude Code como colaborador, preservando la responsabilidad sobre la arquitectura, los estándares y la aprobación final del código.',
    intro: 'Trabajo actual en Hireworks para Togetherhood Inc.',
    items: [
      'Lidera decisiones de arquitectura, cambios de base de datos y selección de patrones de diseño, utilizando Claude Code como colaborador para implementación y resolución de problemas.',
      'Revisa el código generado con IA para asegurar que preserve la arquitectura, las convenciones, las prácticas de seguridad y los estándares de mantenibilidad del proyecto.',
      'Trabaja con la IA para analizar requerimientos, evaluar alternativas técnicas y refinar estrategias de implementación para las user stories.',
      'Crea subagentes especializados y skills reutilizables que automatizan actividades repetitivas durante el ciclo de entrega de un sprint.',
      'Creó un agente de revisión previa al PR para identificar posibles vulnerabilidades y desviaciones de las guidelines del proyecto.',
      'Creó un skill de migración que aplica cambios pendientes y mantiene los ambientes locales alineados con las modificaciones de esquema realizadas por el equipo.',
    ],
  },
  'banking-platform-modernization': { title: 'Modernización de plataforma bancaria', summary: 'Liderazgo de un equipo que creó aplicaciones bancarias seguras, APIs para sistemas heredados y modernizó una plataforma Angular.', intro: 'Desarrollado en Inaltec SAS (2013–2022) como Líder Técnica.', items: ['Dirigió aplicaciones bancarias seguras y escalables.', 'Coordinó 3 desarrolladores y 3 testers en Agile/Scrum.', 'Diseñó APIs SOAP y REST para integrar sistemas de terceros y heredados.', 'Modernizó una plataforma central basada en Angular 6.'] },
};

export const skillGroupsEs: Record<string, string> = { Backend: 'Backend', Frontend: 'Frontend', Cloud: 'Nube', Data: 'Datos', 'Architecture & messaging': 'Arquitectura y mensajería', 'Generative AI': 'IA generativa', 'DevOps & tools': 'DevOps y herramientas', Testing: 'Pruebas', Languages: 'Idiomas' };
export const skillItemsEs: Record<string, string> = { 'Event-Driven Architecture': 'Arquitectura orientada a eventos', 'English (Advanced)': 'Inglés (avanzado)', 'Spanish (Native)': 'Español (nativo)' };
export const educationEs: Record<string, string> = { unac: 'Tecnología en Ingeniería de Sistemas', 'az-204': 'AZ-204: Desarrollo de soluciones para Microsoft Azure', 'security-practitioner': 'Prácticas de seguridad de software .NET', 'pci-ssl': 'Ciclo de vida seguro de software PCI' };
