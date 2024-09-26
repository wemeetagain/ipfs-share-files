import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import ReactDOM from 'react-dom'
import { I18nextProvider } from 'react-i18next'
import { App } from './App'
import i18n from './i18n'
import { FilesProvider } from './providers/FilesProvider'
import { HeliaProvider } from './providers/HeliaProvider'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  // @ts-expect-error - DndProvider DOES accept children...
    <DndProvider backend={HTML5Backend}>
      <I18nextProvider i18n={i18n} >
        <HeliaProvider>
          <FilesProvider>
            <App />
          </FilesProvider>
        </HeliaProvider>
      </I18nextProvider>
    </DndProvider>, document.getElementById('root'))

registerServiceWorker()

/**
 *
 * import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

 */
