"use client";

import { ReactNode } from "react";

import HttpClient from "./httpClientService";

import { ToastProvider } from "@/contexts/toastContext";
import EventEmitter from "events";

export const emitter = new EventEmitter();
export const httpClient = new HttpClient({ emitter });

const ServiceProvider = ({ children }: { children: ReactNode }) => {
  return <ToastProvider>{children}</ToastProvider>;
};

export default ServiceProvider;
