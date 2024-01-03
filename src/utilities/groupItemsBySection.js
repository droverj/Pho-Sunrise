export function groupItemsBySection(items) {
  const groupedItems = {};
  let sectionId = 1;

  items.forEach((item) => {
    if (!groupedItems[item.section]) {
      groupedItems[item.section] = {
        id: sectionId++,
        section: item.section,
        items: [],
      };
    }

    if (!groupedItems[item.section].items.some((i) => i.id === item.id)) {
      groupedItems[item.section].items.push({
        id: item.id,
        name: item.name,
        description: item.description,
        item_option: item.item_option,
        price: item.price,
      });
    }
  });

  const groupedItemsArray = Object.values(groupedItems);
  return groupedItemsArray;
}