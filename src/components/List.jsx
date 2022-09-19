import React from 'react';
import ListItem from '@/components/ListItem';

const List = ({ list }) => {
    console.log('List:',list);
    return (
      <ul>
        {list.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    );
  };

  export default List;