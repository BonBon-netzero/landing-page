import { Box } from 'theme/base'

export default function Galaxy() {
  return (
    <Box sx={{ width: [1300, 1300, 900, 900, 1300], height: [1300, 1300, 900, 900, 1300] }}>
      <svg width="100%" height="100%" viewBox="0 0 1330 1330" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="665" cy="665.008" r="145.602" stroke="url(#paint0_linear_916_3366)" strokeWidth="2" />
        <circle
          cx="665"
          cy="665.009"
          r="247.993"
          stroke="url(#paint1_linear_916_3366)"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <circle cx="665" cy="665.009" r="354.157" stroke="url(#paint2_linear_916_3366)" strokeWidth="2" />
        <circle
          cx="665"
          cy="665.008"
          r="457.646"
          stroke="url(#paint3_linear_916_3366)"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <circle
          cx="665"
          cy="665.009"
          r="560.657"
          stroke="url(#paint4_linear_916_3366)"
          strokeOpacity="0.94"
          strokeWidth="2"
        />
        <circle
          cx="665"
          cy="665.009"
          r="663.701"
          stroke="url(#paint5_linear_916_3366)"
          strokeOpacity="0.86"
          strokeWidth="2"
        />
        <circle
          cx="665"
          cy="665.008"
          r="663.701"
          stroke="url(#paint6_linear_916_3366)"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <svg>
          <circle r="11" fill="#5A45FE">
            <animateMotion dur="60s" repeatCount="indefinite" path={transformCircleToPath(665.001, 665.001, 457.646)} />
          </circle>
        </svg>
        <svg>
          <circle r="13" fill="#C7EB00">
            <animateMotion
              dur="80s"
              repeatCount="indefinite"
              path={transformCircleToPath(665.002, 665.002, 560.657, true)}
            />
          </circle>
        </svg>
        <defs>
          <linearGradient
            id="paint0_linear_916_3366"
            x1="665"
            y1="518.406"
            x2="665"
            y2="811.609"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A090E3" />
            <stop offset="0.325611" stopColor="#F2F2F2" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_916_3366"
            x1="913.993"
            y1="629.718"
            x2="416.007"
            y2="676.182"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A99BE3" />
            <stop offset="0.325611" stopColor="#F2F2F2" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_916_3366"
            x1="471.082"
            y1="369.601"
            x2="875.798"
            y2="953.042"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E9E9E9" />
            <stop offset="1" stopColor="#F2F2F2" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_916_3366"
            x1="1123.65"
            y1="665.008"
            x2="206.354"
            y2="685.589"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A99BE3" />
            <stop offset="0.325611" stopColor="#F2F2F2" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_916_3366"
            x1="358.332"
            y1="197.841"
            x2="998.364"
            y2="1120.51"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E9E9E9" />
            <stop offset="0.325611" stopColor="#F2F2F2" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_916_3366"
            x1="302.069"
            y1="112.132"
            x2="1059.52"
            y2="1204.08"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E9E9E9" />
            <stop offset="0.325611" stopColor="#F2F2F2" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_916_3366"
            x1="1329.7"
            y1="665.008"
            x2="0.29885"
            y2="694.836"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EBE6FF" />
            <stop offset="1" stopColor="#F2F2F2" />
          </linearGradient>
        </defs>
      </svg>
    </Box>
  )
}

function transformCircleToPath(cx: number, cy: number, r: number, reverse?: boolean) {
  if (reverse) {
    return `
      M ${cx} ${cy}
      m ${r}, 1
      a ${r},${r} 1 0,1 -${r * 2},1
      a ${r},${r} 1 0,1 ${r * 2},1
    `
  }
  return `
    M ${cx} ${cy}
    m ${r}, 0
    a ${r},${r} 0 1,0 -${r * 2},0
    a ${r},${r} 0 1,0 ${r * 2},0
  `
}
