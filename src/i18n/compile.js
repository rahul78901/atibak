import { error, log } from 'node:console';
import { existsSync, mkdirSync, readFileSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const LANGUAGES = [
  'en',
  'es',
  'hi',
  'bn',
  'pt',
  'ru',
  'ja',
  'pa',
  'de',
  'fr',
  'te',
  'ta',
  'mr',
  'gu',
  'ko',
  'vi',
  'it',
  'zh',
];

const DIR_NAMES = ['settings'];

const { parse, stringify } = JSON;

const __dirname = import.meta.dirname;

const addons = join(__dirname, '../addons');

const nextName = '/src/translate';

const dataFileName = 'data.json';

const outputDirName = 'languages';

const outputExt = '.json';

const run = async () => {
  const promises = DIR_NAMES.map(process).flat();
  try {
    await Promise.all(promises);
    log('saved!');
  } catch (e) {
    error(`ERROR!: ${e}`);
  }
};

const process = (addonName) => {
  const translateFolder = join(addons, addonName, nextName);

  const outputDir = join(translateFolder, outputDirName);

  const dataPath = join(translateFolder, dataFileName);

  if (!existsSync(dataPath)) {
    throw new Error(`${dataPath} file not found!`);
  }

  if (!existsSync(outputDir)) {
    mkdirSync(outputDir);
  }

  const rowData = readFileSync(dataPath).toString();

  const jsonData = parse(rowData);

  const keys = Object.keys(jsonData);

  const promises = LANGUAGES.map((lang, index) => {
    const values = keys.reduce((_acc, key) => {
      _acc[key] = jsonData[key][index];
      return _acc;
    }, {});

    const outputFileName = join(outputDir, lang.concat(outputExt));

    return writeFile(outputFileName, stringify(values));
  });

  return promises;
};

run();
