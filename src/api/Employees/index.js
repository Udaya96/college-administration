import { Router } from 'express'

import {
  create,
  index,
  show,
  update,
  destroy,
  searchEmployees,
  
  
} from './controller'

const router = new Router()

router.post('/', create)
router.put('/:id', update)
router.get('/search', searchEmployees)
router.get('/', index)
router.get('/:id', show)
router.delete('/:id', destroy)
export default router
