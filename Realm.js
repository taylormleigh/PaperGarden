import {Stitch, RemoteMongoClient} from 'mongodb-stitch-browser-sdk';

export let client = Stitch.initializeDefaultAppClient('papergarden-wsdfd');

export const getAllQuestions = () => {
  return client.callFunction('getAllQuestions');
}

export const getSingleSection = (name) => {
  return client.callFunction('getSingleSection', [name]);
}