import axios from "axios";
import { base_url, swal } from "../Global/Baseurl";

class EmailService {
    async updateUser(post, navigate) {
        try {
            const { id } = post;
            const response = await axios.put(`${base_url}/user/update?id=${id}`, post, {
                headers: {
                    "content-type": "application/json",
                    Authorization: 'Bearer ' + atob(localStorage.getItem('userToken')),
                },
            });

            console.log('Response:', response.data);
            swal("User has been Successfully Updated.", "", "success", 'OK')
                .then(() => {
                    navigate('/users');
                });

            return response.data;
        } catch (error) {
            console.error('Error updating user:', error);
            // Display error message using swal
            swal("Error", error.response?.data?.message || "An unexpected error occurred.", "error",'OK');
            throw error;
        }
    }

    async deleteUser(userId) {
        try {
            const response = await axios.delete(`${base_url}/user/delete/${userId}`, {
                headers: {
                    Authorization: 'Bearer ' + atob(localStorage.getItem('userToken')),
                },
            });

            console.log('Response:', response.data);

            return response.data;
        } catch (error) {
            console.error('Error deleting user:', error);
            // Display error message using swal
            swal("Error", error.response?.data?.message || "An unexpected error occurred.", "error",'OK');
            throw error;
        }
    }

    async create(emailTemplate, navigate) {
        console.log(emailTemplate,'email template')
        try {
            const response = await axios.post(`${base_url}/emailTemplate/add`, emailTemplate, {
                headers: {
                    Authorization: 'Bearer ' + atob(localStorage.getItem('userToken')),
                },
            });

            console.log('Response:', response.data);
            swal("Email Template has been Successfully Added.", "", "success", 'OK')
                .then(() => {
                    navigate('/allemailconfig');
                });
                    
            return response.data;
        } catch (error) {
            console.error('Error creating user:', error);
            swal("Error", error.response?.data?.message || "An unexpected error occurred.", "error",'OK');
            throw error;
        }
    }
}

export const emailService = new EmailService();
