import { useRef } from 'react';
import { MenuCard } from '@/components/MenuCard';
import { MenuCategory } from '@/components/MenuCategory';

const menuData = {
  entradas: [
    { name: 'Choco Panado', price: 10000 },
    { name: 'Frango à Passarinho', price: 8500 },
    { name: 'Pica-Pau', price: 11500 },
    { name: 'Chourição Caseiro', price: 10000 },
  ],
  pratos_principais: [
    { name: 'Arroz de Polvó', price: 23000 },
    { name: 'Gambas ao Alho c/ Batata Frita e Salada', price: 20000 },
    { name: 'Bife c/ Cogumelos, Arroz e Batata Frita (Estrogonoff)', price: 22500 },
    { name: 'Bacalhau à ARS', price: 25000 },
  ],
  sobremesas: [
    { name: 'Pudim', price: 4000 },
    { name: 'Salada de Frutas', price: 3000 },
    { name: 'Gelados (Magnum, Solero)', price: 5000 },
    { name: 'Bolo de Cenoura c/ Chocolate', price: 4000 },
    { name: 'Arroz Doce', price: 3000 },
    { name: 'Tiramisu', price: 7000 },
    { name: 'Banana Bread', price: 7000 },
  ],
  sushi: [
    { name: 'Sashimi (6 unid.)', price: 6000 },
    { name: 'Nigiri (4 unid.)', price: 5000 },
    { name: 'Gunkas (4 unid.)', price: 5000 },
    { name: 'Hossomaki (8 unid.)', price: 8000 },
    { name: 'Uramaki California (8 unid.)', price: 10000 },
    { name: 'Temaki (1 unid.)', price: 8000 },
    { name: 'Hot Philadelphia (10 unid.)', price: 14000 },
  ],
  pizzas: [
    { name: 'Pizza ARS', price: 10000 },
  ],
  bebidas: [
    { name: 'Fino', price: 1000 },
    { name: 'Coquetel (c/ e s/ álcool)', price: 6500 },
    { name: 'Sumos Naturais', price: 4000 },
    { name: 'Caipirinha', price: 5000 },
    { name: 'Vinho Tinto Mariana', price: 20000 },
    { name: 'Silk Spice', price: 21000 },
    { name: 'Espumante', price: 20000 },
    { name: 'Shot de Tequila', price: 5000 },
    { name: 'Gasosas (Fanta, Coca-Cola, Sprite, Sumol)', price: 1500 },
  ],
  combinados: [
    { name: '15 Peças', price: 20000 },
    { name: '20 Peças', price: 25000 },
  ],
};

export default function Home() {
  // Create refs for each category section
  const entradasRef = useRef<HTMLDivElement>(null);
  const pratosRef = useRef<HTMLDivElement>(null);
  const sushiRef = useRef<HTMLDivElement>(null);
  const pizzasRef = useRef<HTMLDivElement>(null);
  const sobremesasRef = useRef<HTMLDivElement>(null);
  const bebidasRef = useRef<HTMLDivElement>(null);
  const combinadosRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'entradas', label: 'Entradas', icon: '🥘', ref: entradasRef },
    { id: 'pratos_principais', label: 'Pratos Principais', icon: '🍽️', ref: pratosRef },
    { id: 'sushi', label: 'Sushi', icon: '🍣', ref: sushiRef },
    { id: 'pizzas', label: 'Pizzas', icon: '🍕', ref: pizzasRef },
    { id: 'sobremesas', label: 'Sobremesas', icon: '🍰', ref: sobremesasRef },
    { id: 'bebidas', label: 'Bebidas', icon: '🍷', ref: bebidasRef },
    { id: 'combinados', label: 'Combinados', icon: '🍱', ref: combinadosRef },
  ];

  const scrollToCategory = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028321113/WXfqbmEdfTP5Q6VjGBduAb/ars-hero-sophisticated-DN4qjNpsT3UAXrxNgPpW9f.webp"
          alt="ARS Restaurant"
          className="w-full h-full object-cover"
        />
        {/* Overlay sofisticado */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <div className="mb-6">
            <div className="mb-4 flex justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028321113/WXfqbmEdfTP5Q6VjGBduAb/ars-logo-realistic-irGmxLP5PRn5z4ckxxAv47.webp"
                alt="ARS Logo"
                className="w-32 h-32 md:w-40 md:h-40"
              />
            </div>
            <div className="h-px w-20 bg-accent mx-auto mb-4"></div>
            <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide">
              Compromisso, Rigor e Excelência
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container py-12 md:py-16">
        {/* Category Navigation - Minimalista */}
        <div className="mb-16 sticky top-0 bg-background/95 backdrop-blur py-4 z-40">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.ref)}
                className="px-5 py-2 rounded-none text-sm tracking-wide transition-all duration-300 border-b-2 bg-transparent text-foreground border-b-transparent hover:text-accent hover:border-b-accent"
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Sections */}
        <div className="max-w-3xl mx-auto">
          {/* Entradas */}
          <div ref={entradasRef}>
            <MenuCategory title="Entradas" icon="🥘">
              {menuData.entradas.map((item, idx) => (
                <MenuCard key={idx} item={item} />
              ))}
            </MenuCategory>
          </div>

          {/* Pratos Principais */}
          <div ref={pratosRef}>
            <MenuCategory title="Pratos Principais" icon="🍽️">
              {menuData.pratos_principais.map((item, idx) => (
                <MenuCard key={idx} item={item} />
              ))}
            </MenuCategory>
          </div>

          {/* Sushi */}
          <div ref={sushiRef}>
            <MenuCategory title="Sushi" icon="🍣">
              {menuData.sushi.map((item, idx) => (
                <MenuCard key={idx} item={item} />
              ))}
            </MenuCategory>
          </div>

          {/* Pizzas */}
          <div ref={pizzasRef}>
            <MenuCategory title="Pizzas" icon="🍕">
              {menuData.pizzas.map((item, idx) => (
                <MenuCard key={idx} item={item} />
              ))}
            </MenuCategory>
          </div>

          {/* Sobremesas */}
          <div ref={sobremesasRef}>
            <MenuCategory title="Sobremesas" icon="🍰">
              {menuData.sobremesas.map((item, idx) => (
                <MenuCard key={idx} item={item} />
              ))}
            </MenuCategory>
          </div>

          {/* Bebidas */}
          <div ref={bebidasRef}>
            <MenuCategory title="Bebidas" icon="🍷">
              {menuData.bebidas.map((item, idx) => (
                <MenuCard key={idx} item={item} />
              ))}
            </MenuCategory>
          </div>

          {/* Combinados */}
          <div ref={combinadosRef}>
            <MenuCategory title="Combinados" icon="🍱">
              {menuData.combinados.map((item, idx) => (
                <MenuCard key={idx} item={item} />
              ))}
            </MenuCategory>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-20 pt-12 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm mb-6 tracking-wide">
            Preços em Kwanzas (kz) | Sujeito a alterações
          </p>
          <div className="flex justify-center gap-6 text-accent text-sm">
            <span>📍 Luanda, Angola</span>
            <span className="text-border/50">•</span>
            <span>☎️ +244 934 560 780</span>
          </div>
        </div>
      </div>
    </div>
  );
}
