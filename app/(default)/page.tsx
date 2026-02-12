"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6 text-foreground antialiased">
      {/* Hero Section */}
      <main className="flex max-w-4xl flex-col items-center gap-8 text-center">
        <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground ring-1 ring-inset ring-border">
          <span className="flex items-center gap-1.5">
            <Icon icon="lucide:rocket" className="size-3.5" />
            Next Scaffold v1.0
          </span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Modern Web Projeleri İçin <br />
            <span className="text-primary">Eksiksiz Başlangıç Kitiniz</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Next.js 15/16, Tailwind 4 ve Shadcn standartları ile optimize
            edilmiş, yüksek performanslı ve ölçeklenebilir boilerplate.
          </p>
        </div>

        {/* Button Variants Showcase */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="gap-2">
            Hemen Başlayın <Icon icon="lucide:arrow-right" className="size-4" />
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <Icon icon="lucide:github" className="size-4" />
            GitHub&apos;da Görüntüle
          </Button>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 pt-12 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm">
            <div className="font-semibold text-primary">Performans</div>
            <p className="text-sm text-muted-foreground">
              Bun ve Next.js App Router ile ışık hızında yükleme süreleri.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm">
            <div className="font-semibold text-primary">Standartlar</div>
            <p className="text-sm text-muted-foreground">
              Shadcn/UI ve Atomic Design prensiplerine tam uyumluluk.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm">
            <div className="font-semibold text-primary">Tip Güvenliği</div>
            <p className="text-sm text-muted-foreground">
              Strict TypeScript kuralları ile hatasız geliştirme süreci.
            </p>
          </div>
        </div>
      </main>

      <footer className="mt-20 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Cubidron Creative. Tüm hakları saklıdır.
      </footer>
    </div>
  );
}
