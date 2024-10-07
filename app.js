import bcrypt from 'bcrypt';

const hashPassword = async (password) => {
  const result = await bcrypt.hash(password, 10);
  console.log(result);
  const compareResult = await bcrypt.compare(password, result);
  console.log(result, compareResult);
};

hashPassword('12345');
