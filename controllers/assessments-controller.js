const db = require('../models');
var Assessment = db.Assessment

module.exports = (app) => {

  // Show or Create a Assessment
  app.get('/users/:userId/rubrics/:rubricId/assessments/', (req, res) => {
    const params = { userId: req.params.userId, rubricId: req.params.rubricId }

    const assessmentDefault = {
      userId: req.params.userId,
      rubricId: req.params.rubricId
    }
    return db.Assessment.findOrCreate({ where: params, defaults: assessmentDefault })
      .spread((assessment, created) => {
        const message = created ? "Assessment was successfully created" : "Assessment was successfully found"
        console.log(message)

        db.Rubric.findOne({
          where: {
            id: req.params.rubricId
          },
          include: [{
            model: db.Competency,
            include: [{
              model: db.Scale,
              include: [{
                model: db.Criterion,
                include: [{
                  model: db.Action,
                }],
                order: [ [ { model: db.Action }, 'id', 'ASC' ] ]
              }],
              order: [ [ { model: db.Criterion }, 'id', 'ASC' ] ]
            }],
            order: [ [ { model: db.Scale }, 'id', 'ASC' ] ]
          }],
          order: [ [ { model: db.Competency }, 'id', 'ASC' ] ]
        })
        .then((rubric) => {
          console.log("Rubric: ", rubric.name)
          console.log("Assessment: ", assessment.dataValues);
          res.send({
            message,
            created,
            assessment: Object.assign({}, assessment.dataValues, {rubricJSON: rubric})
          })
        })
      })
      .catch((err) => {
        console.log(err);
        res.status(400);
        res.json({
          message: "Error!",
          error: err
        })
      })
  });


  // Show Assessment
  app.get('/assessments/:id', (req, res) => {
    const assessmentId = req.params.id
    db.Assessment.findById(assessmentId)
    .then((assessment) => {
      console.log("Response from Assessment/Show: ", assessment)
      if (assessment === null) {
        res.status(400);
        res.json({
          message: "Asssement not found!",
          assessmentId
        })
      } else {
        res.status(200)
        res.json({
          message: "Assessment request successful",
          assessment
        })
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(400);
      res.json({
        message: "Error!",
        error: err
      })
    })
  });

  // UPDATE a Assessment
  app.put('/assessments/:id', (req, res) => {
    const assessmentId = req.params.id
    const assessment = req.body
    db.Assessment.update(assessment, {
      where: { id: assessmentId }
    }).then((response) => {
      res.status(200)
      res.json({
        msg: 'assessment updated successfully!',
        assessmentId,
      })
    }).catch((err) => {
      console.log(err);
      res.status(400);
      res.json({
        message: "Error!",
        error: err
      })
    })
  });

  // Delete a Assessment
  app.delete('/assessments/:id', (req, res) => {
    const assessmentId = req.params.id
    db.Assessment.destroy({ where: { id: assessmentId } })
    .then((response) => {
      console.log("Response from Assessment/Delete: ", response)
      res.status(200)
      res.json({
        msg: 'Assessment deleted successfully!',
        qty: response
      })
    })
    .catch((err) => {
      console.log(err);
      res.status(400);
      res.json({
        message: "Error!",
        error: err
      })
    })
  });
}
