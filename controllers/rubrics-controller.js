const db = require('../models');

module.exports = (app) => {

  // Create a Rubric
  app.post('/users/:userId/rubrics/create', (req, res) => {
    const newRubric = {...req.body, userId: req.params.userId}
    db.Rubric.create(newRubric)
    .then((rubric) => {
      console.log("Response from Rubric/Create: ", rubric)
      res.status(200)
      res.json({
        message: 'Rubric added successfully!',
        rubric
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

  // Create a complete, nested rubric
  app.post('/users/:userId/completeRubrics/create', async function(req, res) {
    const newRubric = {...req.body.rubric, userId: req.params.userId}
    const rubric = await db.Rubric.create(newRubric)
    .then((rubric) => {
      return rubric
    })
    .catch((err) => {
      console.log(err);
      res.status(400);
      res.json({
        message: "Error!",
        error: err
      })
    })

    const competencies = await Promise.all(
      req.body.competencies[0].map(async (competency, index) => {

        const newCompetency = {name: competency, rubricId: rubric.id}
        return db.Competency.create(newCompetency)
        .then((competency) => {
          return competency.dataValues
        })
        .catch((err) => {
          console.log(err);
          res.status(400);
          res.json({
            message: "Error!",
            error: err
          })
        })

      })
    )

    const scales = await Promise.all(
      req.body.skills.map(async (skillsGroup, compIndex) => {
        return await Promise.all(
          skillsGroup.map(async (skill, index) => {

            const newScale = {name: skill, competencyId: competencies[compIndex].id}
            return db.Scale.create(newScale)
            .then((scale) => {
              console.log("data123", scale.dataValues)
              return scale.dataValues
            })
            .catch((err) => {
              console.log(err);
              res.status(400);
              res.json({
                message: "Error!",
                error: err
              })
            })

          })
        )
      })
    )

    const scalesFlat = scales.reduce((acc, scaleGroup) => [...acc, ...scaleGroup])
    console.log(scalesFlat)

    const criterion = await Promise.all(
      req.body.evaluations.map(async (evaluationsGroup, skillIndex) => {
        return await Promise.all(
          evaluationsGroup.map(async (evaluation, level) => {

            const newCriterion = {text: evaluation, level: level + 1, scaleId: scalesFlat[skillIndex].id}
            console.log(newCriterion)
            return db.Criterion.create(newCriterion)
            .then((criterion) => {
              return criterion.dataValues
            })
            .catch((err) => {
              console.log(err);
              res.status(400);
              res.json({
                message: "Error!",
                error: err
              })
            })

          })
        )
      })
    )

    res.status(200)
    res.json({
      message: 'Completed rubric added successfully!'
    })
  });

  // Index of all Rubrics
  app.get('/rubrics', (req, res) => {
    db.Rubric.findAll()
    .then((rubrics) => {
      console.log("Response from Rubric/Index: ", rubrics)
      res.json(rubrics)
    })
    .catch((err) => {
      console.log(err);
      res.status(400);
      res.json( {
        message: "Error!",
        error: err
      })
    })
  });

  // Index of all Rubrics for a given User
  app.get('/users/:userId/rubrics', (req, res) => {
    const userId = req.params.userId
    db.Rubric.findAll({
      where: {
        userId
      }
    })
    .then((rubrics) => {
      console.log("Response from Rubric/Index: ", rubrics)
      res.json(rubrics)
    })
    .catch((err) => {
      console.log(err);
      res.status(400);
      res.json( {
        message: "Error!",
        error: err
      })
    })
  });

  // Show a Rubric
  app.get('/rubrics/:id', (req, res) => {
    const rubricId = req.params.id
    db.Rubric.findOne({
      where: {
        id: rubricId
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
      console.log("Response from Rubric/Show: ", rubric)
      res.status(200)
      res.send({
        message: "Rubric request successful",
        rubric: rubric
      }
    )
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

// UPDATE
app.put('/rubrics/:id/update', (req, res) => {
  const rubricId = req.params.id
  const rubric = req.body
  db.Rubric.update(rubric, {
    where: { id: rubricId }
  }).then((response) => {
    res.status(200)
    res.json({
      message: 'Rubric updated successfully!',
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

// Delete a Rubric
app.delete('/rubrics/:id', (req, res) => {
  const rubricId = req.params.id
  db.Rubric.destroy({ where: { id: rubricId } })
  .then((response) => {
    console.log("Response from Rubric/Delete: ", response)
    res.status(200)
    res.json({
      message: 'Rubric deleted successfully!',
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
