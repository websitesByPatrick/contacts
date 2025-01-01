import { Roboto, Reggae_One } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700","900"],
  display: "swap",
  style: ["normal","italic"],
});

export const reggaeOne = Reggae_One({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  style: ["normal"],
});