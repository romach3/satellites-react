import {Space, Form, Checkbox, DatePicker, Select, Button} from 'antd';
import {satelliteSlice, sortOn} from 'store/reducers/satelliteSlice'
import {useAppSelector, useAppDispatch} from "store/hooks";
import {FC} from "react";

const SearchForm: FC = () => {
    const [form] = Form.useForm()
    const searchParameters = useAppSelector(state => state.satelliteSlice)
    const dispatch = useAppDispatch()
    const updateSatelliteParameters = satelliteSlice.actions.updateSatelliteParameters

    return <Space style={{backgroundColor: "white", width: "100%", padding: '1rem'}}>
        <Form layout={"inline"} form={form} onValuesChange={(v: any) => dispatch(updateSatelliteParameters(v))}>
            <Form.Item name="quarter"
                       label="Quarter">
                <DatePicker picker="quarter" defaultValue={searchParameters.quarter}/>
            </Form.Item>
            <Form.Item name="onlyActive"
                       label="Only active" valuePropName="checked">
                <Checkbox disabled={searchParameters.sortOn === sortOn.byActive} defaultChecked={searchParameters.onlyActive}/>
            </Form.Item>
            <Form.Item label="Sort by" name="sortOn">
                <Select defaultValue={searchParameters.sortOn}>
                    <Select.Option value={sortOn.byDate}>Date</Select.Option>
                    <Select.Option value={sortOn.byActive}>Active</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="Show as" name="showAs">
                <Select defaultValue={searchParameters.showAs}>
                    <Select.Option value={'list'}>List</Select.Option>
                    <Select.Option value={'map'}>Map</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item>
                <Button htmlType={"reset"} onClick={() => form.resetFields()}>Reset</Button>
            </Form.Item>
        </Form>
    </Space>
}

export default SearchForm
