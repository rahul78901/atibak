import * as resources from './languages';
import i18n, { type ResourcesType } from '¢/i18n';

const isDev = import.meta.env.DEV;

export const useTranslate = i18n(
  resources satisfies ResourcesType<string>,
  isDev
);

export default useTranslate;
