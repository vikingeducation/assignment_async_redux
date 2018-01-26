import React from 'react'
import PropTypes from 'prop-types'
import InputGroup from './elements/InputGroup'
import Input from './elements/Input'
import Button from './elements/Button'

const Search = ({onSubmit}) => (
  <div className='row ' >
    <div className="col-3">
    </div>
    <div className="col-6 transactions" style={{border: '1px #bbb solid'}}>

    <br />
      <form className="container" onSubmit={onSubmit} >

        <InputGroup name='Search' labelText='Search'>
          <Input name='inputValue' onChange={this.onSearch} value={inputValue} />
        </InputGroup>


        <Button type="submit" color="primary">Process Transaction</Button>
      </form>

    </div>
    <div className="col-3">
    </div>
  </div>

)

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Search
