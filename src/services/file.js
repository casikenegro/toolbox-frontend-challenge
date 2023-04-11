
const fileServices = {

    list: async () => {
        return fetch(
            `${process.env.REACT_APP_API_URL}/api/v1/files/list`
        ).then(
            data => data.json()
        )
    },

    getFileData: async (name) => {
        const query = new URLSearchParams();

        if(name) query.set("name",name);

        return fetch(
            `${process.env.REACT_APP_API_URL}/api/v1/files/data?${query.toString()}`
        ).then(
            data => data.json()
        )
    }

}

export default fileServices