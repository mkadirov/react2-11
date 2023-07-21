import { faker } from '@faker-js/faker';

export const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const  dataChart1 = labels.map(() => faker.number.int({ min: 0, max: 1000 }));
export const  dataChart2 = labels.map(() => faker.number.int({ min: 0, max: 1000 }));