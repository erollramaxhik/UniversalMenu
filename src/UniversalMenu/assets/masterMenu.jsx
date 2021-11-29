import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={16}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_498_310)" fill="">
        <path d="M4.775 3.218H.02V6.47h4.755V3.22zM4.775 7.358H.02v3.251h4.755V7.36zM4.775 11.498H.02v3.251h4.755V11.5zM10.388 3.218H5.633V6.47h4.755V3.22zM10.388 7.358H5.633v3.251h4.755V7.36zM10.388 11.498H5.633v3.251h4.755V11.5zM16.001 3.218h-4.755V6.47h4.755V3.22zM16.001 7.358h-4.755v3.251h4.755V7.36zM16.001 11.498h-4.755v3.251h4.755V11.5z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_498_310">
          <path fill="#fff" d="M0 0h16v18H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgComponent
