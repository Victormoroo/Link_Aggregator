import { Github, Linkedin, Instagram, Globe, Mail } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface LinkItem {
  id: string
  label: string
  url: string
  icon: LucideIcon
  external: boolean
  disabled?: boolean
}

export const profileData = {
  name: 'Victor Moro',
  handle: '@victormoroo',
}

// Adicione, remova ou edite links aqui
export const links: LinkItem[] = [
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/Victormoroo',
    icon: Github,
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/victormoroo/',
    icon: Linkedin,
    external: true,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/victormoroo/',
    icon: Instagram,
    external: true,
  },
  {
    id: 'portfolio',
    label: 'Portfólio',
    url: '#', // TODO: atualize com a URL do seu portfólio
    icon: Globe,
    external: false,
    disabled: true,
  },
  {
    id: 'email',
    label: 'victormoro.dev@gmail.com',
    url: 'mailto:victormoro.dev@gmail.com',
    icon: Mail,
    external: false,
  },
]
