import { ToastContextType } from "@/types/types";
import { createContext } from "react";

export const ToastContext = createContext<ToastContextType | null>(null);
