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

export const register = async (ev, username, password) => {
    try {
        ev.preventDefault()
        const regURL = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        const result = await regURL.json();
        console.log("user: ", result)
    } catch (error) {
        throw error
    }
}


export const login = async (ev, username, password) => {
    try {
        ev.preventDefault()
        const logURL = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/login', {
            method:"POST",    
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                    username:username,
                    password:password
            })
        })
        const result = await logURL.json();
        const token = result.token;
        window.localStorage.setItem('token', token)
        console.log("user: ", result)
    } catch (error) {
        throw error
    }
}

export const logout = () => {
    window.localStorage.removeItem('token');
    setUser({});
  }