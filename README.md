# Website Clean - Monorepo

A pnpm workspace monorepo using TypeScript with multiple artifacts.

## Project Structure

```
├── artifacts/              # Deployable applications
│   ├── api-server/         # Express 5 API server
│   ├── mockup-sandbox/     # Vite-based React frontend (component showcase)
│   └── rnm-clone/          # Vite-based React frontend (main app)
├── lib/                    # Shared libraries
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-spec/           # OpenAPI spec + Orval codegen
│   ├── api-zod/            # Generated Zod schemas
│   └── db/                 # Drizzle ORM + PostgreSQL
└── scripts/                # Utility scripts
```

## Prerequisites

- Node.js 24+
- pnpm 10+
- PostgreSQL (for API server)

## Getting Started

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Build All Packages

```bash
pnpm run build
```

### 3. Run Applications

#### API Server

First, set up environment variables (copy `.env.example` to `.env`):

```bash
cp .env.example .env
# Edit .env with your database credentials
```

Required environment variables:
- `PORT` - Server port (e.g., 3000)
- `DATABASE_URL` - PostgreSQL connection string

Run the API server:

```bash
pnpm --filter @workspace/api-server run dev
```

Or in production mode:

```bash
pnpm --filter @workspace/api-server run build
pnpm --filter @workspace/api-server run start
```

#### Mockup Sandbox (Component Showcase)

```bash
pnpm --filter @workspace/mockup-sandbox run dev
```

Build for production:

```bash
pnpm --filter @workspace/mockup-sandbox run build
pnpm --filter @workspace/mockup-sandbox run preview
```

#### RNM Clone (Main Frontend)

```bash
pnpm --filter @workspace/rnm-clone run dev
```

Build for production:

```bash
pnpm --filter @workspace/rnm-clone run build
pnpm --filter @workspace/rnm-clone run serve
```

## Development Commands

### Type Checking

```bash
pnpm run typecheck
```

### Run Scripts

```bash
pnpm --filter @workspace/scripts run <script-name>
```

## Technology Stack

- **Monorepo**: pnpm workspaces
- **Language**: TypeScript 5.9
- **API**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod
- **API Codegen**: Orval (from OpenAPI spec)
- **Frontend**: Vite + React
- **UI Components**: Radix UI + Tailwind CSS