import fs from 'fs';
import util from 'util';

function addPet(req, res) {
  console.log('new request: addPet');
  res.send('called addPet');
}

function updatePet(req, res) {
  console.log('new request: updatePet');
  res.send('called updatePet');
}

function findPetsByStatus(req, res) {
  console.log('new request: findPetsByStatus');
  res.send('called findPetsByStatus');
}

function findPetsByTags(req, res) {
  console.log('new request: findPetsByTags');
  res.send('called findPetsByTags');
}

function getPetById(req, res) {
  console.log('new request: getPetById');
  res.send('called getPetById');
}

function updatePetWithForm(req, res) {
  console.log('new request: updatePetWithForm');
  res.send('called updatePetWithForm');
}

function deletePet(req, res) {
  console.log('new request: deletePet');
  res.send('called deletePet');
}

function uploadFile(req, res) {
  console.log('new request: uploadFile');
  res.send('called uploadFile');
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
