export const addItem = (items, itemToAdd) => {
  const foundItem = items.find(item => (
    item.id === itemToAdd.id
  ));

  if (foundItem) {
    return items.map(item => {
      if (item.id === itemToAdd.id) {
        return {...item, quantity: item.quantity + 1};
      } else {
        return item;
      }
    })
  } else {
    return [...items, {...itemToAdd, quantity: 1}];
  }
};