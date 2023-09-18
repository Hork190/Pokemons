import React, { JSX, useMemo } from 'react';
import useSWR from 'swr';
import * as API from '../../api/pokemon'
import { useParams } from 'react-router-dom';
import { IPokemon } from '../../api/pokemon/types';
import { ILocation } from '../../api/location/types';
import { Layout, Name} from './ui';
import Card from '../../componentes/Card';

const Component1: React.FC = (): JSX.Element => {
    const { name } = useParams();
    const { data: description, isLoading: isLoadingDescription } = useSWR(["", name], () => name ? API.getPokemonInfo<IPokemon>(name) : null);
    const getLocationApi = useMemo(() => {
        const urlLocation = description?.location_area_encounters;
        if(!urlLocation) return '';
        return urlLocation.split('/').splice(6, 7).join('/')
    }, [description])
    const {
        data: location,
        isLoading: isLoadingLocation
    }= useSWR(["", getLocationApi], () => getLocationApi ? API.getPokemonInfo<ILocation[]>(getLocationApi) : null );
    if(!description || !location) return <Name>Произошла ошибка</Name>
    return (
        <Layout>
            <Name>
                {name}
            </Name>
            <Card description={description} location={location} isLoading={isLoadingDescription || isLoadingLocation}/>
        </Layout>
    )
}

export default Component1;