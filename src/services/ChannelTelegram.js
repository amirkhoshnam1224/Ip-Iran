import API from "./api"; 
const ADD_CHANNEL_URL = `/channels/add`;
const GET_CHANNELS_URL = `/channels/list`;
const DELETE_CHANNELS_URL = `/channels/delete`;

export const AddChannelServise = async (channelName) => {
    try {
        const response = await API.post(ADD_CHANNEL_URL,{name: channelName});
        return response.data; // بازگرداندن داده‌ها
    } catch (error) {
        console.error("Error adding channel:", error);
        throw error;
    }
};
// دریافت لیست کانال‌ها
export const GetChannelsServise = async () => {
    try {
        const response = await API.get(GET_CHANNELS_URL);
        return response.data.channels;
    } catch (error) {
        console.error("Error while fetching channels:", error.response?.data || error.message);
        throw error;
    }
};
export const DeleteChannelServise = async (idUser) => {
    try {
        const response = await API.delete(`${DELETE_CHANNELS_URL}/${idUser}`);
        return response;
    } catch (error) {
        console.error("Error deleting channels:", error.response?.data || error.message);
        throw error;
    }
};
