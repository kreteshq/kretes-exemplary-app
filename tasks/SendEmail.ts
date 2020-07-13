// import { Task } from 'kretes';

const SendEmail = (payload: any) => {
  const { name } = payload;
  console.log(`Here is: ${name}`);
};

export default SendEmail;
