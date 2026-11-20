export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function externalLink() {
  return { target: "_blank", rel: "noopener noreferrer" } as const;
}

export const revealUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export function sectionId(label: string) {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
