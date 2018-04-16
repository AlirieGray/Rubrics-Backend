const db = require('../models')
var Assessment = db.Assessment
var ogs = require('open-graph-scraper')

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
            model: db.Criterion,
          }],
          order: [ [ { model: db.Criterion }, 'id', 'ASC' ] ]
        }],
        order: [ [ { model: db.Scale }, 'id', 'ASC' ] ]
      }],
      order: [ [ { model: db.Competency }, 'id', 'ASC' ] ]
    })
    .then((rubric) => {
      console.log("Rubric: ", rubric.name)
      const assessment = {
        userId: req.params.userId,
        rubricId: req.params.rubricId,
        rubricJSON: rubric,
      }
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
    var allAssessments = []
    var allLearningActions = []
    var ogPromises = []

    const callOpenGraph = (url) => {
      return new Promise((resolve) => {
        var options = {'url': url}
        ogs(options, (error, results) => {
          if (error) {
            console.log('Open Graph Error:', results.error) // This is returns true or false. True if there was a error. The error it self is inside the results object.
            return resolve(results)
          } else {
            console.log('Open Graph Call Successful...')
            return resolve(results)
          }
        })
      })
    }

    db.Assessment.findAll({ where: { userId: userId } })
    .then((assessments) => {
      if (assessments === null) {
        res.status(400);
        res.json({
          message: "Assessments not found for User " + userId,
          userId
        })
      } else {
        // console.dir("Storing the assessments:", assessments)
        allAssessments = assessments
        const criterionIds = []
        assessments.forEach((assessment) => {
          assessment.rubricJSON.Competencies.forEach((competency) => {
            competency.Scales.forEach((scale) => {
              scale.Criteria.forEach((criterion) => {
                criterionIds.push(criterion.id)
              })
            })
          })
        })
        return db.Action.findAll({ where: { id: criterionIds }})
      }
    }).then((learningActions) => {
      return Promise.all(learningActions.map((action) => {
        return new Promise((resolve) => {
          var options = {'url': action.url}
          ogs(options, (error, results) => {
            if (error) {
              console.log('Open Graph Error:', results.error) // This is returns true or false. True if there was a error. The error it self is inside the results object.
            } else {
              console.log('Open Graph Call Successful...')
            }
            const newAction = { ...action.dataValues, meta: results.success ? results.data : { error: results } }
            console.log('ACTION', newAction)
            allLearningActions.push(newAction)
            return resolve(action)
          })
        })
      }))
    })
    .then((learningActions) => {
      console.log('Learning Actions:', allLearningActions.map(action => action.url))
      allAssessments.forEach((assessment) => {
        assessment.rubricJSON.Competencies.forEach((competency) => {
          competency.Scales.forEach((scale) => {
            scale.Criteria.forEach((criterion) => {
              criterion.Actions = allLearningActions.filter((action) => {
                return action.criterionId === criterion.id
              }).map((action) => {
                return action
              })
            })
          })
        })
      })
      res.status(200)
      // console.dir("Assessments found and Learning Actions Mapped")
      // console.dir(allAssessments, {colors: true})
      res.json({
        message: "Assessments request successful",
        userId,
        assessments: allAssessments
      })
    })
    .catch((err) => {
      console.dir(err, {colors: true});
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
      console.dir(response, {colors: true});
      return db.Assessment.findById(assessmentId);
    }).then((assessment) => {
      console.log("Assessment Competencies (HTML): ", assessment.rubricJSON.Competencies[0].Scales[0].Criteria)
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
