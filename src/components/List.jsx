import React from 'react';
import ListItem from '@/components/ListItem';


  export default React.memo(({ list }) => {
    console.log('List:',list);
    return (
      <ul>
        {list.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    );
  });