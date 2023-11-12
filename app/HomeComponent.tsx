import test from '@/services/test'

const HomeComponent = async () => {

    const testapi = test();

    const [testData] = await Promise.all([testapi]);
    console.log(testData?.data.Page);

    return <div>테스트</div>
}

export default HomeComponent