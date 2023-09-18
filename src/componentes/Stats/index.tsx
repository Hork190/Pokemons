import React from 'react';
import { Param, Title, Field, List } from './ui';

interface IProps {
    title: string,
    items: {
        id?: number,
        label?: string,
        value: string | number,
    }[],
}

const ListStat: React.FC<IProps> = ({items, title}): JSX.Element => {
    return (
        <List>
            <Title>{title}</Title>
            {
                items.map((item) => (
                    <Field key={item?.id || item.value}>
                        {item.label ? <Param>{item.label}:</Param> : null}
                        <div>{item.value}</div>
                    </Field>
                ))
            }
        </List>
    )
}

export default React.memo(ListStat);