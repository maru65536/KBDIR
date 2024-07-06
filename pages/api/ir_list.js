// pages/api/ir_list.js
import { query } from '../../lib/db';

export default async function handler(req, res) {
  try {
    const { rows } = await query('SELECT * FROM ir');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching IR list:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
