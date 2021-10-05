import { useEffect, useState } from "react";


const useBlogData = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('./BlogData.JSON')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return [blogs, setBlogs];
};

export default useBlogData;