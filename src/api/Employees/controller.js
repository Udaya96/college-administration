import Employees from './model';
export const create = (req, res) => {
  Employees.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const show = (req, res) =>
Employees.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })

export const index = (req, res) =>
  sendAllEmployees(res);

  export const searchEmployees = (req, res) => {
    console.log(req.query);
    Employees.find(req.query,(err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.send(results);
      }
    })
  }




export const update = (req, res) => {
  Employees.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const destroy = (req, res) =>
Employees.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(deletedObj);
    }
  }); 

  const sendAllEmployees = (res) => {
    Employees.find((er, employee) => {
      if (!er) {
        res.send(employee);
      } else {
        res.send(er);
      }
    })
  }