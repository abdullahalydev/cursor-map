export type CursorProps = {
  fill: string;
};

export function Cursor({ fill }: CursorProps) {
  return (
    <div className="absolute">
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="23"
        viewBox="0 0 40 50"
      >
        <path
          d="M0.00141251 4.74791C0.00141251 0.699287 4.76419 -1.48497 7.84658 1.15023L38.3326 27.2063C41.6114 30.0091 39.7445 35.3669 35.4297 35.5388L21.5936 36.0912C20.1069 36.1504 18.7077 36.8085 17.7156 37.9133L8.29459 48.4118C5.38604 51.653 0 49.6012 0 45.2524V4.74791H0.00141251Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
