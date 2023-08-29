export interface ContextProps {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  position: number;
  setPosition: React.Dispatch<React.SetStateAction<number>>;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface NavLinksProps {
  id: number;
  path: string;
  name: string;
}

export interface ProjectsProps {
  id: number;
  src: string;
  title: string;
  description: string;
  techs: string[];
  code: string;
  visit: string;
}

export interface SocialsProps {
  id: number;
  href: string;
  name?: string;
  icon?: JSX.Element;
}

export interface AnimateEnterProps {
  children: React.ReactNode;
  className?: string;
}
