// eslint-disable-next-line no-restricted-imports
import { Trans, t } from '@lingui/macro'
import { useEffect, useState } from 'react'
import { useMutation } from 'react-query'

import useDialogContext from 'hooks/useDialog'
import Input from 'theme/Input'
import InputField from 'theme/InputField'
import Modal from 'theme/Modal'
import RadioGroup from 'theme/RadioGroup'
import { Box, Flex } from 'theme/base'

import StyledButton from './@ui/Buttons/StyledButton'
import Divider from './@ui/Divider'

export default function JoinCommunity() {
  const [showModal, setShowModal] = useState(false)
  const [email, setEmail] = useState('')

  const handleOnChange = (e: any) => setEmail(e.target.value)
  return (
    <Flex
      variant="card"
      sx={{
        width: '100%',
        alignItems: 'center',
        gap: [2, 3],
        justifyContent: 'space-between',
        p: 2,
        pl: [16, 24],
        borderRadius: '24px',
      }}
    >
      <Box
        flex={1}
        sx={{
          width: '100%',
          minWidth: '120px',
          maxWidth: '363px',
        }}
      >
        <Input
          placeholder={t`Enter your email`}
          onChange={handleOnChange}
          block
          sx={{
            p: 2,
            borderRadius: '8px',
            bg: 'transparent',
            '& input': { lineHeight: '1em !important', bg: 'transparent' },
          }}
        />
      </Box>
      <StyledButton sx={{ px: [2, 24] }} onClick={() => setShowModal(true)}>
        <Trans>Join Waitlist</Trans>
      </StyledButton>
      <ModalConfirm isOpen={showModal} onDismiss={() => setShowModal(false)} email={email} />
    </Flex>
  )
}

interface Objective {
  label: string
  value: string
}

const ModalConfirm = ({ isOpen, onDismiss, email }: { isOpen: boolean; onDismiss: () => void; email: string }) => {
  const [_email, setEmail] = useState(email)
  useEffect(() => {
    setEmail(email)
  }, [isOpen])
  const dialog = useDialogContext()
  const [loading, setLoading] = useState<boolean>(false)
  const [objective, setObjective] = useState<string>(options[0].value)
  const handleRadioChange = (value: string | number | undefined): void => {
    if (value) {
      setObjective(value.toString())
    }
    setLoading(false)
  }

  // const submitWaitList = useMutation(submitWaitListApi, {
  const submitWaitList = useMutation(async () => true, {
    onMutate: () => setLoading(true),
    onSuccess: () => {
      setLoading(false)
      onDismiss()
      dialog.success({
        message: <Trans>Submit Success</Trans>,
      })
    },
    onError: (err: any) => {
      setLoading(false)
      dialog.error({
        error: err,
      })
    },
  })

  const onSubmit = () => {
    if (!!_email) {
      // submitWaitList.mutate({ email, objective })
      submitWaitList.mutate()
    }
  }

  return (
    <Modal isOpen={isOpen} title={<Trans>You Are:</Trans>} onDismiss={onDismiss} dismissable={false} hasClose>
      <Box px={24}>
        <Divider />
      </Box>
      <Box m={24} mt={10}>
        {!email && (
          <InputField
            label="Email"
            placeholder={t`Enter your email`}
            value={_email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 3 }}
            block
          />
        )}
        <Box mb={24}>
          <RadioGroup defaultValue={objective} options={options} onChange={handleRadioChange} />
        </Box>
        <StyledButton onClick={onSubmit} wrapperSx={{ width: '100%' }} disabled={!_email} icon={null}>
          <Trans>Confirm</Trans>
        </StyledButton>
      </Box>
    </Modal>
  )
}
const WAIT_LIST_OBJECTIVE: string[] = [
  t`Credits Suppliers`,
  t`Offset Buyers`,
  t`Investors`,
  t`Credit Carbon Traders`,
  // t`Other`,
]

const options: Objective[] = WAIT_LIST_OBJECTIVE.map((obj) => ({
  label: obj,
  value: obj,
}))
