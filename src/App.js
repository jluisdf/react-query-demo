import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Characters from './components/Characters'
import Navbar from './components/Navbar'

const queryClient = new QueryClient()

const App = () => {

    return (
        <QueryClientProvider client={queryClient}>
            <Navbar />
            <Characters />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;
