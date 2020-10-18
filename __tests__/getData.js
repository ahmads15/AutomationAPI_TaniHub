import * as endpoints from '../endpoints/getDataEndpoints';
import * as schema from '../schema/getDataSchema';
import 'regenerator-runtime/runtime';
import { matchers } from 'jest-json-schema';
expect.extend(matchers);

let response;
describe('Cheking value data', () => {
    test('Checking value data response number one', async () => {
        response = await endpoints.apiGetData();
        expect(response.status).toEqual(200);   
        expect(response.body).toMatchSchema(schema.getDataSchema);
        expect(response.body[0].id).toEqual('4e09b023-f650-4747-9ab9-eacf14540cfb');
        expect(response.body[0].name).toEqual('Air Destroyer Goliath');
        expect(response.body[0].description).toEqual('A military airship utilized by the government to access Laputa');
        expect(response.body[0].vehicle_class).toEqual('Airship');
        expect(response.body[0].length).toEqual('1,000');
        expect(response.body[0].pilot).toEqual('https://ghibliapi.herokuapp.com/people/40c005ce-3725-4f15-8409-3e1b1b14b583');
        expect(response.body[0].films).toEqual('https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe');
        expect(response.body[0].url).toEqual('https://ghibliapi.herokuapp.com/vehicles/4e09b023-f650-4747-9ab9-eacf14540cfb');
    });

    test('Checking value data response number two', async () => {
        response = await endpoints.apiGetData();
        expect(response.status).toEqual(200);   
        expect(response.body).toMatchSchema(schema.getDataSchema);
        expect(response.body[1].id).toEqual('d8f893b5-1dd9-41a1-9918-0099c1aa2de8');
        expect(response.body[1].name).toEqual('Red Wing');
        expect(response.body[1].description).toEqual('An experimental aircraft captured by Porco. Named Savoia S.21');
        expect(response.body[1].vehicle_class).toEqual('Airplane');
        expect(response.body[1].length).toEqual('20');
        expect(response.body[1].pilot).toEqual('https://ghibliapi.herokuapp.com/people/6523068d-f5a9-4150-bf5b-76abe6fb42c3');
        expect(response.body[1].films).toEqual('https://ghibliapi.herokuapp.com/films/ebbb6b7c-945c-41ee-a792-de0e43191bd8');
        expect(response.body[1].url).toEqual('https://ghibliapi.herokuapp.com/vehicles/d8f893b5-1dd9-41a1-9918-0099c1aa2de8');
    });

    test('Checking value data response number three', async () => {
        response = await endpoints.apiGetData();
        expect(response.status).toEqual(200);   
        expect(response.body).toMatchSchema(schema.getDataSchema);
        expect(response.body[2].id).toEqual('923d70c9-8f15-4972-ad53-0128b261d628');
        expect(response.body[2].name).toEqual("Sosuke's Boat");
        expect(response.body[2].description).toEqual('A toy boat where Sosuke plays');
        expect(response.body[2].vehicle_class).toEqual('Boat');
        expect(response.body[2].length).toEqual('10');
        expect(response.body[2].pilot).toEqual('https://ghibliapi.herokuapp.com/people/a10f64f3-e0b6-4a94-bf30-87ad8bc51607');
        expect(response.body[2].films).toEqual('https://ghibliapi.herokuapp.com/films/758bf02e-3122-46e0-884e-67cf83df1786');
        expect(response.body[2].url).toEqual('https://ghibliapi.herokuapp.com/vehicles/923d70c9-8f15-4972-ad53-0128b261d628');
    });
    
    test('Using Snapshoot for checking all value responses', async () => {
        response = await endpoints.apiGetData();
        expect(response.status).toEqual(200);   
        expect(response.body).toMatchSchema(schema.getDataSchema);
        expect(response.body).toMatchSnapshot();
    }); 
});
