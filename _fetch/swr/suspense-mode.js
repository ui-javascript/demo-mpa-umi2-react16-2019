import { Suspense } from 'react'
import useSWR from 'swr'
import ReactDOM from 'react-dom'
import fetch from 'unfetch'

const fetcher = url => fetch(url).then(r => r.json())

function Profile () {
    const { data } = useSWR('/mock/user.json', fetcher, { suspense: true })
    // console.log(data)
    return <div>hello, { data.data.name }</div>
}

function App () {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <Profile/>
        </Suspense>
    )
}

ReactDOM.render(<App/>, mountNode)