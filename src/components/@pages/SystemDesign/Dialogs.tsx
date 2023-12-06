'use client'

import { useState } from 'react'
import { toast } from 'react-toastify'

import { Button } from 'theme/Buttons'
import Modal from 'theme/Modal'
import Drawer from 'theme/Modal/Drawer'
import ToastBody from 'theme/ToastBody'
import { Box, Flex } from 'theme/base'

const CONTENT1 =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra nisi quis lacus ultricies accumsan. Curabitur et porttitor turpis. Nunc ac gravida ligula. Nulla facilisi. Fusce a ante sit amet purus molestie volutpat. Aenean sagittis pulvinar sem, ac iaculis ipsum. Mauris ultrices faucibus magna. Nam ultrices euismod justo sit amet sodales. Sed commodo blandit turpis pulvinar lacinia. Nulla facilisi.'

const CONTENT2 =
  'Nunc congue mi diam, sit amet vulputate nibh suscipit in. Nam nisi magna, pharetra semper quam sed, viverra malesuada felis. Cras iaculis felis nec vestibulum malesuada. Aliquam et commodo neque. Vestibulum sed ex et ligula ornare euismod. Donec condimentum mi vel elit cursus congue. Pellentesque in ante iaculis, lacinia lorem semper, volutpat ipsum. Ut posuere consectetur risus. Mauris interdum rhoncus nunc, sit amet scelerisque lectus interdum sit amet. Suspendisse sit amet suscipit enim, quis hendrerit nisl. Aenean tincidunt tellus lacus, quis euismod ligula vehicula nec. Quisque ipsum dolor, tincidunt ac imperdiet non, sodales quis purus.'

const Dialogs = () => {
  const [openingModal, setOpeningModal] = useState(false)
  const [openingDrawer, setOpeningDrawer] = useState(false)
  return (
    <div>
      <Button onClick={() => setOpeningModal(true)}>Open Modal</Button>
      {openingModal && (
        <Modal isOpen title="Modal" hasClose onDismiss={() => setOpeningModal(false)}>
          <Box p={3}>
            <Box>{CONTENT1}</Box>
            <Box mt={3}>{CONTENT2}</Box>
          </Box>
        </Modal>
      )}
      <Box mt={3}>
        <Button onClick={() => setOpeningDrawer(true)}>Open Drawer</Button>
        {openingDrawer && (
          <Drawer mode="right" isOpen title="Drawer" hasClose onDismiss={() => setOpeningDrawer(false)}>
            <Box p={3}>
              <Box>{CONTENT1}</Box>
              <Box mt={3}>{CONTENT2}</Box>
            </Box>
          </Drawer>
        )}
      </Box>
      <Flex mt={3} sx={{ gap: 2 }}>
        <Button onClick={() => toast.success(<ToastBody title="Success" message="Success Message" />)}>
          Toast Success
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.loading(<ToastBody title="Loading" message="Loading Message" />)}
        >
          Toast Loading
        </Button>
        <Button variant="danger" onClick={() => toast.error(<ToastBody title="Error" message="Error Message" />)}>
          Toast Error
        </Button>
      </Flex>
    </div>
  )
}

export default Dialogs
