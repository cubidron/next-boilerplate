# Cubidron Creative Next.js Boilerplate

Welcome to the **Cubidron Creative Next.js Boilerplate**. This is a highly optimized, opinionated, and feature-rich starter template designed to accelerate the development of modern web applications.

## 🚀 Tech Stack

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Runtime:** [Bun](https://bun.sh/) (Recommended)
- **Database (Planned):** ORM integration (Drizzle/Prisma)
- **Icons:** [Lucide React](https://lucide.dev/) (Recommended)

## 📁 Project Structure

```text
├── app/              # Next.js App Router (pages, layouts, API)
├── components/       # Shared React components
│   └── ui/           # Atomic UI components (shadcn/ui style)
├── db/               # Database schema and query logic
├── hooks/            # Custom React hooks
├── layouts/          # Reusable page layout wrappers
├── lib/              # Utility functions and server actions
├── public/           # Static assets (images, fonts, etc.)
├── store/            # State management (Zustand/Jotai)
└── styles/           # Global styles and Tailwind config
```

## 🛠️ Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine.
- A basic understanding of Next.js and Tailwind CSS.

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

### Reinstall Added Packages (Bun)

If new packages were added later and you want to install them manually with Bun:

```bash
bun add \
  @iconify/react \
  class-variance-authority \
  clsx \
  next@16.1.6 \
  react@19.2.3 \
  react-dom@19.2.3 \
  tailwind-merge
```

```bash
bun add -d \
  @tailwindcss/postcss \
  @types/node \
  @types/react \
  @types/react-dom \
  babel-plugin-react-compiler@1.0.0 \
  eslint \
  eslint-config-next@16.1.6 \
  tailwindcss \
  typescript
```

3. **Run the development server:**
   ```bash
   bun dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 📜 Coding Conventions

- **Component Structure:** Use functional components with Arrow Functions.
- **TypeScript:** Use strict typing. Avoid `any` whenever possible.
- **Server Actions:** Place server-side logic in `lib/*/actions.ts`.
- **Styling:** Use Tailwind CSS for all styling. Follow the mobile-first approach.

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

---

Built with ❤️ by **Cubidron Creative**.
