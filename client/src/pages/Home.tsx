import { useRef } from 'react';
import { MenuCard } from '@/components/MenuCard';
import { MenuCategory } from '@/components/MenuCategory';

const menuData = {
  couvert: [
    { name: 'Couvert', price: 5000, description: 'Cesta de padaria, paté, manteiga, azeite, vinagre balsâmico, azeitonas' },
  ],
  entradas: [
    { name: 'Creme de Abóbora', price: 5000 },
    { name: 'Bombo com Ginguba', price: 3500 },
    { name: 'Chourição caseiro', price: 10000 },
    { name: 'Pica pau', price: 11500 },
  ],
  peixe: [
    { name: 'Posta de Cherne', price: 14000, description: 'Puré de batata e couve' },
    { name: 'Lombo de Garoupa', price: 14000, description: 'Molho tropical, puré de batata doce e legumes assados' },
    { name: 'Caldo de Marisco', price: 10000, description: 'Farinha, batata doce e mandioça' },
    { name: 'Caldo de Peixe', price: 6000, description: 'Farinha, batata doce e mandioça' },
    { name: 'Bacalhau com Broa', price: 18000, description: 'Bacalhau desfiado com batata ao cubo, espinafre e broa ralada' },
    { name: 'Bacalhau à Brás', price: 14000, description: 'Bacalhau desfiado com batata palha' },
    { name: 'Filete de Garoupa', price: 14000, description: 'Arroz de tomate' },
    { name: 'Posta de Garoupa', price: 14000, description: 'Legumes salteados, banana pão cozida' },
  ],
  carne: [
    { name: 'Bife à ARS', price: 22500, description: 'Medalhões de novilho frito com molho de madeira, salada e arroz aromatizado' },
    { name: 'Tornedó ao molho de vinho tinto', price: 26000, description: 'Lombo alto grelhado com puré de abóbora, e espinafre' },
    { name: 'Costuleta de borrego grelhado', price: 26000, description: 'Saladas frescas, batatas fritas, legumes grelhados e espargos' },
    { name: 'Picanha à ARS', price: 24000, description: 'Arroz aromatizado, couve mineira, banana milanesa e feijão preto' },
    { name: 'Bife de Novilho', price: 23000, description: 'Batata doce e legumes grelhados' },
    { name: 'Bife de Acem', price: 20000, description: 'Puré de abóbora e legumes assados' },
    { name: 'Costela de vaca', price: 26000, description: 'Salada verde e arroz de assafrã' },
    { name: 'Medalhões de Vitela', price: 22000, description: 'Legumes assados e arroz aromatizado' },
    { name: 'Bife de Vezia', price: 22500, description: 'Puré de batata e espinafre' },
  ],
  aves: [
    { name: 'Caril de Frango', price: 18000 },
  ],
  pastas_risotos: [
    { name: 'Esparguete à Bolonhesa', price: 12000 },
    { name: 'Esparguete de Marisco', price: 18000 },
    { name: 'Esparguete à Gambas', price: 23000 },
    { name: 'Risotto de Abóbora', price: 20000, description: 'Lombo de vaca' },
    { name: 'Risotto de Tomate', price: 20000, description: 'Posta de Atum' },
    { name: 'Risotto de Espargos', price: 20000, description: 'Lombo de Garoupa' },
    { name: 'Esparguete alho e óleo', price: 15000 },
    { name: 'Lasanha', price: 15000 },
    { name: 'Tagliatelle de frutos do mar', price: 23000 },
  ],
  comida_tipica: [
    { name: 'Calulu de carne seca', price: 20000, description: 'Feijão de óleo de palma e kizaca' },
    { name: 'Calulu de peixe', price: 18000, description: 'Feijão de óleo de palma e kizaca' },
  ],
  saladas: [
    { name: 'Salada verde', price: 3000 },
    { name: 'Salada de tomate', price: 3000 },
    { name: 'Salada mista', price: 5500 },
    { name: 'Salada de Quinoa', price: 10800 },
    { name: 'Salada de camarão', price: 13500 },
    { name: 'Salada de atum', price: 7500 },
    { name: 'Salada Cesar', price: 7000 },
    { name: 'Salada de cuscuz', price: 10000 },
  ],
  sobremesas: [
    { name: 'Arroz doce cremoso', price: 3000 },
    { name: 'Bolo de Laranja', price: 3000 },
    { name: 'Bolo de Chocolate', price: 3500 },
    { name: 'Banana Bread', price: 3500 },
    { name: 'Tiramisu', price: 7000 },
    { name: 'Combo ARS (Para 2 Px)', price: 11000, description: 'Bolo de ginguba, bolo de chocolate, pudim, frutas da época' },
    { name: 'Fruta da época', price: 2000 },
    { name: 'Misto de queijos', price: 7000 },
    { name: 'Leite creme', price: 5000 },
    { name: 'Pudim', price: 2800 },
  ],
};

export default function Home() {
  // Create refs for each category section
  const couvertRef = useRef<HTMLDivElement>(null);
  const entradasRef = useRef<HTMLDivElement>(null);
  const peixeRef = useRef<HTMLDivElement>(null);
  const carneRef = useRef<HTMLDivElement>(null);
  const avesRef = useRef<HTMLDivElement>(null);
  const pastasRef = useRef<HTMLDivElement>(null);
  const comidaTipicaRef = useRef<HTMLDivElement>(null);
  const saladaRef = useRef<HTMLDivElement>(null);
  const sobremesasRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'couvert', label: 'Couvert', icon: '🥖', ref: couvertRef },
    { id: 'entradas', label: 'Entradas', icon: '🥘', ref: entradasRef },
    { id: 'peixe', label: 'Peixe', icon: '🐟', ref: peixeRef },
    { id: 'carne', label: 'Carne', icon: '🥩', ref: carneRef },
    { id: 'aves', label: 'Aves', icon: '🍗', ref: avesRef },
    { id: 'pastas', label: 'Pastas e Risotos', icon: '🍝', ref: pastasRef },
    { id: 'comida_tipica', label: 'Comida Típica', icon: '🍲', ref: comidaTipicaRef },
    { id: 'saladas', label: 'Saladas', icon: '🥗', ref: saladaRef },
    { id: 'sobremesas', label: 'Sobremesas', icon: '🍰', ref: sobremesasRef },
  ];

  const scrollToCategory = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028321113/WXfqbmEdfTP5Q6VjGBduAb/ars-hero-with-logo-YDF97N7aBZiABgKsHmT5AJ.webp"
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
                src="/manus-storage/ars-logo-gold_6d805628.png"
                alt="ARS Logo"
                className="w-32 h-32 md:w-40 md:h-40"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-2 tracking-widest">
              ARS - RESTAURANTE
            </h1>
            <h2 className="text-xl md:text-2xl text-accent font-light mb-4 tracking-wide">
              Menu DIGITAL
            </h2>
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
          <div className="flex flex-wrap gap-1 md:gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.ref)}
                className="px-2 md:px-5 py-2 rounded-none text-xs md:text-sm tracking-wide transition-all duration-300 border-b-2 bg-transparent text-foreground border-b-transparent hover:text-accent hover:border-b-accent"
              >
                <span className="mr-1 md:mr-2">{cat.icon}</span>
                <span className="inline text-xs md:text-sm">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Sections */}
        <div className="max-w-3xl mx-auto">
          {/* Couvert */}
          <div ref={couvertRef}>
            <MenuCategory title="Couvert" icon="🥖">
              {menuData.couvert.map((item, idx) => (
                <MenuCard key={idx} item={item} />
              ))}
            </MenuCategory>
          </div>

          {/* Entradas */}
          <div ref={entradasRef}>
            <MenuCategory title="Entradas" icon="🥘">
              {menuData.entradas.map((item, idx) => (
                <MenuCard key={idx} item={item} />
              ))}
            </MenuCategory>
          </div>

          {/* Peixe */}
          <div ref={peixeRef}>
            <MenuCategory title="Peixe" icon="🐟">
              {menuData.peixe.map((item, idx) => (
                <MenuCard key={idx} item={item} />
              ))}
            </MenuCategory>
          </div>

          {/* Carne */}
          <div ref={carneRef}>
            <MenuCategory title="Carne" icon="🥩">
              {menuData.carne.map((item, idx) => (
                <MenuCard key={idx} item={item} />
              ))}
            </MenuCategory>
          </div>

          {/* Aves */}
          <div ref={avesRef}>
            <MenuCategory title="Aves" icon="🍗">
              {menuData.aves.map((item, idx) => (
                <MenuCard key={idx} item={item} />
              ))}
            </MenuCategory>
          </div>

          {/* Pastas e Risotos */}
          <div ref={pastasRef}>
            <MenuCategory title="Pastas e Risotos" icon="🍝">
              {menuData.pastas_risotos.map((item, idx) => (
                <MenuCard key={idx} item={item} />
              ))}
            </MenuCategory>
          </div>

          {/* Comida Típica */}
          <div ref={comidaTipicaRef}>
            <MenuCategory title="Comida Típica" icon="🍲">
              {menuData.comida_tipica.map((item, idx) => (
                <MenuCard key={idx} item={item} />
              ))}
            </MenuCategory>
          </div>

          {/* Saladas */}
          <div ref={saladaRef}>
            <MenuCategory title="Saladas" icon="🥗">
              {menuData.saladas.map((item, idx) => (
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
        </div>

        {/* Footer Info */}
        <div className="mt-20 pt-12 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm mb-6 tracking-wide">
            Preços em Kwanzas (kz) | Sujeito a alterações
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 text-accent text-sm">
            <span>📍 Luanda, Angola</span>
            <span className="hidden md:inline text-border/50">•</span>
            <span>☎️ +244 934 560 780</span>
          </div>
        </div>
      </div>
    </div>
  );
}
