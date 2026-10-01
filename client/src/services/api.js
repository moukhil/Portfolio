import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getProfile = async () => {
  const response = await API.get('/profile');
  return response.data;
};

export const getSkills = async () => {
  const response = await API.get('/skills');
  return response.data;
};

export const getProjects = async (category) => {
  const params = category && category !== 'All' ? { category } : {};
  const response = await API.get('/projects', { params });
  return response.data;
};

export const createProject = async (projectData) => {
  const response = await API.post('/projects', projectData);
  return response.data;
};

export const deleteProject = async (id) => {
  const response = await API.delete(`/projects/${id}`);
  return response.data;
};

export const sendContactMessage = async (messageData) => {
  const response = await API.post('/contact', messageData);
  return response.data;
};

export const getMessages = async () => {
  const response = await API.get('/contact');
  return response.data;
};

export const deleteMessage = async (id) => {
  const response = await API.delete(`/contact/${id}`);
  return response.data;
};

export default API;
