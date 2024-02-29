// fetchAttendanceData.js
export const fetchAttendanceData = async (token, queryParams) => {
  const queryString = new URLSearchParams(queryParams).toString();

  const response = await fetch(
    `http://localhost:3000/api/attendance?${queryString}`,
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

export const fetchAttendanceDataByDate = async (token, date) => {
  const response = await fetch(`http://localhost:3000/api/attendance/${date}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch attendance data');
  }

  return response.json();
};

export const fetchAttendanceDataById = async (token, uId) => {
  const response = await fetch(`http://localhost:3000/api/attendance/${uId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch attendance data');
  }

  return response.json();
};
