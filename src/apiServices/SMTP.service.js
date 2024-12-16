import axios from "axios";
import { base_url, swal } from "../Global/Baseurl";

class SMTPService {
    async update(post, navigate) {
        
        try {
            const { id } = post;
            const response = await axios.put(`${base_url}/emailConfig/update/${id}`, post, {
                headers: {
                    "content-type": "application/json",
                    Authorization: 'Bearer ' + atob(localStorage.getItem('userToken')),
                },
            });

            console.log('Response:', response.data);
            swal("Server has been Successfully Updated.", "", "success", 'OK')
                .then(() => {
                    navigate('/allsmtplist');
                });

            return response.data;
        } catch (error) {
            console.error('Error updating user:', error);
            // Display error message using swal
            swal("Error", error.response?.data?.message || "An unexpected error occurred.", "error",'OK');
            throw error;
        }
    }

    async delete(Id) {
        console.log(Id,'final')
        try {
            const response = await axios.delete(`${base_url}/emailConfig/delete/${Id}`, {
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

    async create(smtpData, navigate) {
        try {
            const response = await axios.post(`${base_url}/emailConfig/add`, smtpData, {
                headers: {
                    Authorization: 'Bearer ' + atob(localStorage.getItem('userToken')),
                },
            });

            console.log('Response:', response.data);
            swal("SMTP Server has been Successfully Added.", "", "success", 'OK')
                .then(() => {
                    navigate('/allsmtplist');
                });
                    
            return response.data;
        } catch (error) {
            console.error('Error creating user:', error);
            // Display error message using swal
            swal("Error", error.response?.data?.message || "An unexpected error occurred.", "error",'OK');
            throw error;
        }
    }
}

export const smtpService = new SMTPService();
