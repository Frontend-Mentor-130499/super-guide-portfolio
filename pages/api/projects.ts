import type { NextApiRequest, NextApiResponse } from 'next';

interface Project {
  image: string;
  name: string;
  tech: string[];
}

type props = {
  data: Project[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<props>
) {
  res.status(200).json({
    data: [
      {
        image: '/images/1.webp',
        name: 'DESIGN PORTFOLIO',
        tech: ['HTML', 'CSS'],
      },
      {
        image: '/images/2.webp',
        name: 'E-LEARNING LANDING PAGE',
        tech: ['HTML', 'CSS'],
      },
      {
        image: '/images/3.webp',
        name: 'TODO WEB APP',
        tech: ['HTML', 'CSS', 'Javascript'],
      },
      {
        image: '/images/4.webp',
        name: 'ENTERTAINMENT WEB APP',
        tech: ['HTML', 'CSS', 'Javascript'],
      },
      {
        image: '/images/5.webp',
        name: 'MEMORY GAME',
        tech: ['HTML', 'CSS', 'Javascript'],
      },
      {
        image: '/images/6.webp',
        name: 'ART GALLERY SHOWCASE',
        tech: ['HTML', 'CSS', 'Javascript'],
      },
    ],
  });
}
