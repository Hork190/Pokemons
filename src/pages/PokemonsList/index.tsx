import React, { JSX, useCallback, useState } from 'react';
import useSWR from 'swr';
import * as API from '../../api/pokemon'
import { useNavigate } from 'react-router-dom';
import List from '../../componentes/List';

//Так! Тут могут быть вопросы ведь я использовал уже готовый компонент пагинации.
//Сам расчет страниц до боли примитивный Разделить текущие колличество страниц и округлить в большую сторону.
//Сам компонент подобный тоже не сложный: в пропсах он принимает ntreoe. страницу и коллбэк на переключение страницы(дальше думаю - описывать не имеет смысла) 
const PokemonsList: React.FC = (): JSX.Element => {
    const [page, setPage] = useState(1)
    const { data, isLoading } = useSWR(["", page], () => API.getPokemonPage(page));
    const navigate = useNavigate();
    const handleClickOnItem = (name: string) => {
        navigate(name)
    }
    const handleChangePage = useCallback((pageIndex: number) => {
        setPage(pageIndex)
    }, [])
    return (
        <div>
            <h3 style={{marginLeft: 24}}>Pokemon List</h3>
            <List
                isLoading={isLoading}
                currentPage={page}
                total={data?.count || 0}
                pageSize={20}
                items={data?.results.map((res) => ({name: res.name})) || []}
                onClickItem={handleClickOnItem}
                onChangePage={handleChangePage}
            />
        </div>
    )
}

export default PokemonsList;