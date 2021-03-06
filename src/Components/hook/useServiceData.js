import { useEffect, useState } from "react";


const useServiceData = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('./ServiceData.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return [services, setService];
};

export default useServiceData;