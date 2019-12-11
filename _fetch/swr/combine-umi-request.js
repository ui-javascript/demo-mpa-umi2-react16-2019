import useSWR from 'swr'
import ReactDOM from "react-dom"
import request from 'umi-request'

function App () {
    const { data, error } = useSWR('/mock/user.json', request)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return <div>hello {data.data.name}!</div>
}

ReactDOM.render(<App />, mountNode);

