import apiClient from "./apiClient";

class AuthService {
    registerUser = (formData) => {
        console.log(formData);
        return apiClient.post("/auth/register", formData);
    };

    login = (formData) => {
        return apiClient.post("/auth/login", formData);
    };
}

export default new AuthService();
