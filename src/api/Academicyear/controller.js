import Academicyear from './model';
export const create = (req, res) => {
  Academicyear.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const show = (req, res) =>
Academicyear.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })

export const index = (req, res) =>
  sendAllAcademicyear(res);

export const searchAcademicyear = (req, res) => {
  console.log(req.query);
  Academicyear.find({ name: { '$regex' : req.query.string, '$options' : 'i' }}).exec((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}

export const update = (req, res) => {
  Academicyear.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const destroy = (req, res) =>
Academicyear.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(deletedObj);
    }
  }); 

  const sendAllAcademicyear = (res) => {
    Academicyear.find((er, academic) => {
      if (!er) {
        res.send(academic);
      } else {
        res.send(er);
      }
    })
  }