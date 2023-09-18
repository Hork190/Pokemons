import React, { JSX } from 'react';
import { Pagination } from 'antd';
import { Layout, Item } from '../List/ui';
import LargeLoader from '../LargeLoader';

interface IProps {
    isLoading: boolean,
    total: number,
    pageSize: number,
    currentPage: number,
    items: {
        name: string,
        id?: number,
    }[],
    onClickItem: (value: string) => void,
    onChangePage: (page: number) => void
}

const List: React.FC<IProps> = ({isLoading, currentPage, total, pageSize, items, onClickItem, onChangePage}): JSX.Element => {
    if(isLoading) return <LargeLoader />
    return (
        <Layout>
            {
                items.map(({name}) => (
                    <Item
                        onClick={() => onClickItem(name)}
                    >
                        {name}
                    </Item>
                ))
            }
            <Pagination
                showSizeChanger={false}
                current={currentPage}
                total={total}
                pageSize={pageSize}
                onChange={(newPage) => onChangePage(newPage)}
            />
        </Layout>
    )
}

export default List;