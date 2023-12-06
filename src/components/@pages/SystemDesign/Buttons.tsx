import { ArrowRight, Globe, Star } from '@phosphor-icons/react'

import { Button } from 'theme/Buttons'
import ButtonWithIcon from 'theme/Buttons/ButtonWithIcon'
import CopyButton from 'theme/Buttons/CopyButton'
import IconButton from 'theme/Buttons/IconButton'
import Picker from 'theme/Picker'
import { Flex, Type } from 'theme/base'

const Buttons = () => {
  return (
    <>
      <Type.H4 mt={3}>Variant</Type.H4>
      <Flex sx={{ gap: 2 }} mt={2} alignItems="center">
        <Button>Primary Default</Button>
        <Button variant="outline">Outline Default</Button>
        <Button variant="ghost">Ghost Default</Button>
        <Button variant="nav">Nav Default</Button>
        <Button variant="danger">Danger Default</Button>
        <Button variant="outlineDanger">Outline Danger Default</Button>
        <Button variant="ghostDanger">Ghost Danger Default</Button>
      </Flex>
      <Type.H4 mt={3}>State</Type.H4>
      <Flex sx={{ gap: 2 }} mt={2} alignItems="center">
        <Button disabled>Primary Disabled</Button>
        <Button disabled variant="outline">
          Outline Disabled
        </Button>
        <Button disabled variant="ghost">
          Ghost Disabled
        </Button>

        <Button disabled variant="danger">
          Danger Disabled
        </Button>
        <Button disabled variant="outlineDanger">
          Outline Danger Disabled
        </Button>
        <Button disabled variant="ghostDanger">
          Ghost Danger Disabled
        </Button>
      </Flex>
      <Type.H4 mt={3}>Size</Type.H4>
      <Flex sx={{ gap: 2 }} mt={2} alignItems="center">
        <Button size="lg">Primary Large</Button>
        <Button size="md">Primary Medium</Button>
        <Button size="sm">Primary Small</Button>
        <Button size="xs">Primary XS</Button>
        <Button size="icon">
          <Star weight="fill" size={24} />
        </Button>
      </Flex>
      <Type.H4 mt={3}>Type</Type.H4>
      <Flex sx={{ gap: 2 }} mt={2} alignItems="center">
        <Button>Default</Button>
        <ButtonWithIcon direction="left" icon={<Star size={20} />}>
          With Icon
        </ButtonWithIcon>
        <ButtonWithIcon direction="right" icon={<ArrowRight size={20} />}>
          With Icon
        </ButtonWithIcon>
        <IconButton icon={<Star size={20} />} width="40px" />
        <Button variant="text">Text</Button>
        <CopyButton value="Copy Button" additionalComponent={<Globe size={20} />}>
          Copy Button
        </CopyButton>

        <Picker isActive onClick={() => {}}>
          Picker Active
        </Picker>
        <Picker isActive={false} onClick={() => {}}>
          Picker Inactive
        </Picker>
      </Flex>
    </>
  )
}

export default Buttons
