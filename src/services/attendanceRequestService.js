export const fetchAttendanceRequest = async (token, queryParams) => {
  const queryString = new URLSearchParams(queryParams).toString();

  const response = await fetch(
    `http://localhost:3000/api/attendance-request?${queryString}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch attendance data');
  }

  return response.json();
};
