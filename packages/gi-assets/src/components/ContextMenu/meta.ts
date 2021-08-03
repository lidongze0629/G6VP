const getMeta = context => {
  const { data, keys = ['id', 'type'] } = context;
  const options = keys.map(c => {
    return {
      value: c,
      label: c,
    };
  });
  return {
    /** 分类信息 */
    categoryId: 'components-interaction',
    id: 'NodeContextMenu',
    type: 'group',
    name: '右键菜单',
    fold: false,
    children: {
      sortkey: {
        name: '映射字段',
        type: 'select',
        default: 'type',
        options,
      },
    },
  };
};

export default getMeta;
