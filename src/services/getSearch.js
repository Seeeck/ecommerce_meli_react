import axios from "axios"

const getSearch = async (inputValue,offset=0) => {
    const data = await axios.get(`https://api.mercadolibre.com/sites/MLC/search?q=${inputValue.trim()}&limit=12&offset=${offset}`)
    return data?.data
}

export default getSearch;