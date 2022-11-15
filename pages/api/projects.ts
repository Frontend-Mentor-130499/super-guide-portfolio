import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    data: [
      {
        image: '/images/1.png',
        name: 'DESIGN PORTFOLIO',
        tech: ['HTML', 'CSS'],
      },
      {
        image: '/images/2.png',
        name: 'E-LEARNING LANDING PAGE',
        tech: ['HTML', 'CSS'],
      },
      {
        image: '/images/3.png',
        name: 'TODO WEB APP',
        tech: ['HTML', 'CSS', 'Javascript'],
      },
      {
        image: '/images/4.png',
        name: 'ENTERTAINMENT WEB APP',
        tech: ['HTML', 'CSS', 'Javascript'],
      },
      {
        image: '/images/5.png',
        name: 'MEMORY GAME',
        tech: ['HTML', 'CSS', 'Javascript'],
      },
      {
        image: '/images/6.png',
        name: 'ART GALLERY SHOWCASE',
        tech: ['HTML', 'CSS', 'Javascript'],
      },
    ],
  });
}
