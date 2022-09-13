import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import { userApi } from './components/services/user';

function App() {
  const [page, setPage] = useState(1)
  const [serachValue, setSearchValue] = useState("")

  const responseOfUser = userApi.useGetUserQuery(page);
  const [data, setData] = useState([])
  useEffect(() => {
    setData(responseOfUser?.data)
  }, [responseOfUser,page])
  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }
  const nextPage = () => setPage(prev => prev + 1)

  const prevPage = () => setPage(prev => prev - 1)
  return (
    <>
    <br />
      <input type="text" placeholder='serach here' value={serachValue} onChange={handleChange} />
      {/* <button>Search</button> */}
      <br />
      <br />

      <table border='1'>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>


        </tr>
    
        {data?.map((values) => {
          return (
            <>
              <tr>
                <th>{values?.id}</th>
                <th>{values?.name}</th>
                <th>{values?.email}</th>


              </tr>
            </>
          )
        })}
      </table>
      <nav>
                <button onClick={prevPage} disabled={page === 1}>Prev Page</button>
                <button onClick={nextPage} disabled={data?.length<=page}>Next Page</button>
            </nav>
     
    </>
  );
}

export default App;
