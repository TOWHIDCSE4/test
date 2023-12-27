import { Router } from "express";
const router=Router();

import{getStores,createStores,getStore,deleteStores,updateStore} from '../controllers/stores.controller'
router.route('/')
      .get(getStores)
      .post(createStores);

router.route('/:id')
      .get(getStore)
      .delete(deleteStores)
      .put(updateStore);

export default router; 