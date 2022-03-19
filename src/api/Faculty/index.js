import { Router } from 'express'

import {
  create,
  index,
  show,
  update,
  destroy,
  searchFaculty,
  
} from './controller'

const router = new Router()

//POST Request http://localhost:8080/Faculty
router.post('/', create)

//PUT Request http://localhost:8080/Faculty/123
router.put('/:id', update)

//GET Request http://localhost:8080/Faculty/search
router.get('/search', searchFaculty)

//GET Request http://localhost:8080/Faculty
router.get('/', index)

//GET Request http://localhost:8080/Faculty/123
router.get('/:id', show)

//DELETE Request http://localhost:8080/Faculty/123
router.delete('/:id', destroy)


export default router
