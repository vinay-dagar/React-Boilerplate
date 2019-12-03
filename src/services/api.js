import Axios from 'axios';
import {
    stringify,
} from 'qs';

function createAxios() {
    const axios = Axios.create();

    axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/api/v1`;
    // axios.defaults.headers.common['x-access-token'] = localStorage.getItem('x-access-token') || '';
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.timeout = 120000; // 120 seconds before time out

    axios.interceptors.request.use(
        (conf) => {
            return conf;
        },
        (error) => {
            return Promise.reject(error);
        },
    );

    axios.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            // if (error && error.response && error.response.status === 401) {
            //     store.dispatch('auth/logout');
            // }
            return Promise.reject(error.response.data);
        },
    );
    return axios;
}

// Initialise Axios
const api = createAxios();

const service = {
    getHeaders() {
        return {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('x-access-token'),
        };
    },
    // POST services
    async postWithoutHeaders(route, body) {
        const {
            data,
        } = await api.post(route, body);
        return data.object;
    },

    async rawPost(path, payload) {
        const headers = this.getHeaders();

        const {
            data,
        } = await api.post(path, payload, {
            headers,
        });

        return data.object;
    },

    // GET services
    async getById(route, id) {
        const headers = this.getHeaders();
        const {
            data,
        } = await api.get(`${route}/${id}`, {
            headers,
        });
        return data.object;
    },

    async get(route, query = {}, shouldAppendV2 = false) {
        if (shouldAppendV2) {
            Object.assign(query, {
                apiVersion: 'v2',
            });
        }
        const headers = this.getHeaders();
        const {
            data,
        } = await api.get(`${route}?${stringify(query)}`, {
            headers,
        });
        return data.object;
    },

    async getWithoutHeaders(route) {
        const {
            data,
        } = await api.get(route);
        return data.object;
    },

    // PUT services
    async update(route, query = {}, body, shouldAppendV2 = false) {
        if (shouldAppendV2) {
            Object.assign(query, {
                apiVersion: 'v2',
            });
        }
        const headers = this.getHeaders();
        const {
            data,
        } = await api.put(`${route}?${stringify(query)}`, body, {
            headers,
        });
        return data.object;
    },

    async rawPut(path, payload) {
        const {
            data,
        } = await api.put(path, payload);
        return data.object;
    },

    async updateById(route, id, body) {
        const headers = this.getHeaders();
        const {
            data,
        } = await api.put(`${route}/${id}`, body, {
            headers,
        });
        return data.object;
    },

    async updateOrCreate(route, body) {
        const headers = this.getHeaders();

        let response;
        if (body.id) {
            response = await this.updateById(route, body.id, body, {
                headers,
            });
        } else {
            response = await this.rawPost(route, body, {
                headers,
            });
        }
        return response;
    },

    // PATCH services
    async patch(route, body) {
        const headers = this.getHeaders();
        const {
            data,
        } = await api.patch(`${route}`, body, {
            headers,
        });
        return data.object;
    },

    // DELETE services
    async delete(route, id) {
        const headers = this.getHeaders();
        return api.delete(`${route}/${id}`, {
            headers,
        });
    },

    // Generic
    async instanceMethod(route, id, action, {
        method,
        payload,
    } = {
        method: 'get',
    }) {
        const headers = this.getHeaders();
        const args = [{
            headers,
        }];
        // Add the payload to the arguments for poast requests
        if (payload) {
            args.unshift(payload);
        }
        const {
            data,
        } = await api[method](`${route}/${id}/${action}`, ...args);
        return data.object;
    },

    // Bulk operations
    async bulkCreate(path, items) {
        const headers = this.getHeaders();
        const newItems = [];

        items.forEach(async (item) => {
            const {
                data,
            } = await api.post(path, item, {
                headers,
            });

            newItems.push(data.object);
        });
        return newItems;
    },

    async bulkUpdateOrCreate(route, items) {
        const headers = this.getHeaders();
        const newItems = [];

        items.forEach(async (item) => {
            let response = null;

            if (item.id) {
                response = await this.updateById(route, item.id, item, {
                    headers,
                });
            } else {
                response = await this.rawPost(route, item, {
                    headers,
                });
            }
            newItems.push(response);
        });
        return newItems;
    },
    test(){
        console.log('http service is working fine.');
    }
};

window.$http = service;

export default service;