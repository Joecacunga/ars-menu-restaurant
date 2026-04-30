import { useState } from 'react';
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
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    { id: 'entradas', label: 'Entradas', icon: '🥘' },
    { id: 'pratos_principais', label: 'Pratos Principais', icon: '🍽️' },
    { id: 'sushi', label: 'Sushi', icon: '🍣' },
    { id: 'pizzas', label: 'Pizzas', icon: '🍕' },
    { id: 'sobremesas', label: 'Sobremesas', icon: '🍰' },
    { id: 'bebidas', label: 'Bebidas', icon: '🍷' },
    { id: 'combinados', label: 'Combinados', icon: '🍱' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028321113/WXfqbmEdfTP5Q6VjGBduAb/hero-jazz-night-KAGdJSuDeX2LAoiNQPTE96.webp"
          alt="ARS Jazz Club"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-accent mb-2 drop-shadow-lg">
            ARS JAZZ
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-accent to-transparent mb-4"></div>
          <p className="text-lg md:text-xl text-gray-200 font-light">
            Experiência Gastronómica Premium
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container py-12 md:py-16">
        {/* Category Navigation */}
          <div className="mb-12 overflow-x-auto">
          <div className="flex gap-2 pb-4 min-w-max">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const buttonClass = isActive
                ? 'bg-accent text-primary border-accent shadow-lg shadow-accent/50'
                : 'bg-card text-foreground border-border hover:border-accent';
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(isActive ? null : cat.id)}
                  className={`px-4 py-2 rounded-sm whitespace-nowrap transition-all duration-300 border-2 ${buttonClass}`}
                >
                  <span className="mr-2">{cat.icon}</span>
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Sections */}
        <div className="max-w-4xl mx-auto">
          {/* Entradas */}
          <MenuCategory title="Entradas" icon="🥘">
            {menuData.entradas.map((item, idx) => (
              <MenuCard key={idx} item={item} />
            ))}
          </MenuCategory>

          {/* Pratos Principais */}
          <MenuCategory title="Pratos Principais" icon="🍽️">
            {menuData.pratos_principais.map((item, idx) => (
              <MenuCard key={idx} item={item} />
            ))}
          </MenuCategory>

          {/* Sushi */}
          <MenuCategory title="Sushi" icon="🍣">
            {menuData.sushi.map((item, idx) => (
              <MenuCard key={idx} item={item} />
            ))}
          </MenuCategory>

          {/* Pizzas */}
          <MenuCategory title="Pizzas" icon="🍕">
            {menuData.pizzas.map((item, idx) => (
              <MenuCard key={idx} item={item} />
            ))}
          </MenuCategory>

          {/* Sobremesas */}
          <MenuCategory title="Sobremesas" icon="🍰">
            {menuData.sobremesas.map((item, idx) => (
              <MenuCard key={idx} item={item} />
            ))}
          </MenuCategory>

          {/* Bebidas */}
          <MenuCategory title="Bebidas" icon="🍷">
            {menuData.bebidas.map((item, idx) => (
              <MenuCard key={idx} item={item} />
            ))}
          </MenuCategory>

          {/* Combinados */}
          <MenuCategory title="Combinados" icon="🍱">
            {menuData.combinados.map((item, idx) => (
              <MenuCard key={idx} item={item} />
            ))}
          </MenuCategory>
        </div>

        {/* Footer Info */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm mb-4">
            Preços em Kwanzas (kz) | Sujeito a alterações
          </p>
          <div className="flex justify-center gap-4 text-accent text-sm">
            <span>📍 Luanda, Angola</span>
            <span>•</span>
            <span>🎵 Live Jazz</span>
          </div>
        </div>
      </div>
    </div>
  );
}
