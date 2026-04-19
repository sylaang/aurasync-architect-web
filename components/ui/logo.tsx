export function Logo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 400 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>
          {`
            .cls-1 {
              font-size: 100px;
              fill: #007BFF; /* ton bleu logo */
              font-family: "Palatino Linotype", serif;
              font-weight: 700;
            }
            .cls-2 {
              font-size: 35px;
              fill: #007BFF; /* même bleu */
              font-family: "Palatino Linotype", serif;
              font-weight: 700;
            }
          `}
        </style>
      </defs>
      <text id="_D.D" data-name=" D.D" className="cls-1" x="50" y="75">
        D.D
      </text>
      <text id="Interiors_home" data-name="Interiors home" className="cls-2" x="30" y="110">
        Interiors home
      </text>
    </svg>
  );
}