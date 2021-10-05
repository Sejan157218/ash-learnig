const addToData = id => {
    const services = getData();
    if (id in services) {
        services[id] += 1
    }
    else {
        services[id] = 1
    }
    savedToData(services);
}

const removeToData = id => {
    const data = getData();
    if (id in data && data[id] > 0) {
        data[id] -= 1
    }
    savedToData(data)
}

const deleteData = id => {
    const DeleteData = getData();
    delete DeleteData[id];
    savedToData(DeleteData)
}

const savedToData = data => {
    localStorage.setItem('Services-cart', JSON.stringify(data))
}

const getData = () => {
    let data = localStorage.getItem('Services-cart');
    return data ? JSON.parse(data) : {};
}

export { addToData, removeToData, getData, deleteData }