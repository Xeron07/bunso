
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

const SearchItem=(props)=>{

    const items=[
        {
            id:0,
            name:"name",
            value:"{{name}}"
        },
        {
            id:1,
            name:"age",
            value:"{{age}}"
        },
        {
            id:2,
            name:"gender",
            value:"{{gender}}"
        },
        {
            id:3,
            name:"nationality",
            value:"{{nationality}}"
        },
    ];

    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.

    }

    const handleOnHover = (result) => {
        // the item hovered
    }

    const handleOnSelect = (item) => {
        // the item selected
        props.addSuggestion(item);
    }

    const handleOnFocus = () => {
        console.log('Focused')
    }

    const formatResult = (item) => {
        return (
            <span key={item.id}>
                <span style={{ display: 'block', textAlign: 'left' }}>value: {item.value}</span>
            </span>
        )
    }

    return (
        <div style={{width:"200px"}}>
            <header className="App-header">
                <div >
                    <ReactSearchAutocomplete
                        items={items}
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        autoFocus
                        formatResult={formatResult}
                    />
                </div>
            </header>
        </div>
    )
}

export default SearchItem;