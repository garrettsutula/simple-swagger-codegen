import util from 'util';
import db from '../lib/db';

function addPet(
  body,
) {
  return new Promise((resolve, reject) => {
    // business logic goes here
    // always return a promise, implement resolve and reject
    // abstract additional async operations into async functions with await
  });
}

function updatePet(
  body,
) {
  return new Promise((resolve, reject) => {
    // business logic goes here
    // always return a promise, implement resolve and reject
    // abstract additional async operations into async functions with await
  });
}

function findPetsByStatus(
  status,
) {
  return new Promise((resolve, reject) => {
    // business logic goes here
    // always return a promise, implement resolve and reject
    // abstract additional async operations into async functions with await
  });
}

function findPetsByTags(
  tags,
) {
  return new Promise((resolve, reject) => {
    // business logic goes here
    // always return a promise, implement resolve and reject
    // abstract additional async operations into async functions with await
  });
}

function getPetById(
  petId,
) {
  return new Promise((resolve, reject) => {
    // business logic goes here
    // always return a promise, implement resolve and reject
    // abstract additional async operations into async functions with await
  });
}

function updatePetWithForm(
  petId,
  name,
  status,
) {
  return new Promise((resolve, reject) => {
    // business logic goes here
    // always return a promise, implement resolve and reject
    // abstract additional async operations into async functions with await
  });
}

function deletePet(
  api_key,
  petId,
) {
  return new Promise((resolve, reject) => {
    // business logic goes here
    // always return a promise, implement resolve and reject
    // abstract additional async operations into async functions with await in separate modules
  });
}

function uploadFile(
  petId,
  additionalMetadata,
  file,
) {
  return new Promise((resolve, reject) => {
    // business logic goes here
    // always return a promise, implement resolve and reject
    // abstract additional async operations into async functions with await
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
