import { Router } from 'express'

import {
  create,
  index,
  show,
  update,
  destroy,
  searchFacultySubjects,
  
} from './controller'

const router = new Router()

//POST Request http://localhost:8080/FacultySubjects
router.post('/', create)

//PUT Request http://localhost:8080/FacultySubjects/123
router.put('/:id', update)

//GET Request http://localhost:8080/FacultySubjects/search
router.get('/search', searchFacultySubjects)

//GET Request http://localhost:8080/FacultySubjects
router.get('/', index)

//GET Request http://localhost:8080/FacultySubjects/123
router.get('/:id', show)

//DELETE Request http://localhost:8080/FacultySubjects/123
router.delete('/:id', destroy)


export default router
