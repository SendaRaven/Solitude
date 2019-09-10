import uuid from "uuid/v4";

const petitions = [
    {
      id: uuid(),
      title: "hello",
      description: 'This is a petition about......',
      signatures : [
        {
          firstName: 'A',
          lastName: 'A',
          email: 'a@a.com',
        },
        {
          firstName: 'B',
          lastName: 'B',
          email: 'b@b.com',
        },
        {
          firstName: 'C',
          lastName: 'C',
          email: 'c@c.com',
        }
      ]
    },
    {
      id: uuid(),
      title: "world",
      description: 'This is another petition about......',
      signatures : [
        {
          firstName: 'A',
          lastName: 'A',
          email: 'a@a.com',
        },
        {
          firstName: 'B',
          lastName: 'B',
          email: 'b@b.com',
        },
        {
          firstName: 'C',
          lastName: 'C',
          email: 'c@c.com',
        },
        {
          firstName: 'D',
          lastName: 'D',
          email: 'd@d.com',
        }
      ]
    },
  ]

  export default petitions;