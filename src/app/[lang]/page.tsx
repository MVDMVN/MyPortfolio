import { getDictionary } from "@/i18n/getDictionary";
import { SiteHeader } from "@/components/SiteHeader/SiteHeader";
import { Hero } from "@/components/Hero/Hero";
import { Workflow } from "@/components/Workflow/Workflow";
import { Experience } from "@/components/Experience/Experience";
import { Skills } from "@/components/Skills/Skills";
import { Contact } from "@/components/Contact/Contact";
import { SiteFooter } from "@/components/SiteFooter/SiteFooter";

// Server Component: the dictionary is read on the server and only HTML reaches the browser
export default async function HomePage() {
  const dictionary = await getDictionary();

  return (
    <>
      <SiteHeader dictionary={dictionary.nav} />
      <main>
        <Hero dictionary={dictionary.hero} />
        <Workflow dictionary={dictionary.workflow} />
        <Experience dictionary={dictionary.experience} />
        <Skills dictionary={dictionary.skills} />
        <Contact dictionary={dictionary.contact} />
      </main>
      <SiteFooter dictionary={dictionary.footer} />
    </>
  );
}
