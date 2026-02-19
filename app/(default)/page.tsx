import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("Home");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6 text-foreground antialiased">
      <main className="flex max-w-4xl flex-col items-center gap-8 text-center">
        <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground ring-1 ring-inset ring-border">
          <span className="flex items-center gap-1.5">
            <Icon icon="lucide:rocket" className="size-3.5" />
            {t("badge")}
          </span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            {t("titleLine1")} <br />
            <span className="text-primary">{t("titleLine2")}</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            {t("description")}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="gap-2">
            {t("primaryButton")}{" "}
            <Icon icon="lucide:arrow-right" className="size-4" />
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <Icon icon="lucide:github" className="size-4" />
            {t("secondaryButton")}
          </Button>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 pt-12 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm">
            <div className="font-semibold text-primary">
              {t("cards.performance.title")}
            </div>
            <p className="text-sm text-muted-foreground">
              {t("cards.performance.description")}
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm">
            <div className="font-semibold text-primary">
              {t("cards.standards.title")}
            </div>
            <p className="text-sm text-muted-foreground">
              {t("cards.standards.description")}
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm">
            <div className="font-semibold text-primary">
              {t("cards.typeSafety.title")}
            </div>
            <p className="text-sm text-muted-foreground">
              {t("cards.typeSafety.description")}
            </p>
          </div>
        </div>
      </main>

      <footer className="mt-20 text-sm text-muted-foreground">
        {t("footer", { year: new Date().getFullYear() })}
      </footer>
    </div>
  );
}
