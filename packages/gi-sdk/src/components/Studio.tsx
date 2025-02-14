import * as React from 'react';
import GISDK from '../GISDK';
import { getCombineServices, loaderCombinedAssets } from '../process';
import { loader } from '../process/loaderAssets';
import Loading from './Loading';

export interface Project {
  dataset: {
    data: {};
    schemaData: {};
    engineId: string;
    id: string;
    name: string;
    engineContext: {};
  };
  workbook: {
    activeAssetsKeys: {};
    id: string;
    name: string;
    projectConfig: {};
    themes: {};
    theme?: string;
  };
  deps: {
    [key: string]: {
      global: string;
      name: string;
      url: string;
      version: string;
    };
  };
  GI_ASSETS_PACKAGES: {
    [key: string]: {
      global: string;
      name: string;
      url: string;
      version: string;
    };
  };
}
export interface StudioProps {
  id: string;
  service: (id: string) => Promise<{ data: Project }>;
  loadingText?: string;
}

const Studio: React.FunctionComponent<StudioProps> = props => {
  const { id, service, loadingText = '正在加载图应用...' } = props;
  const [state, setState] = React.useState({
    isReady: false,
    assets: null,
    config: {},
    services: [],
    ThemeComponent: () => null,
  });

  const startStudio = async () => {
    try {
      const { data } = await service(id);
      const { dataset, workbook, GI_ASSETS_PACKAGES, deps } = data;
      const { projectConfig, theme = 'light' } = workbook;
      const { engineContext } = dataset;
      // 请求依赖资源包
      await loader(Object.values(deps));
      // 根据包名，请求资产
      const assets = await loaderCombinedAssets(Object.values(GI_ASSETS_PACKAGES));
      // 设置引擎上下文
      window.localStorage.setItem('SERVER_ENGINE_CONTEXT', JSON.stringify(engineContext));
      window.localStorage.setItem('@theme', theme);
      const services = getCombineServices(assets.services);
      setState(preState => {
        return {
          ...preState,
          isReady: true,
          assets,
          services,
          config: projectConfig,
          //@ts-ignore
          ThemeComponent: (window.GI_THEME_ANTD && window.GI_THEME_ANTD.default) || (() => null),
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    startStudio();
  }, []);
  const { assets, isReady, config, services, ThemeComponent } = state;
  if (!isReady) {
    return (
      <div>
        <Loading title={loadingText} />
      </div>
    );
  }
  return (
    <>
      {/** @ts-ignore */}
      <ThemeComponent style={{ visibility: 'hidden' }} />
      {/** @ts-ignore */}
      <GISDK config={config} assets={assets} services={services} id={`GI_STUDIO_${id}`} />
    </>
  );
};

export default Studio;
