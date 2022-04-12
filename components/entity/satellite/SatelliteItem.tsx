import React from 'react';
import {ISatellite} from "store/api/satellitesAPI";
import {List, Skeleton, Divider} from 'antd'
import {WifiOutlined, UpOutlined, DownOutlined} from '@ant-design/icons'

interface SatelliteItemProps {
    item: ISatellite
}

const SatelliteItem: React.FC<SatelliteItemProps> = (props) => {
    const item = props.item

    return (
        <List.Item>
            <Skeleton loading={item === null} active avatar>
                <List.Item.Meta
                    avatar={<WifiOutlined className={item.spaceTrack.DECAYED === 1 ? 'error' : 'primary'} />}
                    title={<div>
                        Norad ID: <a href={'https://www.n2yo.com/satellite/?s=' + item.spaceTrack.NORAD_CAT_ID} target={'_blank'} rel={'noreferrer'}>{item.spaceTrack.NORAD_CAT_ID}</a>
                        <Divider type={'vertical'}/>
                        Object ID: {item.spaceTrack.OBJECT_ID}
                </div>}
                    description={<div>
                        <div>
                            {item.spaceTrack.OBJECT_NAME}
                            <Divider type={'vertical'}/>
                            <UpOutlined /> {item.spaceTrack.LAUNCH_DATE || '-'} <DownOutlined /> {item.spaceTrack.DECAY_DATE || '-'}
                        </div>
                        <div>
                            {item.spaceTrack.DECAYED ? 'DECAYED' : <span>lon:&nbsp;{item.longitude} lat:&nbsp;{item.latitude} height:&nbsp;{item.height_km}</span>}
                        </div>
                    </div>}
                />
            </Skeleton>
        </List.Item>
    );
};

export default SatelliteItem;
