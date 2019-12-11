import useSWR, { SWRConfig } from 'swr'
import ReactDOM from 'react-dom'

function Dashboard () {
    const { data: user } = useSWR('/mock/users.json')

    // const { data: user } = useSWR('/mock/users.json', { refreshInterval: 0 }) // --> don't refresh

    if (!user) { return <>loading...</> }

    return <ul>
        { user.data.map((user) => <li key={user.name}>{user.name}</li>) }
    </ul>
}

function App () {
    return (
        <SWRConfig
            value={{
                refreshInterval: 3000,
                // 窗口聚焦时自动重新验证
                revalidateOnFocus: true,
                fetcher: (...args) => fetch(...args).then(res => res.json())
            }}
        >
            <Dashboard />
        </SWRConfig>
    )
}

ReactDOM.render(<App />, mountNode)