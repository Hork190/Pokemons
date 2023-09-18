import api from "../instance";
import { IPokemonPagination } from "./types";

export async function getPokemonInfo<T>(url: string) {
    const response = await api.get<T>(`/pokemon/${url}`);
    return response.data;
}

export async function getPokemonPage(page: number, limit = 20) {
    const response = await api.get<IPokemonPagination>(`/pokemon?offset=${limit * (page - 1)}&limit=${limit}`);
    return response.data;
}