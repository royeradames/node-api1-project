import axios from 'axios'

export const getUserById = (id) => {
    debugger
    return axios.get(`https://royer-adames-node-api1-project.herokuapp.com/api/users/${id}`)
      .then(resp => {
        debugger
        return resp
        // setUserByIdData(resp.data)
      })
      .catch(err => {
        return err
      })
  }  

