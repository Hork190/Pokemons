import React, { JSX } from 'react';
import { IPokemon } from '../../api/pokemon/types';
import { ILocation } from '../../api/location/types';
import { Image } from 'antd'
import { Description } from './ui';
import LargeLoader from '../../componentes/LargeLoader';
import ListStat from '../../componentes/Stats'

interface IProps {
    description: IPokemon,
    location: ILocation[],
    isLoading: boolean
}

const Card: React.FC<IProps> = ({
    description,
    location,
    isLoading
}): JSX.Element => {
    if(isLoading) return <LargeLoader />
    return (
            <Description>
                <Image
                    width={400}
                    src={description?.sprites.other['official-artwork'].front_default}
                    style={{marginRight: 12}}
                />
                <ListStat
                    title='Stats'
                    items={description.stats.map((item) => ({label: item.stat.name, value: item.base_stat}))}
                />
                <ListStat
                    title='Stats'
                    items={description.forms.map((item) => ({value: item.name}))}
                />
                <ListStat
                    title='Stats'
                    items={location.map((item) => ({value: item.location_area.name}))}
                />
            </Description>
    )
}

export default React.memo(Card);