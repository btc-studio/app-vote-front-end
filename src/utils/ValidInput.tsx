export const validateEmail = (mail: string) => {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const checkMail = mail.match(mailformat);
  return checkMail;
};
export const validateNearAddress = (nearAccount: string) => {
  const mailformat = '.testnet';
  const checkNear = nearAccount.match(mailformat);
  return checkNear;
};
