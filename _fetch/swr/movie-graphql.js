import { request } from 'graphql-request'
import useSWR from "swr";
import ReactDOM from 'react-dom'

const API = 'https://api.graph.cool/simple/v1/movies'
const fetcher = query => request(API, query)

function App () {
    const { data: resp, error } = useSWR(
        `{
      Movie(title: "Inception") {
        releaseDate
        actors {
          name
        }
      }
    }`,
        fetcher
    )
    if (!resp) return <div>loading...</div>
    return <div>{ JSON.stringify(resp) } </div>
}

ReactDOM.render(<App />, mountNode)