import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => res.sendFile('index.html', { root: 'src/web' }));

export default router;