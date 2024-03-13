import axios from "axios";

export const getUsers = async (params) => {
    try {
        const response = await axios.get('https://65e9de42c9bf92ae3d3a7c61.mockapi.io/isyn/users', {
            params: {
                limit: 50,
                page: params
            }
        })
        return response.data
    } catch (error) {
        console.error("Error fetching users:", error)
        throw error
    }
};
