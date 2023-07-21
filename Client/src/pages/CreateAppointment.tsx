import { useState } from 'react'
import { Typography, Button, Stack } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import moment from 'moment';

const CreateAppointment = () => {
  const [initialValues, setInitialValues] = useState({
    patient: 0,
    speciality: 0,
    doctor: 0,
    date: moment(),
  });

  

  return (<>
    <Typography variant='h4' component='h1' textAlign="center">Asignar cita</Typography>
    <Formik
      initialValues={ initialValues }

      onSubmit={(values)=>{
        console.log(values);
      }}
    >
      { ()=>(
        <Form>
          <Stack alignItems="stretch" gap={4} marginBottom={4}>
            <Stack>
              <label htmlFor="patient">Paciente:</label>
              <Field className="create_app_input"   id='patient' as='select' name="patient" placeholder="Seleccione el paciente al cual le asignara una cita">
                <option value="">Seleccione el paciente al cual le asignara una cita...</option>
              </Field>
            </Stack>
            <Stack>
              <label htmlFor="speciality">Especialidad:</label>
              <Field className="create_app_input"   id='speciality' type='number' name="speciality" placeholder="Seleccione una especialidad" />
            </Stack>
            <Stack>
              <label htmlFor="speciality">Doctor:</label>
              <Field className="create_app_input"   id='speciality' type='number' name="speciality" placeholder="Seleccione a un doctor disponible" />
            </Stack>
            <Stack>
              <label htmlFor="speciality">Fecha de la cita:</label>
              <Field className="create_app_input"   id='speciality' type='date' name="speciality" placeholder="Seleccione una fecha disponible" />
            </Stack>
            <Button variant='contained'>Crear cita</Button>
          </Stack>
        </Form>
      ) }
    </Formik>
  </>
  );
};

export default CreateAppointment;