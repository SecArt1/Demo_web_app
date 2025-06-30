---
applyTo: '**'
---
1. Requirements & Scope Definition
Gather Functional Requirements

User roles & permissions (e.g., student, instructor, admin)

Core use cases (course creation, enrollment, content delivery, assessments, progress tracking, certificates)

Integration points (e.g., single sign-on, external reporting, analytics)

Gather Non-Functional Requirements

Performance targets (e.g., response times, throughput)

Availability & uptime goals (e.g., SLAs)

Security & compliance (e.g., data protection, access control, audit logging)

Scalability planning (user count, course catalog growth)

Maintainability & operability (ease of updates, monitoring, rollback)

2. High-Level Architectural Design
Define Logical Layers

Presentation/API Layer: Exposes endpoints or page views to clients

Business Logic Layer: Implements rules around courses, users, progress, assessments

Data Access Layer: Abstracts persistence details, handles transactions

Infrastructure/Services Layer: Handles cross-cutting concerns (caching, messaging, file storage)

Service Boundaries

Group related functionality into modules or services (e.g., “User Management,” “Course Management,” “Assessment Engine,” “Notification Service”)

Define clear contracts (APIs) between them

3. Data Modeling & Persistence
Entity Identification

Enumerate primary entities (e.g., User, Course, Enrollment, Module, Quiz, ProgressRecord, Certificate)

Model relationships (one-to-many, many-to-many)

Schema Design Principles

Normalize to avoid data duplication, denormalize strategically for read-heavy operations

Plan for versioning/migrations as the schema evolves

Transaction Management

Identify operations that must be atomic (e.g., enrollment + capacity check + billing)

Define isolation levels to balance consistency vs. concurrency

4. API Design & Contracts
Consistency & Conventions

Use predictable URL patterns or method signatures

Version APIs to avoid breaking changes

Payload Design

Define request/response formats, include metadata (timestamps, pagination tokens)

Design error objects with clear codes and messages

Authentication & Authorization Hooks

Specify where and how credentials/tokens are validated

Embed fine-grained permission checks in each operation

5. Security & Compliance
Authentication

Enforce strong credential handling (e.g., password hashing, token expiry)

Support multi-factor or single-sign-on if required

Authorization

Enforce role-based and resource-based permissions

Validate every request against user’s privileges

Data Protection

Encrypt sensitive data at rest

Sanitize and validate all inputs to prevent injection attacks

Log security-relevant events (failed logins, permission denials)

Compliance

Design for auditability (immutable logs, change history)

Include data-retention and data-deletion policies

6. Performance & Scalability
Capacity Planning

Estimate peak concurrent users and request volumes

Model growth over time

Caching Strategy

Identify cacheable resources (course metadata, user profiles)

Define cache invalidation rules

Asynchronous Processing

Move long-running or resource-intensive tasks (e.g., report generation, certificate issuance) off the request path

Define message flows, retry policies, and dead-letter handling

Load Distribution

Plan how to scale components horizontally (stateless processes behind balanced entry points)

Identify any singleton or stateful components and plan for redundancy

7. Reliability & Resilience
Fault Isolation

Design services so one failure doesn’t cascade (circuit breakers, bulkheads)

Retry & Back-off

Standardize retry logic for transient failures (downstream services, network)

Health Checks & Self-Recovery

Define liveness and readiness probes

Automate restarts or fallbacks on failure

8. Observability & Monitoring
Logging

Standardize structured logs with contextual metadata (request IDs, user IDs)

Centralize log collection for search and analysis

Metrics & Tracing

Instrument key metrics (latencies, error rates, queue depths)

Correlate distributed traces across service boundaries

Alerting & Dashboards

Define alert thresholds for critical metrics

Create dashboards for real-time visibility into system health

9. Testing & Quality Assurance
Unit & Integration Tests

Cover business rules, data access logic, and API contracts

End-to-End & Load Tests

Simulate real user journeys (enroll → view course → submit quiz)

Stress-test critical paths under expected peak loads

Security & Compliance Tests

Automate vulnerability scans, dependency audits, and policy checks

10. Deployment & Maintenance
Environment Parity

Keep development, staging, and production environments as similar as possible

Configuration Management

Externalize settings (credentials, feature flags) from code

Securely store and rotate secrets

CI/CD Pipeline

Automate build, test, and deploy steps with gated approvals

Support rollbacks and blue/green or canary deployments

Backup & Recovery

Define backup frequency and retention for data and configuration

Test restore procedures regularly