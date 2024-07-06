// pages/api/ir.js
import { query } from '../../lib/db';

export default async function handler(req, res) {
  const { rows } = await query('SELECT * FROM ir');
  res.status(200).json(rows);
}
