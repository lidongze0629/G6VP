import { extractDefault } from '@ali/react-datav-gui-utils';

const registerMeta = context => {
  try {
    const { data, keys } = context;

    const labelOptions = keys.map(c => {
      return {
        value: c,
        label: c,
      };
    });
    return {
      label: {
        name: '标签',
        type: 'group',
        enableHide: false,
        fold: false,
        children: {
          showlabel: {
            name: '开关',
            type: 'switch',
            default: true,
            statusText: true,
          },
          mappingKey: {
            name: '映射字段',
            type: 'select',
            useFont: true,
            default: 'type',
            showInPanel: {
              conditions: [['label.showlabel', '$eq', true]],
            },
            options: labelOptions,
          },
        },
      },
    };
  } catch (error) {}
};

const configObj = registerMeta({ data: {}, keys: ['id'] });
/** 默认的配置值 */
export const defaultProps = extractDefault({ config: configObj, value: {} });

export default registerMeta;
