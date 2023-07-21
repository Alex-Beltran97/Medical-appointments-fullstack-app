import http from '../http';

const PATH = '/appointments';

export const getAppointments = async () => {
  return http.get(PATH);
};