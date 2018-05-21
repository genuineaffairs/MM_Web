import db from '../../config/database/index';

import { loginHelper, signupHelper } from './authSQLHelpers';

export const loginQuery = async body => {
  try {
    const { username } = body;
    const queryString = loginHelper(body);
    const data = await db.query(queryString, [username]);
    return data;
  } catch (err) {
    console.error
  }
};

export const signupQuery = async body => {
  try {
    const { username, password, email, firstname, lastname } = body;
    const queryString = signupHelper(queryString)
    const data = await db.query(queryString, [username, password, email, firstname, lastname]);
    return data;
  } catch (err) {
    console.error
  }
};
