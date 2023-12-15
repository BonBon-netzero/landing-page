// eslint-disable-next-line no-restricted-imports
import { Trans, t } from '@lingui/macro'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'
import { useMutation } from 'react-query'

import { submitWaitListApi } from 'apis/ldp'
import useDialogContext from 'hooks/useDialog'
import Input from 'theme/Input'
import InputField from 'theme/InputField'
import Modal from 'theme/Modal'
import RadioGroup from 'theme/RadioGroup'
import { Box, Flex, Type } from 'theme/base'
import { EMAIL_REGEX } from 'utils/config/constants'

import StyledButton from './@ui/Buttons/StyledButton'
import Divider from './@ui/Divider'

export default function JoinCommunity() {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)
  const [_, setState] = useState(0)
  useEffect(() => {
    setState((prev) => (prev += 1))
  }, [router.locale])
  const [email, setEmail] = useState('')

  const handleOnChange = (e: any) => setEmail(e.target.value.trim())
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
          value={email}
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
      {showModal && <ModalConfirm isOpen={showModal} onDismiss={() => setShowModal(false)} email={email} />}
    </Flex>
  )
}

interface Objective {
  label: string
  value: string
}

const ModalConfirm = ({ isOpen, onDismiss, email }: { isOpen: boolean; onDismiss: () => void; email: string }) => {
  const [_email, setEmail] = useState(email)
  const dialog = useDialogContext()

  const WAIT_LIST_OBJECTIVE: string[] = useMemo(
    () => [
      t`Credits Suppliers`,
      t`Offset Buyers`,
      t`Investors`,
      t`Credit Carbon Traders`,
      // t`Other`,
    ],
    []
  )

  const options: Objective[] = useMemo(
    () =>
      WAIT_LIST_OBJECTIVE.map((obj) => ({
        label: obj,
        value: obj,
      })),
    [WAIT_LIST_OBJECTIVE]
  )
  const [objective, setObjective] = useState<string>(options[0].value)
  const handleRadioChange = (value: string | number | undefined): void => {
    if (value) {
      setObjective(value.toString())
    }
  }

  const { mutate, isLoading } = useMutation(submitWaitListApi, {
    onSuccess: () => {
      onDismiss()
      dialog.success({
        message: <Trans>Submit Success</Trans>,
      })
    },
    onError: (err: any) => {
      dialog.error({
        error: err,
      })
    },
  })

  const onSubmit = () => {
    if (!!_email) {
      mutate({ email: _email, objective })
    }
  }
  const error = !_email.match(EMAIL_REGEX)?.length
  const [showInput, setShowInput] = useState(false)

  useEffect(() => {
    setShowInput(!!error)
    setEmail(email)
  }, [isOpen])

  return (
    <Modal isOpen={isOpen} title={<Trans>You Are:</Trans>} onDismiss={onDismiss} dismissable={false} hasClose>
      <Box px={24}>
        <Divider />
      </Box>
      <Box m={24} mt={10}>
        {showInput && (
          <InputField
            label="Email"
            placeholder={t`Enter your email`}
            value={_email}
            onChange={(e) => setEmail(e.target.value.trim())}
            sx={{ mb: 3 }}
            block
            disabled={isLoading}
          />
        )}
        {error && (
          <Type.Caption mb={3} color="danger2">
            <Trans>Please enter a correct email</Trans>
          </Type.Caption>
        )}
        <Box mb={24}>
          <RadioGroup defaultValue={objective} options={options} onChange={handleRadioChange} />
        </Box>
        <StyledButton
          onClick={onSubmit}
          wrapperSx={{ width: '100%' }}
          disabled={!_email || isLoading || error}
          icon={null}
        >
          <Trans>Confirm</Trans>
        </StyledButton>
      </Box>
    </Modal>
  )
}
