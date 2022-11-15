// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Experience = {
  name: string;
  experience: number;
};

type Data = {
  data: Experience[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    data: [
      {
        name: 'HTML',
        experience: 4,
      },
      {
        name: 'CSS',
        experience: 4,
      },
      {
        name: 'JavaScript',
        experience: 4,
      },
      {
        name: 'Assessibility',
        experience: 4,
      },
      {
        name: 'React',
        experience: 3,
      },
      {
        name: 'Sass',
        experience: 3,
      },
    ],
  });
}
