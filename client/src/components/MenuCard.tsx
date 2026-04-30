import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface MenuItem {
  name: string;
  price: number;
  description?: string;
}

interface MenuCardProps {
  item: MenuItem;
  isExpanded?: boolean;
}

export function MenuCard({ item, isExpanded = false }: MenuCardProps) {
  const [expanded, setExpanded] = useState(isExpanded);

  return (
    <div className="menu-card p-4 mb-3">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h3 className="dish-title mb-1">{item.name}</h3>
          {item.description && expanded && (
            <p className="text-sm text-muted-foreground mt-2 mb-2">
              {item.description}
            </p>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="price-tag whitespace-nowrap">{item.price.toLocaleString('pt-AO')} kz</span>
          {item.description && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-accent hover:text-accent/80 transition-colors"
              aria-label="Expandir detalhes"
            >
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
