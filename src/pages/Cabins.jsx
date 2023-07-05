import { useEffect, useState } from 'react';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import { getCabins } from '../services/apiCabins';
import CabinTable from '../features/cabins/CabinTable';
import Button from '../ui/Button';
import CreateCabinFormV1 from '../features/cabins/CreateCabinFormV1';
import CreateCabinForm from '../features/cabins/CreateCabinForm';

function Cabins() {
 
	const [ showAddForm, setShowAddForm ] = useState(false);

  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />
		<Button onClick={() => setShowAddForm((show) => !show)}>Add new cabin</Button>
		{showAddForm && <CreateCabinFormV1 />}
      </Row>
    </>
  );
}

export default Cabins;
