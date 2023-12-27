import { Request,Response } from "express";
import {connect} from '../db'
import { Stores } from "../interface/Stores";

export async function getStores(req:Request,res:Response):Promise<Response> {
    const conn=await connect();
    const stores=await conn.query('select * from stores');
   return res.json(stores[0]);
}
export async function createStores(req: Request, res: Response) {
    const newPost: Stores = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO stores SET ?', [newPost]);
    return res.json({
        message: 'Post Created'
    });
}

export async function getStore(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const conn = await connect();
    const post = await conn.query('SELECT * FROM stores WHERE id = ?', [id]);

    return res.json(post[0]);
}

export async function deleteStores(req: Request, res: Response) {
    const id = req.params.id;
    const conn = await connect();
    await conn.query('DELETE FROM stores WHERE id = ?', [id]);
    return res.json({
        message: 'Post deleted'
    });
}

export async function updateStore(req: Request, res: Response) {
    const id = req.params.id;
    const updatePost: Stores = req.body;
    const conn = await connect();
    await conn.query('UPDATE stores SET ? WHERE id = ?', [updatePost, id]);
    return res.json({
        message: 'Post updated'
    });
}