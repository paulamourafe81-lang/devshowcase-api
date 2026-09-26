const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let technologies = [];
let projects = [];

// GET /api/technologies
app.get('/api/technologies', (req, res) => {
  res.json(technologies);
});

// POST /api/technologies com validação
app.post('/api/technologies', (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ erro: 'name é obrigatório' });
  }
  const nova = { id: Date.now(), name: req.body.name };
  technologies.push(nova);
  res.status(201).json(nova);
});

// GET /api/projects
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// POST /api/projects com validação
app.post('/api/projects', (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ erro: 'title é obrigatório' });
  }
  const novo = { id: Date.now(), ...req.body };
  projects.push(novo);
  res.status(201).json(novo);
});

app.listen(3000, () => console.log('Rodando em http://localhost:3000'));

