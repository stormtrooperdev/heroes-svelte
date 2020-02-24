import axios from 'axios';
import { parseItem, parseList } from './http-utils';
import API from './config';

export async function getVillainsAction() {
  try {
    const response = await axios.get(`${API}/villains`);
    const villains = parseList(response);
    return villains;
  } catch (error) {
    return console.log(error);
  }
}

export async function deleteVillainAction(villain) {
  try {
    const response = await axios.delete(`${API}/villains/${villain.id}`);
    parseItem(response, 200);
    return null;
  } catch (error) {
    console.error(error);
  }
}
export async function updateVillainAction(villain) {
  try {
    const response = await axios.put(`${API}/villains/${villain.id}`, villain);
    const updatedVillain = parseItem(response, 200);
    return updatedVillain;
  } catch (error) {
    console.error(error);
  }
}
export async function addVillainAction(villain) {
  try {
    const response = await axios.post(`${API}/villains`, villain);
    const addedVillain = parseItem(response, 201);
    return addedVillain;
  } catch (error) {
    console.error(error);
  }
}
