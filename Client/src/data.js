import {faker} from '@faker-js/faker'
import { v4 as uuidv4 } from 'uuid'
let data = [
  {
    id:uuidv4(),
    img:faker.image.urlPicsumPhotos(),
    firmaAdi:faker.company.name(),
    title:faker.lorem.word(),
    des:faker.lorem.paragraph(),
    // date:faker.date.between({ from: '2024-08-01', to: '2024-04-01'}),
    location:faker.location.city()
  },
  {
    id:uuidv4(),
    img:faker.image.urlPicsumPhotos(),
    firmaAdi:faker.company.name(),
    title:faker.lorem.word(),
    des:faker.lorem.paragraph(),
    // date:faker.date.between({ from: '2024-08-01', to: '2024-04-01'}),
    location:faker.location.city()
  },
  {
    id:uuidv4(),
    img:faker.image.urlPicsumPhotos(),
    firmaAdi:faker.company.name(),
    title:faker.lorem.word(),
    des:faker.lorem.paragraph(),
    // date:faker.date.between({ from: '2024-08-01', to: '2024-04-01'}),
    location:faker.location.city()
  },
  {
    id:uuidv4(),
    img:faker.image.urlPicsumPhotos(),
    firmaAdi:faker.company.name(),
    title:faker.lorem.word(),
    des:faker.lorem.paragraph(),
    // date:faker.date.between({ from: '2024-08-01', to: '2024-04-01'}),
    location:faker.location.city()
  },
  {
    id:uuidv4(),
    img:faker.image.urlPicsumPhotos(),
    firmaAdi:faker.company.name(),
    title:faker.lorem.word(),
    des:faker.lorem.paragraph(),
    // date:faker.date.between({ from: '2024-08-01', to: '2024-04-01'}),
    location:faker.location.city()
  },
  {
    id:uuidv4(),
    img:faker.image.urlPicsumPhotos(),
    firmaAdi:faker.company.name(),
    title:faker.lorem.word(),
    des:faker.lorem.paragraph(),
    // date:faker.date.between({ from: '2024-08-01', to: '2024-04-01'}),
    location:faker.location.city()
  },
  {
    id:uuidv4(),
    img:faker.image.urlPicsumPhotos(),
    firmaAdi:faker.company.name(),
    title:faker.lorem.word(),
    des:faker.lorem.paragraph(),
    // date:faker.date.between({ from: '2024-08-01', to: '2024-04-01'}),
    location:faker.location.city()
  },

]

export default data