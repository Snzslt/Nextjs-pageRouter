import {useRouter} from 'next/router';
//our-domain.com/news/somthing-important
function DetailPage(){

    const router = useRouter();

    console.log(router.query.newsId);

    return <h1>`The Detail Page {router.query.new}`</h1>
}
export default DetailPage;