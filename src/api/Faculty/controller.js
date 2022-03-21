import Faculty from './model';
export const create = (req, res) => {
  Faculty.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const show = (req, res) =>
  Faculty.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })

export const index = (req, res) =>
  sendAllFaculty(res);

  export const searchFaculty = (req, res) => {
    console.log(req.query);
    Faculty.find(req.query,(err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.send(results);
      }
    })
  }




export const update = (req, res) => {
  Faculty.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const destroy = (req, res) =>
  Faculty.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(deletedObj);
    }
  }); 

  const sendAllFaculty = (res) => {
    Faculty.find((er, faculty) => {
      if (!er) {
        res.send(faculty);
      } else {
        res.send(er);
      }
    })
  }