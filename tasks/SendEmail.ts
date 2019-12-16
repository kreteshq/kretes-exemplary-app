import { Task } from 'huncwot';

const SendEmail: Task = async payload => {
  const { name } = payload;
  console.log(`Here is: ${name}`);
};

export default SendEmail;
