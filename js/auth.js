async function refreshToken() {
    console.log('refreshToken started');
    const url = 'https://task5-riham-esmail.trainees-mad-s.com/api/auth/refresh';
    const accessToken = localStorage.getItem('accessToken');
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
        });

        console.log('refreshToken - HTTP status:', response.status);

        if (response.status === 200) {
            const data = await response.json();
            console.log('refreshToken - API response:', data);
            localStorage.setItem('accessToken', data.data.accessToken); // Update the accessToken in localStorage
        } else {
            console.error('refreshToken - Failed to refresh token:', response.status);
        }
    } catch (error) {
        console.error('refreshToken - Unexpected error:', error);
    }
}