export default function AboutContent() {
    return (
        <div className="lg:pl-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mon approche

                <span className="sr-only">
                    Méthodologie et expertise pour concevoir des intérieurs résidentiels et commerciaux sur-mesure en Ile-de-France, combinant fonctionnalité, esthétique et durabilité
                </span>

            </h2>

            <p className="text-muted-foreground mb-6">
                Fondée par <span className="font-semibold text-black">Déborah KASSEYET</span>,
            </p>

            <p className="text-muted-foreground mb-6">
                <span className="font-semibold text-blue-500">
                    DD Interiors Home</span> est une agence d'architecture et décoration d'intérieur en Ile-de-France,
                dédiée à la conception d’espaces de vie et de travail pensés pour allier fonctionnalité, esthétique et durabilité.
            </p>

            <p className="text-muted-foreground mb-8">
                Avec plus de 12 ans d'expérience, <span className="font-semibold text-black">Déborah KASSEYET</span> a mené à bien des projets variés,
                allant de l'architecture résidentielle à la conception d'espaces commerciaux,
                en passant par des projets d'urbanisme. Chaque réalisation reflète une harmonie entre innovation,
                fonctionnalité et souci du détail.
            </p>

            <div className="grid grid-cols-2 gap-6">
                {[
                    { number: '12+', label: "Années d'expérience" },
                    { number: '50+', label: "Projets réalisés" }
                ].map((stat, index) => (
                    <div
                        key={index}
                        className="text-center p-4 bg-background rounded-lg shadow-sm"
                        itemScope
                        itemType="https://schema.org/QuantitativeValue"
                    >
                        <div className="text-3xl font-bold mb-1">{stat.number}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}