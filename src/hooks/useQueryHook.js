import { useQuery } from 'react-query'

const useQueryHook = ({ url, name }) => {

    const getTodos = async () => {
        const response = await fetch(url)
        return response.json()
    }

    // Access the client
    // const queryClient = useQueryClient()

    // Queries
    const query = useQuery(name, getTodos)

    return query
}

export default useQueryHook
