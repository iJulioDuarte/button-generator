import { PropsWithChildren, ReactNode } from "react";

export type CommonContentProps = {
  onHide(): void;
};

export type ModalProps = PropsWithChildren &
  CommonContentProps & {
    title?: ReactNode;
    customFooter?: ReactNode;
    open: boolean;
  };
