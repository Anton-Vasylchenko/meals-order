class ApiServices {
    _baseUrl = `https://fir-app-795c2-default-rtdb.europe-west1.firebasedatabase.app/meals.json`;

    getMeals = async () => {
        const response = await fetch(this._baseUrl);

        if (!response.ok) {
            throw new Error(`Could not fetch data`);
        }

        const responseData = await response.json();
        const data = this._transformData(responseData);
        return data;
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

