export const validatePassword = (rule, value, callback) => {
  if (value.length < 6) {
    callback(new Error("密码长度不能少于 6 位"));
  } else {
    callback();
  }
};
