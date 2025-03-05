import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => res.sendFile('whitelist.html', { root: 'src/web' }));

export default router;