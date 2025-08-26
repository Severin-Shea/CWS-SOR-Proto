# SOR-CWS Full System Design – Development Guide

## Overview

This guide describes the end-to-end user flow and system architecture for the SOR-CWS (Statement of Requirements – Contingent Workforce Solutions) prototype in Maestro/Allegro. The process is chat-centric, wizard-driven, and leverages historical SORs, dynamic templates, and AI document generation.

**Entry Point:**
- The SOR-CWS module is accessed via a new top navigation link in `new-chat.html`.
- The chat interface is always visible and is the primary UI for all user/AI interaction.
- The left drawer is for section navigation (not workflow stages): Template Library, Wizard, Designer, Governance.
- The Wizard and Designer open as overlays/modals over the chat UI, not in the drawer.
- Governance is a main panel for signatures, approvals, and audit trail.

---

## Navigation & Entry Point

- **Homepage:** `new-chat.html`
- **Top Navigation:** Add a link to "SOR-CWS" in the main nav.
- **SOR-CWS Module:**
  - When selected, the page remains based on `new-chat.html` but adds:
    - A left-side drawer for section navigation: Template Library, Wizard, Designer, Governance.
    - A "New SOR" button in the chat UI to launch the SOR Wizard overlay.

---

## User & System Flow

### 1. User Initiates SOR Wizard/Chat

- **Entry:** User clicks "New SOR" in the chat UI.
- **Overlay:** A wizard overlays the chat interface, guiding the user through the SOR creation process.
- **First Step:** User selects:
  - SOR Type
  - Project Type
  - Tech Type
  - Public or Private Sector
  - Business Vertical
  - Location (State)
  - (If Private) Agency/Division/Department
  - Date

---

### 2. System Recommends Historical SORs

- **System:** Searches data collections for historical SORs with matching tags.
- **UI:** Presents recommended SORs (with tags, summaries, previews).
- **User:** Selects which SORs to include as AI context.

---

### 3. System Recommends SOR Templates

- **System:** Recommends SOR Templates (distinct from Maestro's generic templates), built from boilerplate/static text and historical patterns.
- **UI:** Shows recommended templates with previews and descriptions.
- **User:** Selects a template.

---

### 4. User Uploads Additional Files

- **UI:** Prompts for file uploads (client requirements, supporting docs, etc.).
- **All files are attached to the chat/session.**

---

### 5. User Adds Final Instructions

- **UI:** Chat interface for final instructions or constraints.
- **System:** Captures these as additional context for the AI.

---

### 6. AI Generates Initial SOR Draft

- **System:** Using the selected template, historical SOR context, uploaded files, and user instructions, the AI generates an initial SOR draft.
- **UI:** Draft appears in the main chat interface as a structured document.

---

### 7. Iterative Refinement

- **Chat Interface:** User can ask for changes, additions, or refinements through natural language chat.
- **System:** AI updates the SOR document incrementally.
- **Real-time Updates:** Document updates appear in real-time in the chat.

---

### 8. Section-by-Section Review

- **Left Drawer Navigation:** User can navigate to specific SOR sections for focused editing.
- **Designer Mode:** Opens as an overlay for detailed section editing with rich text capabilities.

---

### 9. Collaboration & Approvals

- **Governance Panel:** Accessible via left drawer for:
  - Reviewer assignments
  - Approval workflows
  - Signature collection
  - Version control
  - Audit trail

---

### 10. Final Export & Delivery

- **Export Options:** PDF, Word, custom formats
- **Integration:** Push to procurement systems or share via secure links

---

## Technical Architecture

### Backend Components

1. **Compose Service** - Main orchestration service handling the approval flow
2. **Template Engine** - Dynamic template generation based on historical patterns
3. **Retrieval Service** - Hybrid search across historical SOR documents
4. **AI Service** - LLM integration for document generation and refinement
5. **Collaboration Service** - Real-time collaboration and approval workflows
6. **Export Service** - Document generation in various formats

### Data Models

1. **SOR Documents** - Historical SOR database with metadata and full-text search
2. **Templates** - Reusable SOR templates with configurable sections
3. **Compose Sessions** - Active SOR creation sessions with state management
4. **Approval Workflows** - Configurable approval processes
5. **User Profiles** - Role-based access and preferences

### API Endpoints

The current prototype implements these core endpoints:
- `POST /compose/init` - Initialize SOR creation session
- `POST /compose/:id/approve-examples` - Approve historical examples
- `POST /compose/:id/approve-template` - Approve/modify template
- `POST /compose/:id/run` - Generate SOR draft
- `GET /compose/:id` - Retrieve session state

### Future Enhancements

1. **Real-time Collaboration** - WebSocket support for multi-user editing
2. **Advanced Templates** - Machine learning-driven template recommendations
3. **Integration APIs** - Connect with procurement and project management systems
4. **Analytics Dashboard** - Usage metrics and optimization insights
5. **Mobile Support** - Responsive design for tablet and mobile workflows

---

## Development Setup

### Prerequisites
- Node.js 20+
- Docker for PostgreSQL
- Optional: OpenAI API key for LLM functionality

### Quick Start
1. Clone repository and install dependencies
2. Start PostgreSQL with `docker compose up -d db`
3. Run database migrations and seed data
4. Configure environment variables
5. Start development server with `npm run dev`

### Testing Strategy
- Unit tests for core business logic
- Integration tests for API endpoints
- End-to-end tests for complete workflows
- Performance tests for document generation

### Deployment
- Containerized deployment with Docker
- Environment-specific configuration
- Database migrations and rollbacks
- Monitoring and logging setup