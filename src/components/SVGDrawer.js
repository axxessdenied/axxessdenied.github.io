import React from 'react';

const rectangle = (
  <rect
    x={40} y={15}
    width={30} height={65}
    fill="hotpink"
  />
);
const circle = (
  <ellipse
    cx={30} cy={60}
    rx={20} ry={20}
    fill="lightsalmon"
  />
);
const triangle = (
  <polygon
    points="15,80 30,55 45,80"
    fill="turquoise"
  />
);

const shape = (
    <path
        d={`
            M 100,100
            L 200,100
            L 200,200
            L 100,200
            L 100,100
        `}
    />
  );

const startPoint = [25, 25];
const controlPoint = [300, 175];
const endPoint = [25, 325];
const path = (
    <path
        d={`
        M ${startPoint}
        Q ${controlPoint} ${endPoint}
        `}
        fill="none"
        stroke="hotpink"
        strokeWidth={5}
    />
)
  

function SVGDrawer() {
    return(
        <svg
            style={{
            background: '#333',
            width: 240,
            }}
            viewBox="0 0 300 300"
        >
            {rectangle}
            {circle}
            {triangle}
            {shape}
            {path}
        </svg>
)};

export default SVGDrawer;