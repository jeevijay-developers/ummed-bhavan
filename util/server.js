import axiosInstance from "./axiosInstance";

export const fetchFacilities = async (page, limit) => {
    try {
        const response = await axiosInstance.get(`/api/facilities/get-all?page=${page}&limit=${limit}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching facilities:", error);
        throw error;
    }
}

export const fetchFacilitiesbySlug = async (slug) => {
    try {
        const response = await axiosInstance.get(`/api/facilities/slug/${slug}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching facilities by slug:", error);
        throw error;
    }
}

export const fetchEvents = async (page = 1, limit = 9) => {
    try {
        const response = await axiosInstance.get(`/api/events?page=${page}&limit=${limit}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching events:", error);
        throw error;
    }
}

export const fetchEventByDate = async (date) => {
    try {
        const response = await axiosInstance.get(`/api/events/date/${date}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching events by date:", error);
        throw error;
    }
}

export const fetchEventGalleries = async (page = 1, limit = 9) => {
    try {
        const response = await axiosInstance.get(`/api/event-gallery?page=${page}&limit=${limit}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching event galleries:", error);
        throw error;
    }
}
export const fetchClubGalleries = async (page = 1, limit = 9) => {
    try {
        const response = await axiosInstance.get(`/api/club-gallery?page=${page}&limit=${limit}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching club galleries:", error);
        throw error;
    }
}

export const fetchClubGalleryBySlug = async (slug) => {
    try {
        const response = await axiosInstance.get(`/api/club-gallery/${slug}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching club gallery by slug:", error);
        throw error;
    }
}

export const fetchEventGalleryBySlug = async (slug) => {
    try {
        const response = await axiosInstance.get(`/api/event-gallery/${slug}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching event gallery by slug:", error);
        throw error;
    }
}