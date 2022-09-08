import { useReducer } from "react";

interface SidebarState {
  status: boolean;
  label: string;
  expanded: boolean;
}
interface DispatchAction {
  type: Action;
}
export enum Action {
  DESKTOP = "DESKTOP",
  DESKTOP_INITIAL = "DESKTOP_INITIAL",
  MOBILE = "MOBILE",
  MOBILE_INITIAL = "MOBILE_INITIAL",
}
enum Label {
  COMPACT = "Compactar sidebar",
  EXPAND = "Expandir sidebar",
  CLOSE = "Cerrar menu",
  OPEN = "Abrir menu",
}

const reducer = (state: SidebarState, { type }: DispatchAction) => {
  const { status } = state;

  switch (type) {
    case Action.DESKTOP:
      return {
        expanded: !status,
        label: !status ? Label.COMPACT : Label.EXPAND,
        status: !status,
      };
    case Action.DESKTOP_INITIAL:
      return {
        ...state,
        label: status ? Label.COMPACT : Label.EXPAND,
      };
    case Action.MOBILE:
      return {
        expanded: status,
        label: status ? Label.CLOSE : Label.OPEN,
        status: !status,
      };
    case Action.MOBILE_INITIAL:
      return {
        ...state,
        expanded: !status,
        label: !status ? Label.CLOSE : Label.OPEN,
      };

    default:
      return state;
  }
};

export const useSidebarReducer = () => {
  const [sidebar, dispatch] = useReducer(reducer, {
    expanded: true,
    label: "",
    status: true,
  });

  return { sidebar, dispatch };
};
