export interface TypeChildren {
  handler?: (index: number) => void;
  children: React.ReactNode;
}

export interface TabsProps extends TypeChildren {
  disabled: boolean;
}
