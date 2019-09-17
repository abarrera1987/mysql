import {Router, Request, Response} from 'express';
import MySql from '../mysql/mysql';
import { MysqlError } from 'mysql';

const router = Router();

router.get( '/heroes', (req: Request, res: Response) => {

    const query = ` SELECT * FROM heroes `;

    MySql.ejecutarQuery(query, (err:any, heroes: Object[]) => {
        
        res.json({
            ok: true,
            messagge: "Todo esta bien",
            heroes
        })
    });

    
});

router.get('/heroes/:id', (req: Request, res: Response) => {

    const id = req.params.id;

    res.json({
        ok: true,
        messagge: "Todo esta bien",
        id
    })
});

export default router;