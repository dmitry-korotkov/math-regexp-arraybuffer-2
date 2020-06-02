/* eslint-disable no-useless-escape */
export default class Validator {
  validateUsername(userName) {
    if (userName.match(/^[a-z]/i)) {
      this.userName = userName;
    } else {
      throw new Error('Имя пользователя должно начинаться с буквы латинского алфавита');
    }

    if (userName.match(/[^a-z]$/)) {
      throw new Error('Имя должно заканчиваться на букву латинского алфавита');
    } else {
      this.userName = userName;
    }

    if (!userName.match(/\d{4}/)) {
      this.userName = userName;
    } else {
      throw new Error('Имя пользователя не должно содержать подряд более трёх цифр.');
    }

    if (!userName.match(/[^a-z\-\_\d]/)) {
      this.userName = userName;
    } else {
      throw new Error('Имя пользователя не должно содержать симлволов за исключением: тире -, подчёркивания _.');
    }
  }
}
