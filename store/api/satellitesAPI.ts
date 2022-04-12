import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {satelliteParameters, sortOn} from "../reducers/satelliteSlice";
import moment from 'moment'

export interface ISatellite {
    version: string,
    longitude: number | null,
    latitude: number | null,
    height_km: number | null,
    spaceTrack: {
        OBJECT_ID: string,
        OBJECT_NAME: string,
        LAUNCH_DATE: string,
        DECAY_DATE: string,
        NORAD_CAT_ID: number,
        DECAYED: number
    }
}

export interface ISatelliteCollection {
    items: ISatellite[],
    pagination: {
        current: number,
        total: number,
        pageSize: number
    }
}

interface QueryAPIResponse {
    docs: ISatellite[],
    page: number,
    totalDocs: number,
    limit: number,
}

export const satellitesAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.spacexdata.com/v4/starlink'}),
    tagTypes: ['SatellitesAPI'],
    endpoints: (build) => ({
        all: build.query<ISatellite[], null>({
            query: () => ({
                url: `/`,
            }),
            providesTags: ['SatellitesAPI']
        }),
        search: build.query<ISatelliteCollection, satelliteParameters>({
            query: (searchParameters: satelliteParameters) => {
                const params = {
                    query: {}, options: {
                        limit: searchParameters.pageSize,
                        page: searchParameters.current,
                        sort: {
                            [searchParameters.sortOn === sortOn.byDate ? 'spaceTrack.LAUNCH_DATE' : 'spaceTrack.DECAY_DATE']: 'asc'
                        }
                    }
                } as any
                if (searchParameters.onlyActive) {
                    params.query['spaceTrack.DECAY_DATE'] = null
                }
                if (searchParameters.quarter) {
                    params.query['spaceTrack.LAUNCH_DATE'] = {
                        $gte: moment(searchParameters.quarter).startOf('quarter'),
                        $lte: moment(searchParameters.quarter).endOf('quarter')
                    }
                }
                return {
                    url: `/query`,
                    method: 'POST',
                    body: params
                }
            },
            transformResponse: (response: QueryAPIResponse, meta, arg): ISatelliteCollection => {
                return {items: response.docs, pagination: {current: response.page, total: response.totalDocs, pageSize: response.limit}} as ISatelliteCollection
            }
        }),
    })
})
