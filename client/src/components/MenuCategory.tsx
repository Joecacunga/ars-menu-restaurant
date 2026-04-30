import { ReactNode } from 'react';

interface MenuCategoryProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export function MenuCategory({ title, icon, children }: MenuCategoryProps) {
  return (
    <section className="mb-12">
      {/* Decorative line */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        <div className="flex items-center gap-3">
          <div className="category-icon">{icon}</div>
          <h2 className="text-2xl md:text-3xl text-accent category-label">{title}</h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
      </div>

      {/* Menu items */}
      <div className="space-y-2">
        {children}
      </div>
    </section>
  );
}
