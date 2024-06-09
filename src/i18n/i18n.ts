import { useMemo } from 'react';

import type { LanguageType } from '&/settings/src/components/language';

export type KeysType<keyType extends string> = Record<keyType, string>;

export type ResourcesType<keyType extends string> = Record<
  LanguageType,
  KeysType<keyType>
>;

//eslint-disable-next-line no-unused-vars
type TranslateType<keyType extends string> = (key: keyType) => keyType | string;

type UseLanguageReturnType<keyType extends string> = {
  translate: TranslateType<keyType>;
  t: TranslateType<keyType>;
};

type I18nReturnType<keyType extends string> = (
  //eslint-disable-next-line no-unused-vars
  language: LanguageType
) => UseLanguageReturnType<keyType>;

export const i18n = <keyType extends string>(
  resources: ResourcesType<keyType>,
  debug: boolean = false
): I18nReturnType<keyType> => {
  const useLanguage = (
    language: LanguageType
  ): UseLanguageReturnType<keyType> => {
    const resource = useMemo(() => resources[language], [language]);

    const translate = (key: keyType): keyType | string => {
      const translation = resource[key] as undefined | string;

      if (!translation) {
        if (debug) {
          console.warn(`${key}::${language} not found`);
        }
        return key;
      }

      return translation;
    };

    return {
      translate,
      t: translate,
    };
  };

  return useLanguage;
};

export default i18n;
