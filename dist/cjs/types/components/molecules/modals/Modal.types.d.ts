/** @format */
import { MouseEventHandler } from "react";
export interface ModalProps {
    x?: string;
    size?: "xl" | "l" | "m";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    setOpenModal: (x: boolean) => void;
    openModal: boolean;
    children: React.ReactNode;
    zIndex?: number | string;
    portalId?: string;
}
