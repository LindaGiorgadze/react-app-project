import { useEffect, useState } from "react";

export default function Resolution() {
    const [resolution, setResolution] = useState();

    useEffect(() => {
        window.addEventListener('resize', size);
    }, [])

    function size(e) {
        setResolution(e.target.innerWidth);
    }
    return resolution;
}