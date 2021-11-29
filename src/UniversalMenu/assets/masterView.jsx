import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={17}
      height={14}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.41 12.879a1 1 0 01-1.628-.013L2.114 4.803 2.587.167l6 7.257 6-7.257.684 4.636-5.862 8.076zm6.346-5.416l-4.502 5.9h5.33l-.828-5.9zm-14.21 0l4.374 5.9H.583l.963-5.9z"
        fill=""
      />
    </svg>
  )
}

export default SvgComponent
