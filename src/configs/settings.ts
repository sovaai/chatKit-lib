import DropZone from '../components/ckSVG/DropZone'
import DropZoneError from '../components/ckSVG/DropZoneError'
import FileCSS from '../components/ckSVG/FileCSS'
import FileDefault from '../components/ckSVG/FileDefault'
import FilePDF from '../components/ckSVG/FilePDF'
import FilePPT from '../components/ckSVG/FilePPT'
import FilePSD from '../components/ckSVG/FilePSD'
import FileSVG from '../components/ckSVG/FileSVG'
import FileXLS from '../components/ckSVG/FileXLS'
import FileZIP from '../components/ckSVG/FileZIP'
import FileDOC from '../components/ckSVG/FileDOCS'

export const settings = {
  media: {
    avatar:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURQAAALgfhZAVfD2No5Rvm7cfhEyetJsXfY9gnZ4Zf4qws4cSeWOhucMghYYSecUihn0Rd4gTemyvxsEhhmmlvchKk3YOdL8hhkOXre/En2amvsEghT+QprsghuzDpUCTqE+UqkmdslujupIXfbEfhrugu1SkupQWfcEiiIcSeW0KccWfybIghqYcg20KccQhhr6UxEeQpk+ovbgeg3MMc2wOc152o+/En8DL13YNdG0KccDQ7e/Foagbgu/FoaXG4LDM51xMj59EjLwfg+/FobZxiGeHsJ5TmZEWfe/FoTmHncXd9m0KceuwgbDM58MkiU+ovcIli4kTeoIReMUghcQjiHAMc8Qih4ARd0YIO34Qd+/EoO/DoHIMc+7Bn3UNdGcJcLsjie6+nsUiho0Ve2oKcW4LcsQihoUSeYYSecAkirkiiI8VfLIghu67nHYNdLUhh3oPdnsPdoQSeHkOda8fhb4kiosUe7chiHcOdaccg6MbgqsdhJMWfe65m58agO21mjyKoO2xmHgOdWwKce2uluyplGgJcJYXfv///+23muyslcPa8+uxhEies02lukGUqu20iO25jpkZf4Emfe68lEGMo5wZgK/K5qRkp+Kgm08PRL4jiO7AmZ3F3pO/2EoIQeSkgr1eiHMUddKek4lAk7jU7qI6fJEwe9N3lKScy8eRjoROY3kceMc4jIgTeuu7n+WuneLEsZ2GvdqVmH4uhqEog1gJVIW7069oiZZ3tOG0mdqpl+a5nHI7WtzP22YtVIgdeUiAoOuje6TJ44RWntaFlYEXeq9Jgaq42/TTv5ZEgHhHcfjz9cDG4M1/gFytw323zqqq06/F47C43LiEur2JgptMm1Vtnc5dk3GmwFibta0zhZoxjL19jrI/mLM0jszHyvHHtKBShJVicWWxx1WqwN2WgHK2zcRvgdmOgdm+149trMW8sF+PsqZzdefZ56F8k82qznBGj2ZalWE+iY9fpW11qPno3FkfS2IKYuzk7MVwr2UkfFcbRWwPb0HLKx8AAABJdFJOUwBMr/QHNkIiAxESPanH4vJZ0iCvav1uh3TET57XY/i68o66k7z4ynzv7+/+7dre3P39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',
    icons: {
      playMessageIcon: {
        icon: ['fas', 'play'],
        className: '',
        props: {},
      },
      settingsIcon: {
        icon: ['fas', 'cog'],
        className: '',
        props: {},
      },
      sendMessageIcon: {
        icon: ['fas', 'arrow-up'],
        className: '',
        props: {},
      },
      rateIcon: {
        icon: ['fas', 'thumbs-up'],
        className: '',
        props: {},
      },
      positiveRateIcon: {
        icon: ['fas', 'thumbs-up'],
        className: '',
        props: {},
      },
      negativeRateIcon: {
        icon: ['far', 'thumbs-down'],
        className: '',
        props: {},
      },
      resetIcon: {
        icon: ['fas', 'redo-alt'],
        className: '',
        props: {},
      },
      addFileIcon: {
        icon: ['fas', 'plus'],
        className: '',
        props: {},
      },
      chevronUpIcon: {
        icon: ['fas', 'chevron-up'],
        className: '',
        props: {},
      },
      chevronDownIcon: {
        icon: ['fas', 'chevron-down'],
        className: '',
        props: {},
      },
      shareIcon: {
        icon: ['fas', 'share-alt'],
        className: '',
        props: {},
      },
      searchIcon: {
        icon: ['fas', 'search'],
        className: '',
        props: {},
      },
      searchDeactivateIcon: {
        icon: ['fas', 'arrow-left'],
        className: '',
        props: {},
      },
      addStickersIcon: {
        icon: ['fas', 'sticky-note'],
        className: '',
        props: {},
      },
      voiceIcon: {
        icon: ['fas', 'microphone'],
        className: '',
        props: {},
      },
      closeIcon: {
        icon: ['fas', 'window-minimize'],
        className: '',
        props: {},
      },
      timesIcon: {
        icon: ['fas', 'times'],
        className: '',
        props: {},
      },
      closeSettingsIcon: {
        icon: ['fas', 'arrow-left'],
        className: '',
        props: {},
      },
    },
    svg: {
      dropZone: DropZone,
      dropZoneError: DropZoneError,
      cssFile: FileCSS,
      defaultFile: FileDefault,
      docFile: FileDOC,
      pdfFile: FilePDF,
      pptFile: FilePPT,
      psdFile: FilePSD,
      svgFile: FileSVG,
      xlsFile: FileXLS,
      zipFile: FileZIP,
    },
    progressLoader: {
      radius: 35,
      strokeWidth: 6,
      color: '#1b243252',
    },
  },
}
