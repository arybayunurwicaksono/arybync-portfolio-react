import { cn } from "../lib/utils";
import { handleMotionClick } from "../lib/utils";

export const MobileMenu = ({ isMenuOpen, navItems }) => {
  return (
    <div
      className={cn(
        "fixed inset-0 bg-background/95 backdrop-blur-md z-[999] flex flex-col items-center justify-center",
        "transition-all duration-300 md:hidden",
        isMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
    >
      <div className="flex flex-col space-y-8 text-xl">
        {navItems.map((item, key) => (
          <a
            key={key}
            href={item.href}
            onClick={(e) => handleMotionClick(e, item.href)}
            className="text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};
