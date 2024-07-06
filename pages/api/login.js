// pages/api/login.js
import { query } from '../../lib/db';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  const { email, password } = req.body;
  console.log(email,password)

  if (!email || !password) {
    return res.status(400).json({ message: 'メールアドレスとパスワードを入力してください' });
  }

  const { rows } = await query('SELECT * FROM users WHERE email = $1', [email]);
  const user = rows[0];
  console.log(user)

  if (user && password==user.password) {
    // パスワードが一致した場合
    return res.status(200).json({ message: 'ログイン成功', user });
  } else {
    // パスワードが一致しない場合
    return res.status(401).json({ message: 'メールアドレスまたはパスワードが間違っています' });
  }
}
