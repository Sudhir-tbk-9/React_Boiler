import axios from "axios";
import { base_url } from "../Global/Baseurl";
import Swal from "sweetalert2";

class logoutService {
    async logoutService(post, navigate) {
        try {
            // Display logout confirmation
            const { isConfirmed } = await Swal.fire({
                title: "Are you sure you want to logout?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes",
                cancelButtonText: "No",
            });

            // If user confirms logout, proceed with logout action
            if (isConfirmed) {
                // Call the logout service
                const response = await axios.post(`${base_url}/auth/signout?username=${post}`);
                console.log('Response:', response.data);
                
                // Navigate to the desired page after logout
                navigate("/Login");

                return response.data; 
            }
        } catch (error) {
            console.error('Error updating user:', error);
            throw error; 
        }
    } 
}

export const LogoutService = new logoutService();
