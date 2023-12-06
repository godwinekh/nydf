import { SVGProps } from "react";

export function RadialBullet(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fill="#fff"
        d="M62.114 8.658c16.268 13.595 18.866 38.332 5.8 55.258-13.068 16.92-36.845 19.622-53.115 6.032-16.267-13.59-18.866-38.328-5.8-55.253C22.062-2.229 45.845-4.931 62.114 8.658Z"
      />
      <path
        fill="url(#a)"
        d="M61.442 9.108c16.267 13.593 18.865 38.333 5.798 55.259-13.066 16.921-36.845 19.622-53.115 6.03C-2.143 56.806-4.74 32.07 8.324 15.143 21.388-1.78 45.171-4.481 61.442 9.109Z"
      />
      <path
        fill="url(#b)"
        d="M53.532 19.354c-10.83-9.048-26.662-7.25-35.363 4.017-8.696 11.268-6.968 27.735 3.863 36.783 10.832 9.05 26.664 7.25 35.362-4.018 8.698-11.265 6.968-27.733-3.862-36.782ZM49.676 49.69c-5.276 6.833-14.879 7.924-21.447 2.438-6.566-5.49-7.615-15.476-2.342-22.31 5.28-6.831 14.879-7.924 21.444-2.435 6.572 5.489 7.621 15.474 2.344 22.307Z"
      />
      <path
        fill="#FDB61C"
        d="M47.332 27.383c6.57 5.489 7.62 15.474 2.344 22.307-5.276 6.833-14.878 7.924-21.447 2.438-6.566-5.49-7.615-15.476-2.342-22.31 5.28-6.832 14.88-7.924 21.445-2.435Z"
      />
      <path
        fill="#fff"
        d="M28.742 51.635c-6.564-5.484-7.838-15.215-2.66-22.047-.06.079-.132.148-.195.23-5.273 6.833-4.224 16.82 2.342 22.309 5.359 4.474 12.731 4.572 18.13.75-5.368 3.551-12.357 3.15-17.617-1.242Z"
      />
      <path
        fill="#585A5C"
        d="M47.332 27.383c-6.18-5.164-15.047-4.499-20.467 1.293 5.448-5.45 14.058-5.987 20.106-.934 6.57 5.486 7.618 15.474 2.343 22.308-.31.4-.64.78-.978 1.144.468-.47.922-.962 1.34-1.504 5.277-6.833 4.228-16.818-2.344-22.307Z"
      />
      <defs>
        <radialGradient
          id="a"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(108.0198 -139.9313 138.64261 107.02499 50.54 91.567)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" />
          <stop offset="1" stop-color="#B1B1B1" />
        </radialGradient>
        <radialGradient
          id="b"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(-3.355 288.634 -1138.222) scale(149.304 155.271)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" />
          <stop offset="1" stop-color="#B1B1B1" />
        </radialGradient>
      </defs>
    </svg>
  );
}
