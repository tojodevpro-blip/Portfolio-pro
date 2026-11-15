import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@/components/icons";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-shell flex-col justify-center px-6 py-20 sm:px-8 lg:px-12">
      <p className="label text-forest">Erreur 404</p>
      <h1 className="mt-4 font-serif text-[clamp(3rem,9vw,7rem)] leading-[0.9] tracking-[-0.04em]">
        Page introuvable
      </h1>
      <p className="mt-6 max-w-md text-base text-muted">
        Cette adresse ne mène à aucune page du portfolio.
      </p>
      <Link
        href="/"
        className="label link-quiet mt-8 inline-flex w-fit items-center gap-2"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        {"Retour à l'accueil"}
      </Link>
    </div>
  );
}
