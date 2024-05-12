import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isAuthenticated = (): boolean => {
  const { isAuthenticated } = JSON.parse(
    sessionStorage.getItem("user") ?? "null"
  ).state;
  return isAuthenticated;
};
export const getUserId = (): number => {
  const { id } = JSON.parse(sessionStorage.getItem("user") ?? "null").state
    .user;
  return id;
};
