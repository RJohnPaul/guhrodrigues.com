export interface CommandMenuProps {
  heading: string;
  actions: {
    name: string;
    icon: JSX.Element;
    onSelect: () => void | Promise<void | boolean>;
  }[];
}
