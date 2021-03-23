import PasswordGenerator from './_generators/PasswordGenerator'
import KeyboardAdjacencyGraph from './_generators/KeyboardAdjacencyGraph'
import { ExcelGenerator } from './_generators/ExcelGenerator'
import { TxtGenerator } from './_generators/TxtGenerator'

export interface LanguageListEntry {
  source?: string
  options?: {
    [key: string]: any
  }
  generator?: Function
  customList?: boolean
}

export interface LanguageList {
  [key: string]: {
    [key: string]: LanguageListEntry
  }
}

export default {
  'en': {
    commonWords: {
      source:
        'https://github.com/hermitdave/FrequencyWords/raw/master/content/2018/en/en_50k.txt',
      options: { hasOccurrences: true },
    },
    firstnames: {
      source:
        'https://raw.githubusercontent.com/dominictarr/random-name/master/first-names.txt',
    },
    lastnames: {
      source:
        'https://raw.githubusercontent.com/arineng/arincli/master/lib/last-names.txt',
    },
  },
  'de': {
    commonWords: {
      source:
        'https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2018/de/de_50k.txt',
      options: { hasOccurrences: true },
    },
    firstnames: {
      source:
        'https://gist.githubusercontent.com/hrueger/2aa48086e9720ee9b87ec734889e1b15/raw',
    },
    lastnames: {
      source:
        'https://gist.githubusercontent.com/hrueger/6599d1ac1e03b4c3dc432d722ffcefd0/raw',
    },
  },
  'nl-be': {
    commonWords: {
      source:
        'https://github.com/hermitdave/FrequencyWords/raw/master/content/2018/nl/nl_50k.txt',
      options: { hasOccurrences: true },
    },
    boysFirstnames: {
      generator: ExcelGenerator,
      customList: true,
      options: {
        url:
          'https://statbel.fgov.be/sites/default/files/files/documents/bevolking/5.10%20Namen%20en%20voornamen/5.10.%203%20Voornamen%20meisjes%20en%20jongens/Voornamen_Jongens_1995-2017_0.xls',
        column: 8,
        row: 2,
        sheetName: '1995-2019',
        minOccurrences: 50,
      },
    },
    girlsFirstnames: {
      generator: ExcelGenerator,
      customList: true,
      options: {
        url:
          'https://statbel.fgov.be/sites/default/files/files/documents/bevolking/5.10%20Namen%20en%20voornamen/5.10.%203%20Voornamen%20meisjes%20en%20jongens/Voornamen_meisjes_1995-2017.xls',
        column: 8,
        row: 2,
        sheetName: '1995-2019',
        minOccurrences: 50,
      },
    },
    lastnames: {
      generator: ExcelGenerator,
      customList: true,
      options: {
        url:
          'https://statbel.fgov.be/sites/default/files/files/documents/bevolking/5.10%20Namen%20en%20voornamen/5.10.1%20Familienamen/Familienamen_2020.xlsx',
        column: 5,
        row: 2,
      },
    },
  },
  'fr': {
    commonWords: {
      source:
        'https://github.com/hermitdave/FrequencyWords/raw/master/content/2018/fr/fr_50k.txt',
      options: { hasOccurrences: true },
    },
    firstnames: {
      generator: TxtGenerator,
      customList: true,
      options: {
        url:
          'https://www.insee.fr/fr/statistiques/fichier/3536630/noms2008nat_txt.zip',
        occurence_column: 11,
        row: 2,
        minOccurrences: 100,
      },
    },
    lastnames: {
      generator: TxtGenerator,
      customList: true,
      options: {
        url:
          'https://www.insee.fr/fr/statistiques/fichier/2540004/nat2019_csv.zip',
        occurence_column: 3,
        value_column: 1,
        separator: ';',
        row: 2,
        minOccurrences: 100,
      },
    },
  },
  'common': {
    passwords: {
      generator: PasswordGenerator,
      customList: true,
    },
    keyboardLayouts: {
      generator: KeyboardAdjacencyGraph,
      customList: true,
    },
  },
} as LanguageList
