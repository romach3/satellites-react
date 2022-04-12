import React from 'react';
import SearchForm from "./SearchForm";
import {satellitesAPI, ISatellite} from "store/api/satellitesAPI";
import {useAppDispatch, useAppSelector} from "store/hooks";
import {List} from 'antd'
import {satelliteSlice} from "store/reducers/satelliteSlice";

interface SatellitesContainerProps {
    listItem: (item: ISatellite) => React.ReactNode
}

const SatellitesContainer: React.FC<SatellitesContainerProps> = (props) => {
    const searchParameters = useAppSelector(state => state.satelliteSlice)
    const dispatch = useAppDispatch()
    const setPage = satelliteSlice.actions.setPage
    const {data: satellites, error, isLoading} = satellitesAPI.useSearchQuery(searchParameters)

    return (
        <div style={{width: '100%', height: '100%'}}>
            <SearchForm/>
            {searchParameters.showAs === 'list' && <div>
              <List loading={isLoading}
                    style={{padding: '1rem'}}
                    header={<h1>Satellites (Starlink)</h1>}
                    dataSource={satellites?.items}
                    pagination={{...satellites?.pagination, onChange: (current, pageSize) => dispatch(setPage({current, pageSize}))}}
                    renderItem={(item: ISatellite) => props.listItem(item)}
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 1,
                        md: 2,
                        lg: 2,
                        xl: 2,
                        xxl: 2,
                    }}
              />
            </div>}
            {searchParameters.showAs === 'map' && <canvas style={{width: '100%', height: '100%'}}>map</canvas>}
        </div>
    );
};

export default SatellitesContainer;
