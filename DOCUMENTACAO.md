# Menu Digital ARS Jazz Club - Documentação Completa

## 📋 Resumo do Projeto

O **Menu Digital ARS Jazz Club** é uma aplicação web elegante e interativa que apresenta o cardápio completo do restaurante ARS Jazz Club em Luanda, Angola. O design segue a filosofia **Art Deco Moderno**, combinando sofisticação com funcionalidade.

---

## 🎨 Design & Identidade Visual

### Filosofia de Design
- **Movimento**: Art Deco Moderno com influências de design gráfico vintage
- **Paleta de Cores**: Ouro (#d4af37) e Preto Profundo (#0a0a0a)
- **Tipografia**: Playfair Display (títulos) + Lato (corpo) + Montserrat (categorias)
- **Tema**: Escuro (dark mode) para evocar a noite de jazz

### Elementos Visuais
- Hero section com imagem de jazz club (saxofone dourado em fundo Art Deco)
- Cartões de menu com bordas douradas e efeitos hover
- Ícones emoji para cada categoria
- Padrão geométrico Art Deco em fundo
- Código QR personalizado em ouro e preto

---

## 📱 Funcionalidades

### Página Principal (`/`)
- **Hero Section**: Imagem de fundo com overlay e título "ARS JAZZ"
- **Navegação por Categorias**: Botões para filtrar por tipo de prato
- **7 Categorias de Menu**:
  1. Entradas (4 itens)
  2. Pratos Principais (4 itens)
  3. Sushi (7 itens)
  4. Pizzas (1 item)
  5. Sobremesas (7 itens)
  6. Bebidas (9 itens)
  7. Combinados (2 itens)

### Página de QR Code (`/qr`)
- Exibe código QR funcional para digitalizar
- Botão de impressão para criar cartazes
- Instruções claras para o utilizador

### Componentes Interativos
- **MenuCard**: Cartão individual de prato com nome, preço e descrição
- **MenuCategory**: Secção de categoria com ícone e divisor decorativo
- Hover effects com glow dourado
- Transições suaves

---

## 💻 Stack Tecnológico

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + CSS personalizado
- **Roteamento**: Wouter
- **UI Components**: shadcn/ui
- **Ícones**: Emoji (nativo)
- **QR Code**: Biblioteca `qrcode`
- **Build Tool**: Vite

---

## 📊 Estrutura de Dados

### Formato de Item de Menu
```typescript
interface MenuItem {
  name: string;      // Nome do prato
  price: number;     // Preço em Kwanzas
  description?: string; // Descrição opcional
}
```

### Categorias Disponíveis
- `entradas`: Pratos de entrada
- `pratos_principais`: Pratos principais
- `sushi`: Sushi e combinados de sushi
- `pizzas`: Pizzas
- `sobremesas`: Sobremesas e doces
- `bebidas`: Bebidas alcoólicas e não alcoólicas
- `combinados`: Combinados de sushi

---

## 🎯 Código QR

### Detalhes Técnicos
- **URL**: https://ars-jazz-menu.manus.space
- **Nível de Correção**: Alto (H)
- **Cores**: Ouro (#d4af37) e Preto (#0a0a0a)
- **Tamanho**: 500x500px
- **Localização**: `/home/ubuntu/webdev-static-assets/menu-qr-code.png`

### Como Usar
1. Imprima o QR Code da página `/qr`
2. Coloque em mesas, entrada ou cardápios
3. Clientes digitalizam com telemóvel
4. Acesso imediato ao menu completo

---

## 🚀 Publicação & Deployment

### Para Publicar
1. Clique no botão **"Publish"** na interface Manus
2. O website será hospedado em: `https://ars-jazz-menu.manus.space`
3. O código QR apontará automaticamente para este URL

### Características de Hosting
- Domínio personalizado incluído
- SSL/HTTPS automático
- CDN global para rápido carregamento
- Sem limite de tráfego

---

## 📱 Responsividade

O menu é totalmente responsivo:
- **Mobile**: Otimizado para ecrãs pequenos (320px+)
- **Tablet**: Layout adaptado para tablets (768px+)
- **Desktop**: Experiência completa em ecrãs grandes (1024px+)

---

## 🔧 Personalização Futura

### Sugestões de Melhorias
1. **Filtro de Alergénios**: Adicionar ícones de alergénios (glúten, frutos secos, etc.)
2. **Descrições Detalhadas**: Expandir descrições de pratos com ingredientes
3. **Imagens de Pratos**: Adicionar fotos de cada prato
4. **Reservas Online**: Integrar sistema de reservas
5. **Múltiplas Línguas**: Adicionar suporte para Inglês e Francês
6. **Horários**: Mostrar horários de funcionamento
7. **Contactos**: Adicionar informações de contacto e localização
8. **Avaliações**: Sistema de avaliações de clientes

---

## 📁 Estrutura de Ficheiros

```
ars-jazz-menu/
├── client/
│   ├── public/
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── MenuCard.tsx
│   │   │   └── MenuCategory.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── QRCode.tsx
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── server/
│   └── index.ts
├── package.json
└── DOCUMENTACAO.md
```

---

## 🎵 Notas Finais

O menu foi criado com atenção especial à experiência do utilizador, mantendo a elegância e sofisticação que caracteriza o ARS Jazz Club. A paleta de cores ouro e preto reflete a atmosfera de luxo e a herança do jazz, enquanto a tipografia sofisticada garante legibilidade em todos os dispositivos.

O código QR funcional permite que os clientes acedam ao menu instantaneamente, eliminando a necessidade de cardápios físicos e permitindo atualizações em tempo real.

---

**Versão**: 1.0.0  
**Data**: 30 de Abril de 2026  
**Desenvolvido com**: Manus Platform
