import { useEffect } from "react";

import useToast from "./useToast";

import { emitter, httpClient } from "@/services/ServiceProvider";

interface Error {
  message: string;
  type: string;
}

const useShowToastOnError = () => {
  const { show } = useToast();

  useEffect(() => {
    emitter.on("error", error => {
      if (httpClient.isHttpError<Error>(error)) {
        if (error.response) {
          show({ message: error.response.data.message });
        }
      }
    });

    return () => {
      emitter.off("error", () => {});
    };
  }, [show]);
};

export default useShowToastOnError;
