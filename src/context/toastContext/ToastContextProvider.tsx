"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { ToastContext } from "./ToastContext";
import {
  ToastContextProviderType,
  ToastItem,
  ToastVariant,
} from "@/types/types";

export const ToastContextProvider = ({
  children,
}: ToastContextProviderType) => {
  const idRef = useRef(0);
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    (message: string, variant: ToastVariant = "success") => {
      idRef.current += 1;
      const nextId = idRef.current;

      setToasts((prevToasts) => [
        ...prevToasts,
        { id: nextId, message, variant },
      ]);

      window.setTimeout(() => {
        removeToast(nextId);
      }, 4000);
    },
    [removeToast],
  );

  const contextValue = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <div className="pointer-events-none fixed inset-x-4 top-4 z-100 flex flex-col gap-2 md:inset-x-auto md:bottom-6 md:right-6 md:top-auto md:w-88">
        {toasts.map((toast) => {
          const variantClasses =
            toast.variant === "error"
              ? "border-red-200 bg-red-50 text-red-800"
              : "border-emerald-200 bg-emerald-50 text-emerald-800";

          return (
            <div
              key={toast.id}
              role="status"
              className={`pointer-events-auto rounded-xl border px-3 py-2.5 text-sm shadow-lg backdrop-blur-xs ${variantClasses}`}
            >
              <div className="flex items-start justify-between gap-3">
                <p>{toast.message}</p>
                <button
                  type="button"
                  aria-label="Close notification"
                  onClick={() => removeToast(toast.id)}
                  className="cursor-pointer text-current/70 transition-colors hover:text-current"
                >
                  <i className="fa-solid fa-xmark" aria-hidden />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
};
