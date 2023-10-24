export function groupItemsBySectionAndName(items) {
  const groupedItems = {};
  items.forEach((item) => {
    if (!groupedItems[item.section]) {
      groupedItems[item.section] = {
        section_vietnamese: item.section_vietnamese,
        items: {},
      };
    }
    if (!groupedItems[item.section].items[item.name]) {
      groupedItems[item.section].items[item.name] = {
        options: [],
        name_vietnamese: item.name_vietnamese,
      };
    }
    groupedItems[item.section].items[item.name].options.push(item);
  });
  return groupedItems;
};