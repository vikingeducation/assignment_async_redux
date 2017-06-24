import React from 'react'

const Search = ({ search }) => {

  return (
    <section id="search" className="mt-5">
    <form onSubmit={search}>
    <div className="form-group row justify-content-center">
    <div className="col-md-6">
    <label htmlFor="term" className="form-label sr-only">Search</label>
    <input type="text" name="term" className="form-control" />
    </div>
    <div className="col-md-2">

    <select name="type" className="form-control">
    <option value="all">Everything</option>
    <option value="title">Title</option>
    <option value="author">Author</option>
    <option value="isbn">ISBN</option>
    </select>
    </div>
    </div>

    <div className="form-group row justify-content-center">
    <button type="submit" className="btn btn-primary col-md-2">Search</button>
    </div>
    </form>
    </section>
  )
}

export default Search
