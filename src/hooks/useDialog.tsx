// eslint-disable-next-line no-restricted-imports
import { Trans, t } from '@lingui/macro'
import { ReactNode, createContext, useContext, useMemo } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import ToastBody from 'components/@ui/ToastBody'
import { getErrorMessage } from 'utils/helpers/handleError'

interface ContextValues {
  success: (data: { title?: ReactNode; message: ReactNode }) => any
  error: (data: { title?: ReactNode; error: Error }) => any
}

export const DialogContext = createContext({} as ContextValues)

export function DialogProvider({ children }: { children: JSX.Element | JSX.Element[] }) {
  const ERRORS = useMemo(
    () => ({
      COMMON: t`An error occurs. Please try again`,
    }),
    []
  )
  const contextValue: ContextValues = {
    success: ({ title = <Trans>Success</Trans>, message }) =>
      toast.success(<ToastBody title={title} message={message} />),
    error: ({ title = <Trans>Error</Trans>, error }) => {
      const message = getErrorMessage(error, ERRORS)
      return toast.error(<ToastBody title={title} message={message} />)
    },
  }
  return (
    <DialogContext.Provider value={contextValue}>
      {children}
      <ToastContainer theme="light" limit={3} autoClose={5000} />
    </DialogContext.Provider>
  )
}

const useDialogContext = () => useContext(DialogContext)

export default useDialogContext
