'use client'

import { DropHalf } from '@phosphor-icons/react'

import Checkbox from 'theme/Checkbox'
import Dropdown, { CheckableDropdownItem, DropdownItem } from 'theme/Dropdown'
import InputField, { TextareaField } from 'theme/InputField'
import RadioGroup from 'theme/RadioGroup'
import Select from 'theme/Select'
import SwitchInput from 'theme/SwitchInput'
import { Box, Flex, IconBox } from 'theme/base'

const Inputs = () => {
  return (
    <div>
      <Flex sx={{ gap: 3 }} mt={3} flexWrap="wrap">
        <Box width={350}>
          <InputField label="Label" placeholder="Placeholder" block />
        </Box>
        <Box width={350}>
          <InputField label="Label" placeholder="Placeholder" block affix={<IconBox icon={<DropHalf size={20} />} />} />
        </Box>
        <Box width={350}>
          <InputField
            label="Label"
            placeholder="Placeholder"
            block
            suffix={<IconBox icon={<DropHalf size={20} />} />}
          />
        </Box>
        <Box width={350}>
          <InputField label="Label" placeholder="Placeholder" block disabled />
        </Box>
        <Box width={350}>
          {' '}
          <InputField label="Label" placeholder="Placeholder" block error="Error Helper" />
        </Box>
      </Flex>

      <Flex sx={{ gap: 3 }} mt={3}>
        <Box width={350}>
          <TextareaField label="Label" placeholder="Textarea" annotation="0/140" block rows={3} />
        </Box>
        <Box width={350}>
          <TextareaField label="Label" placeholder="Textarea" annotation="0/140" block rows={3} error="Error Helper" />
        </Box>
      </Flex>

      <Flex sx={{ gap: 3 }} mt={3}>
        <Box width={350}>
          <Dropdown
            menuSx={{
              width: 350,
            }}
            menu={
              <>
                <DropdownItem>Inactive Item</DropdownItem>
                <DropdownItem isActive>Active Item</DropdownItem>
                <CheckableDropdownItem selected={false} onClick={() => {}}>
                  Checkable Inactive Item
                </CheckableDropdownItem>
                <CheckableDropdownItem selected onClick={() => {}}>
                  Checkable Active Item
                </CheckableDropdownItem>
              </>
            }
          >
            Dropdown
          </Dropdown>
        </Box>
        <Box width={350}>
          <Select
            value={{
              value: 1,
              label: 'Option 1',
            }}
            placeholder="Select"
            options={[
              {
                value: 1,
                label: 'Option 1',
              },
              {
                value: 2,
                label: 'Option 2',
              },
            ]}
          />
        </Box>
        <Box width={350}>
          <Select
            isDisabled
            value={{
              value: 1,
              label: 'Option 1',
            }}
            placeholder="Select"
            options={[
              {
                value: 1,
                label: 'Option 1',
              },
              {
                value: 2,
                label: 'Option 2',
              },
            ]}
          />
        </Box>
      </Flex>

      <Flex sx={{ gap: 3 }} mt={4}>
        <Flex width={350} sx={{ gap: 3 }}>
          <Checkbox>Checkbox</Checkbox>
          <Checkbox disabled>Checkbox</Checkbox>
          <Checkbox disabled defaultChecked>
            Checkbox
          </Checkbox>
        </Flex>
        <Flex width={350} sx={{ gap: 3 }}>
          <RadioGroup
            value={1}
            options={[
              {
                label: 'Option 1',
                value: 1,
              },
              {
                label: 'Option 2',
                value: 2,
              },
            ]}
          />
          <RadioGroup
            disabled
            value={1}
            options={[
              {
                label: 'Option 1',
                value: 1,
              },
              {
                label: 'Option 2',
                value: 2,
              },
            ]}
          />
        </Flex>
        <Flex width={350} sx={{ gap: 3 }}>
          <SwitchInput defaultActive={false} />
          <SwitchInput defaultActive={false} disabled />
          <SwitchInput defaultActive={true} disabled />
        </Flex>
      </Flex>
    </div>
  )
}

export default Inputs
