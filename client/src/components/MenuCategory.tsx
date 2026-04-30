import { ReactNode } from 'react';

interface MenuCategoryProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export function MenuCategory({ title, icon, children }: MenuCategoryProps) {
  return (
    <section className="mb-16">
      {/* Category Header - Minimalista */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          <h2 className="text-2xl md:text-3xl text-accent font-light tracking-wide uppercase">
            {title}
          </h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-accent/50 to-transparent"></div>
      </div>

      {/* Menu items */}
      <div className="space-y-0">
        {children}
      </div>
    </section>
  );
}
