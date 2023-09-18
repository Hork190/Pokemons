export interface IPokemonPage {
    name: string,
    url: string,
}

export interface IAbility {
    slot: number,
    is_hidden: boolean,
    ability: {
        name: string,
        url: string
    }
}

export interface IForm {
    name: string,
    url: string,
}

export interface IStat {
    base_stat: number,
    effort: number,
    stat: {
        name: string,
        url: string,
    }
}

export interface IPokemonPagination {
    results: IPokemonPage[],
    count: number,
}

export interface IPokemon {
    abilities: IAbility[],
    location_area_encounters: string,
    name: string,
    forms: IForm[],
    weight: number,
    height: number,
    sprites: {
        other: {
            "official-artwork": {
                front_default: string,
            }
        }
    }
    stats: IStat[]
}

