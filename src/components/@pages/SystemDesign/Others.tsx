'use client'

import Breadcrumbs from 'components/@ui/Breadcrumbs'
import Alert from 'theme/Alert'

const Others = () => {
  return (
    <div>
      <Breadcrumbs
        mt={3}
        items={[
          {
            label: 'Home',
            path: '/',
          },
          {
            label: 'System Design',
            path: '/system-design',
          },
        ]}
      />
      <Alert
        mt={3}
        label="Hint"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra nisi quis lacus ultricies accumsan."
      />
      <Alert
        variant="success"
        mt={3}
        label="Hint"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra nisi quis lacus ultricies accumsan."
      />
      <Alert
        variant="info"
        mt={3}
        label="Hint"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra nisi quis lacus ultricies accumsan."
      />
      <Alert
        variant="warning"
        mt={3}
        label="Hint"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra nisi quis lacus ultricies accumsan."
      />
      <Alert
        variant="danger"
        mt={3}
        label="Hint"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra nisi quis lacus ultricies accumsan."
      />
    </div>
  )
}

export default Others
