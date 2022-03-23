import { Router } from 'express'

import {
  create,
  index,
  show,
  update,
  destroy,
  searchAcademicyear
} from './controller'

const router = new Router()

//POST Request http://localhost:8080/students
router.post('/', create)

//PUT Request http://localhost:8080/students/123
router.put('/:id', update)

//GET Request http://localhost:8080/students/search
router.get('/search', searchAcademicyear)

//GET Request http://localhost:8080/students
router.get('/', index)

//GET Request http://localhost:8080/students/123
router.get('/:id', show)

//DELETE Request http://localhost:8080/students/123
router.delete('/:id', destroy)


export default router
