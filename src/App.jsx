import React, { useEffect } from "react";
import heroBurger from "./assets/generated/hero-xl-burger-fries.png";
import burgersMaison from "./assets/generated/burgers-maison-xl.png";
import burgersClassiques from "./assets/generated/burgers-classiques.png";
import frites from "./assets/generated/frites.png";
import viandesSnacks from "./assets/generated/viandes-snacks.png";
import assiettes from "./assets/generated/assiettes.png";
import magicBox from "./assets/generated/magic-box-enfant.png";
import boissonsSauces from "./assets/generated/boissons-sauces.png";

const categories = [
  {
    id: "burgers-maison",
    title: "Burgers maison",
    intro: "Les plus généreux, steak frais et recettes garnies.",
    image: burgersMaison,
    alt: "Deux très gros burgers maison avec fromage fondu sur fond noir",
    featured: true,
    items: [
      ["Suisse", "7.80€"],
      ["Savoyard", "7.80€"],
      ["Catalan", "7.80€"],
      ["Maya", "7.80€"],
      ["Petit Français", "7.80€"],
      ["Italien", "7.80€"],
      ["Cheddar", "6.00€"],
      ["Supplément viande", "2.00€"],
    ],
  },
  {
    id: "burgers",
    title: "Burgers",
    intro: "Les petits classiques de friterie, rapides et efficaces.",
    image: burgersClassiques,
    alt: "Trois petits burgers classiques avec quelques frites",
    items: [
      ["Hamburger", "3.50€"],
      ["Cheeseburger", "4.00€"],
      ["Double cheese", "5.00€"],
      ["Bicky", "4.50€"],
      ["Crispy", "4.50€"],
      ["Mexicain", "4.50€"],
    ],
  },
  {
    id: "frites",
    title: "Frites",
    intro: "Le coeur de la maison, doré, croustillant, sans détour.",
    image: frites,
    alt: "Cornet de frites dorées sur fond noir et jaune",
    items: [
      ["P'tite frite", "2.50€"],
      ["Grande frite", "3.00€"],
    ],
  },
  {
    id: "viandes",
    title: "Viandes et snacks",
    intro: "Fricadelles, croquettes, brochettes et bouchées croustillantes.",
    image: viandesSnacks,
    alt: "Assortiment de viandes et snacks frits avec sauces",
    items: [
      ["Fricadelle", "2.00€"],
      ["Boulette chaude ou froide", "2.80€"],
      ["Viandelle", "2.80€"],
      ["Poulycroc", "3.00€"],
      ["Ragouzy", "3.00€"],
      ["Ribster", "3.00€"],
      ["Mexicano", "3.20€"],
      ["Chix finger", "3.20€"],
      ["Nuggets", "3.20€"],
      ["Tzigane", "3.20€"],
      ["Fumé chaude", "3.20€"],
      ["Croquette fromage", "3.50€"],
      ["Mini loumpia", "3.50€"],
      ["Stick mozza", "3.50€"],
      ["Saucisse fromage", "4.00€"],
      ["Nuggets vegan", "4.00€"],
      ["Loumpia", "4.00€"],
      ["Cervelas chaud ou froid", "4.00€"],
      ["Brochette oignon", "4.00€"],
      ["Brochette ardennaise", "4.00€"],
      ["Croquette vol-au-vent", "4.00€"],
      ["Brochette dinde", "4.00€"],
      ["Grizzly", "4.50€"],
    ],
  },
  {
    id: "assiettes",
    title: "Assiettes",
    intro: "Des assiettes complètes avec frites et salade.",
    image: assiettes,
    alt: "Assiette complète avec vol-au-vent, frites et salade",
    items: [
      ["Vol-au-vent", "12.50€"],
      ["Burger", "12.50€"],
      ["Boulettes sauce tomate", "12.50€"],
      ["Boulettes liégeoise", "12.50€"],
      ["Brochette au choix", "12.50€"],
      ["Jambonneau", "14.00€"],
    ],
  },
  {
    id: "magic-box",
    title: "Magic Box enfant",
    intro: "Un menu enfant simple : viande, petite frite, boisson et jouet.",
    image: magicBox,
    alt: "Menu enfant avec mini burger, nuggets, frites, boisson et petit jouet",
    items: [["Magic Box enfant", "5.00€"]],
  },
  {
    id: "boissons",
    title: "Boissons et sauces",
    intro: "Softs, bières, vins et sauces pour compléter la commande.",
    image: boissonsSauces,
    alt: "Boissons sans marque et coupelles de sauces sur fond noir et jaune",
    items: [
      ["Sauces froides", "0.80€"],
      ["Sauces chaudes", "2.00€"],
      ["Eau plate", "1.50€"],
      ["Eau pétillante", "2.00€"],
      ["Softs", "2.50€"],
      ["Red Bull", "3.00€"],
      ["Bières", "2.50€ à 4.50€"],
      ["Vin au verre", "3.00€"],
      ["Vin bouteille", "12.00€"],
    ],
  },
];

function App() {
  useEffect(() => {
    document.documentElement.classList.add("motion-ready");
    const nodes = document.querySelectorAll(".reveal");
    const panels = document.querySelectorAll(".menu-panel");
    const syncPanelHeights = () => {
      panels.forEach((panel) => {
        const content = panel.querySelector(".menu-panel-content");
        if (content) {
          panel.style.setProperty("--panel-content-height", `${content.scrollHeight}px`);
        }
      });
    };

    syncPanelHeights();
    window.addEventListener("resize", syncPanelHeights);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", syncPanelHeights);
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#contenu">
        Passer au contenu
      </a>

      <header className="site-header">
        <a className="brand" href="#accueil" aria-label="Accueil La P'tite Frite">
          <span className="brand-script">La P'tite Frite</span>
          <span className="brand-block">Friterie</span>
        </a>
        <nav className="site-nav" aria-label="Navigation principale">
          <a href="#menu">Menu</a>
        </nav>
        <a className="call-link" href="tel:+33673279183">
          06 73 27 91 83
        </a>
      </header>

      <main id="contenu">
        <section className="hero" id="accueil">
          <div className="hero-copy reveal is-visible">
            <p className="kicker">31 Place Jules Andres, 54730 Gorcy</p>
            <h1>Frites, burgers, Gorcy.</h1>
            <p className="hero-lead">
              La P'tite Frite sert la friterie franche, noire et jaune : petits burgers,
              burgers maison XL, frites, assiettes, snacks et box enfant.
            </p>
            <div className="hero-actions" aria-label="Actions principales">
              <a className="button button-primary" href="tel:+33673279183">
                Appeler maintenant
              </a>
              <a className="button button-secondary" href="#menu">
                Voir la carte
              </a>
            </div>
          </div>
          <figure className="hero-visual reveal is-visible">
            <img
              src={heroBurger}
              alt="Gros burger avec frites sur fond noir et jaune"
              loading="eager"
            />
          </figure>
        </section>

        <section className="category-jump" id="menu" aria-label="Accès rapides au menu">
          {categories.map((category) => (
            <a href={`#${category.id}`} key={category.id}>
              {category.title}
            </a>
          ))}
        </section>

        <section className="section menu-section" aria-label="Menu illustré">
          <div className="menu-list">
            {categories.map((category, index) => (
              <article
                className={`menu-panel reveal ${index % 2 === 1 ? "menu-panel-reverse" : ""}`}
                id={category.id}
                key={category.id}
              >
                <div className="menu-panel-stage">
                  <div className="menu-panel-image">
                    <img src={category.image} alt={category.alt} loading="lazy" />
                  </div>
                  <div className="menu-panel-heading">
                    <h3>{category.title}</h3>
                    <p>{category.intro}</p>
                  </div>
                </div>
                <div className="menu-panel-content">
                  <ul>
                    {category.items.map(([name, price]) => (
                      <li key={`${category.id}-${name}`}>
                        <span>{name}</span>
                        <strong>{price}</strong>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
