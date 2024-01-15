import { Box } from 'theme/base'

export default function Divider({
  color = 'stroke',
  isDashed = false,
  ...props
}: { color?: string; isDashed?: boolean } & any) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '1px',
        bg: isDashed ? 'transparent' : color,
        borderTop: isDashed ? '1px dashed' : undefined,
        borderColor: isDashed ? color : undefined,
      }}
      {...props}
    />
  )
}
