import type { NextApiRequest, NextApiResponse } from 'next'

const config = {
   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
   useCdn: process.env.NODE_ENV === 'production',
   token: process.env.SANITY_API_TOKEN
}

const client = require('@sanity/client')(config)


export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   const {_id, name, email, comment} = JSON.parse(req.body)

   try{
      await client.create({
         _type: 'comment',
         post:{
            _type: 'reference',
            _ref: _id
         },
         name,
         email,
         comment
      })
   }catch(e){
      console.log(e)
      res.status(500).send({
         message: `Couldn't submit comment`,
         e
      })
   }
   res.status(200).json({ name: 'John Doe' })
}