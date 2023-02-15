export const fetchRoutines = async () => {
    try {
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const result = await response.json()
        return result

    } catch (error) {
        throw error
    }
} 