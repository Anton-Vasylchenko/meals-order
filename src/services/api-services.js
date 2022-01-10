class ApiServices {
    _baseUrl = `https://fir-app-795c2-default-rtdb.europe-west1.firebasedatabase.app/`;

    getResource = async (url) => {
        const res = await fetch(`${this._baseUrl}${url}.json`)
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        const body = res.json();
        return body;
    }

    getMeals = async () => {
        const responseData = await this.getResource(`meals`);
        const data = this._transformData(responseData);
        return data;
    }

    sendOrder = async (user, orderedItems) => {
        const res = await fetch(`${this._baseUrl}orders.json`, {
            method: 'POST',
            body: JSON.stringify({
                user,
                orderedItems
            })
        });

        return res;
    }

    _transformData = (data) => {
        const loadData = [];

        for (const key in data) {
            loadData.push({
                id: key,
                ...data[key]
            });
        }

        return loadData;
    }
}

const apiServices = new ApiServices();

export default apiServices;

