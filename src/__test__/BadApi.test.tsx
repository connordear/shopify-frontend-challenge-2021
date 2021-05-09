import { queryOmdbByMovieName } from '../common/api';

jest.mock('axios', () => ({
    get: jest.fn().mockImplementation(() => {
        throw new Error('no cnn');
    }),
}));
test('api returns error if issue connecting to OMDB', async () => {
    expect(await queryOmdbByMovieName('inception')).toStrictEqual({
        Error: 'Error connecting to OMDB Database.',
        Response: 'False',
        Search: [],
        length: 0,
    });
});
