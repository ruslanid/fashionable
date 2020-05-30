export const addItem = (items, itemToAdd) => {
  const foundItem = items.find(item => item.id === itemToAdd.id);

  if (foundItem) {
    return items.map(item => {
      if (item.id === itemToAdd.id) {
        return {...item, quantity: item.quantity + 1};
      } else {
        return item;
      }
    });
  } else {
    return [...items, {...itemToAdd, quantity: 1}];
  }
};

export const subtractItem = (items, itemToSubtract) => {
  const foundItem = items.find(item => item.id === itemToSubtract.id);

  if (foundItem.quantity === 1) {
    return items.filter(item => item.id !== itemToSubtract.id);
  } else {
    return items.map(item => {
      if (item.id === itemToSubtract.id) {
        return {...item, quantity: item.quantity - 1};
      } else {
        return item;
      }
    });
  }
};

export const removeItem = (items, itemToRemove) => {
  return items.filter(item => item.id !== itemToRemove.id);
};