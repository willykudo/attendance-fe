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



export const updateAttendanceData = async (token, uId, updateData) => {
  // console.log("Updating attendance data:", updateData);
  try {
    const response = await fetch(`http://localhost:3000/api/attendance/${uId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(updateData)
    });

    if (!response.ok) {
      throw new Error('Failed to update attendance data');
    }

    const responseData = await response.json();
    console.log("Response:", responseData);
    return responseData;
  } catch (error) {
    console.error('Error updating attendance data:', error);
    throw error;
  }
};

// export const createAttendanceRequest = async (token, requestData) => {
//   try {
//     const response = await fetch('http://localhost:3000/api/attendance/create-request', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(requestData),
//     });

//     if (!response.ok) {
//       throw new Error('Failed to create attendance request');
//     }

//     const responseData = await response.json();
//     console.log('Response:', responseData);
//     return responseData;
//   } catch (error) {
//     console.error('Error creating attendance request:', error);
//     throw error;
//   }
// };
