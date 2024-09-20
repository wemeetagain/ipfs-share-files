import { useTranslation, Trans } from 'react-i18next'

// Components
import { File } from '../file/File'
import { FileState } from '../../providers/FilesProvider'

export const FileTree = ({ files, isDownload }: { files: Record<string, FileState>, isDownload?: boolean }) => {
  const filesMap = Object.entries(files)
  const { t } = useTranslation()

  return (
  <div className='mt4'>
     {!isDownload && filesMap.length > 1 && (
     <div className='f5 montserrat fw4 charcoal mb2'>
      <Trans t={t} i18nKey='copyLink.labelIndividual'>Share individual files:</Trans>
    </div>)}
    {
      filesMap.map(([id, file]) =>
        <File
          key={`file-${id}`}
          file={file}
          isDownload={isDownload} />
      )
    }
  </div>)
}
