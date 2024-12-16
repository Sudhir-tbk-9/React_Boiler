import axios from "axios";
import { base_url } from "../Global/Baseurl";
import { swal } from "../Global/Baseurl";

class passwordService {
    async updateService(post, navigate) {
       const {username,password}=post;
        try {
            const response = await axios.put(`${base_url}/user/update?username=${username}&password=${password}`, post, {
                headers: {
                    Authorization: 'Bearer ' + atob(localStorage.getItem('userToken')),
                },
            });


            console.log('Response:', response.data);
            swal("", "Password Changed", "success",'Done');
 
            navigate('/dashBoard');

            // dispatch({ type: "userToken", payload: response.data });

            return response.data; // Return data if needed
        } catch (error) {
            console.error('Error updating user:', error);
            swal("Error", error.response?.data?.message || "An unexpected error occurred.", "error",'OK');

            throw error; // Rethrow error or handle it accordingly
        }
    }

   
}

export const Passwordservice = new passwordService();
