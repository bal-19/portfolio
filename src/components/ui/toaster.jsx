import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { CheckCircle2, AlertCircle, Info, XCircle } from "lucide-react";
import { useEffect, useState } from "react";

export function Toaster() {
  const { toasts } = useToast();
  const [mounted, setMounted] = useState({});

  useEffect(() => {
    toasts.forEach((toast) => {
      if (!mounted[toast.id]) {
        setMounted((prev) => ({ ...prev, [toast.id]: true }));
      }
    });
  }, [toasts]);

  const getIcon = (variant) => {
    switch (variant) {
      case "destructive":
        return <XCircle className="h-5 w-5 text-red-500" />;
      case "success":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "warning":
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      default:
        return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  const getBackgroundClass = (variant) => {
    switch (variant) {
      case "destructive":
        return "bg-red-500/10 border-red-500/30";
      case "success":
        return "bg-green-500/10 border-green-500/30";
      case "warning":
        return "bg-yellow-500/10 border-yellow-500/30";
      default:
        return "bg-blue-500/10 border-blue-500/30";
    }
  };

  return (
    <ToastProvider duration={5000}>
      {toasts.map(function ({ id, title, description, action, variant, ...props }) {
        const isOpen = mounted[id];

        return (
          <Toast
            key={id}
            {...props}
            duration={5000}
            className={`
              group relative overflow-hidden rounded-xl border-2 backdrop-blur-md shadow-2xl
              ${getBackgroundClass(variant)}
              transition-all duration-500 ease-in-out
              ${isOpen
                ? 'animate-in slide-in-from-right-full sm:slide-in-from-bottom-full fade-in'
                : 'animate-out slide-out-to-right-full sm:slide-out-to-bottom-full fade-out'
              }
              data-[state=open]:animate-in 
              data-[state=open]:slide-in-from-right-full 
              data-[state=open]:sm:slide-in-from-bottom-full
              data-[state=open]:fade-in
              data-[state=closed]:animate-out 
              data-[state=closed]:slide-out-to-right-full 
              data-[state=closed]:sm:slide-out-to-bottom-full
              data-[state=closed]:fade-out
              data-[swipe=cancel]:translate-x-0 
              data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]
              hover:scale-105
            `}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/20 pointer-events-none" />

            {/* Content */}
            <div className="relative flex items-start gap-3 p-4">
              {/* Icon */}
              <div className="flex-shrink-0 mt-0.5 animate-in zoom-in duration-300">
                {getIcon(variant)}
              </div>

              {/* Text Content */}
              <div className="flex-1 grid gap-1">
                {title && (
                  <ToastTitle className="font-semibold text-foreground text-base animate-in slide-in-from-left duration-300">
                    {title}
                  </ToastTitle>
                )}
                {description && (
                  <ToastDescription className="text-sm text-muted-foreground leading-relaxed animate-in slide-in-from-left duration-300 delay-75">
                    {description}
                  </ToastDescription>
                )}
              </div>

              {/* Action Button */}
              {action && (
                <div className="flex-shrink-0">
                  {action}
                </div>
              )}

              {/* Close Button */}
              <ToastClose className="flex-shrink-0 rounded-md hover:bg-background/50 transition-colors opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>

            {/* Animated Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-background/30 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary/50 via-primary to-primary/50"
                style={{
                  animation: 'progress 5s linear forwards'
                }}
              />
            </div>
          </Toast>
        );
      })}
      <ToastViewport className="fixed top-0 right-0 flex flex-col p-4 gap-2 w-full max-w-[420px] m-0 list-none z-[100] outline-none sm:top-auto sm:bottom-0" />

      <style jsx>{`
        @keyframes progress {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
      `}</style>
    </ToastProvider>
  );
}