import { Promo, Service } from "@/types";

export const api = {
  async getServices(): Promise<Service[]> {
    const res = await fetch(`/api/services.json`);
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  },

  async getPromo(): Promise<Promo[]> {
    const res = await fetch(`/api/promo.json`);
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  },
};
