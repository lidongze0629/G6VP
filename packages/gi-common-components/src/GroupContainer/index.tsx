import { CaretRightOutlined, DeleteOutlined, FilterOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, Collapse, Form, Input, Row, Switch } from 'antd';
import React, { useCallback, useState } from 'react';
import type { ItemConfig } from '../CommonStyleSetting/typing';
import { getAllkeysBySchema } from '../Utils/getAllkeysBySchema';
import ExpressionGroup, { Expression } from './ExpressionGroup';
import './index.less';
import DisplayColor from './DisplayColor';
import PopoverContainer from './PopoverContainer';
import $i18n from '../i18n';

export interface ElementTypeOption {
  value: string;
  properties: any[];
}

export interface GroupContainerProps {
  data: any[];
  children?: (id: number) => React.ReactNode;
  initValues: {
    groups: ItemConfig[];
  };
  valuesChange: (
    currenr: any,
    allValues: {
      groups: ItemConfig[];
    },
  ) => void;
  defaultGroupOption: ItemConfig;
  schemaData: any;
  elementType: 'nodes' | 'edges';
}

const { Panel } = Collapse;

export interface Condition {
  nodeTypes: string[];
  expressions?: Expression[];
  logic?: boolean;
  groupIndex: number | string;
  checked?: boolean;
}
export interface State {
  activeKeys: (string | number)[];
}

const GroupContainer: React.FC<GroupContainerProps> = props => {
  const { children, valuesChange, initValues, defaultGroupOption, schemaData, elementType } = props;
  const [form] = Form.useForm();

  const [activeKeys, setActiveKeys] = useState<string[]>(['0']);

  const onPanelChange = (keys: string | string[]) => {
    setActiveKeys(typeof keys === 'string' ? [keys] : keys);
  };

  const onValuesChange = useCallback((changedValue: any, allValues: { groups: ItemConfig[] }) => {
    if (valuesChange) {
      valuesChange(changedValue, allValues);
    }
  }, []);

  // 构建属性列表

  const propertyList = getAllkeysBySchema(schemaData, elementType)?.map(([c, t]) => {
    return {
      value: c,
      key: c,
      type: t,
    };
  });

  // 为 groupId 添加唯一标识
  initValues.groups = initValues.groups.map(group => {
    if (group.groupId) {
      return {
        ...group,
      };
    }

    return {
      ...group,
      groupId: Math.random().toString(36).slice(-8),
    };
  });

  /** 清除样式分组 */
  const clear = () => {
    form.setFieldsValue({
      groups: [form.getFieldValue('groups')[0]],
    });
    onValuesChange({}, form.getFieldsValue());
  };

  return (
    /** 让fixed定位从该容器开始 */
    <div className="gi-group-contaner" style={{ transform: 'scale(1)', height: '100%' }}>
      <Form
        initialValues={initValues}
        layout="vertical"
        form={form}
        onValuesChange={onValuesChange}
        className="gi-style-form"
      >
        <Form.Item
          name="groups"
          shouldUpdate={() => true}
          initialValue={[
            {
              groupName: $i18n.get({
                id: 'common-components.src.GroupContainer.StyleConfigurationGroup',
                dm: '样式配置分组1',
              }),
              groupId: 'default-group',
              id: 'SimpleNode',
              props: {},
            },
          ]}
        >
          <Form.List name="groups">
            {(fields, { add, remove }) => {
              return (

                <div className="gi-style-form-list">
                  <div className="gi-style-form-btn-group">
                    <Button
                      type="primary"
                      className="gi-tour-style-add-group"
                      onClick={() => {
                        const idx = fields.length + 1;
                        const options = {
                          ...defaultGroupOption,
                          groupId: Math.random().toString(36).slice(-8),
                          groupName:  $i18n.get(
                          {
                            id: 'common-components.src.GroupContainer.CustomStyleIdx',
                            dm: '自定义样式 {idx}',
                          },
                          { idx: idx },
                        ),
                        };
                        add(options);
                        setActiveKeys([...activeKeys, `${fields.length}`]);
                      }}
                      icon={<PlusOutlined />}
                    >
                         {$i18n.get({ id: 'common-components.src.GroupContainer.AddStyleGroups', dm: '新增样式分组' })}
                    </Button>
                    <Button onClick={clear}>重置</Button>
                  </div>
                  
                  <Collapse
                    className="gi-sidebar-collapse"
                    bordered={false}
                    onChange={onPanelChange}
                    activeKey={activeKeys}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                  >
                    {fields.map(({ key, name, ...restField }, index) => {
                      const panelKey = `${key}`;
                      const isActive = activeKeys.indexOf(panelKey) !== -1;
                      const item = initValues['groups'][key];
                      let color = '#ddd';
                      if (item && item.props) {
                        color = item.props.color;
                      }
                      return (
                        <Panel
                          className="gi-group-contaner-panel"
                          key={`${key}`}
                          extra={
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                verticalAlign: 'top',
                                height: '32px',
                                lineHeight: '32px',
                              }}
                              onClick={e => {
                                // If you don't want click extra trigger collapse, you can prevent this:
                                e.stopPropagation();
                              }}
                            >
                              {isActive ? null : <DisplayColor color={color}></DisplayColor>}
                              <PopoverContainer
                                title={$i18n.get({
                                  id: 'common-components.src.GroupContainer.GroupingRules',
                                  dm: '分组规则',
                                })}
                                disabled={index === 0}
                                content={
                                  <Row>
                                    <Col span={24} className="expression-group" style={{ display: 'flex' }}>
                                      <ExpressionGroup
                                        //@ts-ignore
                                        options={propertyList}
                                        name={name as any}
                                        index={index}
                                        form={form}
                                      />

                                      <div className="switch-button-wrap">
                                        <Form.Item name={[name, 'logic']}>
                                          <Switch
                                            size="small"
                                            className="switch-button"
                                            checkedChildren="and"
                                            unCheckedChildren="or"
                                            defaultChecked={initValues?.groups[name]?.logic}
                                          />
                                        </Form.Item>
                                      </div>
                                    </Col>
                                  </Row>
                                }
                              >
                                <Button
                                  className={`gi-tour-style-rule-${index}`}
                                  disabled={index === 0}
                                  type="text"
                                  icon={<FilterOutlined />}
                                  size="small"
                                ></Button>
                              </PopoverContainer>

                              <Button
                                type="text"
                                disabled={index === 0}
                                icon={
                                  <DeleteOutlined
                                    onClick={() => {
                                      remove(name);
                                    }}
                                  />
                                }
                                size="small"
                              ></Button>
                            </div>
                          }
                          header={
                            <div>
                              <div onClick={e => e.stopPropagation()}>
                                <Form.Item
                                  {...restField}
                                  name={[name, 'groupName']}
                                  className="gi-group-container-panel-header"
                                >
                                  <Input
                                    placeholder={$i18n.get({
                                      id: 'common-components.src.GroupContainer.EnterAStyleGroupName',
                                      dm: '请输入样式分组名称',
                                    })}
                                    bordered={false}
                                  />
                                </Form.Item>
                              </div>
                            </div>
                          }
                        >
                          <Col span={24} className="xrender-form-container">
                            {children && children(index)}
                          </Col>
                        </Panel>
                      );
                    })}
                  </Collapse>
                </div>
              );
            }}
          </Form.List>
        </Form.Item>
      </Form>
    </div>
  );
};

export default GroupContainer;
