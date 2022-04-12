import type { NextPage } from 'next'
import SatellitesContainer from "components/entity/satellite/SatellitesContainer";
import SatelliteItem from "components/entity/satellite/SatelliteItem";
import {ISatellite} from "store/api/satellitesAPI";

const Home: NextPage = () => {
  return (
    <SatellitesContainer
        listItem={(item: ISatellite) => <SatelliteItem item={item} />}
    />
  )
}

export default Home
