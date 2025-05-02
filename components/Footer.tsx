import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">ARCHSTUDIO</h3>
            <p className="text-muted-foreground mb-4">
              Créer des solutions architecturales innovantes qui transforment les espaces et améliorent la vie.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/?filter=Résidentiel#projects" scroll={true} className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                  Architecture résidentielle
                </Link>
              </li>
              <li>
                <Link href="/?filter=Commerciale#projects" scroll={true} className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                Conception commerciale
                </Link>
              </li>
              <li>
                <Link href="/?filter=Public#projects" scroll={true} className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                Planification urbaine
                </Link>
              </li>
              <li>
                <Link href="/?filter=Urbanisme#projects" scroll={true} className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                Planification urbaine
                </Link>
              </li>
              <li>
                <Link href="/?filter=Enseignement#projects" scroll={true} className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                Enseignement
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">L'entreprise</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors duration-300">A propos de</a></li>
              <li><a href="#team" className="text-muted-foreground hover:text-foreground transition-colors duration-300">L'architecte</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300">Carrières</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300">Nouvelles</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">S'abonner</h3>
            <p className="text-muted-foreground mb-4">
              Abonnez-vous à notre lettre d'information pour recevoir des mises à jour et des informations sur les tendances architecturales.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Yotre email"
                className="px-4 py-2 rounded-l-md border border-input focus:outline-none focus:ring-2 focus:ring-primary/50 w-full"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors duration-300"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} ArchStudio. Tous droits réservés.
            </p>
            <div className="flex mt-4 md:mt-0 space-x-4">
              <a href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors duration-300">Politique de confidentialité</a>
              <a href="terms-of-use" className="text-muted-foreground hover:text-foreground transition-colors duration-300">Conditions d'utilisation</a>
              <a href="/cookies-policy" className="text-muted-foreground hover:text-foreground transition-colors duration-300">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}