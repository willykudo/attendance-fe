export const fetchAttendanceData = async (token) => {
  const response = await fetch('http://localhost:3000/api/attendance', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch attendance data');
  } else {
    console.log(response);
  }

  return response.json();
};
