const getMeta = (context) => {
  const { data, keys = ['id', 'type'] } = context;
  const options = keys.map(c => {
    return {
      value: c,
      label: c,
    };
  });

  return {
    'size': {
      name: '大小',
      type: 'group',
      enableHide: false,
      "fold": false,
      children: {
        sizeMapping: {
          name: '半径',
          type: 'sizeMapping',
          min: 0,
          max: 50,
          step: 1,
          suffix: 'px',
          default: {
            mapping: false,
            fixed: 5,
            scale: {
              custom: false, // 是否采取自定义映射
              range: [3, 30], // 值域
              domain: [0, 1000], // 定义域
              abnormal: 1,
            },
          },
        },
        keyMapping: {
          name: '映射字段',
          type: 'select',
          useFont: true,
          default: 'amount',
          options,
        },
      },
    },
    'color': {
      name: '颜色',
      type: 'group',
      enableHide: false,
      "fold": false,
      children: {
        colorMapping: {
          name: '填充颜色',
          type: 'colorMapping',
          fixedComponents: ['flat'],
          default: {
            mapping: false,
            fixed: 'skyblue',
            scale: {
              type: 'ordinal',
              scheme: 'cat-1',
              custom: false,
              range: ['#00FF95', '#588ee9'],
              domain: [],
              excepted: '#666',
              abnormal: '#f31200',
              pin: [false, true],
            },
          },
        },
        keyMapping: {
          name: '映射字段',
          type: 'select',
          useFont: true,
          default: 'type',
          showInPanel:{
            "conditions": [
              ["color.colorMapping.scale.custom", "$eq", true],
            ],
          },
          options,
        },
      },
    },
  }
}

  export default getMeta;