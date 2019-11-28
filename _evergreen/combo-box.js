import {Combobox} from 'evergreen-ui'

function App() {
    return (
        <div>
            <Combobox
                items={['Banana', 'Orange', 'Apple', 'Mango']}
                onChange={selected => console.log(selected)}
                placeholder="Fruit"
                autocompleteProps={{
                    // Used for the title in the autocomplete.
                    title: 'Fruit'
                }}
            />
        </div>
    );
}

ReactDOM.render(<App/>, mountNode);

