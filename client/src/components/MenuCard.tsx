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
    <div className="py-4 px-0 mb-4 border-b border-border/20 hover:border-accent/30 transition-colors">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h3 className="text-lg mb-1 font-light tracking-wide text-foreground">{item.name}</h3>
          {item.description && expanded && (
            <p className="text-sm text-muted-foreground mt-2 mb-2 font-light">
              {item.description}
            </p>
          )}
        </div>
        <div className="flex items-center gap-4">
          <span className="whitespace-nowrap text-base font-light text-accent">
            {item.price.toLocaleString('pt-AO')} kz
          </span>
          {item.description && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-accent hover:text-accent/80 transition-colors"
              aria-label="Expandir detalhes"
            >
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
