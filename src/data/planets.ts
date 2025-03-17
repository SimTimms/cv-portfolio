export type PlanetType = {
  distance: number;
  size: number;
  speed: number;
  children?: PlanetType[];
};

export const planets: PlanetType[] = [
  {
    distance: 0,
    size: 4,
    speed: 130,
    children: [
      {
        distance: 5,
        size: 1,
        speed: 230,
        children: [
          { distance: 1, size: 1, speed: 230 },
          { distance: 1, size: 1, speed: 130 },
        ],
      },
      { distance: 7, size: 1, speed: 130 },
    ],
  },
];
