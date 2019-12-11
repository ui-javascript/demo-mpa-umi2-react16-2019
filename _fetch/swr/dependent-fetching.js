import useSWR from 'swr'
import ReactDOM from "react-dom"

const fetcher = url => fetch(url).then(r => r.json())

function App () {
    const { data: users } = useSWR('/mock/users.json', fetcher)
    const { data: user } = useSWR(() => '/mock/user.json?name=' + users.data[0].name, fetcher)

    if (!user) {
        return <>loading...</>
    }

    return <ul>
        { users.data.map((item) => <li key={item.name} style={{
            color: item.name === user.data.name ? 'red' : 'blue'
        }}>{item.name}</li>) }
    </ul>
}

ReactDOM.render(<App />, mountNode);
