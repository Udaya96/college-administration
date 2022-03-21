import FacultySubjects from './model';
export const create = (req, res) => {
  FacultySubjects.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const show = (req, res) =>
FacultySubjects.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })

export const index = (req, res) =>
  sendAllFacultySubjects(res);

export const searchFacultySubjects = (req, res) => {
  console.log(req.query);
  FacultySubjects.find( req.query, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}

export const update = (req, res) => {
  FacultySubjects.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const destroy = (req, res) =>
FacultySubjects.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(deletedObj);
    }
  }); 

  const sendAllFacultySubjects = (res) => {
    FacultySubjects.find((er, facultysubject) => {
      if (!er) {
        res.send(facultysubject);
      } else {
        res.send(er);
      }
    })
  }