import React from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'

type Props = {
  searchString: string,
  setSearchString: (name: string) => void
}

const CodeFilter = (props: Props) => {
  return (
    <div className="code-filter-wrapper">
      <label htmlFor="code-filter">FILTER</label>
      <InputGroup className="mr-sm-2 search-input" >
        <FormControl
          id="code-filter"
          type="text"
          placeholder="Search"
          className={props.searchString
            ? "mr-sm-2 border border-danger"
            : "mr-sm-2"
          }
          value={props.searchString}
          onChange={ (e) => props.setSearchString(e.target.value) }
        />
        <Button
          className="btn-reset-filter"
          onClick={ () => props.setSearchString('') }
        >
          Reset
        </Button>
      </InputGroup>
    </div>
  )
}

export default CodeFilter