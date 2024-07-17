"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-light">
                      Grama<span className="font-bold">Pheniers</span>
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Soluciones creativas y tecnológicas para impulsar tus
                      proyectos.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/introduction" title="Introducción">
                Componentes reutilizables diseñados con shadcn/ui y Tailwind
                CSS.
              </ListItem>

              <ListItem href="/technology-stack" title="Stack Tecnológico">
                Descubre las tecnologías y herramientas que utilizamos.
              </ListItem>

              <ListItem href="/technical-support" title="Soporte Técnico">
                Servicios de configuración y soporte técnico para tus proyectos.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Componentes</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {services.map((service) => (
                <ListItem
                  key={service.title}
                  title={service.title}
                  href={service.href}
                >
                  {service.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contacto
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Diálogo de Alerta",
    href: "/docs/primitives/alert-dialog",
    description:
      "Un diálogo modal que interrumpe al usuario con contenido importante y espera una respuesta.",
  },
  {
    title: "Tarjeta Hover",
    href: "/docs/primitives/hover-card",
    description:
      "Para que los usuarios puedan previsualizar el contenido disponible detrás de un enlace.",
  },
  {
    title: "Progreso",
    href: "/docs/primitives/progress",
    description:
      "Muestra un indicador que señala el avance de una tarea, típicamente mostrado como una barra de progreso.",
  },
  {
    title: "Área de Desplazamiento",
    href: "/docs/primitives/scroll-area",
    description: "Separa visual o semánticamente el contenido.",
  },
  {
    title: "Pestañas",
    href: "/docs/primitives/tabs",
    description:
      "Un conjunto de secciones de contenido superpuestas, conocidas como paneles de pestañas, que se muestran una a la vez.",
  },
  {
    title: "Información sobre Herramientas",
    href: "/docs/primitives/tooltip",
    description:
      "Una ventana emergente que muestra información relacionada con un elemento cuando recibe enfoque de teclado o el mouse pasa sobre él.",
  },
];

const services: { title: string; href: string; description: string }[] = [
  {
    title: "Desarrollo Web",
    href: "/services/web-development",
    description:
      "Creamos sitios web a medida con las últimas tecnologías y diseño responsivo.",
  },
  {
    title: "Ilustraciones",
    href: "/services/illustrations",
    description:
      "Producimos ilustraciones personalizadas para diversas necesidades y estilos.",
  },
  {
    title: "Modelado 3D",
    href: "/services/3d-modeling",
    description:
      "Ofrecemos servicios de modelado 3D para proyectos visuales y de animación.",
  },
  {
    title: "Producción Musical",
    href: "/services/music-production",
    description:
      "Creamos y producimos música original para proyectos audiovisuales y más.",
  },
];

export default MenuList;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
