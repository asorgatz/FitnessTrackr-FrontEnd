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

export const fetchActivities = async () => {
    try {
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
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

//Untested 
export const exchangeTokenForUser = async () => {
    const token = window.localStorage.getItem('token');

    if(token){
        const response = fetch('http://fitnesstrac-kr.herokuapp.com/api/users/me', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ token }`
            }
        })
        const result = await response.json()
        console.log(result)
        //return result
    };
};

export const login = async (ev) => {
    ev.preventDefault
    console.log('logged in')
    const logURL = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/login', {
        method:"POST",    
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: {
              username: username,
              password: password
            }
          })
    })
    const result = await logURL.json();
    if(!result.success){
        throw result.error
    }
    const token = result.data.token;
    window.localStorage.setItem('token', token)
}

export const logout = () => {
    window.localStorage.removeItem('token');
    setUser({});
  }