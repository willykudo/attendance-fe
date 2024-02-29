import * as Yup from 'yup';

const attendanceValidationSchema = Yup.ObjectSchema({
  employeeID: Yup.string().required('Employee ID is required'),
  scheduleID: Yup.string().required('Schedule ID is required'),
  organizationID: Yup.string().required('Organization ID is required'),
  position: Yup.string(),
  location: Yup.string(),
  department: Yup.string(),
  punchIn: Yup.date().required('Punch In is required'),
  punchOut: Yup.date().required('Punch Out is required'),
  breaks: Yup.array().of(
    Yup.object({
      breakTime: Yup.date().required('Break time is required'),
      returnFromBreak: Yup.date().required('Return from break is required'),
      breakImage: Yup.string(),
      returnImage: Yup.string(),
      breakDesc: Yup.string(),
      returnDesc: Yup.string(),
    })
  ),
  punchInGps: Yup.object({
    address: Yup.string(),
    lat: Yup.string(),
    long: Yup.string(),
    postalCode: Yup.string(),
  }),
  punchOutGps: Yup.object({
    address: Yup.string(),
    lat: Yup.string(),
    long: Yup.string(),
    postalCode: Yup.string(),
  }),
  punchInImage: Yup.string(),
  punchOutImage: Yup.string(),
  punchInDesc: Yup.string(),
  punchOutDesc: Yup.string(),
  status: Yup.string(),
}).noUnknown();

export default attendanceValidationSchema;
