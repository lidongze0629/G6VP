/** 动态请求需要的配套资产 **/
export const GI_ASSETS_PACKAGE = [
  {
    url: 'https://gw.alipayobjects.com/os/lib/alipay/gi-assets-advance/2.18.0/dist/index.min.js',
    global: 'GI_ASSETS_ADVANCE',
    name: '@antv/gi-assets-advance',
    version: '2.18.0',
  },
  {
    url: 'https://gw.alipayobjects.com/os/lib/alipay/gi-assets-basic/2.22.0/dist/index.min.js',
    global: 'GI_ASSETS_BASIC',
    name: '@antv/gi-assets-basic',
    version: '2.22.0',
  },
  {
    url: 'https://gw.alipayobjects.com/os/lib/alipay/gi-assets-scene/2.7.1/dist/index.min.js',
    global: 'GI_ASSETS_SCENE',
    name: '@antv/gi-assets-scene',
    version: '2.7.1',
  },
];

/** GraphInsight 站点自动生成的配置 **/
export const GI_PROJECT_CONFIG = {
  nodes: [
    {
      id: 'SimpleNode',
      props: {
        size: 26,
        color: '#ddd',
        label: [],
      },
      groupName: '默认样式',
      expressions: [],
      logic: false,
    },
  ],
  edges: [
    {
      id: 'SimpleEdge',
      props: {
        size: 1,
        color: '#ddd',
        label: [],
      },
      groupName: '默认样式',
      expressions: [],
      logic: false,
    },
  ],
  layout: {
    id: 'GraphinForce',
    props: {
      type: 'graphin-force',
      animation: true,
      preset: {
        type: 'concentric',
      },
      stiffness: 200,
      repulsion: 1000,
      damping: 0.9,
      defSpringLenCfg: {
        minLimitDegree: 5,
        maxLimitLength: 500,
        defaultSpring: 100,
      },
      centripetalOptions: {
        leaf: 2,
        single: 2,
        others: 1,
      },
    },
  },
  components: [
    {
      id: 'ZoomIn',
      props: {
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '放大',
          isShowIcon: true,
          icon: 'icon-zoomin',
          isShowTooltip: true,
          tooltip: '',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
        },
      },
    },
    {
      id: 'ZoomOut',
      props: {
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '缩小',
          isShowIcon: true,
          icon: 'icon-zoomout',
          isShowTooltip: true,
          tooltip: '',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
        },
      },
    },
    {
      id: 'FitView',
      props: {
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '自适应',
          isShowIcon: true,
          icon: 'icon-fit-view',
          isShowTooltip: true,
          tooltip: '',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
        },
      },
    },
    {
      id: 'FitCenter',
      props: {
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '视图居中',
          isShowIcon: true,
          icon: 'icon-fit-center',
          isShowTooltip: true,
          tooltip: '',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
        },
      },
    },

    {
      id: 'PropertiesPanel',
      props: {
        serviceId: 'GI/PropertiesPanel',
        title: '属性面板',
        placement: 'RT',
        width: '356px',
        height: 'calc(100% - 0px)',
        offset: [0, 0],
        animate: true,
        defaultiStatistic: false,
      },
    },
    {
      id: 'ActivateRelations',
      props: {
        enableNodeHover: true,
        enableEdgeHover: true,
        enable: true,
        trigger: 'click',
        upstreamDegree: 1,
        downstreamDegree: 1,
      },
    },
    {
      id: 'CanvasSetting',
      props: {
        styleCanvas: {
          background: '#fff',
          backgroundImage: 'https://gw.alipayobjects.com/mdn/rms_0d75e8/afts/img/A*k9t4QamMuQ4AAAAAAAAAAAAAARQnAQ',
        },
        dragCanvas: {
          disabled: false,
          direction: 'both',
          enableOptimize: false,
        },
        zoomCanvas: {
          disabled: false,
          enableOptimize: true,
        },
      },
    },

    {
      id: 'Placeholder',
      name: '画布占位符',
      props: {
        img: 'https://gw.alipayobjects.com/zos/bmw-prod/db278704-6158-432e-99d2-cc5db457585d.svg',
        text: '当前画布为空，请先在导航栏中「查询」',
        width: 380,
      },
    },
    {
      id: 'FilterPanel',
      name: '筛选面板',
      props: {
        filterKeys: ['node-industry'],
        isFilterIsolatedNodes: true,
        highlightMode: true,
        filterLogic: 'and',
        GI_CONTAINER_INDEX: 2,
        GIAC_CONTENT: {
          visible: false,
          disabled: false,
          isShowTitle: true,
          title: '筛选',
          isShowIcon: true,
          icon: 'icon-filter',
          isShowTooltip: false,
          tooltip: '通过属性筛选画布信息，可自定义',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'top',
          hasDivider: false,
          height: '60px',
          isVertical: true,
          containerType: 'div',
          containerAnimate: false,
          containerPlacement: 'RT',
          offset: [0, 0],
          containerWidth: '400px',
          containerHeight: 'calc(100% - 100px)',
          contaienrMask: false,
        },
        histogramColor: '#3056E3',
      },
    },
    {
      id: 'LargeGraph',
      name: '3D大图',
      props: {
        visible: false,
        minSize: '50%',
        maxSize: '100%',
        placement: 'RB',
        offset: [0, 0],
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '3D大图',
          isShowIcon: true,
          icon: 'icon-3d',
          isShowTooltip: true,
          tooltip: '',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
        },
        backgroundColor: '#fff',
        highlightColor: 'red',
      },
    },
    {
      id: 'MapMode',
      name: '地图模式',
      props: {
        visible: false,
        type: 'mapbox',
        theme: 'light',
        minSize: '50%',
        maxSize: '100%',
        placement: 'RB',
        offset: [0, 0],
        longitudeKey: 'longitude',
        latitudeKey: 'latitude',
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '地图模式',
          isShowIcon: true,
          icon: 'icon-global',
          isShowTooltip: true,
          tooltip: '',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
        },
      },
    },
    {
      id: 'SnapshotGallery',
      name: '快照画廊',
      props: {
        background: '#fff',
        direction: 'horizontal',
        placement: 'LT',
        offset: [20, 20],
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '快照画廊',
          isShowIcon: true,
          icon: 'icon-camera',
          isShowTooltip: true,
          tooltip: '快照画廊(快捷键ctrl+x)',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
        },
      },
    },
    {
      id: 'ContextMenu',
      name: '右键菜单',
      props: {
        GI_CONTAINER: ['NeighborsQuery', 'ToggleClusterWithMenu', 'PinNodeWithMenu'],
      },
    },
    {
      id: 'ToggleClusterWithMenu',
      name: '展开/收起',
      props: {
        isReLayout: false,
        degree: 1,
      },
    },
    {
      id: 'NeighborsQuery',
      name: '邻居查询',
      props: {
        serviceId: 'TuGraph/NeighborsQuery',
        degree: '1',
        isFocus: true,
      },
    },
    {
      id: 'Copyright',
      name: '版权',
      props: {
        imageUrl: 'https://gw.alipayobjects.com/mdn/rms_3ff49c/afts/img/A*xqsZTKLVHPsAAAAAAAAAAAAAARQnAQ',
        width: 200,
        height: 90,
        placement: 'RB',
        offset: [0, 0],
      },
    },
    {
      id: 'Loading',
      name: '加载动画',
      props: {},
    },
    {
      id: 'PinNodeWithMenu',
      name: '固定节点(MENU)',
      props: {
        color: '#fff',
        fill: '#262626',
      },
    },
    {
      id: 'ForceSimulation',
      name: '力导布局控制器',
      props: {
        autoPin: true,
        dragNodeMass: 10000000,
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '力导布局控制器',
          isShowIcon: true,
          icon: 'icon-layout-force',
          isShowTooltip: true,
          tooltip: '',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
        },
      },
    },
    {
      id: 'Initializer',
      name: '初始化器',
      props: {
        serviceId: 'TuGraph/GI_SERVICE_INTIAL_GRAPH',
        schemaServiceId: 'TuGraph/GI_SERVICE_SCHEMA',
        GI_INITIALIZER: true,
      },
    },
    {
      id: 'LayoutSwitch',
      name: '布局切换',
      props: {
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '布局切换',
          isShowIcon: true,
          icon: 'icon-layout',
          isShowTooltip: false,
          tooltip: '一键切换画布布局',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
        },
      },
    },
    {
      id: 'Toolbar',
      name: '工具栏',
      props: {
        GI_CONTAINER: [
          'ZoomIn',
          'ZoomOut',
          'FitView',
          'FitCenter',
          'LargeGraph',
          'MapMode',
          'ForceSimulation',
          'LayoutSwitch',
          'Export',
        ],
        direction: 'vertical',
        placement: 'LT',
        offset: [24, 64],
      },
    },
    {
      id: 'Export',
      name: '导出',
      props: {
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '导出',
          isShowIcon: true,
          icon: 'icon-export',
          isShowTooltip: true,
          tooltip: '导出CSV,PNG,JSON数据',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
        },
      },
    },
    {
      id: 'Overview',
      name: '大图概览',
      props: {
        limit: 600,
        filterLogic: 'and',
        GI_CONTAINER_INDEX: 2,
        GIAC_CONTENT: {
          visible: false,
          disabled: false,
          isShowTitle: true,
          title: '大图概览',
          isShowIcon: true,
          icon: 'icon-dashboard',
          isShowTooltip: true,
          tooltip: '',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
          containerType: 'div',
          containerAnimate: false,
          containerPlacement: 'RT',
          offset: [0, 0],
          containerWidth: '400px',
          containerHeight: 'calc(100% - 100px)',
          contaienrMask: false,
        },
      },
    },
    {
      id: 'CypherEditor',
      name: 'Cypher 编辑器',
      props: {
        serviceId: 'TuGraph/LanguageQuery',
        initialValue: 'MATCH n RETURN LIMIT 100',
        GI_CONTAINER_INDEX: 2,
        GIAC_CONTENT: {
          visible: false,
          disabled: false,
          isShowTitle: true,
          title: '查询',
          isShowIcon: true,
          icon: 'icon-query',
          isShowTooltip: false,
          tooltip: '',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
          containerType: 'div',
          containerAnimate: false,
          containerPlacement: 'RT',
          offset: [0, 0],
          containerWidth: '350px',
          containerHeight: 'calc(100vh - 100px)',
          contaienrMask: false,
        },
      },
    },
    {
      id: 'TuGraphDataSource',
      name: '数据管理',
      props: {
        GI_CONTAINER_INDEX: 2,
        GIAC_CONTENT: {
          visible: false,
          disabled: false,
          isShowTitle: true,
          title: '数据',
          isShowIcon: true,
          icon: 'icon-database',
          isShowTooltip: false,
          tooltip: '',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
          containerType: 'div',
          containerAnimate: false,
          containerPlacement: 'RT',
          offset: [0, 0],
          containerWidth: '350px',
          containerHeight: 'calc(100% - 100px)',
          contaienrMask: false,
        },
      },
    },
    {
      id: 'StyleSetting',
      name: '样式设置',
      props: {
        GI_CONTAINER_INDEX: 2,
        GIAC_CONTENT: {
          visible: false,
          disabled: false,
          isShowTitle: true,
          title: '样式',
          isShowIcon: true,
          icon: 'icon-bold',
          isShowTooltip: false,
          tooltip: '',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
          containerType: 'div',
          containerAnimate: false,
          containerPlacement: 'RT',
          offset: [0, 0],
          containerWidth: '350px',
          containerHeight: 'calc(100% - 100px)',
          contaienrMask: false,
        },
      },
    },
    {
      id: 'PathAnalysis',
      name: '路径分析',
      props: {
        pathNodeLabel: 'id',
        GI_CONTAINER_INDEX: 2,
        GIAC_CONTENT: {
          visible: false,
          disabled: false,
          isShowTitle: true,
          title: '路径分析',
          isShowIcon: true,
          icon: 'icon-path-analysis',
          isShowTooltip: true,
          tooltip: '',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: false,
          containerType: 'div',
          containerAnimate: true,
          containerPlacement: 'RT',
          offset: [0, 0],
          containerWidth: '400px',
          containerHeight: '100%',
          contaienrMask: false,
        },
      },
    },
    {
      id: 'SideTabs',
      name: '侧边栏',
      props: {
        GI_CONTAINER: ['TuGraphDataSource', 'CypherEditor', 'StyleSetting', 'FilterPanel'],
        outSideFromCanvas: true,
        tabPosition: 'left',
        placement: 'LB',
        offset: [0, 0],
        height: 'calc(100vh - 120px)',
        width: '400px',
      },
    },

    {
      id: 'NodeImportance',
      name: '节点重要性',
      props: {
        GI_CONTAINER_INDEX: 2,
        GIAC_CONTENT: {
          visible: false,
          disabled: false,
          isShowTitle: true,
          title: '节点重要性',
          isShowIcon: true,
          icon: 'icon-rules',
          isShowTooltip: true,
          tooltip: '',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: false,
          containerType: 'div',
          containerAnimate: true,
          containerPlacement: 'RT',
          offset: [0, 0],
          containerWidth: '350px',
          containerHeight: '100%',
          contaienrMask: false,
        },
      },
    },
    {
      id: 'OperatorBar',
      name: '操作栏',
      props: {
        GI_CONTAINER: ['NodeImportance', 'PathAnalysis'],
        placement: 'LT',
        offset: [0, 0],
        height: '60px',
        width: '100%',
      },
    },
  ],
};

/** GraphInsight 站点选择服务引擎的上下文配置信息 **/
export const SERVER_ENGINE_CONTEXT = {
  GI_SITE_PROJECT_ID: '28c24593-7377-49da-9858-8365f22ce491',
  engineId: 'TuGraph',
};
