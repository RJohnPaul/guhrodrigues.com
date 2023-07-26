export interface SectionProps {
    children: React.ReactNode;
}

export interface ContextProps {
    showMenu: boolean;
    setShowMenu: (newState: boolean) => void;
    pageScrolled: boolean;
    setPageScrolled: (newState: boolean) => void;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
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

export interface FooterProps {
    id: number;
    href: string;
    icon: JSX.Element;
}
