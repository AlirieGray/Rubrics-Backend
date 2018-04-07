const db = require('../models');
var Assessment = db.Assessment

module.exports = (app) => {

  // Show or Create a Assessment
  app.get('/users/:userId/rubrics/:rubricId/assessments/', (req, res) => {
    const params = { userId: req.params.userId, rubricId: req.params.rubricId }
    db.Rubric.findOne({
      where: {
        id: req.params.rubricId
      },
      include: [{
        model: db.Competency,
        include: [{
          model: db.Scale,
          include: [{
            model: db.Criterion
          }],
        }],
      }],
    })
    .then((rubric) => {
      console.log("Rubric: ", rubric.name)
      const assessment = {
        userId: req.params.userId,
        rubricId: req.params.rubricId,
        rubricJSON: rubric,
      }
      //https://github.com/sequelize/sequelize/issues/6554
      //Sequelize findOrCreate and invoking spread()
      return db.Assessment.findOrCreate({ where: params, defaults: assessment })
    })
    .spread((assessment, created) => {
      const message = created ? "Assessment was successfully created" : "Assessment was successfully found"
      console.log(message)
      res.send(200, {
        message,
        created,
        assessment
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

  // Index Assessments
  app.get('/users/:userId/assessments', (req, res) => {
    const userId = req.params.userId
    db.Assessment.findAll({ where: { userId: userId } })
    .then((assessments) => {
      console.log("Response from Assessment/Index: ", assessments)
      if (assessments === null) {
        res.status(400);
        res.json({
          message: "Assessments not found for User " + userId,
          userId
        })
      } else {
        res.status(200)
        res.json({
          message: "Assessments request successful",
          userId,
          assessments
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
  app.post('/assessments/:id', (req, res) => {
    const assessmentId = req.params.id
    const assessment = req.body
    console.log("req body", assessment)
    //console.log(assessment.rubricJSON.Competencies[0].Scales[0].Criteria)
    db.Assessment.update(assessment, {
      where: { id: assessmentId }
    }).then((response) => {
      console.log(response);
      return db.Assessment.findById(assessmentId);
    }).then((assessment) => {
      console.log("Assesement Competencies (HTML): ", assessment.rubricJSON.Competencies[0].Scales[0].Criteria)
      res.status(200)
      res.json({
        message: 'assessment updated successfully!',
        assessmentId,
        assessment
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
        message: 'Assessment deleted successfully!',
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
