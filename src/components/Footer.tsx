import { footer, site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-shell flex-col gap-8 px-6 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8 lg:px-12">
        <div>
          <p className="font-serif text-xl tracking-tight">{site.name}</p>
          <p className="label mt-2 text-muted">{footer.note}</p>
        </div>
        <div className="flex flex-col gap-2 sm:items-end">
          <p className="label">{footer.copyright}</p>
          <a className="label link-quiet w-fit" href="#haut">
            Retour en haut ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
