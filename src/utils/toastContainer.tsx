import {
    ReactElement,
    createContext,
    useEffect,
    useMemo,
    useState,
    useContext,
  } from "react";
 import { cn } from "../lib/utils";

  export type ToastType = {
    message: ReactElement | null;
    className?: string;
  };
  
  type ToastContextType = {
    content: ToastType | null;
    toast: React.Dispatch<React.SetStateAction<ToastType | null>>;
  };
  
  export const ToastContext = createContext<ToastContextType>(
    {} as ToastContextType
  );
  export function ToastContainer({
    className,
    message,
  }: {
    className?: string;
    message?: ReactElement | null;
  }) {
    const [isVisible, setVisibiltity] = useState(false);
  
    useEffect(() => {
      if (message !== undefined) {
          setVisibiltity(true);
        setTimeout(() => {
          setVisibiltity(false);
        },5000)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [message]);
   // console.log({ isVisible, message });
  
    return (
      <div
        className={cn(
          "fixed z-[99999] shadow-md px-3 py-3 rounded-lg right-1 top-5 duration-400 ease-in-out transform translate-x-0 w-[80%]  sm:max-w-[400px] h-fit hidden items-center sm:w-fit justify-start gap-x-2",
          isVisible && "flex -translate-x-6",
          className
        )}
      >
        {message}
      </div>
    );
  }
  
  export function ToastContextProvider({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const [content, toast] = useState<ToastType | null>(null);
  
    const contextValue = useMemo(() => {
      return {
        content,
        toast,
      };
    }, [content, toast]);
  
    return (
      <ToastContext.Provider value={contextValue as ToastContextType}>
        <ToastContainer
          className={content?.className}
          message={content?.message}
        />
        {children}
      </ToastContext.Provider>
    );
  }
  
  export const useToast = () => {
    const context = useContext(ToastContext);
  
    if (!context) {
      throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
  };
  