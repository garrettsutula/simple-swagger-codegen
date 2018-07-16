import fs from 'fs';
import util from 'util';
import pet from './pet';

function addPet(req, res) {
  const body = req.swagger.params['body'].value;
  pet.addPet(
    body,
  )
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err.message);
      res.send(err.message);
    });
}

function updatePet(req, res) {
  const body = req.swagger.params['body'].value;
  pet.updatePet(
    body,
  )
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err.message);
      res.send(err.message);
    });
}

function findPetsByStatus(req, res) {
  const status = req.swagger.params['status'].value;
  pet.findPetsByStatus(
    status,
  )
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err.message);
      res.send(err.message);
    });
}

function findPetsByTags(req, res) {
  const tags = req.swagger.params['tags'].value;
  pet.findPetsByTags(
    tags,
  )
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err.message);
      res.send(err.message);
    });
}

function getPetById(req, res) {
  const petId = req.swagger.params['petId'].value;
  pet.getPetById(
    petId,
  )
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err.message);
      res.send(err.message);
    });
}

function updatePetWithForm(req, res) {
  const petId = req.swagger.params['petId'].value;
  const name = req.swagger.params['name'].value;
  const status = req.swagger.params['status'].value;
  pet.updatePetWithForm(
    petId,
    name,
    status,
  )
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err.message);
      res.send(err.message);
    });
}

function deletePet(req, res) {
  const api_key = req.swagger.params['api_key'].value;
  const petId = req.swagger.params['petId'].value;
  pet.deletePet(
    api_key,
    petId,
  )
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err.message);
      res.send(err.message);
    });
}

function uploadFile(req, res) {
  const petId = req.swagger.params['petId'].value;
  const additionalMetadata = req.swagger.params['additionalMetadata'].value;
  const file = req.swagger.params['file'].value;
  pet.uploadFile(
    petId,
    additionalMetadata,
    file,
  )
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err.message);
      res.send(err.message);
    });
}

export default {
  addPet,
  updatePet,
  findPetsByStatus,
  findPetsByTags,
  getPetById,
  updatePetWithForm,
  deletePet,
  uploadFile,
};
