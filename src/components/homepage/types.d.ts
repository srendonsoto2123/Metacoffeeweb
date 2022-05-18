export interface NavElement {
  name: string;
  url: string;
  isActive?: boolean;
}

export type SetNavElements = Array<NavElement>;
