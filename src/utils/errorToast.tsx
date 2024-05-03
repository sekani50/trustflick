import { AxiosError } from "axios";
import { ReactElement } from "react";
import { IoCloseCircle } from "react-icons/io5";
interface ErrorResponse {
  error?: {
    [key: string]: string[];
  };
  response?: {
    message?: string;
  };
}

export type ToastType = {
    message: ReactElement | null;
    className?: string;
  };

export function errorToast(error: AxiosError<ErrorResponse>, toast: React.Dispatch<React.SetStateAction<ToastType | null>>) {
  
  if (
    error.message === "Network Error" ||
    error.message === "timeout exceeded"
  ) {
    toast({
      message: (
        <div className="flex items-center gap-x-2">
          <IoCloseCircle className="text-red-700 text-[22px]" />
          <p>{"Network error"}</p>
        </div>
      ),
      className: "bg-white",
    });
  }

  const err = error?.response?.data?.error;
  if (err) {
    const errorMessage = Object.values(err).join("");
    toast({
      message: (
        <div className="flex items-center gap-x-2">
          <IoCloseCircle className="text-red-700 text-[22px]" />
          <p>{errorMessage}</p>
        </div>
      ),
      className: "bg-white",
    });
  }

  const message = error?.response?.data?.error?.message;
  if (typeof message === "string") {
    toast({
      message: (
        <div className="flex items-center gap-x-2">
          <IoCloseCircle className="text-red-700 text-[22px]" />
          <p>{message}</p>
        </div>
      ),
      className: "bg-white",
    });
  }

  const mm = error?.response?.data?.response?.message;
  if (mm) {
    toast({
      message: (
        <div className="flex items-center gap-x-2">
          <IoCloseCircle className="text-red-700 text-[22px]" />
          <p>{mm}</p>
        </div>
      ),
      className: "bg-white",
    });
  }
}
