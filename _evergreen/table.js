import {Table} from 'evergreen-ui'

const profiles = [
    {id: '1', name: 'data', lastActivity: 'go to park', ltv: 12}
];

function App() {


    return (
        <div>
            <Table>
                <Table.Head>
                    <Table.SearchHeaderCell/>
                    <Table.TextHeaderCell>
                        Last Activity
                    </Table.TextHeaderCell>
                    <Table.TextHeaderCell>
                        ltv
                    </Table.TextHeaderCell>
                </Table.Head>
                <Table.Body height={240}>
                    {profiles.map(profile => (
                        <Table.Row key={profile.id} isSelectable onSelect={() => alert(profile.name)}>
                            <Table.TextCell>{profile.name}</Table.TextCell>
                            <Table.TextCell>{profile.lastActivity}</Table.TextCell>
                            <Table.TextCell isNumber>
                                {profile.ltv}
                            </Table.TextCell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
}

ReactDOM.render(<App/>, mountNode);

