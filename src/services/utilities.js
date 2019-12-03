import { humanize } from 'underscore.string';
import { toast } from 'react-toastify';
// import { toast } from 'mdbreact'

const service = {
    arrayToObject(array) {
        const mapped = array.map(value => ({
            name: humanize(value),
            value,
        }));
        return [...mapped];
    },
    message: toast,
};

window.$utility = service;

export default service;
