import axios from 'axios'

export const getUserById = (id) => {
    debugger
    return axios.get(`${process.env.APIURL || 'http://localhost:8080'}/api/users/${id}`)
      .then(resp => {
        debugger
        return resp
        // setUserByIdData(resp.data)
      })
      .catch(err => {
        return err
      })
  }  

