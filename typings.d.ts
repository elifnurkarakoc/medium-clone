export interface Post {
   _id: string
   _createdAt: string
   title: string
   author:{
      name: string
      image: string
   }
   description: string
   mainImage:{
      asset: {
         url: string
      }
   }
   comments: Comment[]
   slug:{
      current: string
   }
   body: [object]
}

export interface IFormInput {
_id: string;
name: string;
email: string;
comment: string;
}

export interface Comment {
   approved: boolean
   comment: string
   email: string
   name: string
   post:{
      _ref: string
      _type: string
   }
   _createdAt: string
   _id: string
   _rev: string
   _type: string
   _updatedAt: string
}

