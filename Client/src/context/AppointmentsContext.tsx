import { useState, useEffect, createContext, useContext } from 'react'
import { IAppointment, IDoctor, IPatient, ISpeciality } from '../types'
import { getAppointments } from '../actions/appointments.action';

type DataAvailable = {
  appointments?: IAppointment;
  specialities?: ISpeciality;
  patients?: IPatient;
  doctors?: IDoctor;
};

const context = createContext<DataAvailable | undefined>(undefined);

export const useAppointmentContext = () =>{
  if (context) return useContext(context);
};

type Props = {
  children: React.ReactNode;
};

const AppointmentsProvider = ({ children } : Props) => {
  const [appointments, setAppointments] = useState<IAppointment>();

  const getAppointmentsData = async () =>{
    try {
      const { data } = await getAppointments();

      setAppointments(data);

      console.log(data);

    } catch (error) {
      console.log(error);
    };
  };

  useEffect(() => {
    getAppointmentsData();
  }, []);

  return (<context.Provider value={{ 
      appointments
    } }>
    { children }
  </context.Provider>);
};

export default AppointmentsProvider;