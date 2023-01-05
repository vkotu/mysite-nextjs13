// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
  ) {
    if(req.method === 'POST') {
      // save to DB
      console.log(req.body);
      res.status(200).json({ message: 'ok' })
    }
  
}
