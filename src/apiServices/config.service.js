import axios from "axios";
import { base_url, swal } from "../Global/Baseurl";

class ConfigService {
    async updateService(post, navigate) {
        const {id}=post;
        try {
            const response = await axios.put(`${base_url}/configuration/updateconfig/${id}`, post, {
                headers: {
                    Authorization: 'Bearer ' + atob(localStorage.getItem('userToken')),
                },
            });

            console.log('Response:', response.data);
            // dispatch({ type: "userToken", payload: response.data });
            swal("Configuration has been Successfully Updated.", "", "success",'OK')
            .then(() => {
                navigate('/configuraton');
            });

            return response.data; // Return data if needed
        } catch (error) {
            console.error('Error updating user:', error);
            swal("Error", error.response?.data?.message || "An unexpected error occurred.", "error",'OK');

            throw error; // Rethrow error or handle it accordingly
        }
    }

    async deleteService(userId) {
        try {
            const response = await axios.delete(`${base_url}/configuration/deleteconfig/${userId}`, {
                headers: {
                    Authorization: 'Bearer ' + atob(localStorage.getItem('userToken')),
                },
            });

            console.log('Response:', response.data);
            // dispatch({ type: "deleteUser", payload: userId });

            return response.data; // Return data if needed
        } catch (error) {
            console.error('Error deleting user:', error);
            swal("Error", error.response?.data?.message || "An unexpected error occurred.", "error",'OK');

            throw error; // Rethrow error or handle it accordingly
        }
    }

    async createService(configDetails, navigate) {
        console.log(configDetails,'last payload')
        
        try {
            const response = await axios.post(`${base_url}/configuration/addconfig`, configDetails, {
                headers: {
                    Authorization: 'Bearer ' + atob(localStorage.getItem('userToken')),
                },
            });

            console.log('Response:', response.data);

            swal("Configuration has been Successfully Added.", "", "success",'OK')
            .then(() => {
                navigate('/configuraton');
            })


            // Swal.fire({
            //     icon: 'success',
            //     title: 'Configuration Added',
            //     text: 'The configuration has been successfully added.',
            // });


            // dispatch({ type: "createUser", payload: response.data });

            return response.data; // Return data if needed
        } catch (error) {
            console.error('Error creating user:', error);
            swal("Error", error.response?.data?.message || "An unexpected error occurred.", "error",'OK');
            throw error; // Rethrow error or handle it accordingly
        }
    }
}

export const configService = new ConfigService();
